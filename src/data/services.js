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
    price: "100 000",
    priceNote: "dan boshlab",
    popular: true,
    metaTitle: "Ilmiy maqola yozish xizmati | Ilmiyxizmat.uz",
    metaDescription: "Ilmiy maqola yozish xizmati 100 000 so'mdan boshlab. OAK jurnallari, Scopus va Web of Science uchun maqola tayyorlash, annotatsiya va bibliografiya."
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
        answer: "O'rtacha 6-12 oy. Agar sizda dissertatsiya yoki nashr etilgan maqolalar shaklida tayyor material bo'lsa, muddat 3-4 oyga qisqarishi mumkin.",
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
    ],  },
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
        answer: "O'rtacha 3-6 oy. Hajmi kichik va materialingiz qisman tayyor bo'lsa, muddat 1,5-2 oyga qisqarishi mumkin. Aniq muddat birinchi konsultatsiyada kelishiladi.",
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
    ],  },
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
        answer: "O'rtacha 4-8 oy. Grif olish jarayoni bilan birga muddat uzayishi mumkin. Sizda ma'ruza matnlari yoki tayyor materiallar bo'lsa, muddat sezilarli qisqaradi.",
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
    ],  },
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
