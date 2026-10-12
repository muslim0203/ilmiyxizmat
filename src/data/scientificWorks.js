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
        metaTitle: "BMI ga qo'yiladigan talablar: hajm, antiplagiat va manbalar",
        metaDescription: "Bitiruv malakaviy ishi necha bet bo'lishi kerak, antiplagiat foizi qancha, nechta manba talab qilinadi - BMI talablari ro'yxati va muddati.",
        faq: [
            {
                question: "BMI necha bet bo'lishi kerak?",
                answer: "Odatda 40-60 bet, ilovalar bundan tashqari. Aniq hajm OTM va kafedraning uslubiy ko'rsatmasida belgilanadi."
            },
            {
                question: "BMI uchun antiplagiat foizi qancha bo'lishi kerak?",
                answer: "Ko'pchilik OTMlarda originallik kamida 70% bo'lishi talab qilinadi."
            },
            {
                question: "BMI da nechta manba bo'lishi kerak?",
                answer: "Odatda kamida 20 ta manba: normativ hujjatlar, ilmiy adabiyotlar, maqolalar va statistik ma'lumotlar."
            },
            {
                question: "BMI qanday tuzilmaga ega?",
                answer: "Kirish, uchta bob (nazariy, tahliliy va amaliy), xulosa va takliflar, foydalanilgan adabiyotlar ro'yxati hamda ilovalar."
            }
        ],
        relatedPosts: [
            "bmi-nima-bitiruv-malakaviy-ishi-haqida-tolik-malumot",
            "bmi-namunasi-tuzilma-va-mundarija",
            "bitiruv-malakaviy-ishi-nizomi"
        ]
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
        metaDescription: "Kurs ishiga qo'yiladigan talablar: hajm 25-35 bet, originallik 60%+, ikki bob, kamida 15 ta manba. Kurs ishi tuzilmasi va rasmiylashtirish bo'yicha qisqa qo'llanma.",
        faq: [
            {
                question: "Kurs ishi necha bet bo'ladi?",
                answer: "Odatda 25-35 bet. Aniq hajm fan va kafedra talablariga bog'liq."
            },
            {
                question: "Kurs ishi uchun originallik qancha bo'lishi kerak?",
                answer: "Odatda kamida 60%."
            },
            {
                question: "Kurs ishi qanday tuzilmaga ega?",
                answer: "Kirish, ikki bob, xulosa va foydalanilgan adabiyotlar ro'yxati. Odatda kamida 15 ta manbaga tayaniladi."
            }
        ],
        relatedPosts: [
            "gost-nima-ilmiy-ishlarda-gost-standarti",
            "apa-7-format-va-gost-standarti-ilmiy-ishlar-uchun",
            "antiplagiat-dasturidan-qanday-otish-mumkin"
        ]
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
        metaDescription: "Magistrlik dissertatsiyasi haqida to'liq qo'llanma. Talablar, tuzilma, himoya.",
        faq: [
            {
                question: "Magistrlik dissertatsiyasi necha bet bo'lishi kerak?",
                answer: "Odatda 80-100 bet, uch bob va ilovalar bilan."
            },
            {
                question: "Magistrlik dissertatsiyasi uchun antiplagiat foizi qancha?",
                answer: "Odatda originallik kamida 80% bo'lishi talab qilinadi."
            },
            {
                question: "Dissertatsiya himoyasidan oldin nechta maqola kerak?",
                answer: "Odatda mavzu bo'yicha kamida ikkita ilmiy maqola chop etilgan bo'lishi kerak. Aniq talab OTM nizomida belgilanadi."
            },
            {
                question: "Nechta manbadan foydalanish kerak?",
                answer: "Odatda kamida 50 ta manba, jumladan xorijiy adabiyotlar."
            }
        ],
        relatedPosts: [
            "magistrlik-dissertatsiyasi-himoyasiga-tayyorgarlik",
            "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
            "antiplagiat-dasturidan-qanday-otish-mumkin"
        ]
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
        metaDescription: "PhD va DSc doktorlik dissertatsiyasi haqida. Talablar, jarayon, himoya.",
        faq: [
            {
                question: "PhD dissertatsiyasi necha bet bo'ladi?",
                answer: "PhD dissertatsiyasi odatda 120-150 bet, DSc dissertatsiyasi esa 200 betdan ortiq."
            },
            {
                question: "Doktorlik dissertatsiyasi uchun originallik qancha bo'lishi kerak?",
                answer: "Odatda kamida 90%."
            },
            {
                question: "Himoyagacha nechta maqola chop etilishi kerak?",
                answer: "Odatda mavzu bo'yicha kamida beshta ilmiy maqola, jumladan OAK tavsiya etgan jurnallarda. Aniq talablar OAK nizomida belgilanadi."
            },
            {
                question: "Avtoreferat nima?",
                answer: "Dissertatsiyaning asosiy natijalari, ilmiy yangiligi va xulosalarini qisqa bayon qiladigan hujjat. U himoyadan oldin tayyorlanadi."
            }
        ],
        relatedPosts: [
            "scopus-va-web-of-science-ilmiy-maqola-nashr",
            "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
            "antiplagiat-dasturidan-qanday-otish-mumkin"
        ]
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
        metaDescription: "Ilmiy maqolaga qo'yiladigan talablar: hajm 6-15 bet, 3 tilda annotatsiya, kalit so'zlar va manbalar. Maqola tuzilmasi va OAK jurnallari talablari.",
        faq: [
            {
                question: "Ilmiy maqola necha bet bo'ladi?",
                answer: "Odatda 6-15 bet. Aniq hajm jurnal yoki konferensiya talablarida ko'rsatiladi."
            },
            {
                question: "Ilmiy maqola qanday tuzilmaga ega?",
                answer: "Sarlavha, annotatsiya, kalit so'zlar, kirish, usullar, natijalar, muhokama, xulosa va adabiyotlar ro'yxati."
            },
            {
                question: "Annotatsiya qaysi tillarda yoziladi?",
                answer: "OAK jurnallari odatda o'zbek, rus va ingliz tillarida annotatsiya talab qiladi."
            }
        ],
        relatedPosts: [
            "oak-jurnallari-ruyxati-va-ulardan-otish-talablari",
            "scopus-va-web-of-science-ilmiy-maqola-nashr",
            "ozbekistonda-ilmiy-maqola-nashr-qilish-narxlari-2026"
        ]
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
        metaTitle: "Monografiyaga qo'yiladigan talablar: hajm, taqriz va ISBN",
        metaDescription: "Monografiya necha bet bo'lishi kerak, nechta taqriz talab qilinadi, ISBN va UDK qanday olinadi - talablar ro'yxati va nashr muddati.",
        faq: [
            {
                question: "Monografiya necha bet bo'lishi kerak?",
                answer: "Odatda 150-300 bet yoki kamida 8-10 bosma taboq."
            },
            {
                question: "Monografiya uchun ISBN kerakmi?",
                answer: "Ha, nashr qilingan monografiya ISBN raqamiga ega bo'lishi kerak. Shuningdek UDK beriladi."
            },
            {
                question: "Monografiyaga taqriz kerakmi?",
                answer: "Ha, monografiya retsenziyadan (taqrizdan) o'tadi va ilmiy tahrir qilinadi."
            }
        ],
        relatedPosts: [
            "monografiya-nima-va-qanday-yoziladi",
            "monografiya-namunasi-tuzilma-va-mundarija"
        ]
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
        metaDescription: "O'quv qo'llanma nima va unga qanday talablar qo'yiladi: hajm, retsenziya, UDK va ISBN, tasdiqlash tartibi hamda darslikdan farqi.",
        faq: [
            {
                question: "O'quv qo'llanma necha bet bo'ladi?",
                answer: "Odatda 100 betdan ortiq. Aniq hajm fan dasturi va muassasa talablariga bog'liq."
            },
            {
                question: "O'quv qo'llanmaga qanday hujjatlar kerak?",
                answer: "Odatda kamida ikkita retsenziya, ekspertiza xulosasi hamda UDK va ISBN rasmiylashtirish. Ekspertiza tartibi blogimizdagi alohida maqolada yoritilgan."
            },
            {
                question: "O'quv qo'llanma darslikdan nimasi bilan farq qiladi?",
                answer: "Darslik fan dasturini to'liq qamrab oladi, o'quv qo'llanma esa uni to'ldiradi yoki ayrim bo'limlarini chuqurroq yoritadi. Farqlar blogimizdagi alohida maqolada batafsil taqqoslangan."
            }
        ],
        relatedPosts: [
            "oquv-qollanma-qanday-yoziladi-talablar-va-tuzilma",
            "darslik-va-oquv-qollanma-orasidagi-farq",
            "oquv-qollanma-yozish-va-ekspertizadan-otkazish-mygov"
        ]
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
        metaDescription: "Darslik nima va u o'quv qo'llanmadan nimasi bilan farq qiladi: tuzilma, metodik apparat, taqriz, grif olish tartibi va nashr talablari.",
        faq: [
            {
                question: "Darslikka qanday talablar qo'yiladi?",
                answer: "O'quv dasturiga to'liq moslik, metodik apparat (test va topshiriqlar), kamida ikkita taqriz hamda grif va ISBN rasmiylashtirish."
            },
            {
                question: "Darslik necha bet bo'ladi?",
                answer: "Amaliyotda ko'p darsliklar 200-400 bet oralig'ida bo'ladi, lekin aniq hajm fan dasturiga bog'liq."
            },
            {
                question: "Grif nima?",
                answer: "Darslikni ta'lim jarayonida foydalanishga ruxsat beruvchi rasmiy tasdiq. U vakolatli tashkilot tomonidan beriladi."
            }
        ],
        relatedPosts: [
            "darslik-va-oquv-qollanma-orasidagi-farq",
            "oquv-qollanma-qanday-yoziladi-talablar-va-tuzilma"
        ]
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
        metaDescription: "Metodik qo'llanma tayyorlash xizmati. Amaliy ko'rsatmalar, laboratoriya.",
        faq: [
            {
                question: "Metodik qo'llanma necha bet bo'ladi?",
                answer: "Odatda 30-60 bet."
            },
            {
                question: "Metodik qo'llanmada nimalar bo'lishi kerak?",
                answer: "Amaliy topshiriqlar, nazorat savollari va ilovalar - qo'llanma o'qituvchi yoki talabaga mavzuni amalda o'zlashtirishga yordam beradi."
            },
            {
                question: "Metodik qo'llanma o'quv qo'llanmadan nimasi bilan farq qiladi?",
                answer: "O'quv qo'llanma nazariy materialni yoritadi, metodik qo'llanma esa asosan amaliy mashg'ulot va topshiriqlarni qanday bajarishni ko'rsatadi va hajmi kichikroq bo'ladi."
            }
        ],
        relatedPosts: [
            "oquv-qollanma-qanday-yoziladi-talablar-va-tuzilma",
            "darslik-va-oquv-qollanma-orasidagi-farq"
        ]
    }
];

export const getWorkBySlug = (slug) => {
    return scientificWorks.find(work => work.slug === slug);
};
