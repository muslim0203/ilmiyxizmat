/**
 * Prerender - har bir manzil uchun HAQIQIY statik HTML yaratadi.
 *
 * Ilgari bu skript shunchaki root index.html nusxasini ko'chirar edi, ya'ni barcha
 * sahifalar bir xil sarlavha, bir xil description va bosh sahifaga ishora qiluvchi
 * canonical bilan chiqardi. Endi har bir sahifa react-dom/server orqali render
 * qilinadi: Google JavaScript ni kutmasdan to'liq matnni va to'g'ri meta teglarni ko'radi.
 *
 * Ishlatish: vite build && vite build --ssr ... && node scripts/prerender.js
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { routes } from './routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir   = join(__dirname, '..');
const distDir   = join(rootDir, 'dist');
const ssrEntry  = join(rootDir, 'dist-ssr', 'entry-server.js');

const HEAD_PLACEHOLDER = '<!--app-head-->';
const HTML_PLACEHOLDER = '<!--app-html-->';
const TEMPLATE_TITLE_RE = /[ \t]*<title>[\s\S]*?<\/title>\n?/;
const TEMPLATE_ROBOTS_RE = /[ \t]*<meta name="robots"[^>]*>\n?/;

// Ommaviy manzillardan tashqari maxsus fayllar
const EXTRA_PAGES = [
    // Vercel mavjud bo'lmagan har qanday URL uchun 404 status bilan shuni beradi
    // (ilgari umumiy rewrite tufayli ular 200 + bosh sahifa bo'lib, soft-404 edi).
    { route: '/__404', file: '404.html' },
];

// Manzil -> sahifa komponenti (App.jsx dagi lazy importlar bilan bir xil).
// Sahifa CSS i lazy chunk bilan keladi; prerender HTML ga oldindan qo'yilmasa,
// JS yuklangach hero blok qayta chiziladi va LCP 1-1.5s kechikadi.
// "/x/*" - shu prefiks ostidagi har qanday manzil, aks holda aniq moslik
const PAGE_MODULES = [
    ['/',               'src/pages/Home/Home.jsx'],
    ['/xizmatlar',      'src/pages/Services/Services.jsx'],
    ['/xizmatlar/*',    'src/pages/Services/ServiceDetail.jsx'],
    ['/blog',           'src/pages/Blog/Blog.jsx'],
    ['/blog/*',         'src/pages/Blog/BlogPost.jsx'],
    ['/ilmiy-ishlar',   'src/pages/ScientificWorks/ScientificWorks.jsx'],
    ['/ilmiy-ishlar/*', 'src/pages/ScientificWorks/ScientificWorkDetail.jsx'],
    ['/nashr',          'src/pages/Nashr/Nashr.jsx'],
    ['/nashr/*',        'src/pages/Nashr/NashrDetail.jsx'],
    ['/narxlar',        'src/pages/Pricing/Pricing.jsx'],
    ['/buyurtma',       'src/pages/Order/Order.jsx'],
    ['/biz-haqimizda',  'src/pages/About/About.jsx'],
    ['/aloqa',          'src/pages/Contact/Contact.jsx'],
    ['/savol-javob',    'src/pages/FAQ/FAQ.jsx'],
    ['/ai-maqola',      'src/pages/AIArticle/AIArticle.jsx'],
];

const matchRoute = (pattern, route) => pattern.endsWith('/*')
    ? route.startsWith(pattern.slice(0, -1)) && route.length > pattern.length - 1
    : route === pattern;

/** Sahifa chunk i va uning statik importlari CSS lari */
function pageCss(manifest, route) {
    const entry = PAGE_MODULES.find(([p]) => matchRoute(p, route))?.[1];
    if (!entry || !manifest[entry]) return [];
    const css = new Set();
    const seen = new Set();
    const visit = (key) => {
        if (seen.has(key) || !manifest[key]) return;
        seen.add(key);
        // index.html allaqachon yuklaydigan asosiy CSS ni takrorlamaymiz
        if (manifest[key].isEntry) return;
        manifest[key].css?.forEach(f => css.add(f));
        manifest[key].imports?.forEach(visit);
    };
    visit(entry);
    return [...css].map(f => `<link rel="stylesheet" crossorigin href="/${f}">`);
}

