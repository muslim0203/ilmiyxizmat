// ===== NASHR MA'LUMOTLARI =====

export const publications = [
    {
        id: 1,
        slug: "oak-jurnallar",
        title: "OAK jurnallari",
        description: "OAK ro'yxatidagi jurnallarga maqola chiqarish xizmati.",
        icon: "🏛️",
        price: "350 000",
        timeline: "1-4 hafta"
    },
    {
        id: 2,
        slug: "konferensiyalar",
        title: "Konferensiyalar",
        description: "Xalqaro va respublika konferensiyalariga maqola chiqarish.",
        icon: "🎤",
        price: "100 000",
        timeline: "2-10 kun"
    },
    {
        id: 3,
        slug: "sertifikatli-nashr",
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
