import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import './Services.css';

const Services = () => {
    const { items: services } = useData('services');

    const servicesJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Ilmiy xizmatlar",
        "description": "Ilmiyxizmat.uz professional ilmiy xizmatlar ro'yxati",
        "url": "https://www.ilmiyxizmat.uz/xizmatlar",
        "numberOfItems": services.length,
        "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": service.title,
            "url": `https://www.ilmiyxizmat.uz/xizmatlar/${service.slug}`
        }))
    };

    return (
        <>
            <SEO
                title="Ilmiy ishlar yozish xizmatlari - BMI, Dissertatsiya, Maqola"
                description="Professional ilmiy xizmatlar: BMI yozish, magistrlik va doktorlik dissertatsiyasi, ilmiy maqola, kurs ishi, monografiya, antiplagiat tekshirish, OAK jurnalga chiqarish."
                jsonLd={servicesJsonLd}
            />
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-primary">Xizmatlar</span>
                    <h1>Ilmiy ishlar yozish xizmatlari</h1>
                    <p>BMI, dissertatsiya, ilmiy maqola va boshqa ilmiy ishlarni professional tayyorlab beramiz</p>
                </div>
            </section>

            {/* Services List */}
            <section className="section">
                <div className="container">
                    <div className="services-list">
                        {services.map(service => (
                            <Link to={`/xizmatlar/${service.slug}`} key={service.id} className="service-item">
                                <div className="service-item-icon">{service.icon}</div>
                                <div className="service-item-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <div className="service-item-features">
                                        {service.features.slice(0, 3).map((feature, index) => (
                                            <span key={index}>✓ {feature}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="service-item-price">
                                    <div className="price">{service.price} so'm</div>
                                    <div className="price-note">{service.priceNote}</div>
                                    <button className="btn btn-primary">Batafsil</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-dark">
                <div className="container text-center">
                    <h2 className="text-white">Kerakli xizmatni topa olmadingizmi?</h2>
                    <p className="text-muted mb-6">Biz bilan bog'laning, sizga yordam beramiz</p>
                    <Link to="/aloqa" className="btn btn-gold btn-lg">Bog'lanish</Link>
                </div>
            </section>
        </>
    );
};

export default Services;
