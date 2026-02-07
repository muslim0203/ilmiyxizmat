import SEO from '../../components/SEO/SEO';
import { useSiteSettings } from '../../context/SiteSettingsContext';

const Privacy = () => {
    const { settings } = useSiteSettings();
    return (
        <>
            <SEO
                title="Maxfiylik siyosati"
                description="Ilmiyxizmat.uz maxfiylik siyosati. Shaxsiy ma'lumotlaringiz qanday to'planishi, ishlatilishi va himoya qilinishi haqida."
                noindex={true}
            />
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="mb-6">Maxfiylik Siyosati</h1>
                    <p className="mb-4">Oxirgi yangilanish: 6-Fevral, 2024</p>

                    <div className="content">
                        <h2 className="mb-2">1. Umumiy qoidalar</h2>
                        <p className="mb-4">
                            Ilmiyxizmat.uz (keyingi o'rinlarda "Sayt") foydalanuvchilarning shaxsiy ma'lumotlarini himoya qilishga jiddiy e'tibor beradi.
                            Ushbu Maxfiylik Siyosati biz sizning ma'lumotlaringizni qanday to'plashimiz, ishlatishimiz va himoya qilishimizni belgilaydi.
                        </p>

                        <h2 className="mb-2">2. To'planadigan ma'lumotlar</h2>
                        <p className="mb-4">
                            Biz quyidagi ma'lumotlarni to'plashimiz mumkin:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Ism va familiya</li>
                            <li>Telefon raqami</li>
                            <li>Email manzili</li>
                            <li>Buyurtma tafsilotlari va fayllar</li>
                        </ul>

                        <h2 className="mb-2">3. Ma'lumotlardan foydalanish</h2>
                        <p className="mb-4">
                            Sizning ma'lumotlaringiz faqat quyidagi maqsadlarda ishlatiladi:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Xizmat ko'rsatish va buyurtmalarni bajarish</li>
                            <li>Siz bilan bog'lanish</li>
                            <li>Xizmat sifatini yaxshilash</li>
                        </ul>

                        <h2 className="mb-2">4. Xavfsizlik</h2>
                        <p className="mb-4">
                            Biz sizning ma'lumotlaringizni himoya qilish uchun barcha zarur texnik va tashkiliy choralarni ko'ramiz.
                            Ma'lumotlaringiz uchinchi shaxslarga berilmaydi (qonunchilikda belgilangan hollar bundan mustasno).
                        </p>

                        <h2 className="mb-2">5. Bog'lanish</h2>
                        <p>
                            Maxfiylik siyosati bo'yicha savollaringiz bo'lsa, biz bilan bog'lanishingiz mumkin:<br />
                            Email: {settings.email}<br />
                            Tel: {settings.phone}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Privacy;
