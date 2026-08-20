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

const __dirname = dirname(fileURLToPath(import.meta.url));
const today = new Date().toISOString().slice(0, 10);

const body = routes.map(({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path === '/' ? '/' : path}</loc>
    <lastmod>${today}</lastmod>
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

console.log(`✅ Sitemap: ${routes.length} ta URL yozildi (${SITE_URL}).`);
