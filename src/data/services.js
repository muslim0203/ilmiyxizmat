// ===== XIZMATLAR MA'LUMOTLARI =====
//
// Xizmat sahifasi (/xizmatlar/:slug) bloklari - har biri ixtiyoriy, maydon
// bo'lmasa blok chiqmaydi:
//   pricing:      [{ type, volume, duration, price, link? }]  - narx jadvali
//   steps:        [{ title, text }]   - ish bosqichlari (bo'lmasa defaultSteps)
//   content:      [{ heading, paragraphs?, list? }]  - batafsil SEO matni
//   samples:      [{ title, meta, description, file? }] - anonim namunalar/portfolio
//   faq:          [{ question, answer }] - FAQ bloki va FAQPage sxemasi (5-8 ta)
//   relatedPosts: [blog slug]  - "Foydali maqolalar" bloki
//
// Narx, muddat va hajm /ilmiy-ishlar va /nashr dagi qiymatlar bilan bir xil
// bo'lsin - FAQ javoblari shu raqamlarga tayanadi.

export const defaultSteps = [
  { title: "Buyurtma", text: "Sayt formasi yoki Telegram orqali ish turi, mavzu va muddatni yuborasiz. Konsultatsiya bepul." },
  { title: "Kelishuv", text: "Talablar, hajm, muddat va narx aniqlanadi, ish rejasi kelishiladi." },
  { title: "Yozish", text: "Mutaxassis ishni reja asosida yozadi. Katta ishlar bo'limlarga bo'lib topshiriladi." },
  { title: "Tekshirish", text: "Ish antiplagiat, talab qilingan standart bo'yicha rasmiylashtirish va mazmun jihatidan tekshiriladi." },
  { title: "Topshirish", text: "Tayyor ish topshiriladi. Ilmiy rahbar izohlari bo'yicha tuzatishlar bepul kiritiladi." },
];

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
    metaTitle: "Ilmiy ish yozish xizmati – BMI, kurs ishi, dissertatsiya, maqola | Ilmiyxizmat.uz",
    metaDescription: "Ilmiy ish yozish: kurs ishi 300 000, BMI 800 000, magistrlik dissertatsiyasi 2 000 000 so'mdan. Barcha yo'nalishlar, GOST rasmiylashtirish, bepul tuzatishlar.",
    pricing: [
      {
        type: "Kurs ishi",
        volume: "25-35 bet",
        duration: "2-5 kun",
        price: "300 000 so'mdan",
        link: "/xizmatlar/kurs-ishi-yozish"
      },
      {
        type: "Bitiruv malakaviy ishi (BMI)",
        volume: "40-60 bet",
        duration: "1-3 hafta",
        price: "800 000 so'mdan",
        link: "/xizmatlar/bmi-yozish"
      },
      {
        type: "Magistrlik dissertatsiyasi",
        volume: "80-100 bet",
        duration: "2-4 hafta",
        price: "2 000 000 so'mdan",
        link: "/xizmatlar/magistrlik-dissertatsiyasi-yozish"
      },
      {
        type: "Ilmiy maqola",
        volume: "6-15 bet",
        duration: "2-5 kun",
        price: "100 000 so'mdan",
        link: "/xizmatlar/ilmiy-maqola-yozish"
      },
      {
        type: "Monografiya",
        volume: "150-300 bet",
        duration: "1-3 hafta",
        price: "3 000 000 so'mdan",
        link: "/xizmatlar/monografiya-tayyorlash"
      },
      {
        type: "Doktorlik dissertatsiyasi (PhD, DSc)",
        volume: "PhD: 120-150 bet, DSc: 200+ bet",
        duration: "2-9 oy",
        price: "5 000 000 so'mdan",
        link: "/xizmatlar/doktorlik-dissertatsiyasi-yordam"
      }
    ],
    faq: [
      {
        question: "Qaysi turdagi ilmiy ishlarni yozasizlar?",
        answer: "Kurs ishi, bitiruv malakaviy ishi (BMI), magistrlik dissertatsiyasi, ilmiy maqola, monografiya, o'quv qo'llanma va darslik. Doktorlik (PhD, DSc) dissertatsiyasi bo'yicha esa ilmiy maslahat va yordam beramiz."
      },
      {
        question: "Ilmiy ish yozish narxi qancha?",
        answer: "Narx ish turiga bog'liq: kurs ishi 300 000, BMI 800 000, magistrlik dissertatsiyasi 2 000 000, ilmiy maqola 100 000 so'mdan boshlanadi. Yakuniy summa hajm, yo'nalish va muddatga qarab bepul konsultatsiyada aniqlanadi."
      },
      {
        question: "Qaysi fan yo'nalishlari bo'yicha ishlaysizlar?",
        answer: "Barcha yo'nalishlar bo'yicha: iqtisodiyot, huquq, pedagogika, filologiya, tibbiyot, texnika, aniq va tabiiy fanlar hamda ijtimoiy fanlar."
      },
      {
        question: "Ish GOST talablari bo'yicha rasmiylashtiriladimi?",
        answer: "Ha. Ish muassasangiz talab qiladigan standart - odatda GOST, xalqaro jurnallar uchun esa APA 7 - bo'yicha rasmiylashtiriladi: mundarija, havolalar, adabiyotlar ro'yxati va ilovalar."
      },
      {
        question: "Tuzatish kiritish pullikmi?",
        answer: "Yo'q. Ilmiy rahbar yoki taqrizchi izohlari bo'yicha tuzatishlar bepul kiritiladi."
      },
      {
        question: "Buyurtma qanday beriladi?",
        answer: "Saytdagi buyurtma formasini to'ldiring yoki Telegram orqali yozing: ish turi, mavzu va muddatni yuboring. Talablar va narx konsultatsiyada kelishiladi."
      }
    ],
    relatedPosts: [
      "bitiruv-malakaviy-ishi-bmi-yozish-sirlari",
      "gost-nima-ilmiy-ishlarda-gost-standarti",
      "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun",
      "antiplagiat-dasturidan-qanday-otish-mumkin"
    ]
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
    metaTitle: "BMI yozish xizmati - bitiruv malakaviy ishi tayyorlash",
    metaDescription: "Bitiruv malakaviy ishi (BMI) yozish xizmati 800 000 so'mdan. Barcha yo'nalishlar, antiplagiat 70%+, GOST rasmiylashtirish, taqdimot va himoyaga tayyorgarlik.",
    content: [
      {
              heading: "Bitiruv malakaviy ishi (BMI) yozish xizmati",
              paragraphs: [
                "Bitiruv malakaviy ishi - bakalavriat bosqichini yakunlovchi mustaqil ilmiy-tadqiqot ishi. U talabaning to'rt yil davomida o'zlashtirgan bilimlarini amaliy masalaga qo'llay olishini ko'rsatadi va diplom olishning majburiy sharti hisoblanadi.",
                "Ilmiyxizmat.uz jamoasi BMI ni mavzu tanlashdan himoyaga tayyorgarlikkacha bo'lgan barcha bosqichlarda tayyorlab beradi. Har bir ish tegishli yo'nalish bo'yicha mutaxassis tomonidan bajariladi va bosqichma-bosqich topshiriladi.",
                "Xizmat barcha yo'nalishlar uchun ochiq: iqtisodiyot, pedagogika, filologiya, huquq, aniq va tabiiy fanlar, texnika, tibbiyot hamda ijtimoiy fanlar.",
              ],
            },
      {
              heading: "BMI tuzilmasi",
              paragraphs: [
                "Bitiruv malakaviy ishining tuzilmasi deyarli barcha oliy ta'lim muassasalarida bir xil bo'ladi:",
              ],
              list: [
                "Titul varag'i va topshiriq varaqasi",
                "Mundarija",
                "Kirish - mavzuning dolzarbligi, maqsad, vazifalar, ob'ekt va predmet",
                "I bob - nazariy qism, masalaning o'rganilganlik darajasi",
                "II bob - tahliliy qism, mavjud holatni baholash",
                "III bob - amaliy qism, takliflar va ularning asoslanishi",
                "Xulosa va takliflar",
                "Foydalanilgan adabiyotlar ro'yxati",
                "Ilovalar - jadval, hisob-kitob, so'rovnoma natijalari",
              ],
            },
      {
              heading: "BMI yozish tartibi: bosqichma-bosqich",
              paragraphs: [
                "Ish oldindan kelishilgan reja asosida olib boriladi va har bir bosqich alohida topshiriladi - siz jarayonni boshidan oxirigacha kuzatib borasiz.",
              ],
              list: [
                "Bepul konsultatsiya: yo'nalish, mavzu va kafedra talablari aniqlanadi.",
                "Mavzuni tasdiqlash va ish rejasini (kalendar reja) tuzish.",
                "Adabiyotlar bazasini yig'ish: normativ hujjatlar, ilmiy manbalar, statistika.",
                "Kirish qismini yozish va rahbar bilan kelishish.",
                "Boblarni ketma-ket yozish - har biri alohida topshiriladi.",
                "Amaliy qism: hisob-kitoblar, tahlil, jadval va diagrammalar.",
                "Xulosa va takliflarni shakllantirish.",
                "Antiplagiat tekshiruvi va originallikni talab darajasiga yetkazish.",
                "GOST bo'yicha rasmiylashtirish: mundarija, havolalar, ilovalar.",
                "Taqdimot (prezentatsiya) va himoya nutqini tayyorlash.",
              ],
            },
      {
              heading: "BMI ga qo'yiladigan talablar",
              paragraphs: [
                "Talablar muassasa va yo'nalishga qarab biroz farq qiladi, lekin amaliyotda quyidagilar deyarli har doim so'raladi:",
              ],
              list: [
                "Hajm: odatda 40-60 bet (ilovalarsiz).",
                "Antiplagiat: originallik ko'rsatkichi 70% va undan yuqori.",
                "Manbalar: kamida 20-30 ta, ularning aksariyati so'nggi yillar nashri.",
                "Tuzilma: uch bob, har bir bob oxirida qisqacha xulosa.",
                "Rasmiylashtirish: GOST talablari - shrift, oraliq, chekkalar, havolalar.",
                "Amaliy qismning bo'lishi - faqat nazariya bilan cheklangan ish qaytariladi.",
                "Ilmiy rahbar taqrizi va kafedra muhokamasidan o'tish.",
              ],
            },
      {
              heading: "Himoyaga tayyorgarlik",
              paragraphs: [
                "Yaxshi yozilgan ish ham zaif himoya tufayli past baholanishi mumkin. Shu sababli biz himoya bosqichini alohida tayyorlaymiz.",
              ],
              list: [
                "Taqdimot slaydlari - odatda 10-12 ta, asosiy natijalar va grafiklar bilan.",
                "Himoya nutqi - 7-10 daqiqaga mo'ljallangan matn.",
                "Komissiya beradigan ehtimoliy savollar va ularga javoblar.",
                "Ishning asosiy yangiligi va amaliy ahamiyatini qisqa ifodalash.",
              ],
            },
      {
              heading: "BMI narxi nimaga bog'liq",
              paragraphs: [
                "Xizmat narxi 800 000 so'mdan boshlanadi. Yakuniy summa quyidagi omillarga qarab shakllanadi:",
              ],
              list: [
                "Yo'nalish va mavzuning murakkabligi.",
                "Ish hajmi - bet soni va boblar miqdori.",
                "Amaliy qism hajmi: hisob-kitob, so'rovnoma, statistik tahlil.",
                "Grafik material: jadval, diagramma, chizmalar soni.",
                "Talab qilinadigan antiplagiat foizi.",
                "Tayyorlash muddati - shoshilinch buyurtmalar qimmatroq.",
                "Sizda tayyor material - kurs ishlari, to'plangan ma'lumotlar - borligi.",
              ],
            },
      {
              heading: "Nima uchun Ilmiyxizmat.uz",
              paragraphs: [
                "Biz 5000 dan ortiq ilmiy ishni yakunlaganmiz va BMI bo'yicha eng katta tajribaga egamiz.",
              ],
              list: [
                "Har bir yo'nalish bo'yicha mutaxassis mualliflar.",
                "Bosqichma-bosqich topshirish va bo'lib to'lash imkoniyati.",
                "Antiplagiat hisoboti har bir ish bilan birga.",
                "Himoyagacha bepul tuzatishlar.",
                "Taqdimot va himoya nutqi xizmat tarkibida.",
                "To'liq maxfiylik - buyurtma ma'lumotlari uchinchi shaxsga berilmaydi.",
              ],
            },
    ],
    faq: [
      {
        question: "BMI yozish qancha vaqt oladi?",
        answer: "O'rtacha 1-3 hafta. Aniq muddat yo'nalish, ish hajmi va amaliy qism murakkabligiga bog'liq. Sizda tayyor material bo'lsa, muddat qisqaradi.",
      },
      {
        question: "BMI narxi qancha?",
        answer: "Narx 800 000 so'mdan boshlanadi. Yakuniy summa yo'nalish, hajm, amaliy qism va muddatga qarab belgilanadi. Aniq narx uchun bepul konsultatsiya oling.",
      },
      {
        question: "BMI necha bet bo'lishi kerak?",
        answer: "Odatda 40-60 bet, ilovalar bundan tashqari. Aniq talab muassasangiz va kafedrangiz uslubiy ko'rsatmalarida belgilanadi.",
      },
      {
        question: "Antiplagiat foizi qanday bo'ladi?",
        answer: "Ish to'liq original yoziladi va topshirishdan oldin antiplagiat tizimida tekshiriladi. Odatda talab qilinadigan 70% dan yuqori ko'rsatkich ta'minlanadi, hisobot esa ish bilan birga topshiriladi.",
      },
      {
        question: "Ishni bosqichma-bosqich olsam bo'ladimi?",
        answer: "Ha, biz aynan shunday ishlaymiz. Har bob alohida topshiriladi, siz uni ko'rib chiqasiz va ilmiy rahbaringizga ko'rsatasiz. To'lov ham shu bosqichlarga bo'linadi.",
      },
      {
        question: "Himoyaga tayyorgarlik ham kiradimi?",
        answer: "Ha. Taqdimot slaydlari, 7-10 daqiqalik himoya nutqi va komissiya beradigan ehtimoliy savollarga javoblar tayyorlab beriladi.",
      },
      {
        question: "Rahbarim tuzatish so'rasa nima bo'ladi?",
        answer: "Tuzatishlar himoyagacha bepul kiritiladi. Ilmiy rahbar izohlari bo'yicha ishni qayta ko'rib chiqamiz.",
      },
      {
        question: "Mavzuni o'zim tanlashim kerakmi?",
        answer: "Shart emas. Mavzu allaqachon tasdiqlangan bo'lsa, shu bo'yicha ishlaymiz. Tanlanmagan bo'lsa, yo'nalishingiz va kafedra talablariga mos bir nechta variant taklif qilamiz.",
      },
    ],
    pricing: [
      {
        type: "Bitiruv malakaviy ishi (BMI)",
        volume: "40-60 bet",
        duration: "1-3 hafta",
        price: "800 000 so'mdan"
      }
    ],
    relatedPosts: [
      "bmi-nima-bitiruv-malakaviy-ishi-haqida-tolik-malumot",
      "bitiruv-malakaviy-ishi-bmi-yozish-sirlari",
      "bmi-namunasi-tuzilma-va-mundarija",
      "bitiruv-malakaviy-ishi-nizomi"
    ]
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
    metaTitle: "Kurs ishi yozish xizmati – 300 000 so'mdan, 2-5 kunda | Ilmiyxizmat.uz",
    metaDescription: "Kurs ishi yozish xizmati 300 000 so'mdan: 25-35 bet, 2-5 kunda, GOST standartida, jadval va grafiklar bilan. Barcha fan yo'nalishlari, bepul konsultatsiya.",
    pricing: [
      {
        type: "Kurs ishi",
        volume: "25-35 bet",
        duration: "2-5 kun",
        price: "300 000 so'mdan"
      }
    ],
    faq: [
      {
        question: "Kurs ishi yozish narxi qancha?",
        answer: "Narx 300 000 so'mdan boshlanadi. Yakuniy summa fan, hajm, amaliy qism (hisob-kitob, tahlil) va muddatga bog'liq."
      },
      {
        question: "Kurs ishi qancha vaqtda tayyor bo'ladi?",
        answer: "Odatda 2-5 kun. Hisob-kitob yoki tadqiqot qismi katta bo'lsa, muddat biroz uzayishi mumkin - bu buyurtma paytida kelishiladi."
      },
      {
        question: "Kurs ishi necha bet bo'ladi?",
        answer: "Odatda 25-35 bet, ikki bobdan iborat va kamida 15 ta manbaga tayanadi. Aniq hajm kafedrangiz uslubiy ko'rsatmasida belgilanadi."
      },
      {
        question: "Kurs ishi GOST bo'yicha rasmiylashtiriladimi?",
        answer: "Ha. Titul varag'i, mundarija, havolalar va adabiyotlar ro'yxati GOST standartida rasmiylashtiriladi. Kafedrangizning o'z talablari bo'lsa, ularni yuboring."
      },
      {
        question: "Jadval va grafiklar ham qilinadimi?",
        answer: "Ha, jadval, grafik va diagrammalar xizmat tarkibiga kiradi."
      },
      {
        question: "O'qituvchi tuzatish so'rasa nima bo'ladi?",
        answer: "O'qituvchi izohlari bo'yicha tuzatishlar bepul kiritiladi."
      }
    ],
    relatedPosts: [
      "gost-nima-ilmiy-ishlarda-gost-standarti",
      "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun",
      "antiplagiat-dasturidan-qanday-otish-mumkin"
    ]
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
    metaTitle: "Magistrlik dissertatsiyasi yozish – narx 2026 va talablar | Ilmiyxizmat.uz",
    metaDescription: "Magistrlik dissertatsiyasi yozish 2 000 000 so'mdan: ilmiy yangilik, metodologiya, empirik tadqiqot, 80-100 bet, antiplagiat 80%+ va maqola nashriga yordam.",
    pricing: [
      {
        type: "Magistrlik dissertatsiyasi",
        volume: "80-100 bet",
        duration: "2-4 hafta",
        price: "2 000 000 so'mdan"
      },
      {
        type: "Dissertatsiya mavzusida maqola (OAK jurnali)",
        volume: "6-15 bet",
        duration: "1-4 hafta",
        price: "350 000 so'mdan",
        link: "/xizmatlar/oak-jurnalga-chiqarish"
      }
    ],
    faq: [
      {
        question: "Magistrlik dissertatsiyasi yozish narxi qancha?",
        answer: "Narx 2 000 000 so'mdan boshlanadi. Yakuniy summa yo'nalish, empirik tadqiqot hajmi va muddatga qarab konsultatsiyada aniqlanadi."
      },
      {
        question: "Dissertatsiya qancha vaqtda yoziladi?",
        answer: "Odatda 2-4 hafta. Ish boblar bo'yicha bosqichma-bosqich topshiriladi, shuning uchun har bobni ilmiy rahbaringizga o'z vaqtida ko'rsata olasiz."
      },
      {
        question: "Magistrlik dissertatsiyasiga qanday talablar qo'yiladi?",
        answer: "Odatda 80-100 bet, uch bob va ilovalar, kamida 50 ta manba, 80% dan yuqori originallik hamda mavzu bo'yicha kamida ikkita ilmiy maqola talab qilinadi. Aniq talablar OTMingiz nizomida belgilanadi."
      },
      {
        question: "Ilmiy maqolalar nashriga ham yordam berasizlarmi?",
        answer: "Ha. Dissertatsiya mavzusida maqola tayyorlaymiz va OAK ro'yxatidagi jurnal yoki konferensiyada nashr qilishga yordam beramiz."
      },
      {
        question: "Empirik tadqiqot qismi ham bajariladimi?",
        answer: "Ha. Metodologiya, so'rovnoma yoki tajriba natijalarini tahlil qilish va xulosalarni asoslash xizmat tarkibiga kiradi."
      },
      {
        question: "Ilmiy rahbar izohlari bo'yicha tuzatish kiritiladimi?",
        answer: "Ha. Har bob topshirilgach, ilmiy rahbar izohlari bo'yicha tuzatishlar bepul kiritiladi."
      }
    ],
    relatedPosts: [
      "magistrlik-dissertatsiyasi-himoyasiga-tayyorgarlik",
      "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
      "antiplagiat-dasturidan-qanday-otish-mumkin",
      "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun"
    ]
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
    metaTitle: "PhD va DSc dissertatsiyasi bo'yicha yordam – maqola, avtoreferat | Ilmiyxizmat.uz",
    metaDescription: "Doktorlik (PhD, DSc) dissertatsiyasi bo'yicha ilmiy maslahat 5 000 000 so'mdan: mavzu tanlash, tadqiqot rejasi, OAK va Scopus maqolalari, avtoreferat tayyorlash.",
    pricing: [
      {
        type: "PhD / DSc dissertatsiyasi bo'yicha yordam",
        volume: "PhD: 120-150 bet, DSc: 200+ bet",
        duration: "2-9 oy",
        price: "5 000 000 so'mdan"
      },
      {
        type: "Dissertatsiya mavzusida maqola (OAK jurnali)",
        volume: "6-15 bet",
        duration: "1-4 hafta",
        price: "350 000 so'mdan",
        link: "/xizmatlar/oak-jurnalga-chiqarish"
      }
    ],
    faq: [
      {
        question: "Doktorlik dissertatsiyasi bo'yicha qanday yordam berasizlar?",
        answer: "Mavzu tanlash, tadqiqot rejasi, ilmiy maqolalar tayyorlash va avtoreferat yozish bo'yicha ilmiy maslahat va yordam beramiz."
      },
      {
        question: "Xizmat narxi qancha?",
        answer: "Narx 5 000 000 so'mdan boshlanadi. Yakuniy summa daraja (PhD yoki DSc), yo'nalish va kerakli yordam hajmiga qarab kelishiladi."
      },
      {
        question: "Qancha vaqt oladi?",
        answer: "Ish hajmi va bosqichiga qarab 2 oydan 9 oygacha. Ish bosqichlarga bo'linadi va har bosqich alohida kelishiladi."
      },
      {
        question: "PhD va DSc dissertatsiyasiga qanday talablar qo'yiladi?",
        answer: "Odatda PhD 120-150 bet, DSc 200 betdan ortiq bo'ladi. Originallik 90% dan yuqori bo'lishi, mavzu bo'yicha kamida beshta ilmiy maqola chop etilgan bo'lishi va avtoreferat tayyorlanishi talab qilinadi."
      },
      {
        question: "Scopus va OAK jurnallarida maqola chiqarishga yordam bormi?",
        answer: "Ha. Maqolani tayyorlash, jurnal talablariga moslashtirish va nashr jarayonida yordam beramiz."
      }
    ],
    relatedPosts: [
      "scopus-va-web-of-science-ilmiy-maqola-nashr",
      "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
      "ozbekistonda-ilmiy-maqola-nashr-qilish-narxlari-2026",
      "antiplagiat-dasturidan-qanday-otish-mumkin"
    ]
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
    price: "100 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "Ilmiy maqola yozish xizmati – narxlar 2026, OAK va Scopus jurnallari | Ilmiyxizmat.uz",
    metaDescription: "Ilmiy maqola yozish 100 000 so'mdan, 2-5 kunda: OAK, Scopus va Web of Science talablari, 3 tilda annotatsiya, kalit so'zlar, bibliografiya va nashrga yordam.",
    pricing: [
      {
        type: "Ilmiy maqola yozish",
        volume: "6-15 bet",
        duration: "2-5 kun",
        price: "100 000 so'mdan"
      },
      {
        type: "Maqola + OAK jurnalida nashr",
        volume: "6-15 bet",
        duration: "1-4 hafta",
        price: "350 000 so'mdan",
        link: "/xizmatlar/oak-jurnalga-chiqarish"
      },
      {
        type: "Maqola + konferensiyada nashr (sertifikat)",
        volume: "-",
        duration: "2-10 kun",
        price: "100 000 so'mdan",
        link: "/xizmatlar/konferensiyaga-chiqarish"
      }
    ],
    faq: [
      {
        question: "Ilmiy maqola yozish narxi qancha?",
        answer: "Maqola yozish 100 000 so'mdan boshlanadi. OAK jurnalida nashr bilan birga 350 000 so'mdan, konferensiyada sertifikatli nashr bilan 100 000 so'mdan. Aniq narx hajm, til va jurnal talablariga bog'liq."
      },
      {
        question: "Maqola qancha vaqtda tayyor bo'ladi?",
        answer: "Maqola matni odatda 2-5 kunda tayyorlanadi. OAK jurnalida nashr 1-4 hafta, konferensiyada nashr 2-10 kun oladi."
      },
      {
        question: "Scopus va Web of Science uchun ham maqola yozasizlarmi?",
        answer: "Ha. Maqola tanlangan jurnal talablari bo'yicha tuziladi va rasmiylashtiriladi - xalqaro jurnallar ko'pincha APA 7 uslubini talab qiladi."
      },
      {
        question: "Annotatsiya qaysi tillarda yoziladi?",
        answer: "Annotatsiya va kalit so'zlar o'zbek, rus va ingliz tillarida tayyorlanadi - bu OAK jurnallarining odatiy talabi."
      },
      {
        question: "Maqola necha bet bo'ladi?",
        answer: "Odatda 6-15 bet. Aniq hajm jurnal yoki konferensiya talablarida belgilanadi."
      },
      {
        question: "Maqolani jurnalda chiqarib ham berasizlarmi?",
        answer: "Ha. OAK ro'yxatidagi jurnalga yoki xalqaro va respublika konferensiyasiga chiqarishda to'liq yordam beramiz - jurnal tanlashdan nashrgacha."
      }
    ],
    relatedPosts: [
      "ozbekistonda-ilmiy-maqola-nashr-qilish-narxlari-2026",
      "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
      "scopus-va-web-of-science-ilmiy-maqola-nashr",
      "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun"
    ]
  },
  {
    id: 7,
    slug: "monografiya-tayyorlash",
    title: "Monografiya yozish va nashrga tayyorlash",
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
    popular: true,
    metaTitle: "Monografiya yozish va nashr qilish xizmati",
    metaDescription: "Monografiya yozish, tayyorlash va nashr qilish xizmati 3 000 000 so'mdan. ISBN, UDK, ilmiy tahrir, taqriz va bosmaxona - to'liq hamrohlik.",
    content: [
      {
              heading: "Monografiya yozish va nashrga tayyorlash",
              paragraphs: [
                "Monografiya - bitta ilmiy muammo yoki tor mavzu bo'yicha olib borilgan chuqur tadqiqot natijalari jamlangan yirik ilmiy nashr. U muallifning mustaqil ilmiy qarashlari, o'z tadqiqot natijalari va ularning nazariy hamda amaliy asoslanishini o'zida aks ettiradi.",
                "O'zbekistonda monografiya PhD va DSc dissertatsiyalarini himoya qilish, professor hamda dotsent ilmiy unvonlariga talabgor bo'lish va ilmiy loyihalarda ishtirok etish uchun muhim hujjat hisoblanadi. Aynan shu sababli uning sifati va rasmiy rasmiylashtirilishiga alohida talab qo'yiladi.",
                "Ilmiyxizmat.uz monografiya yozishning barcha bosqichlarida hamrohlik qiladi: mavzuni aniqlashtirishdan tortib, ISBN olish va bosmaxonadan tayyor kitobni qo'lingizga topshirishgacha.",
              ],
            },
      {
              heading: "Monografiya tuzilmasi",
              paragraphs: [
                "Ilmiy nashr tuzilmasi qat'iy mantiqqa bo'ysunadi. Standart monografiya quyidagi qismlardan iborat bo'ladi:",
              ],
              list: [
                "Titul varag'i, UDK va BBK indekslari, mualliflik ma'lumotlari.",
                "Taqrizchilar va mas'ul muharrir haqidagi ma'lumot.",
                "So'z boshi yoki kirish - muammoning dolzarbligi va tadqiqot maqsadi.",
                "Nazariy bob - masalaning o'rganilganlik darajasi va ilmiy adabiyotlar tahlili.",
                "Metodologik bob - tadqiqot usullari va yondashuvlari.",
                "Empirik yoki tahliliy boblar - muallifning o'z natijalari.",
                "Xulosa va amaliy tavsiyalar.",
                "Foydalanilgan adabiyotlar ro'yxati va ilovalar.",
                "Uch tilda annotatsiya - o'zbek, rus va ingliz tillarida.",
              ],
            },
      {
              heading: "Monografiya yozish bosqichlari",
              paragraphs: [
                "Ish rejasi oldindan kelishiladi va har bir bosqich alohida topshiriladi.",
              ],
              list: [
                "Mavzuni aniqlashtirish va ilmiy yangilikni shakllantirish.",
                "Batafsil prospekt - boblar va paragraflar rejasi tuzish.",
                "Manbalar bazasini yig'ish: xalqaro va mahalliy ilmiy adabiyotlar, statistik ma'lumotlar.",
                "Boblarni bosqichma-bosqich yozish va siz bilan kelishib borish.",
                "Ilmiy tahrir - terminologiya, dalillar izchilligi va uslub bo'yicha.",
                "Adabiy tahrir va korrektura.",
                "Antiplagiat tekshiruvi va hisobot tayyorlash.",
                "Taqriz va mas'ul muharrir xulosasini olish.",
                "Nashriyot maketi, muqova dizayni, ISBN rasmiylashtirish va bosmaxona.",
              ],
            },
      {
              heading: "Monografiyaga qo'yiladigan talablar",
              paragraphs: [
                "Nashr rasmiy hisobga olinishi uchun quyidagi mezonlarga javob berishi kerak:",
              ],
              list: [
                "Hajm: odatda 150-300 bet yoki kamida 8-10 bosma taboq.",
                "Ilmiy yangilik - ilgari nashr etilmagan mustaqil natijalar.",
                "Kamida ikkita ilmiy taqriz, ko'p hollarda fan doktori darajasidagi mutaxassislardan.",
                "Kafedra va ilmiy kengash bayonnomasi bilan tavsiya etilishi.",
                "ISBN raqami, UDK va BBK indekslari.",
                "Yuqori originallik ko'rsatkichi - antiplagiat hisoboti bilan.",
                "Uch tilda annotatsiya va kalit so'zlar.",
                "Belgilangan nusxada bosib chiqarilishi va majburiy nusxalar topshirilishi.",
              ],
            },
      {
              heading: "ISBN, UDK va nashr rasmiylashtirish",
              paragraphs: [
                "Ko'p mualliflar uchun eng murakkab qism aynan qo'lyozmani rasmiy nashrga aylantirish bo'ladi.",
                "Biz nashriyot tanlash, shartnoma rasmiylashtirish, UDK va BBK indekslarini belgilash, ISBN raqamini olish, kitob maketi va muqova dizaynini tayyorlash hamda bosmaxona bilan ishlashni to'liq zimmamizga olamiz.",
                "Xohlasangiz, monografiyani elektron formatda ham chiqarish va raqamli kutubxonalarga joylashtirish bo'yicha yordam beramiz - bu iqtiboslar sonini oshirishga xizmat qiladi.",
              ],
            },
      {
              heading: "Monografiya narxi nimaga bog'liq",
              paragraphs: [
                "Xizmat narxi 3 000 000 so'mdan boshlanadi. Yakuniy summa quyidagilarga qarab hisoblanadi:",
              ],
              list: [
                "Monografiya hajmi - bet va bosma taboq soni.",
                "Mavzuning murakkabligi hamda manbalar bilan ishlash ko'lami.",
                "Empirik tadqiqot mavjudligi - so'rovnoma, statistik tahlil, eksperiment.",
                "Grafik material: jadval, diagramma, xarita va chizmalar.",
                "Tayyorlash muddati.",
                "Nashr, ISBN va bosmaxona xizmatlari kiritiladimi.",
                "Muallifda tayyor materiallar - maqolalar, dissertatsiya boblari - mavjudligi.",
              ],
            },
      {
              heading: "Nima uchun Ilmiyxizmat.uz",
              paragraphs: [
                "Monografiya - muallifning ilmiy obro'sini shakllantiradigan nashr, shuning uchun uni tajribali jamoaga ishonib topshirish muhim.",
              ],
              list: [
                "Ilmiy darajaga ega mualliflar va sohaviy muharrirlar.",
                "Bosqichma-bosqich topshirish va bo'lib to'lash imkoniyati.",
                "Antiplagiat hisoboti har bir ish bilan birga.",
                "Nashr va ISBN gacha to'liq hamrohlik.",
                "Nashrdan oldin bepul tuzatishlar.",
                "To'liq maxfiylik kafolati.",
              ],
            },
    ],
    faq: [
      {
        question: "Monografiya yozish qancha vaqt oladi?",
        answer: "O'rtacha 1-3 hafta. Aniq muddat monografiya hajmi va sizda tayyor material - dissertatsiya yoki nashr etilgan maqolalar - borligiga bog'liq. Nashr va ISBN rasmiylashtirish esa alohida vaqt oladi.",
      },
      {
        question: "Monografiya narxi qancha?",
        answer: "Narx 3 000 000 so'mdan boshlanadi. Yakuniy summa hajm, mavzu murakkabligi, empirik tadqiqot va nashr xizmatlari kiritilganiga bog'liq.",
      },
      {
        question: "Monografiya necha bet bo'lishi kerak?",
        answer: "Odatda 150-300 bet oralig'ida, ya'ni kamida 8-10 bosma taboq. Aniq talab muassasangiz va ilmiy kengash qoidalariga qarab farq qilishi mumkin.",
      },
      {
        question: "ISBN raqamini olishda yordam berasizmi?",
        answer: "Ha. Nashriyot bilan shartnoma, UDK va BBK indekslari hamda ISBN raqamini rasmiylashtirish to'liq xizmat tarkibiga kiradi.",
      },
      {
        question: "Dissertatsiyam asosida monografiya tayyorlash mumkinmi?",
        answer: "Ha, bu eng keng tarqalgan holat. Dissertatsiya matni monografiya janriga moslashtiriladi: tuzilma qayta quriladi, uslub o'zgartiriladi va material kengaytiriladi.",
      },
      {
        question: "Nechta taqriz kerak bo'ladi?",
        answer: "Odatda kamida ikkita ilmiy taqriz talab qilinadi. Biz taqrizchilarni topish va xulosalarni rasmiylashtirishda yordam beramiz.",
      },
      {
        question: "Mualliflik huquqi kimda qoladi?",
        answer: "Mualliflik to'liq sizda qoladi - kitob muqovasida va ISBN ma'lumotlarida sizning ismingiz ko'rsatiladi.",
      },
    ],
    pricing: [
      {
        type: "Monografiya yozish va nashrga tayyorlash",
        volume: "150-300 bet",
        duration: "1-3 hafta",
        price: "3 000 000 so'mdan"
      }
    ],
    relatedPosts: [
      "monografiya-nima-va-qanday-yoziladi",
      "monografiya-namunasi-tuzilma-va-mundarija",
      "gost-nima-ilmiy-ishlarda-gost-standarti"
    ]
  },
  {
    id: 8,
    slug: "oquv-qollanma-tayyorlash",
    title: "O'quv qo'llanma yozish va tayyorlash xizmati",
    shortTitle: "O'quv qo'llanma",
    description: "O'quv qo'llanmangizni tuzilmasidan nashrgacha professional darajada tayyorlab beramiz - barcha fan yo'nalishlari bo'yicha.",
    icon: "📗",
    features: [
      "O'quv dasturiga to'liq moslik",
      "Retsenziya olishda yordam",
      "UDK, BBK va ISBN rasmiylashtirish",
      "Nashrga tayyorlash"
    ],
    price: "2 500 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "O'quv qo'llanma yozish va tayyorlash xizmati",
    metaDescription: "O'quv qo'llanma yozish va tayyorlash xizmati 2 500 000 so'mdan. Tuzilma, matn, retsenziya, UDK va ISBN rasmiylashtirish hamda nashr - to'liq hamrohlik.",
    content: [
      {
              heading: "O'quv qo'llanma yozish xizmati",
              paragraphs: [
                "O'quv qo'llanma - oliy va o'rta maxsus ta'lim muassasalarida muayyan fan yoki modul bo'yicha o'quv dasturini to'liq qamrab oladigan asosiy o'quv nashri. U darslikdan farqli o'laroq ko'proq amaliy yo'naltirilgan bo'lib, nazariy materialni mustahkamlashga xizmat qiladi.",
                "Ilmiyxizmat.uz jamoasi o'quv qo'llanma tayyorlashning barcha bosqichlarida yordam beradi: mavzu va tuzilmani shakllantirishdan tortib, matnni yozish, ilmiy va adabiy tahrir, rasmiylashtirish, retsenziya olish hamda nashrga tayyorlashgacha. Har bir qo'llanma tegishli fan yo'nalishi bo'yicha mutaxassis muallif tomonidan tayyorlanadi.",
                "Xizmat barcha yo'nalishlar uchun ochiq: pedagogika, iqtisodiyot, filologiya, aniq va tabiiy fanlar, texnika, tibbiyot, huquq hamda ijtimoiy fanlar.",
              ],
            },
      {
              heading: "O'quv qo'llanma tayyorlash bosqichlari",
              paragraphs: [
                "Ish shaffof va bosqichma-bosqich olib boriladi - har bir bosqich yakunida siz natijani ko'rib, izoh bildirasiz.",
              ],
              list: [
                "Bepul konsultatsiya: fan nomi, o'quv dasturi, soatlar hajmi va maqsadli auditoriya aniqlanadi.",
                "Tuzilma (prospekt) tayyorlash: boblar, mavzular, amaliy mashg'ulotlar va nazorat savollari rejasi kelishiladi.",
                "Adabiyotlar bazasini yig'ish: zamonaviy manbalar, xalqaro va mahalliy nashrlar tanlanadi.",
                "Asosiy matnni yozish: har bir bob alohida topshiriladi, siz jarayonni kuzatib borasiz.",
                "Amaliy qism: misollar, masalalar, keyslar, laboratoriya ishlari va nazorat savollari qo'shiladi.",
                "Ilmiy va adabiy tahrir, korrektura hamda antiplagiat tekshiruvi.",
                "Rasmiylashtirish: mundarija, ilovalar, jadval va rasmlar, foydalanilgan adabiyotlar ro'yxati.",
                "Retsenziya olish va nashrga tayyorlash: UDK, BBK, ISBN rasmiylashtirish.",
              ],
            },
      {
              heading: "O'quv qo'llanmaga qo'yiladigan talablar",
              paragraphs: [
                "O'quv nashrlari muayyan standartlarga javob berishi kerak. Quyidagilar amaliyotda eng ko'p talab qilinadigan mezonlar:",
              ],
              list: [
                "Hajm: odatda 100 bet va undan yuqori, fan soatlariga mutanosib bo'lishi lozim.",
                "Mazmun o'quv rejasi va fan dasturiga to'liq mos kelishi shart.",
                "Kamida ikkita retsenziya - biri tashqi, biri ichki taqrizchidan.",
                "Kafedra va ilmiy-uslubiy kengash bayonnomasi.",
                "UDK va BBK indekslari, ISBN raqami.",
                "Original matn ulushi yuqori bo'lishi - antiplagiat hisoboti bilan tasdiqlanadi.",
                "Har bob oxirida nazorat savollari, glossariy va tavsiya etilgan adabiyotlar.",
              ],
            },
      {
              heading: "O'quv qo'llanma va darslik o'rtasidagi farq",
              paragraphs: [
                "Ko'p mualliflar bu ikki nashrni chalkashtiradi, holbuki ular maqomi va tayyorlash tartibi bilan jiddiy farq qiladi.",
                "Darslik - fan dasturini to'liq qamrab oladigan asosiy nashr bo'lib, odatda vazirlik yoki muvofiqlashtiruvchi kengash grifini talab qiladi va tayyorlash muddati uzoqroq.",
                "O'quv qo'llanma esa darslikni to'ldiradi, ayrim mavzularni chuqurlashtiradi va tasdiqlash tartibi nisbatan soddaroq. Shu sababli birinchi nashrni boshlayotgan mualliflarga aynan o'quv qo'llanmadan boshlash tavsiya etiladi.",
              ],
            },
      {
              heading: "Nashr, ISBN va rasmiylashtirish",
              paragraphs: [
                "Tayyor qo'lyozmani nashrga chiqarish alohida bosqich bo'lib, biz uni ham to'liq zimmamizga olamiz.",
          "Oliy ta'lim tashkilotlari talabalari uchun tayyorlangan o'quv adabiyoti nashrdan oldin ekspertizadan o'tkaziladi. Ariza my.gov.uz portali orqali elektron shaklda topshiriladi, xizmatni Oliy ta'lim, fan va innovatsiyalar vazirligi ko'rsatadi va u 30 ish kuni davom etadi. Biz qo'lyozmani shu talablarga moslashtirib beramiz.",
                "Nashriyot tanlash, shartnoma rasmiylashtirish, ISBN va UDK/BBK indekslarini olish, maket va muqova dizayni, bosmaxona bilan ishlash - bularning barchasi xizmat tarkibiga kiritilishi mumkin.",
                "Natijada siz qo'lingizga rasmiy ro'yxatdan o'tgan, attestatsiya va lavozimga tanlov uchun qabul qilinadigan nashrni olasiz.",
              ],
            },
      {
              heading: "O'quv qo'llanma narxi nimaga bog'liq",
              paragraphs: [
                "Xizmat narxi 2 500 000 so'mdan boshlanadi. Yakuniy summa quyidagi omillarga qarab shakllanadi:",
              ],
              list: [
                "Qo'llanma hajmi - bet soni va boblar miqdori.",
                "Fan murakkabligi va maxsus terminologiya talabi.",
                "Amaliy qism hajmi: masalalar, keyslar, laboratoriya ishlari.",
                "Grafik material: jadval, diagramma, chizma va rasmlar soni.",
                "Tayyorlash muddati - shoshilinch buyurtmalar qimmatroq.",
                "Nashr va ISBN xizmatlari kiritiladimi yoki yo'q.",
                "Tayyor materialingiz mavjudligi - qisman tayyor qo'lyozma narxni sezilarli kamaytiradi.",
              ],
            },
      {
              heading: "Nima uchun Ilmiyxizmat.uz",
              paragraphs: [
                "Biz 5000 dan ortiq ilmiy ishni yakunlaganmiz va o'quv nashrlari bo'yicha barqaror tajribaga egamiz.",
              ],
              list: [
                "Har bir yo'nalish bo'yicha ilmiy darajaga ega mutaxassis mualliflar.",
                "Bosqichma-bosqich topshirish - to'lovni ham bo'lib amalga oshirish mumkin.",
                "Antiplagiat hisoboti har bir ishga ilova qilinadi.",
                "Nashrgacha bepul tuzatishlar.",
                "To'liq maxfiylik - buyurtma ma'lumotlari uchinchi shaxsga berilmaydi.",
              ],
            },
    ],
    faq: [
      {
        question: "O'quv qo'llanma tayyorlash qancha vaqt oladi?",
        answer: "O'rtacha 1-3 hafta. Hajmi katta bo'lsa yoki qo'shimcha amaliy qism talab qilinsa, muddat uzayishi mumkin. Aniq muddat birinchi konsultatsiyada kelishiladi. Ekspertiza va nashr bosqichlari bunga kirmaydi.",
      },
      {
        question: "O'quv qo'llanma narxi qancha?",
        answer: "Narx 2 500 000 so'mdan boshlanadi va qo'llanma hajmi, fan murakkabligi, amaliy qism va nashr xizmatlari kiritilganiga qarab belgilanadi. Aniq narx uchun bepul konsultatsiya oling.",
      },
      {
        question: "Nechta retsenziya kerak bo'ladi?",
        answer: "Odatda kamida ikkita taqriz talab qilinadi - biri o'z muassasangizdan, ikkinchisi tashqi mutaxassisdan. Biz retsenziya olish jarayonida ham yordam beramiz.",
      },
      {
        question: "ISBN raqamini o'zingiz rasmiylashtirasizmi?",
        answer: "Ha. Nashriyot bilan shartnoma, UDK va BBK indekslari hamda ISBN raqamini olish xizmat tarkibiga kiritilishi mumkin.",
      },
      {
        question: "Qo'llanma mualliflik huquqi kimda qoladi?",
        answer: "Mualliflik to'liq sizda qoladi. Biz faqat tayyorlash va rasmiylashtirish bo'yicha texnik hamda ilmiy yordam ko'rsatamiz.",
      },
      {
        question: "Antiplagiat foizi qanday bo'ladi?",
        answer: "Matn to'liq original yoziladi va topshirishdan oldin antiplagiat tizimida tekshiriladi. Hisobot buyurtma bilan birga topshiriladi.",
      },
      {
        question: "To'lovni bo'lib to'lash mumkinmi?",
        answer: "Ha. To'lov bosqichlarga bo'linadi: har bir bob yoki bosqich topshirilganda tegishli qismi to'lanadi.",
      },
    ],
    pricing: [
      {
        type: "O'quv qo'llanma yozish va tayyorlash",
        volume: "100+ bet",
        duration: "1-3 hafta",
        price: "2 500 000 so'mdan"
      }
    ],
    relatedPosts: [
      "oquv-qollanma-qanday-yoziladi-talablar-va-tuzilma",
      "oquv-qollanma-yozish-va-ekspertizadan-otkazish-mygov",
      "darslik-va-oquv-qollanma-orasidagi-farq"
    ]
  },
  {
    id: 16,
    slug: "darslik-yozish",
    title: "Darslik yozish va nashrga tayyorlash",
    shortTitle: "Darslik yozish",
    description: "Fan dasturini to'liq qamrab oladigan darslikni tayyorlaymiz: metodik apparat, retsenziya, grif hujjatlari va nashr.",
    icon: "📕",
    features: [
      "Ta'lim standartiga moslik",
      "Metodik apparat va testlar",
      "Grif hujjatlarida yordam",
      "ISBN va nashr"
    ],
    price: "2 500 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "Darslik yozish va nashrga tayyorlash xizmati",
    metaDescription: "Darslik yozish va tayyorlash xizmati 2 500 000 so'mdan. O'quv dasturiga moslik, metodik apparat, retsenziya, grif hujjatlari, ISBN va nashr.",
    content: [
      {
              heading: "Darslik yozish xizmati",
              paragraphs: [
                "Darslik - muayyan fan bo'yicha o'quv dasturini to'liq qamrab oladigan asosiy o'quv nashri. U ta'lim muassasasida fanni o'qitishning asosiy manbai hisoblanadi va shu sababli mazmuni, tuzilmasi hamda rasmiylashtirilishiga eng yuqori talablar qo'yiladi.",
                "Darslik yozish - uzoq va mas'uliyatli jarayon: o'quv dasturini tahlil qilish, materialni didaktik jihatdan to'g'ri taqsimlash, har bir bobni metodik apparat bilan ta'minlash va tegishli grif olish talab etiladi.",
                "Ilmiyxizmat.uz jamoasi darslik tayyorlashning har bir bosqichida hamrohlik qiladi - prospekt tuzishdan boshlab, matn yozish, metodik apparat ishlab chiqish, retsenziya olish, grif rasmiylashtirish va nashrgacha.",
              ],
            },
      {
              heading: "Darslik va o'quv qo'llanma o'rtasidagi farq",
              paragraphs: [
                "Bu ikki nashr bir-biriga o'xshab ko'rinsa-da, maqomi va tayyorlash tartibi jiddiy farq qiladi. Buyurtma berishdan oldin qaysi biri kerakligini aniq belgilab olish muhim.",
                "Darslik fan dasturini boshidan oxirigacha to'liq qamrab oladi, ta'lim standartiga qat'iy mos bo'lishi va vakolatli organ grifiga ega bo'lishi shart. Uning muallifi odatda tegishli soha bo'yicha katta o'qituvchilik tajribasiga ega mutaxassis bo'ladi.",
                "O'quv qo'llanma esa darslikni to'ldiradi, ayrim mavzularni chuqurlashtiradi yoki amaliy mashg'ulotlarga mo'ljallanadi. Uning tasdiqlash tartibi soddaroq va tayyorlash muddati qisqaroq.",
                "Agar sizga fanning butun dasturi uchun asosiy manba kerak bo'lsa - darslik; alohida modul yoki amaliy qism uchun nashr kerak bo'lsa - o'quv qo'llanma to'g'ri tanlov bo'ladi.",
              ],
            },
      {
              heading: "Darslik tuzilmasi va metodik apparati",
              paragraphs: [
                "Darslikni oddiy ilmiy matndan ajratib turadigan narsa - uning metodik apparati. Har bir bob talabaning mustaqil o'rganishiga xizmat qilishi kerak.",
              ],
              list: [
                "Titul varag'i, UDK va BBK indekslari, grif haqidagi yozuv.",
                "So'z boshi - darslikning maqsadi va undan foydalanish bo'yicha ko'rsatma.",
                "Boblar va mavzular - o'quv dasturi ketma-ketligiga qat'iy mos holda.",
                "Har bob boshida - o'rganish natijalari va tayanch tushunchalar.",
                "Nazariy material - misollar, sxemalar va jadvallar bilan.",
                "Amaliy qism - masalalar, keyslar, laboratoriya va mustaqil ish topshiriqlari.",
                "Har bob oxirida - nazorat savollari, test topshiriqlari va qisqa xulosa.",
                "Glossariy, foydalanilgan hamda tavsiya etiladigan adabiyotlar ro'yxati.",
                "Ilovalar: jadval, formulalar to'plami, normativ hujjatlar.",
              ],
            },
      {
              heading: "Darslik tayyorlash bosqichlari",
              paragraphs: [
                "Ish oldindan kelishilgan reja asosida, bosqichma-bosqich olib boriladi.",
              ],
              list: [
                "Bepul konsultatsiya: fan, ta'lim bosqichi, soatlar hajmi va maqsadli auditoriya aniqlanadi.",
                "O'quv dasturi va davlat ta'lim standartini tahlil qilish.",
                "Prospekt tuzish - boblar, mavzular va soatlar taqsimoti.",
                "Adabiyotlar bazasini shakllantirish: zamonaviy mahalliy va xalqaro manbalar.",
                "Boblarni yozish - har biri alohida topshiriladi va kelishiladi.",
                "Metodik apparat ishlab chiqish: savollar, testlar, topshiriqlar.",
                "Ilmiy va adabiy tahrir, korrektura, antiplagiat tekshiruvi.",
                "Retsenziya olish - tashqi va ichki taqrizchilardan.",
                "Kafedra va ilmiy-uslubiy kengash bayonnomalarini rasmiylashtirish.",
                "Grif olish uchun hujjatlar to'plamini tayyorlash.",
                "Nashriyot maketi, muqova dizayni, ISBN va bosmaxona.",
              ],
            },
      {
              heading: "Grif olish va tasdiqlash tartibi",
              paragraphs: [
                "Darslik uchun grif - uning rasmiy maqomini belgilaydigan asosiy element. Grifsiz nashr darslik emas, balki oddiy o'quv nashri sifatida qaraladi.",
                "Grif olish uchun odatda quyidagilar talab qilinadi: kafedra bayonnomasi, ilmiy-uslubiy kengash qarori, kamida ikkita mustaqil taqriz, o'quv dasturiga muvofiqlik haqidagi xulosa va tayyor qo'lyozma.",
                "Biz hujjatlar to'plamini to'g'ri shakllantirishda, taqrizchilar bilan ishlashda va qo'lyozmani talablarga moslashtirishda amaliy yordam beramiz. Bu jarayon ta'lim muassasasi va yo'nalishga qarab farq qilgani uchun har bir buyurtma alohida ko'rib chiqiladi.",
              ],
            },
      {
              heading: "Darslik narxi nimaga bog'liq",
              paragraphs: [
                "Xizmat narxi 2 500 000 so'mdan boshlanadi. Yakuniy summa quyidagi omillar bilan belgilanadi:",
              ],
              list: [
                "Darslik hajmi - bet soni, boblar va mavzular miqdori.",
                "Fan murakkabligi va maxsus terminologiya talabi.",
                "Metodik apparat hajmi: test, masala va topshiriqlar soni.",
                "Grafik material: chizma, sxema, jadval va diagrammalar.",
                "Grif olish uchun hujjatlar bilan ishlash kerakmi yoki yo'q.",
                "Nashr, ISBN va bosmaxona xizmatlari kiritiladimi.",
                "Tayyorlash muddati va sizda mavjud tayyor materiallar hajmi.",
              ],
            },
      {
              heading: "Nima uchun Ilmiyxizmat.uz",
              paragraphs: [
                "Darslik muallifning kasbiy obro'siga uzoq yillar xizmat qiladi - shuning uchun uni tajribali jamoaga topshirish maqsadga muvofiq.",
              ],
              list: [
                "Har bir yo'nalish bo'yicha ilmiy darajaga ega mualliflar va sohaviy muharrirlar.",
                "O'quv dasturi va ta'lim standartiga qat'iy moslik.",
                "Metodik apparat - test, keys va topshiriqlar - to'liq ishlab beriladi.",
                "Bosqichma-bosqich topshirish va bo'lib to'lash imkoniyati.",
                "Antiplagiat hisoboti har bir ish bilan birga.",
                "Grif va nashr bosqichlarida to'liq hamrohlik.",
                "To'liq maxfiylik kafolati.",
              ],
            },
    ],
    faq: [
      {
        question: "Darslik yozish qancha vaqt oladi?",
        answer: "Qo'lyozmani tayyorlash o'rtacha 1-3 hafta. Sizda ma'ruza matnlari yoki tayyor materiallar bo'lsa, muddat yanada qisqaradi. Grif olish va nashr bosqichlari alohida vaqt talab qiladi.",
      },
      {
        question: "Darslik narxi qancha?",
        answer: "Narx 2 500 000 so'mdan boshlanadi va hajm, fan murakkabligi, metodik apparat hamda grif va nashr xizmatlari kiritilganiga qarab belgilanadi. Aniq narx bepul konsultatsiyada aytiladi.",
      },
      {
        question: "Darslik va o'quv qo'llanma orasidagi farq nima?",
        answer: "Darslik fan dasturini to'liq qamrab oladi va vakolatli organ grifini talab qiladi. O'quv qo'llanma esa darslikni to'ldiradi, ayrim mavzularni chuqurlashtiradi va tasdiqlash tartibi soddaroq.",
      },
      {
        question: "Grif olishda yordam berasizmi?",
        answer: "Ha. Hujjatlar to'plamini shakllantirish, taqrizchilar bilan ishlash va qo'lyozmani talablarga moslashtirishda amaliy yordam beramiz. Grifni berish qarori esa vakolatli organ ixtiyorida bo'ladi.",
      },
      {
        question: "Darslik necha bet bo'lishi kerak?",
        answer: "Hajm fan soatlariga bog'liq. Amaliyotda ko'p darsliklar 200-400 bet oralig'ida bo'ladi, lekin aniq talab o'quv dasturi va muassasa qoidalari bilan belgilanadi.",
      },
      {
        question: "Hammuallif sifatida ishlash mumkinmi?",
        answer: "Ha. Ko'p mualliflar o'z ma'ruza matnlarini asos qilib beradi, biz esa ularni darslik janriga moslashtiramiz, kengaytiramiz va metodik apparat bilan to'ldiramiz.",
      },
      {
        question: "Mualliflik huquqi kimda qoladi?",
        answer: "Mualliflik to'liq sizda qoladi. Kitob muqovasida, titul varag'ida va ISBN ma'lumotlarida sizning ismingiz ko'rsatiladi.",
      },
    ],
    pricing: [
      {
        type: "Darslik yozish va nashrga tayyorlash",
        volume: "odatda 200-400 bet",
        duration: "1-3 hafta (qo'lyozma)",
        price: "2 500 000 so'mdan"
      }
    ],
    relatedPosts: [
      "darslik-va-oquv-qollanma-orasidagi-farq",
      "oquv-qollanma-qanday-yoziladi-talablar-va-tuzilma",
      "oquv-qollanma-yozish-va-ekspertizadan-otkazish-mygov"
    ]
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
    metaTitle: "Ilmiy ishni tahrirlash va korrektura – 100 000 so'mdan | Ilmiyxizmat.uz",
    metaDescription: "Dissertatsiya, BMI, maqola va monografiyani grammatik va uslubiy tahrirdan o'tkazamiz, formatlaymiz va manbalarni tekshiramiz. Narx 100 000 so'mdan.",
    pricing: [
      {
        type: "Tahrir va korrektura",
        volume: "hajmga qarab",
        duration: "kelishiladi",
        price: "100 000 so'mdan"
      }
    ],
    faq: [
      {
        question: "Tahrir va korrektura nimalarni o'z ichiga oladi?",
        answer: "Grammatik va imlo tekshiruvi, uslubiy tahrir (ilmiy uslubga moslashtirish), formatlash hamda manbalar va havolalarni tekshirish."
      },
      {
        question: "Narx qanday hisoblanadi?",
        answer: "Narx 100 000 so'mdan boshlanadi va asosan ish hajmi hamda matnning holatiga bog'liq. Faylni yuborsangiz, aniq narxni aytamiz."
      },
      {
        question: "Qaysi ishlarni tahrirlaysizlar?",
        answer: "Kurs ishi, BMI, magistrlik va doktorlik dissertatsiyasi, ilmiy maqola, monografiya va o'quv qo'llanmalar."
      },
      {
        question: "Tahrirdan keyin ish formatlanadimi?",
        answer: "Ha, formatlash xizmat tarkibiga kiradi. Faqat formatlash kerak bo'lsa, GOST yoki APA 7 bo'yicha rasmiylashtirish xizmatimizdan foydalanishingiz mumkin."
      },
      {
        question: "O'zgarishlarni qanday ko'raman?",
        answer: "Tuzatishlar haqida buyurtma paytida kelishiladi: tayyor tahrirlangan faylni olasiz, kerak bo'lsa asosiy o'zgarishlar bo'yicha izoh beramiz."
      }
    ],
    relatedPosts: [
      "gost-nima-ilmiy-ishlarda-gost-standarti",
      "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun",
      "antiplagiat-dasturidan-qanday-otish-mumkin"
    ]
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
    metaTitle: "Antiplagiat tekshirish – to'liq hisobot bilan, 50 000 so'mdan | Ilmiyxizmat.uz",
    metaDescription: "Ishingizni antiplagiat tizimida tekshirib, originallik foizi, mos kelgan manbalar va tuzatish bo'yicha maslahat bilan to'liq hisobot beramiz. 50 000 so'mdan.",
    pricing: [
      {
        type: "Antiplagiat tekshiruvi (hisobot bilan)",
        volume: "hajmga qarab",
        duration: "kelishiladi",
        price: "50 000 so'mdan"
      }
    ],
    faq: [
      {
        question: "Hisobotda nimalar bo'ladi?",
        answer: "Originallik foizi, mos kelgan manbalar tafsiloti va originallikni oshirish bo'yicha maslahatlar."
      },
      {
        question: "Antiplagiat tekshiruvi narxi qancha?",
        answer: "50 000 so'mdan boshlanadi. Aniq narx ish hajmiga bog'liq."
      },
      {
        question: "Qancha originallik talab qilinadi?",
        answer: "Odatda kurs ishi uchun 60%+, BMI uchun 70%+, magistrlik dissertatsiyasi uchun 80%+, doktorlik dissertatsiyasi uchun 90%+. Aniq chegarani muassasangiz yoki jurnal belgilaydi."
      },
      {
        question: "Foiz past chiqsa nima qilaman?",
        answer: "Hisobotdagi mos kelgan qismlar bo'yicha tuzatish maslahatini beramiz. Matnni qayta ishlash kerak bo'lsa, tahrir xizmatimizdan foydalanishingiz mumkin."
      },
      {
        question: "Ishim maxfiy qoladimi?",
        answer: "Ha, yuborgan ishingiz uchinchi shaxslarga berilmaydi."
      }
    ],
    relatedPosts: [
      "antiplagiat-dasturidan-qanday-otish-mumkin",
      "bitiruv-malakaviy-ishi-bmi-yozish-sirlari",
      "magistrlik-dissertatsiyasi-himoyasiga-tayyorgarlik"
    ]
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
    metaTitle: "APA 7 formatlash xizmati – havola va bibliografiya | Ilmiyxizmat.uz",
    metaDescription: "Maqola va dissertatsiyani APA 7 bo'yicha formatlaymiz: matndagi havolalar, bibliografiya, jadval va rasmlar. Xalqaro jurnallar talablariga mos, 150 000 so'mdan.",
    pricing: [
      {
        type: "APA 7 bo'yicha formatlash",
        volume: "hajmga qarab",
        duration: "kelishiladi",
        price: "150 000 so'mdan"
      }
    ],
    faq: [
      {
        question: "APA 7 formatlash nimalarni o'z ichiga oladi?",
        answer: "Matn ichidagi havolalar (muallif, yil), bibliografiya ro'yxati, jadval va rasmlarni APA 7 qoidalari bo'yicha rasmiylashtirish."
      },
      {
        question: "APA 7 qachon kerak bo'ladi?",
        answer: "Ko'plab xalqaro jurnallar, jumladan Scopus va Web of Science bazasidagi jurnallar, maqolalarni APA 7 uslubida qabul qiladi. Mahalliy OTM va OAK jurnallari odatda GOST talab qiladi."
      },
      {
        question: "Narxi qancha?",
        answer: "150 000 so'mdan boshlanadi. Aniq narx matn hajmi va manbalar soniga bog'liq."
      },
      {
        question: "GOST dan APA 7 ga o'tkazib berasizlarmi?",
        answer: "Ha, GOST bo'yicha rasmiylashtirilgan havola va bibliografiyani APA 7 ga o'tkazamiz va aksincha."
      },
      {
        question: "Jurnalning o'z talablari bo'lsa-chi?",
        answer: "Jurnal talablarini yuboring - formatlash APA 7 asosida, jurnalning qo'shimcha talablarini hisobga olgan holda bajariladi."
      }
    ],
    relatedPosts: [
      "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun",
      "scopus-va-web-of-science-ilmiy-maqola-nashr",
      "gost-nima-ilmiy-ishlarda-gost-standarti"
    ]
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
    metaTitle: "GOST bo'yicha rasmiylashtirish – BMI, dissertatsiya, maqola | Ilmiyxizmat.uz",
    metaDescription: "Ilmiy ishni GOST 7.32 bo'yicha rasmiylashtiramiz: mundarija, shrift va o'lchamlar, ilovalar, adabiyotlar ro'yxati. BMI, dissertatsiya va maqolalar uchun, 150 000 so'mdan.",
    pricing: [
      {
        type: "GOST bo'yicha rasmiylashtirish",
        volume: "hajmga qarab",
        duration: "kelishiladi",
        price: "150 000 so'mdan"
      }
    ],
    faq: [
      {
        question: "GOST bo'yicha rasmiylashtirish nimalarni o'z ichiga oladi?",
        answer: "GOST 7.32 asosida mundarija, shrift va o'lchamlar, hoshiyalar, sarlavhalar, ilovalar hamda adabiyotlar ro'yxatini rasmiylashtirish."
      },
      {
        question: "Qaysi ishlar uchun GOST kerak?",
        answer: "O'zbekistondagi OTMlarda kurs ishi, BMI, magistrlik dissertatsiyasi hamda ko'plab mahalliy va OAK jurnallaridagi maqolalar GOST bo'yicha rasmiylashtiriladi."
      },
      {
        question: "Narxi qancha?",
        answer: "150 000 so'mdan boshlanadi. Aniq narx ish hajmi va jadval, rasm, ilovalar soniga bog'liq."
      },
      {
        question: "Kafedramning o'z uslubiy ko'rsatmasi bor. Uni hisobga olasizlarmi?",
        answer: "Ha. Uslubiy ko'rsatmani yuboring - rasmiylashtirish GOST va kafedrangiz talablari bo'yicha bajariladi."
      },
      {
        question: "Matn o'zgaradimi?",
        answer: "Yo'q, rasmiylashtirishda faqat shakl tartibga solinadi. Matnni tahrirlash kerak bo'lsa, bu alohida tahrir xizmati."
      }
    ],
    relatedPosts: [
      "gost-nima-ilmiy-ishlarda-gost-standarti",
      "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun",
      "bmi-namunasi-tuzilma-va-mundarija"
    ]
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
    metaTitle: "Annotatsiya va kalit so'zlar – o'zbek, rus, ingliz tilida | Ilmiyxizmat.uz",
    metaDescription: "Maqola va dissertatsiya uchun o'zbek, rus va ingliz tillarida annotatsiya hamda kalit so'zlar tayyorlaymiz. OAK va xalqaro jurnallar talablariga mos, 50 000 so'mdan.",
    pricing: [
      {
        type: "Annotatsiya va kalit so'zlar (3 tilda)",
        volume: "1 maqola",
        duration: "kelishiladi",
        price: "50 000 so'mdan"
      }
    ],
    faq: [
      {
        question: "Annotatsiya qaysi tillarda yoziladi?",
        answer: "O'zbek, rus va ingliz tillarida - OAK jurnallari odatda uchala tilda annotatsiya talab qiladi."
      },
      {
        question: "Narxi qancha?",
        answer: "50 000 so'mdan boshlanadi. Aniq narx tillar soni va maqola hajmiga bog'liq."
      },
      {
        question: "Annotatsiya qanday tuziladi?",
        answer: "Unda tadqiqot maqsadi, usullari, asosiy natijalari va xulosasi qisqa bayon qilinadi. Hajm jurnal talabiga moslanadi."
      },
      {
        question: "Kalit so'zlar qanday tanlanadi?",
        answer: "Maqola mavzusini aniq ifodalaydigan va ilmiy bazalarda qidiriladigan atamalar tanlanadi, odatda 5-10 ta."
      },
      {
        question: "Maqolani ham yozib berasizlarmi?",
        answer: "Ha, ilmiy maqola yozish xizmatimizda annotatsiya va kalit so'zlar narxga kiradi."
      }
    ],
    relatedPosts: [
      "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
      "scopus-va-web-of-science-ilmiy-maqola-nashr",
      "ozbekistonda-ilmiy-maqola-nashr-qilish-narxlari-2026"
    ]
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
    metaTitle: "OAK jurnaliga maqola chiqarish – narx 2026, 1-4 haftada | Ilmiyxizmat.uz",
    metaDescription: "OAK ro'yxatidagi jurnalga maqola chiqarish 350 000 so'mdan: ixtisoslikka mos jurnal tanlash, maqolani talablarga moslash, retsenziya va nashr. Muddat 1-4 hafta.",
    pricing: [
      {
        type: "OAK jurnaliga maqola chiqarish",
        volume: "6-15 bet",
        duration: "1-4 hafta",
        price: "350 000 so'mdan"
      },
      {
        type: "Faqat maqola yozish",
        volume: "6-15 bet",
        duration: "2-5 kun",
        price: "100 000 so'mdan",
        link: "/xizmatlar/ilmiy-maqola-yozish"
      }
    ],
    faq: [
      {
        question: "OAK jurnaliga maqola chiqarish narxi qancha?",
        answer: "350 000 so'mdan boshlanadi. Yakuniy narx jurnal, maqola hajmi va maqola tayyor yoki yozilishi kerakligiga bog'liq."
      },
      {
        question: "Maqola qancha vaqtda chiqadi?",
        answer: "Odatda 1-4 hafta. Muddat jurnalning navbatdagi soni va retsenziya jarayoniga bog'liq."
      },
      {
        question: "Jurnalni qanday tanlaysizlar?",
        answer: "Ixtisosligingiz shifri va maqola mavzusiga mos, OAK ro'yxatidagi jurnallar orasidan tanlaymiz."
      },
      {
        question: "Maqolam tayyor bo'lmasa-chi?",
        answer: "Maqolani ham tayyorlab beramiz: matn, 3 tilda annotatsiya, kalit so'zlar va bibliografiya jurnal talablari bo'yicha."
      },
      {
        question: "Retsenziya kerakmi?",
        answer: "Ko'p jurnallar retsenziya talab qiladi - retsenziya olish jarayonida yordam xizmat tarkibiga kiradi."
      }
    ],
    relatedPosts: [
      "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
      "ozbekistonda-ilmiy-maqola-nashr-qilish-narxlari-2026",
      "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun"
    ]
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
    price: "100 000",
    priceNote: "dan boshlab",
    popular: false,
    metaTitle: "Konferensiyaga maqola chiqarish – sertifikat bilan, 2-10 kunda | Ilmiyxizmat.uz",
    metaDescription: "Xalqaro va respublika konferensiyalariga maqola chiqarish 100 000 so'mdan: konferensiya tanlash, maqolani tayyorlash, sertifikat va to'plamda nashr. Muddat 2-10 kun.",
    pricing: [
      {
        type: "Konferensiyaga maqola chiqarish (sertifikat bilan)",
        volume: "-",
        duration: "2-10 kun",
        price: "100 000 so'mdan"
      }
    ],
    faq: [
      {
        question: "Konferensiyaga maqola chiqarish narxi qancha?",
        answer: "100 000 so'mdan boshlanadi. Narx konferensiya turi (xalqaro yoki respublika) va maqola tayyorlash kerakligiga bog'liq."
      },
      {
        question: "Qancha vaqtda chiqadi?",
        answer: "Odatda 2-10 kun - konferensiya o'tkazilish sanasi va to'plam chiqish muddatiga bog'liq."
      },
      {
        question: "Sertifikat beriladimi?",
        answer: "Ha, ishtirok sertifikati beriladi va maqola konferensiya to'plamida nashr qilinadi."
      },
      {
        question: "Qanday konferensiyalar bor?",
        answer: "Xalqaro va respublika miqyosidagi ilmiy-amaliy konferensiyalar. Mavzu va yo'nalishingizga mosini tanlaymiz."
      },
      {
        question: "Konferensiya maqolasi bilan OAK jurnali maqolasining farqi nima?",
        answer: "OAK jurnali maqolasi dissertatsiya himoyasi uchun asosiy nashrlar qatorida hisoblanadi va retsenziyadan o'tadi, konferensiya maqolasi esa tezroq chiqadi. Qaysi biri kerakligini talablaringizga qarab maslahat beramiz."
      }
    ],
    relatedPosts: [
      "ozbekistonda-ilmiy-maqola-nashr-qilish-narxlari-2026",
      "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
      "scopus-va-web-of-science-ilmiy-maqola-nashr"
    ]
  }
];

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

export const getPopularServices = () => {
  return services.filter(service => service.popular);
};
