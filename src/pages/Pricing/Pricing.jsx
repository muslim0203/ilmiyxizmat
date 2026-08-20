import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import './Pricing.css';

const Pricing = () => {
    const { items: services } = useData('services');
    // Ro'yxatdagi dastlabki 9 ta yozuv - asosiy ilmiy ishlar (ilmiy ish, BMI, kurs ishi,
    // dissertatsiyalar, maqola, monografiya, o'quv qo'llanma, darslik), qolganlari qo'shimcha.
    const MAIN_WORKS_COUNT = 9;
    const categories = [
        { title: "Ilmiy ishlar", items: services.slice(0, MAIN_WORKS_COUNT) },
        { title: "Qo'shimcha xizmatlar", items: services.slice(MAIN_WORKS_COUNT) }
    ];

    const pricingJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Ilmiy xizmatlar narxlari",
        "description": "Ilmiyxizmat.uz ilmiy xizmatlar narxlari - shaffof narxlar, maxfiy to'lovlar yo'q",
        "url": "https://www.ilmiyxizmat.uz/narxlar",
        "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": service.shortTitle,
            "url": `https://www.ilmiyxizmat.uz/xizmatlar/${service.slug}`
        }))
    };

    return (
        <>
            <SEO
                title="Narxlar - Ilmiy ishlar yozish xizmatlari narxi"
                description="Ilmiy ishlar yozish narxlari: ilmiy maqola 100 000 so'mdan, kurs ishi 300 000, BMI 800 000, dissertatsiya va monografiya. Shaffof narxlar, bo'lib to'lash imkoniyati."
                jsonLd={pricingJsonLd}
            />
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-gold">Narxlar</span>
                    <h1>Ilmiy xizmatlar narxi - shaffof va qulay</h1>
                    <p>Shaffof narxlar, maxfiy to'lovlar yo'q. Bo'lib to'lash imkoniyati mavjud</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {categories.map((cat, index) => (
                        <div key={index} className="pricing-category">
                            <h2>{cat.title}</h2>
                            <div className="pricing-grid">
                                {cat.items.map(service => (
                                    <div key={service.id} className={`pricing-card ${service.popular ? 'popular' : ''}`}>
                                        {service.popular && <span className="popular-badge">Mashhur</span>}
                                        <div className="pricing-icon">{service.icon}</div>
                                        <h3>{service.shortTitle}</h3>
                                        <div className="pricing-price">
                                            <span className="amount">{service.price}</span>
                                            <span className="currency">so'm</span>
                                            <span className="note">{service.priceNote}</span>
                                        </div>
                                        <ul className="pricing-features">
                                            {service.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                                        </ul>
                                        <Link to="/buyurtma" className="btn btn-primary">Buyurtma</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="pricing-note">
                        <h3>Muhim ma'lumot</h3>
                        <p>Narxlar ishning murakkabligi va muddatiga qarab o'zgarishi mumkin.
                            Aniq narx uchun bepul konsultatsiya oling.</p>
                        <Link to="/aloqa" className="btn btn-outline">Konsultatsiya olish</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
