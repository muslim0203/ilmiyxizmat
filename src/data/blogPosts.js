// ===== BLOG MAQOLALARI =====

export const blogPosts = [
    {
        id: 1,
        slug: "apa-7-format",
        title: "APA 7 formati: To'liq qo'llanma",
        excerpt: "APA 7 formati bo'yicha batafsil qo'llanma. Havola, bibliografiya, jadval va rasmlarni formatlash.",
        category: "Formatlash",
        date: "2024-01-15",
        readTime: "10 daqiqa"
    },
    {
        id: 2,
        slug: "gost-format",
        title: "GOST formati: Ilmiy ishlarni rasmiylashtirish",
        excerpt: "GOST 7.32 standarti bo'yicha ilmiy ishlarni rasmiylashtirish qo'llanmasi.",
        category: "Formatlash",
        date: "2024-01-10",
        readTime: "8 daqiqa"
    },
    {
        id: 3,
        slug: "antiplagiat-foizi",
        title: "Antiplagiat foizi: Qancha bo'lishi kerak?",
        excerpt: "Turli ilmiy ishlar uchun talab qilinadigan antiplagiat foizlari va uni oshirish yo'llari.",
        category: "Antiplagiat",
        date: "2024-01-05",
        readTime: "6 daqiqa"
    },
    {
        id: 4,
        slug: "bmi-nima",
        title: "BMI nima? Bitiruv malakaviy ishi haqida",
        excerpt: "Bitiruv malakaviy ishi (BMI) tuzilmasi, talablari va yozish bosqichlari.",
        category: "Ilmiy ishlar",
        date: "2024-01-01",
        readTime: "12 daqiqa"
    },
    {
        id: 5,
        slug: "ilmiy-maqola-qanday-yoziladi",
        title: "Ilmiy maqola qanday yoziladi?",
        excerpt: "Ilmiy maqola yozish bosqichlari, tuzilmasi va nashr qilish yo'llari.",
        category: "Ilmiy ishlar",
        date: "2023-12-25",
        readTime: "15 daqiqa"
    },
    {
        id: 6,
        slug: "monografiya-nima",
        title: "Monografiya nima? Qanday tayyorlanadi?",
        excerpt: "Monografiya tushunchasi, tuzilmasi va nashrga tayyorlash jarayoni.",
        category: "Ilmiy ishlar",
        date: "2023-12-20",
        readTime: "10 daqiqa"
    },
    {
        id: 7,
        slug: "oak-jurnal-talablari",
        title: "OAK jurnal talablari 2024",
        excerpt: "OAK ro'yxatidagi jurnallar talablari va maqola topshirish tartibi.",
        category: "Nashr",
        date: "2023-12-15",
        readTime: "8 daqiqa"
    },
    {
        id: 8,
        slug: "annotatsiya-kalit-soz",
        title: "Annotatsiya va kalit so'zlar yozish",
        excerpt: "Ilmiy ishlar uchun annotatsiya va kalit so'zlar yozish qoidalari.",
        category: "Formatlash",
        date: "2023-12-10",
        readTime: "5 daqiqa"
    }
];

export const getBlogBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
};