/** Template + sahifa head/html -> to'liq HTML */
function buildPage(template, head, html, extraHead = []) {
    let base = template;
    // Template dagi zaxira <title> ni olib tashlaymiz - aks holda sahifada
    // ikkita title bo'lib qoladi (biri bosh sahifaniki).
    if (head.includes('<title')) base = base.replace(TEMPLATE_TITLE_RE, '');
    // noindex sahifada template dagi "index, follow" ikkinchi robots teg bo'lmasin
    if (head.includes('name="robots"')) base = base.replace(TEMPLATE_ROBOTS_RE, '');
    // Sahifa CSS i asosiy CSS dan keyin kelishi kerak (Vite ham shu tartibda yuklaydi)
    if (extraHead.length) base = base.replace('</head>', `  ${extraHead.join('\n  ')}\n</head>`);
    return base.replace(HEAD_PLACEHOLDER, head).replace(HTML_PLACEHOLDER, html);
}

async function main() {
    if (!existsSync(ssrEntry)) {
        console.error(`❌ SSR bundle topilmadi: ${ssrEntry}`);
        console.error('   Avval bajaring: vite build --ssr src/entry-server.jsx --outDir dist-ssr');
        process.exit(1);
    }

    const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

    if (!template.includes(HEAD_PLACEHOLDER) || !template.includes(HTML_PLACEHOLDER)) {
        console.error(`❌ index.html da ${HEAD_PLACEHOLDER} yoki ${HTML_PLACEHOLDER} yo'q.`);
        process.exit(1);
    }

    const manifestFile = join(distDir, '.vite', 'manifest.json');
    const manifest = existsSync(manifestFile) ? JSON.parse(readFileSync(manifestFile, 'utf-8')) : {};

    const { render } = await import(pathToFileURL(ssrEntry).href);

    let ok = 0;
    const failed = [];

    for (const { path: route } of routes) {
        try {
            const { html, head } = await render(route);
            const page = buildPage(template, head, html, pageCss(manifest, route));

            const outFile = route === '/'
                ? join(distDir, 'index.html')
                : join(distDir, route, 'index.html');

            mkdirSync(dirname(outFile), { recursive: true });
            writeFileSync(outFile, page);
            ok++;
        } catch (err) {
            failed.push({ route, message: err.message });
        }
    }

    for (const { route, file } of EXTRA_PAGES) {
        try {
            const { html, head } = await render(route);
            // 404.html har qanday manzil uchun beriladi - HTML URL ga mos emas,
            // shuning uchun main.jsx uni hydrate emas, qayta render qiladi
            const page = buildPage(template, head, html)
                .replace('<div id="root">', '<div id="root" data-client-only>');
            writeFileSync(join(distDir, file), page);
            ok++;
        } catch (err) {
            failed.push({ route: file, message: err.message });
        }
    }

    // /login va /admin/* uchun bo'sh SPA qobig'i (vercel.json rewrite). Bosh
    // sahifa HTML i bilan berilganda admin sahifasida bosh sahifa kontenti va
    // uning canonical i ko'rinib qolardi.
    writeFileSync(join(distDir, 'spa.html'), buildPage(
        template,
        '<meta name="robots" content="noindex, nofollow" />',
        '',
    ));

    // SSR bundle va Vite manifest deploy ga kerak emas
    rmSync(join(rootDir, 'dist-ssr'), { recursive: true, force: true });
    rmSync(join(distDir, '.vite'), { recursive: true, force: true });

    console.log(`\n✅ Prerender: ${ok}/${routes.length + EXTRA_PAGES.length} ta sahifa statik HTML ga aylantirildi (+ spa.html).`);

    if (failed.length) {
        console.error(`\n❌ ${failed.length} ta sahifa render bo'lmadi:`);
        for (const f of failed) console.error(`   ${f.route} — ${f.message}`);
        process.exit(1);
    }
}

main().catch(err => {
    console.error('❌ Prerender xatosi:', err);
    process.exit(1);
});
