/**
 * Prerender natijasini SEO bo'yicha tekshiradi (build ning oxirgi qadami).
 *
 * XATO (build to'xtaydi):
 *   - sahifada title / description / canonical soni 1 emas
 *   - canonical sahifaning o'z manzili emas (www, https, oxirida / siz)
 *   - noindex sahifada canonical bor, yoki robots teg ikki marta
 *   - ichki havola redirect, apex/http, oxirida "/" yoki mavjud bo'lmagan sahifaga olib boradi
 *   - sitemap da redirect, noindex yoki mavjud bo'lmagan URL
 * OGOHLANTIRISH: bir nechta sahifada bir xil title/description, description uzunligi.
 *
 * Ishlatish: node scripts/check-seo.js  (dist/ tayyor bo'lgandan keyin)
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from './routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir   = join(__dirname, '..');
const distDir   = join(rootDir, 'dist');

// Bu fayllar ommaviy sahifa emas
const SKIP = new Set(['spa.html']);

const errors = [];
const warnings = [];

function walk(dir) {
    return readdirSync(dir).flatMap(name => {
        const full = join(dir, name);
        if (statSync(full).isDirectory()) return name === 'assets' ? [] : walk(full);
        return name.endsWith('.html') ? [full] : [];
    });
}

/** dist/blog/x/index.html -> /blog/x */
function pathOf(file) {
    const rel = relative(distDir, file).split(sep).join('/');
    if (rel === 'index.html') return '/';
    if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'/index.html'.length);
    return '/' + rel;
}

const decode = (s) => s
    .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

const all = (re, s) => [...s.matchAll(re)];
const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

// vercel.json dagi redirectlar - ichki havola ularga emas, yakuniy URL ga borishi kerak
const vercel = JSON.parse(readFileSync(join(rootDir, 'vercel.json'), 'utf-8'));
const redirectSources = new Map((vercel.redirects || []).map(r => [r.source, r.destination]));

const files = walk(distDir).filter(f => !SKIP.has(relative(distDir, f)));
const pages = new Map(); // path -> { noindex, title, description }

for (const file of files) {
    const path = pathOf(file);
    const html = readFileSync(file, 'utf-8');
    const head = html.slice(0, html.indexOf('</head>'));
    const where = path === '/404.html' ? '404.html' : path;

    const titles = all(/<title[^>]*>([\s\S]*?)<\/title>/g, head).map(m => decode(m[1]));
    const descs  = all(/<meta[^>]*name="description"[^>]*>/g, head).map(m => decode(attr(m[0], 'content') ?? ''));
    const canons = all(/<link[^>]*rel="canonical"[^>]*>/g, head).map(m => attr(m[0], 'href'));
    const robots = all(/<meta[^>]*name="robots"[^>]*>/g, head).map(m => attr(m[0], 'content') ?? '');
    const noindex = robots.some(r => r.includes('noindex'));

    if (titles.length !== 1) errors.push(`${where}: title soni ${titles.length}`);
    if (descs.length !== 1)  errors.push(`${where}: description soni ${descs.length}`);
    if (robots.length > 1)   errors.push(`${where}: robots teg soni ${robots.length} (${robots.join(' | ')})`);

    if (noindex) {
        if (canons.length) errors.push(`${where}: noindex sahifada canonical bor`);
    } else {
        if (canons.length !== 1) {
            errors.push(`${where}: canonical soni ${canons.length}`);
        } else {
            const expected = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
            const got = canons[0];
            if (got !== expected && !(path === '/' && got === SITE_URL)) {
                errors.push(`${where}: canonical "${got}", kutilgan "${expected}"`);
            }
        }
        const d = descs[0] ?? '';
        if (d.length < 70 || d.length > 170) warnings.push(`${where}: description uzunligi ${d.length} (tavsiya 70-160)`);

        // Ichki sahifada ko'rinadigan breadcrumb va BreadcrumbList sxemasi
        if (path !== '/') {
            const navs = (html.match(/<nav[^>]*class="breadcrumb"/g) || []).length;
            const lists = (head.match(/"@type":"BreadcrumbList"/g) || []).length;
            if (navs !== 1) errors.push(`${where}: ko'rinadigan breadcrumb soni ${navs}`);
            if (lists !== 1) errors.push(`${where}: BreadcrumbList sxemasi soni ${lists}`);
        }
    }

    pages.set(path, { noindex, title: titles[0], description: descs[0], html });
}

