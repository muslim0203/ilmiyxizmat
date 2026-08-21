// ===== ILMIY ISHLAR MA'LUMOTLARI =====

export const scientificWorks = [
    {
        id: 1,
        slug: "bitiruv-malakaviy-ishi-bmi",
        title: "Bitiruv malakaviy ishi (BMI)",
        description: "Bakalavriat talabalarining yakuniy ilmiy ishi. Tanlangan mavzu bo'yicha mustaqil tadqiqot o'tkazish va natijalarni ilmiy asoslash talab etiladi.",
        icon: "🎓",
        requirements: [
            "40-60 bet hajm",
            "Antiplagiat 70%+",
            "3 bob + ilova",
            "20+ manba"
        ],
        duration: "1-3 hafta",
        relatedService: "bmi-yozish",
        metaTitle: "Bitiruv malakaviy ishi (BMI) nima? Talablar va yozish tartibi",
        metaDescription: "Bitiruv malakaviy ishi (BMI) nima va unga qanday talablar qo'yiladi: hajm, antiplagiat foizi, tuzilma, manbalar soni va yozish tartibi."
    },
    {
        id: 2,
        slug: "kurs-ishi",
        title: "Kurs ishi",
        description: "Talabaning o'quv jarayonida bajaradigan ilmiy-tadqiqot ishi. Nazariy bilimlarni amaliyotda qo'llash qobiliyatini baholash.",
        icon: "📚",
        requirements: [
            "25-35 bet hajm",
            "Antiplagiat 60%+",
            "2 bob",
            "15+ manba"
        ],
        duration: "2-5 kun",
        relatedService: "kurs-ishi-yozish",
        metaTitle: "Kurs ishi nima? Qanday yoziladi? | Ilmiyxizmat.uz",
        metaDescription: "Kurs ishi haqida batafsil. Tuzilma, talablar, yozish qo'llanmasi."
    },
    {
        id: 3,
        slug: "magistrlik-dissertatsiyasi",
        title: "Magistrlik dissertatsiyasi",
        description: "Magistratura talabalarining yakuniy ilmiy ishi. Yangi ilmiy bilim ishlab chiqish va amaliy tavsiyalar berish talab etiladi.",
        icon: "🏆",
        requirements: [
            "80-100 bet hajm",
            "Antiplagiat 80%+",
            "3 bob + ilova",
            "50+ manba",
            "2+ ilmiy maqola"
        ],
        duration: "2-4 hafta",
        relatedService: "magistrlik-dissertatsiyasi-yozish",
        metaTitle: "Magistrlik dissertatsiyasi | Talablar va tuzilma | Ilmiyxizmat.uz",
        metaDescription: "Magistrlik dissertatsiyasi haqida to'liq qo'llanma. Talablar, tuzilma, himoya."
    },
    {
        id: 4,
        slug: "doktorlik-dissertatsiyasi",
        title: "Doktorlik dissertatsiyasi",
        description: "PhD (falsafa doktori) va DSc (fan doktori) ilmiy darajalarini olish uchun bajariladigan fundamental ilmiy tadqiqot.",
        icon: "👨‍🔬",
        requirements: [
            "PhD: 120-150 bet",
            "DSc: 200+ bet",
            "Antiplagiat 90%+",
            "5+ ilmiy maqola",
            "Avtoreferat"
        ],
        duration: "2-9 oy",
        relatedService: "doktorlik-dissertatsiyasi-yordam",
        metaTitle: "Doktorlik dissertatsiyasi (PhD, DSc) | Ilmiyxizmat.uz",
        metaDescription: "PhD va DSc doktorlik dissertatsiyasi haqida. Talablar, jarayon, himoya."
    },
    {
        id: 5,
        slug: "ilmiy-maqola",
        title: "Ilmiy maqola",
        description: "Ilmiy jurnallarda nashr qilinadigan tadqiqot natijalari. OAK, Scopus, Web of Science indeksli jurnallar uchun.",
        icon: "📰",
        requirements: [
            "6-15 bet hajm",
            "Annotatsiya 3 tilda",
            "Kalit so'zlar",
            "Mavzuga oid manbalar"
        ],
        duration: "2-5 kun",
        relatedService: "ilmiy-maqola-yozish",
        metaTitle: "Ilmiy maqola qanday yoziladi? | Ilmiyxizmat.uz",
        metaDescription: "Ilmiy maqola yozish qo'llanmasi. OAK, Scopus talablari, tuzilma."
    },
    {
        id: 6,
        slug: "monografiya",
        title: "Monografiya",
        description: "Bitta mavzu bo'yicha chuqur ilmiy tadqiqot natijalari aks ettirilgan kitob. Ilmiy darajalar uchun muhim.",
        icon: "📖",
        requirements: [
            "150-300 bet hajm",
            "ISBN raqami",
            "Ilmiy tahrir",
            "Retsenziya"
        ],
        duration: "1-3 hafta",
        relatedService: "monografiya-tayyorlash",
        metaTitle: "Monografiya nima? Talablar, hajm va tuzilma",
        metaDescription: "Monografiya nima, unga qanday talablar qo'yiladi: hajm va bosma taboq, taqriz, ISBN va UDK, ilmiy yangilik hamda nashr tartibi."
    },
    {
        id: 7,
        slug: "oquv-qollanma",
        title: "O'quv qo'llanma",
        description: "Ta'lim jarayonida foydalanish uchun mo'ljallangan o'quv materiallari. Darslik yoki qo'shimcha material sifatida.",
        icon: "📗",
        requirements: [
            "100+ bet hajm",
            "DTM maqullashi",
            "Retsenziya",
            "ISBN/UDK"
        ],
        duration: "1-3 hafta",
        relatedService: "oquv-qollanma-tayyorlash",
        metaTitle: "O'quv qo'llanma nima? Talablar, hajm va tuzilma",
        metaDescription: "O'quv qo'llanma nima va unga qanday talablar qo'yiladi: hajm, retsenziya, UDK va ISBN, tasdiqlash tartibi hamda darslikdan farqi."
    },
    {
        id: 9,
        slug: "darslik",
        title: "Darslik",
        description: "Fan dasturini to'liq qamrab oladigan asosiy o'quv nashri. Ta'lim standartiga qat'iy mos bo'lishi va vakolatli organ grifiga ega bo'lishi talab etiladi.",
        icon: "📕",
        requirements: [
            "O'quv dasturiga to'liq moslik",
            "Metodik apparat: test va topshiriqlar",
            "Kamida ikkita taqriz",
            "Grif va ISBN rasmiylashtirish"
        ],
        duration: "1-3 hafta",
        relatedService: "darslik-yozish",
        metaTitle: "Darslik nima? Talablar, tuzilma va grif olish tartibi",
        metaDescription: "Darslik nima va u o'quv qo'llanmadan nimasi bilan farq qiladi: tuzilma, metodik apparat, taqriz, grif olish tartibi va nashr talablari."
    },
    {
        id: 8,
        slug: "metodik-qollanma",
        title: "Metodik qo'llanma",
        description: "O'qituvchilar va talabalar uchun amaliy ko'rsatmalar. Laboratoriya ishlari, mashg'ulotlar uchun.",
        icon: "📘",
        requirements: [
            "30-60 bet hajm",
            "Amaliy topshiriqlar",
            "Nazorat savollari",
            "Ilova"
        ],
        duration: "1-2 hafta",
        relatedService: "ilmiy-ish-yozish",
        metaTitle: "Metodik qo'llanma tayyorlash | Ilmiyxizmat.uz",
        metaDescription: "Metodik qo'llanma tayyorlash xizmati. Amaliy ko'rsatmalar, laboratoriya."
    }
];

export const getWorkBySlug = (slug) => {
    return scientificWorks.find(work => work.slug === slug);
};
