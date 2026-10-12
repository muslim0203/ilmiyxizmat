/**
 * sitemap.xml ni ma'lumot fayllaridan generatsiya qiladi.
 *
 * Qo'lda yozilgan sitemap eskirib qolgani uchun bir nechta sahifa (jumladan
 * o'quv qo'llanma xizmati) Google ga umuman ko'rsatilmagan edi. Endi sitemap
 * har build da src/data/*.js dan qayta quriladi.
 */
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, SITE_URL } from './routes.js';
import { readDates } from './content-dates.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
// lastmod = sahifa kontenti oxirgi marta o'zgargan sana (content-dates.js)
const dates = readDates();

const missing = (path) => {
    throw new Error(`contentDates.json da ${path} yo'q - avval node scripts/content-dates.js`);
};

const sitemapRoutes = routes.filter(r => r.sitemap !== false);

const body = sitemapRoutes.map(({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path === '/' ? '/' : path}</loc>
    <lastmod>${dates[path]?.modified ?? missing(path)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Avtomatik generatsiya qilinadi: scripts/generate-sitemap.js. Qo'lda tahrirlamang. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

for (const dir of ['public', 'dist']) {
    try {
        writeFileSync(join(__dirname, '..', dir, 'sitemap.xml'), xml);
    } catch {
        // dist hali yaratilmagan bo'lishi mumkin - muammo emas
    }
}

console.log(`✅ Sitemap: ${sitemapRoutes.length} ta URL yozildi (${SITE_URL}).`);
