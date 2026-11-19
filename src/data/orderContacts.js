// ===== XIZMAT BO'YICHA BUYURTMA KONTAKTLARI =====
//
// Ba'zi xizmatlarning buyurtmalari umumiy kontakt (SiteSettings: telegram,
// telefon) o'rniga boshqa mas'ul xodimga yo'naltiriladi. Bu yerda faqat o'sha
// xizmatlar sanaladi - ro'yxatda yo'q xizmat sayt sozlamalaridagi umumiy
// kontaktdan foydalanadi.
//
// Ishlatiladi: buyurtma formasi (Yuborish, Telegram, Qo'ng'iroq) va xizmat
// sahifasidagi Telegram / Qo'ng'iroq tugmalari.

const DONIYOR = {
    telegram:    '@DONIYOR_1009',
    telegramUrl: 'https://t.me/DONIYOR_1009',
    phone:       '+998 91 109 55 45',
    phoneRaw:    '+998911095545',
};

// xizmat slug -> kontakt
export const serviceContacts = {
    'bmi-yozish':       DONIYOR,
    'kurs-ishi-yozish': DONIYOR,
};

/** Xizmat uchun kontakt: maxsus bo'lsa o'sha, aks holda sayt sozlamalari. */
export function getOrderContact(serviceSlug, settings) {
    const own = serviceContacts[serviceSlug];
    return own ? { ...settings, ...own } : settings;
}