const indexable = [...pages].filter(([, p]) => !p.noindex);

// Sahifalararo dublikatlar
for (const key of ['title', 'description']) {
    const seen = new Map();
    for (const [path, p] of indexable) {
        if (!p[key]) continue;
        seen.set(p[key], [...(seen.get(p[key]) || []), path]);
    }
    for (const [value, paths] of seen) {
        if (paths.length > 1) warnings.push(`Bir xil ${key} (${paths.length} sahifa): "${value.slice(0, 70)}" -> ${paths.join(', ')}`);
    }
}

// Ichki havolalar
const SITE_HOST_RE = /^https?:\/\/(www\.)?ilmiyxizmat\.uz/i;
const linkProblems = new Map(); // muammo -> Set(sahifalar)
const addProblem = (msg, page) => {
    if (!linkProblems.has(msg)) linkProblems.set(msg, new Set());
    linkProblems.get(msg).add(page);
};

for (const [path, p] of pages) {
    const body = p.html.slice(p.html.indexOf('<body'));
    for (const m of body.matchAll(/<a\s[^>]*href="([^"]*)"/g)) {
        let href = decode(m[1]);
        if (SITE_HOST_RE.test(href)) {
            if (!href.startsWith(SITE_URL)) addProblem(`"${href}" - www/https bo'lmagan to'liq URL`, path);
            href = href.replace(SITE_HOST_RE, '') || '/';
        }
        if (!href.startsWith('/') || href.startsWith('//')) continue;

        const target = href.split(/[?#]/)[0];
        if (target !== '/' && target.endsWith('/')) { addProblem(`"${href}" - oxirida "/" (308 redirect)`, path); continue; }
        if (redirectSources.has(target)) { addProblem(`"${href}" - redirect, to'g'risi "${redirectSources.get(target)}"`, path); continue; }
        if (/\.[a-z0-9]+$/i.test(target)) {
            if (!existsSync(join(distDir, target))) addProblem(`"${href}" - fayl yo'q`, path);
            continue;
        }
        if (target === '/login' || target.startsWith('/admin')) continue;
        // noindex sahifaga havola (masalan footer dagi maxfiylik siyosati) xato emas
        if (!pages.has(target)) addProblem(`"${href}" - bunday sahifa yo'q (404)`, path);
    }
}
for (const [msg, from] of linkProblems) {
    const list = [...from];
    errors.push(`Ichki havola ${msg} — ${list.length} sahifada (${list.slice(0, 3).join(', ')}${list.length > 3 ? ', ...' : ''})`);
}

// Sitemap
const sitemapFile = join(distDir, 'sitemap.xml');
if (existsSync(sitemapFile)) {
    const locs = [...readFileSync(sitemapFile, 'utf-8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    for (const loc of locs) {
        if (!loc.startsWith(SITE_URL)) { errors.push(`sitemap: ${loc} - www/https emas`); continue; }
        const path = loc.slice(SITE_URL.length) || '/';
        if (redirectSources.has(path)) errors.push(`sitemap: ${loc} - redirect`);
        else if (!pages.has(path)) errors.push(`sitemap: ${loc} - sahifa yo'q`);
        else if (pages.get(path).noindex) errors.push(`sitemap: ${loc} - noindex`);
    }
    const inSitemap = new Set(locs.map(l => l.slice(SITE_URL.length) || '/'));
    for (const [path] of indexable) {
        if (!inSitemap.has(path)) warnings.push(`${path}: indekslanadigan sahifa sitemap da yo'q`);
    }
} else {
    errors.push('dist/sitemap.xml topilmadi');
}

console.log(`\n🔎 SEO tekshiruv: ${pages.size} ta HTML (${indexable.length} ta indekslanadigan).`);
for (const w of warnings) console.warn(`   ⚠️  ${w}`);
if (errors.length) {
    for (const e of errors) console.error(`   ❌ ${e}`);
    console.error(`\n❌ ${errors.length} ta SEO xato.`);
    process.exit(1);
}
console.log('✅ Har bir sahifada bitta title, description va canonical; ichki havolalar va sitemap toza.');
