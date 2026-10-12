// ===== NASHR MA'LUMOTLARI =====

export const publications = [
    {
        id: 1,
        slug: "oak-jurnallar",
        metaDescription: "OAK ro'yxatidagi ilmiy jurnallarda nashr: ixtisoslik bo'yicha jurnal tanlash, talablar, muddat 1-4 hafta va narx 350 000 so'mdan. Nashr turlarini solishtiring.",
        metaTitle: "OAK jurnallarida nashr – muddat 1-4 hafta, 350 000 so'mdan",
        title: "OAK jurnallari",
        description: "OAK ro'yxatidagi jurnallarga maqola chiqarish xizmati.",
        icon: "🏛️",
        price: "350 000",
        timeline: "1-4 hafta"
    },
    {
        id: 2,
        slug: "konferensiyalar",
        metaDescription: "Xalqaro va respublika ilmiy-amaliy konferensiyalarida nashr: sertifikat, to'plamda chop etish, muddat 2-10 kun, narx 100 000 so'mdan.",
        title: "Konferensiyalar",
        description: "Xalqaro va respublika konferensiyalariga maqola chiqarish.",
        icon: "🎤",
        price: "100 000",
        timeline: "2-10 kun"
    },
    {
        id: 3,
        slug: "sertifikatli-nashr",
        metaDescription: "Rasmiy sertifikat bilan ilmiy nashr: konferensiya to'plamlari va ilmiy jurnallarda chop etish. Muddat 2-10 kun, narx 100 000 so'mdan.",
        title: "Sertifikatli nashr",
        description: "Rasmiy sertifikat bilan ilmiy nashrlar.",
        icon: "📜",
        price: "100 000",
        timeline: "2-10 kun"
    }
];

export const getPublicationBySlug = (slug) => {
    return publications.find(pub => pub.slug === slug);
};
