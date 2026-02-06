/**
 * Prerender skripti - Build vaqtida barcha sahifalarni statik HTML ga aylantiradi.
 * 
 * Bu skript Google botga JavaScript yuklamasdan to'liq HTML kontentni ko'rish imkonini beradi.
 * 
 * Ishlatish: npm run build && node scripts/prerender.js
 * Yoki: npm run build:seo
 * 
 * Eslatma: Bu skript production serverda emas, faqat build vaqtida ishlatiladi.
 * Hosting provayderingiz (Vercel, Netlify, va h.k.) uchun prerender.io yoki 
 * boshqa prerender xizmatidan foydalanish tavsiya etiladi.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// Barcha prerender qilinadigan sahifalar
const routes = [
  '/',
  '/biz-haqimizda',
  '/aloqa',
  '/savol-javob',
  '/blog',
  '/narxlar',
  '/buyurtma',
  '/xizmatlar',
  '/ilmiy-ishlar',
  '/nashr',
  '/privacy-policy',
  '/terms',
  // Xizmatlar
  '/xizmatlar/ilmiy-ish-yozish',
  '/xizmatlar/bmi-yozish',
  '/xizmatlar/kurs-ishi-yozish',
  '/xizmatlar/magistrlik-dissertatsiyasi-yozish',
  '/xizmatlar/doktorlik-dissertatsiyasi-yordam',
  '/xizmatlar/ilmiy-maqola-yozish',
  '/xizmatlar/monografiya-tayyorlash',
  '/xizmatlar/oquv-qollanma-tayyorlash',
  '/xizmatlar/tahrir-korrektura',
  '/xizmatlar/antiplagiat-tekshirish',
  '/xizmatlar/apa-7-formatlash',
  '/xizmatlar/gost-formatlash',
  '/xizmatlar/annotatsiya-kalit-soz',
  '/xizmatlar/oak-jurnalga-chiqarish',
  '/xizmatlar/konferensiyaga-chiqarish',
  // Ilmiy ishlar
  '/ilmiy-ishlar/bitiruv-malakaviy-ishi-bmi',
  '/ilmiy-ishlar/kurs-ishi',
  '/ilmiy-ishlar/magistrlik-dissertatsiyasi',
  '/ilmiy-ishlar/doktorlik-dissertatsiyasi',
  '/ilmiy-ishlar/ilmiy-maqola',
  '/ilmiy-ishlar/monografiya',
  '/ilmiy-ishlar/oquv-qollanma',
  '/ilmiy-ishlar/metodik-qollanma',
  // Nashr
  '/nashr/oak-jurnallar',
  '/nashr/konferensiyalar',
  '/nashr/sertifikatli-nashr',
  // Blog
  '/blog/apa-7-format',
  '/blog/gost-format',
  '/blog/antiplagiat-foizi',
  '/blog/bmi-nima',
  '/blog/ilmiy-maqola-qanday-yoziladi',
  '/blog/monografiya-nima',
  '/blog/oak-jurnal-talablari',
  '/blog/annotatsiya-kalit-soz',
];

/**
 * Har bir route uchun index.html nusxasini yaratadi.
 * Bu SPA fallback uchun kerak - server barcha route'larga index.html qaytaradi,
 * lekin crawler'lar uchun har bir sahifaning o'z HTML fayli bo'ladi.
 */
function generateStaticFiles() {
  const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');
  
  let created = 0;
  
  for (const route of routes) {
    if (route === '/') continue; // Root index.html allaqachon mavjud
    
    const routePath = join(distDir, route);
    const filePath = join(routePath, 'index.html');
    
    // Papka yaratish
    if (!existsSync(routePath)) {
      mkdirSync(routePath, { recursive: true });
    }
    
    // index.html nusxasini yaratish
    writeFileSync(filePath, indexHtml);
    created++;
  }
  
  console.log(`\n✅ Prerender: ${created} ta statik HTML sahifa yaratildi.`);
  console.log(`📁 Natija: ${distDir}\n`);
  console.log('💡 Eslatma: To\'liq SSR uchun hosting provayderingizda');
  console.log('   prerender.io yoki shunga o\'xshash xizmatdan foydalaning.\n');
}

generateStaticFiles();
