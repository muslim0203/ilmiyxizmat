/**
 * Har bir ommaviy sahifaning HAQIQIY o'zgarish sanasi.
 *
 * Har sahifa kontentidan hash olinadi va src/data/contentDates.json da saqlanadi.
 * Build da hash o'zgargan bo'lsagina sana bugungi kunga yangilanadi - shuning
 * uchun dateModified va sitemap lastmod faqat kontent haqiqatan o'zgarganda
 * siljiydi (ilgari sitemap har build da barcha sahifalarga bugungi sanani qo'yardi).
 *
 * Ishlatish: node scripts/content-dates.js  (build ning birinchi qadami)
 * Lokal build dan keyin o'zgargan contentDates.json ni commit qiling.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { services }        from '../src/data/services.js';
import { scientificWorks } from '../src/data/scientificWorks.js';
import { publications }    from '../src/data/publications.js';
import { blogPosts }       from '../src/data/blogPosts.js';
import { faqItems }        from '../src/data/faq.js';
import { routes }          from './routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir   = join(__dirname, '..');
export const DATES_FILE = join(rootDir, 'src', 'data', 'contentDates.json');

const src = (file) => readFileSync(join(rootDir, 'src', 'pages', file), 'utf-8');
const pick = (items, keys) => items.map(i => keys.map(k => i[k]));

// Statik sahifa kontenti = sahifa komponenti + u ko'rsatadigan ma'lumotlar
const STATIC_SOURCES = {
    '/':               () => [src('Home/Home.jsx'), pick(services, ['slug', 'shortTitle', 'description', 'popular'])],
    '/xizmatlar':      () => [src('Services/Services.jsx'), pick(services, ['slug', 'title', 'description', 'icon', 'price', 'priceNote'])],
    '/narxlar':        () => [src('Pricing/Pricing.jsx'), pick(services, ['slug', 'title', 'price', 'priceNote', 'features'])],
    '/buyurtma':       () => [src('Order/Order.jsx'), pick(services, ['slug', 'title'])],
    '/blog':           () => [src('Blog/Blog.jsx'), pick(blogPosts, ['slug', 'title', 'excerpt', 'category', 'date', 'readTime'])],
    '/ilmiy-ishlar':   () => [src('ScientificWorks/ScientificWorks.jsx'), scientificWorks],
    '/nashr':          () => [src('Nashr/Nashr.jsx'), publications],
    '/biz-haqimizda':  () => [src('About/About.jsx')],
    '/aloqa':          () => [src('Contact/Contact.jsx')],
    '/savol-javob':    () => [src('FAQ/FAQ.jsx'), faqItems],
    '/ai-maqola':      () => [src('AIArticle/AIArticle.jsx')],
    '/privacy-policy': () => [src('Privacy/Privacy.jsx')],
    '/terms':          () => [src('Terms/Terms.jsx')],
};

const DETAIL_SOURCES = [
    ['/xizmatlar/',    services],
    ['/ilmiy-ishlar/', scientificWorks],
    ['/nashr/',        publications],
    ['/blog/',         blogPosts],
];

/** Sahifa kontentining manbasi (hash shu qiymatdan olinadi). */
export function contentSource(path) {
    if (STATIC_SOURCES[path]) return STATIC_SOURCES[path]();
    for (const [prefix, items] of DETAIL_SOURCES) {
        if (path.startsWith(prefix)) {
            const item = items.find(i => i.slug === path.slice(prefix.length));
            if (item) return item;
        }
    }
    throw new Error(`Kontent manbasi aniqlanmadi: ${path}`);
}

export const hashOf = (value) =>
    createHash('sha256').update(JSON.stringify(value)).digest('hex').slice(0, 16);

/** Toshkent vaqti bo'yicha YYYY-MM-DD */
export const todayTashkent = () =>
    new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Tashkent' });

export function readDates() {
    return existsSync(DATES_FILE) ? JSON.parse(readFileSync(DATES_FILE, 'utf-8')) : {};
}

export function writeDates(dates) {
    const sorted = Object.fromEntries(Object.keys(dates).sort().map(k => [k, dates[k]]));
    writeFileSync(DATES_FILE, JSON.stringify(sorted, null, 2) + '\n');
}

function main() {
    const old = readDates();
    const today = todayTashkent();
    const next = {};
    const changed = [];

    for (const { path } of routes) {
        const hash = hashOf(contentSource(path));
        if (old[path]?.hash === hash) {
            next[path] = old[path];
        } else {
            next[path] = { hash, modified: today };
            changed.push(path);
        }
    }

    writeDates(next);

    if (changed.length) {
        console.log(`📝 Kontent sanalari: ${changed.length} ta sahifa o'zgargan (${today}):`);
        for (const p of changed) console.log(`   ${p}`);
        if (process.env.VERCEL) {
            console.warn('⚠️  contentDates.json commit qilinmagan o\'zgarishlar bilan build bo\'lyapti.'
                + ' Lokal "npm run build" dan keyin faylni commit qiling, aks holda sana har deploy da siljiydi.');
        }
    } else {
        console.log('📝 Kontent sanalari: o\'zgarish yo\'q.');
    }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
