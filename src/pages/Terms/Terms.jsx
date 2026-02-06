import SEO from '../../components/SEO/SEO';

const Terms = () => {
    return (
        <>
            <SEO
                title="Foydalanish shartlari"
                description="Ilmiyxizmat.uz foydalanish shartlari. Xizmatlarimizdan foydalanish qoidalari, to'lov va qaytarish shartlari."
                noindex={true}
            />
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="mb-6">Foydalanish Shartlari</h1>
                    <p className="mb-4">Oxirgi yangilanish: 6-Fevral, 2024</p>

                    <div className="content">
                        <h2 className="mb-2">1. Kirish</h2>
                        <p className="mb-4">
                            Ilmiyxizmat.uz saytidan foydalanish orqali siz ushbu Foydalanish Shartlariga rozilik bildirasiz.
                            Agar shartlarga rozi bo'lmasangiz, saytdan foydalanmasligingiz so'raladi.
                        </p>

                        <h2 className="mb-2">2. Xizmatlar</h2>
                        <p className="mb-4">
                            Sayt ilmiy va akademik xizmatlarni taklif etadi. Biz taqdim etayotgan xizmatlar faqat namuna va yordamchi material sifatida ishlatilishi lozim.
                            Mijozlar ushbu materiallardan noqonuniy maqsadlarda foydalanmasligi kerak.
                        </p>

                        <h2 className="mb-2">3. To'lov va Qaytarish</h2>
                        <p className="mb-4">
                            Xizmatlar uchun to'lov oldindan kelishilgan narxda amalga oshiriladi.
                            Agar ish sifati kelishilgan talablarga javob bermasa, bepul tuzatish yoki to'lovni qisman/to'liq qaytarish ko'rib chiqiladi.
                        </p>

                        <h2 className="mb-2">4. Mualliflik Huquqi</h2>
                        <p className="mb-4">
                            Saytdagi barcha kontent (matn, dizayn, logolar) Ilmiyxizmat.uz mulki hisoblanadi.
                            Tayyorlab berilgan ilmiy ishlar bo'yicha mulkiy huquqlar to'lov to'liq amalga oshirilgandan so'ng mijozga o'tadi.
                        </p>

                        <h2 className="mb-2">5. O'zgartirishlar</h2>
                        <p>
                            Biz ushbu shartlarni istalgan vaqtda o'zgartirish huquqiga egamiz.
                            O'zgarishlar saytda e'lon qilingan paytdan boshlab kuchga kiradi.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Terms;
