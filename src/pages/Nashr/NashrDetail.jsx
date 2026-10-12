import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { useData } from '../../lib/useData';
import { useSiteSettings } from '../../context/SiteSettingsContext';
import './NashrDetail.css';

const NashrDetail = () => {
    const { settings } = useSiteSettings();
    const { slug } = useParams();
    const { getBySlug } = useData('publications');
    const pub = getBySlug(slug);

    if (!pub) {
        return (
            <section className="section">
                <SEO title="Sahifa topilmadi" noindex={true} />
                <div className="container text-center">
                    <h1>Sahifa topilmadi</h1>
                    <Link to="/nashr" className="btn btn-primary mt-4">Orqaga</Link>
                </div>
            </section>
        );
    }

    // Fallback for missing arrays if data is incomplete
    const benefits = pub.benefits || ["Tezkor nashr", "Sifat kafolati", "Rasmiy sertifikat"];
    const requirements = pub.requirements || ["Maqola matni", "Muallif ma'lumotlari", "Annotatsiya"];

    // Service JSON-LD for publication
    const pubJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": pub.title,
        "description": pub.metaDescription || pub.description,
        "url": `https://www.ilmiyxizmat.uz/nashr/${pub.slug}`,
        "provider": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "url": "https://www.ilmiyxizmat.uz"
        },
        "offers": {
            "@type": "Offer",
            "price": pub.price ? pub.price.replace(/\s/g, '') : "0",
            "priceCurrency": "UZS",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <>
            <SEO
                title={pub.metaTitle || pub.title}
                description={pub.metaDescription || pub.description}
                jsonLd={pubJsonLd}
            />

            <Breadcrumbs items={[{ name: 'Nashr', path: '/nashr' }, { name: pub.title, path: `/nashr/${pub.slug}` }]} />

            <section className="nashr-header">
                <div className="container">
                    <div className="nashr-header-icon">{pub.icon}</div>
                    <h1>{pub.title}</h1>
                    <p>{pub.description}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="nashr-detail-grid">
                        <div className="nashr-content">
                            <h2>Afzalliklari</h2>
                            <div className="benefits-grid">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="benefit-item">✅ {benefit}</div>
                                ))}
                            </div>

                            <h2 className="mt-8">Talablar</h2>
                            <ul className="requirements-list">
                                {requirements.map((req, i) => (
                                    <li key={i}>📌 {req}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="nashr-cta-card">
                            <h3>Buyurtma berish</h3>
                            <div className="price-tag">
                                <span className="amount">{pub.price}</span>
                                <span className="currency">so'm</span>
                            </div>
                            <div className="timeline-tag">
                                <span>⏱️ Muddat:</span>
                                <strong>{pub.timeline}</strong>
                            </div>
                            <Link to="/buyurtma" className="btn btn-gold btn-lg">Buyurtma berish</Link>
                            <a href={settings.telegramUrl} className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NashrDetail;
