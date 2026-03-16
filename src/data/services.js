// ===== XIZMATLAR MA'LUMOTLARI =====

export const services = [
  {
    id: 1,
    slug: "ilmiy-ish-yozish",
    title: "Ilmiy ish yozish xizmati",
    shortTitle: "Ilmiy ish yozish",
    description: "Professional ilmiy ishlar yozish xizmati. Barcha turdagi ilmiy ishlarni yuqori sifatda tayyorlab beramiz.",
    icon: "📝",
    features: [
      "Individual yondashuv",
      "Yuqori sifat kafolati",
      "O'z vaqtida topshirish",
      "Bepul tuzatishlar"
    ],
    price: "200 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "Ilmiy ish yozish xizmati | Ilmiyxizmat.uz",
    metaDescription: "Professional ilmiy ish yozish xizmati. BMI, kurs ishi, dissertatsiya va boshqa ilmiy ishlarni sifatli tayyorlab beramiz."
  },
  {
    id: 2,
    slug: "bmi-yozish",
    title: "Bitiruv malakaviy ish (BMI) yozish",
    shortTitle: "BMI yozish",
    description: "Bitiruv malakaviy ishingizni professional darajada tayyorlab beramiz. Barcha fan yo'nalishlari bo'yicha.",
    icon: "🎓",
    features: [
      "Barcha yo'nalishlar",
      "Antiplagiat 70%+",
      "Ilova va jadvallar",
      "Himoya uchun tayyorlash"
    ],
    price: "800 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "BMI yozish xizmati | Bitiruv malakaviy ishi | Ilmiyxizmat.uz",
    metaDescription: "Bitiruv malakaviy ish (BMI) yozish xizmati. Antiplagiat 70%+, barcha yo'nalishlar bo'yicha, himoyaga tayyorlash."
  },
  {
    id: 3,
    slug: "kurs-ishi-yozish",
    title: "Kurs ishi yozish xizmati",
    shortTitle: "Kurs ishi yozish",
    description: "Kurs ishingizni tez va sifatli tayyorlab beramiz. Barcha fan yo'nalishlari bo'yicha ishlaymiz.",
    icon: "📚",
    features: [
      "Tez tayyorlash",
      "GOST standarti",
      "Jadval va grafiklar",
      "Bepul konsultatsiya"
    ],
    price: "300 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "Kurs ishi yozish xizmati | Ilmiyxizmat.uz",
    metaDescription: "Kurs ishi yozish xizmati. Tez va sifatli, GOST standartida, barcha yo'nalishlar bo'yicha."
  },
  {
    id: 4,
    slug: "magistrlik-dissertatsiyasi-yozish",
    title: "Magistrlik dissertatsiyasi yozish",
    shortTitle: "Magistrlik dissertatsiyasi",
    description: "Magistrlik dissertatsiyangizni ilmiy darajada tayyorlab beramiz. OAK talablariga muvofiq.",
    icon: "🏆",
    features: [
      "Ilmiy yangilik",
      "Metodologiya",
      "Emprik tadqiqot",
      "Nashrga yordam"
    ],
    price: "2 000 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "Magistrlik dissertatsiyasi yozish | Ilmiyxizmat.uz",
    metaDescription: "Magistrlik dissertatsiyasi yozish xizmati. Ilmiy yangilik, OAK talablari, nashrga yordam."
  },
  {
    id: 5,
    slug: "doktorlik-dissertatsiyasi-yordam",
    title: "Doktorlik dissertatsiyasi bo'yicha yordam",
    shortTitle: "Doktorlik dissertatsiyasi",
    description: "PhD va DSc dissertatsiyalari uchun ilmiy maslahat va yordam xizmati.",
    icon: "👨‍🔬",
    features: [
      "Mavzu tanlash",
      "Tadqiqot rejasi",
      "Maqola yozish",
      "Avtoreferat"
    ],
    price: "5 000 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "Doktorlik dissertatsiyasi bo'yicha yordam | Ilmiyxizmat.uz",
    metaDescription: "Doktorlik (PhD, DSc) dissertatsiyasi uchun ilmiy maslahat va yordam xizmati."
  },
  {
    id: 6,
    slug: "ilmiy-maqola-yozish",
    title: "Ilmiy maqola yozish xizmati",
    shortTitle: "Ilmiy maqola yozish",
    description: "OAK jurnallari va xalqaro konferensiyalar uchun ilmiy maqolalar tayyorlab beramiz.",
    icon: "📰",
    features: [
      "OAK talablari",
      "Scopus/WoS",
      "Annotatsiya",
      "Bibliografiya"
    ],
    price: "500 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "Ilmiy maqola yozish xizmati | Ilmiyxizmat.uz",
    metaDescription: "Ilmiy maqola yozish xizmati. OAK jurnallari, Scopus, WoS uchun maqolalar tayyorlash."
  },
  {
    id: 7,
    slug: "monografiya-tayyorlash",
    title: "Monografiya tayyorlash va nashrga tayyorlash",
    shortTitle: "Monografiya tayyorlash",
    description: "Ilmiy monografiyangizni tayyorlash va nashr qilishda to'liq yordam.",
    icon: "📖",
    features: [
      "Tuzilma yaratish",
      "Ilmiy tahrrir",
      "ISBN olish",
      "Nashrga tayyorlash"
    ],
    price: "3 000 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "Monografiya tayyorlash xizmati | Ilmiyxizmat.uz",
    metaDescription: "Monografiya tayyorlash va nashrga tayyorlash xizmati. ISBN, ilmiy tahrir."
  },
  {
    id: 8,
    slug: "oquv-qollanma-tayyorlash",
    title: "O'quv qo'llanma tayyorlash xizmati",
    shortTitle: "O'quv qo'llanma",
    description: "O'quv qo'llanma va darsliklarni professional darajada tayyorlab beramiz.",
    icon: "📗",
    features: [
      "DTM talablari",
      "Rasmiylashtirish",
      "Retsenziya",
      "Nashr"
    ],
    price: "2 500 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "O'quv qo'llanma tayyorlash xizmati | Ilmiyxizmat.uz",
    metaDescription: "O'quv qo'llanma va darslik tayyorlash xizmati. DTM talablari, retsenziya, nashr."
  },
  {
    id: 9,
    slug: "tahrir-korrektura",
    title: "Ilmiy ishni tahrirlash va korrektura",
    shortTitle: "Tahrir va korrektura",
    description: "Ilmiy ishingizni professional tahrir va korrekturadan o'tkazamiz.",
    icon: "✍️",
    features: [
      "Grammatik tekshiruv",
      "Uslubiy tahrir",
      "Formatlash",
      "Manbalar tekshiruvi"
    ],
    price: "100 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "Ilmiy ish tahrirlash va korrektura | Ilmiyxizmat.uz",
    metaDescription: "Ilmiy ishlarni professional tahrirlash va korrektura xizmati."
  },
  {
    id: 10,
    slug: "antiplagiat-tekshirish",
    title: "Antiplagiat tekshirish (hisobot bilan)",
    shortTitle: "Antiplagiat tekshirish",
    description: "Ishingizni professional antiplagiat tizimlarida tekshirib, to'liq hisobot beramiz.",
    icon: "🔍",
    features: [
      "To'liq hisobot",
      "Foiz ko'rsatkichi",
      "Manba tafsilotlari",
      "Tuzatish maslahati"
    ],
    price: "50 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "Antiplagiat tekshirish xizmati | Ilmiyxizmat.uz",
    metaDescription: "Antiplagiat tekshirish xizmati to'liq hisobot bilan. Professional tekshiruv."
  },
  {
    id: 11,
    slug: "apa-7-formatlash",
    title: "APA 7 formatlash (bibliografiya + havola)",
    shortTitle: "APA-7 formatlash",
    description: "Ishingizni APA 7 standartiga muvofiq to'liq formatlab beramiz.",
    icon: "📋",
    features: [
      "Havola formatlaash",
      "Bibliografiya",
      "Jadval formatlash",
      "Rasm formatlash"
    ],
    price: "150 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "APA 7 formatlash xizmati | Ilmiyxizmat.uz",
    metaDescription: "APA 7 standartiga muvofiq formatlash xizmati. Havola va bibliografiya."
  },
  {
    id: 12,
    slug: "gost-formatlash",
    title: "GOST bo'yicha rasmiylashtirish",
    shortTitle: "GOST formatlash",
    description: "Ishingizni GOST standartlari bo'yicha to'liq rasmiylashtirib beramiz.",
    icon: "📄",
    features: [
      "GOST 7.32",
      "Mundarija",
      "Ilova rasmiylashtirish",
      "Shrift va o'lchamlar"
    ],
    price: "150 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "GOST formatlash xizmati | Ilmiyxizmat.uz",
    metaDescription: "GOST standartlari bo'yicha rasmiylashtirish xizmati."
  },
  {
    id: 13,
    slug: "annotatsiya-kalit-soz",
    title: "Annotatsiya va kalit so'z yozish",
    shortTitle: "Annotatsiya yozish",
    description: "Professional annotatsiya va kalit so'zlar tayyorlab beramiz.",
    icon: "🔑",
    features: [
      "O'zbek tilida",
      "Rus tilida",
      "Ingliz tilida",
      "SEO optimizatsiya"
    ],
    price: "50 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "Annotatsiya va kalit so'z yozish | Ilmiyxizmat.uz",
    metaDescription: "Annotatsiya va kalit so'z yozish xizmati. 3 tilda."
  },
  {
    id: 14,
    slug: "oak-jurnalga-chiqarish",
    title: "OAK jurnalga maqola chiqarish",
    shortTitle: "OAK jurnalga chiqarish",
    description: "Maqolangizni OAK ro'yxatidagi jurnallarga chiqarishda to'liq yordam.",
    icon: "🏛️",
    features: [
      "Jurnal tanlash",
      "Maqola tayyorlash",
      "Retsenziya",
      "Nashr kafolati"
    ],
    price: "350 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "OAK jurnalga maqola chiqarish | Ilmiyxizmat.uz",
    metaDescription: "OAK ro'yxatidagi jurnallarga maqola chiqarish xizmati."
  },
  {
    id: 15,
    slug: "konferensiyaga-chiqarish",
    title: "Konferensiyaga maqola chiqarish (sertifikat bilan)",
    shortTitle: "Konferensiyaga chiqarish",
    description: "Xalqaro va respublika konferensiyalariga maqola chiqarish xizmati.",
    icon: "🎤",
    features: [
      "Konferensiya tanlash",
      "Maqola tayyorlash",
      "Sertifikat",
      "To'plam nashr"
    ],
    price: "80 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "Konferensiyaga maqola chiqarish | Ilmiyxizmat.uz",
    metaDescription: "Konferensiyaga maqola chiqarish xizmati sertifikat bilan."
  }
];

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

export const getPopularServices = () => {
  return services.filter(service => service.popular);
};
