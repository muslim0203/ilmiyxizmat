import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import './Nashr.css';

const Nashr = () => {
    const { items: publications } = useData('publications');

    const nashrJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Ilmiy nashr xizmatlari",
        "description": "Ilmiy maqolalarni OAK jurnallari, xalqaro konferensiyalarda nashr qilish va sertifikat olish xizmatlari.",
        "url": "https://ilmiyxizmat.uz/nashr",
        "numberOfItems": publications.length,
        "itemListElement": publications.map((pub, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": pub.title,
            "url": `https://ilmiyxizmat.uz/nashr/${pub.slug}`
        }))
    };

    return (
        <>
            <SEO
                title="Ilmiy nashr xizmatlari - OAK jurnal, Konferensiya, Sertifikat"
                description="Ilmiy maqolalarni OAK jurnallari va xalqaro konferensiyalarda nashr qilish. Rasmiy sertifikat olish. Tezkor nashr xizmati."
                jsonLd={nashrJsonLd}
            />
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-primary">Nashr</span>
                    <h1>Ilmiy nashr xizmatlari - OAK jurnal va konferensiyalar</h1>
                    <p>Maqolalaringizni nufuzli jurnallarda chop eting va rasmiy sertifikat oling</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="nashr-grid">
                        {publications.map(pub => (
                            <Link to={`/nashr/${pub.slug}`} key={pub.id} className="nashr-card">
                                <div className="nashr-icon">{pub.icon}</div>
                                <h3>{pub.title}</h3>
                                <p>{pub.description}</p>
                                <div className="nashr-meta">
                                    <div className="meta-item">
                                        <span>⏱️ Muddat:</span>
                                        <strong>{pub.timeline}</strong>
                                    </div>
                                    <div className="meta-item">
                                        <span>💰 Narx:</span>
                                        <strong>{pub.price} so'm</strong>
                                    </div>
                                </div>
                                <span className="btn btn-outline">Batafsil →</span>
                            </Link>
                        ))}
                    </div>

                    <div className="nashr-info">
                        <div className="nashr-info-content">
                            <h2>Nashr jarayoni qanday kechadi?</h2>
                            <div className="steps-grid">
                                <div className="step-card">
                                    <div className="step-number">1</div>
                                    <h4>Maqola yuborish</h4>
                                    <p>Maqolangizni telegram orqali yuborasiz</p>
                                </div>
                                <div className="step-card">
                                    <div className="step-number">2</div>
                                    <h4>Tahrir va taqriz</h4>
                                    <p>Mutaxassislarimiz maqolani tekshiradi</p>
                                </div>
                                <div className="step-card">
                                    <div className="step-number">3</div>
                                    <h4>Nashr qilish</h4>
                                    <p>Tanlangan jurnalda chop etiladi</p>
                                </div>
                                <div className="step-card">
                                    <div className="step-number">4</div>
                                    <h4>Sertifikat</h4>
                                    <p>Nashr qilinganligi haqida guvohnoma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Nashr;
