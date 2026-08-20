import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import { useSiteSettings } from '../../context/SiteSettingsContext';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { settings } = useSiteSettings();
    const { slug } = useParams();
    const { items: services, getBySlug } = useData('services');
    const service = getBySlug(slug);

    if (!service) {
        return (
            <section className="section">
                <SEO title="Xizmat topilmadi" noindex={true} />
                <div className="container text-center">
                    <h1>Xizmat topilmadi</h1>
                    <Link to="/xizmatlar" className="btn btn-primary mt-4">Xizmatlarga qaytish</Link>
                </div>
            </section>
        );
    }

    const otherServices = services.filter(s => s.id !== service.id).slice(0, 3);

    // Service JSON-LD schema
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.metaDescription || service.description,
        "url": `https://www.ilmiyxizmat.uz/xizmatlar/${service.slug}`,
        "provider": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "url": "https://www.ilmiyxizmat.uz"
        },
        "areaServed": {
            "@type": "Country",
            "name": "O'zbekiston"
        },
        "offers": {
            "@type": "Offer",
            "price": service.price.replace(/\s/g, ''),
            "priceCurrency": "UZS",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2026-12-31"
        },
        "serviceType": "Ilmiy xizmat"
    };

    // BreadcrumbList JSON-LD
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Bosh sahifa",
                "item": "https://www.ilmiyxizmat.uz"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Xizmatlar",
                "item": "https://www.ilmiyxizmat.uz/xizmatlar"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": `https://www.ilmiyxizmat.uz/xizmatlar/${service.slug}`
            }
        ]
    };

    // FAQPage JSON-LD - Google natijalarida savol-javob ko'rinishini beradi
    const faqJsonLd = service.faq?.length ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
    } : null;

    const schemas = [serviceJsonLd, breadcrumbJsonLd];
    if (faqJsonLd) schemas.push(faqJsonLd);

    return (
        <>
            <SEO
                title={service.metaTitle || service.title}
                description={service.metaDescription || service.description}
                jsonLd={schemas}
            />

            {/* Breadcrumb */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <ol>
                        <li><Link to="/">Bosh sahifa</Link></li>
                        <li><Link to="/xizmatlar">Xizmatlar</Link></li>
                        <li aria-current="page">{service.title}</li>
                    </ol>
                </div>
            </nav>

            {/* Service Header */}
            <section className="service-header">
                <div className="container">
                    <div className="service-header-content">
                        <div className="service-header-icon">{service.icon}</div>
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                        <div className="service-header-price">
                            <span className="price">{service.price} so'm</span>
                            <span className="note">{service.priceNote}</span>
                        </div>
                        <Link to="/buyurtma" className="btn btn-gold btn-lg">Buyurtma berish</Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="container">
                    <div className="service-features-grid">
                        <div className="service-features">
                            <h2>Xizmat tarkibi</h2>
                            <ul>
                                {service.features.map((feature, index) => (
                                    <li key={index}>✅ {feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="service-order-card">
                            <h3>Buyurtma berish</h3>
                            <p>Professionallarimiz sizga yordam berishga tayyor</p>
                            <div className="price-display">
                                <span className="price">{service.price} so'm</span>
                                <span className="note">{service.priceNote}</span>
                            </div>
                            <Link to="/buyurtma" className="btn btn-gold btn-lg">Buyurtma</Link>
                            <a href={settings.telegramUrl} className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Batafsil ma'lumot - SEO uchun asosiy matn */}
            {service.content?.length > 0 && (
                <section className="section service-article-section">
                    <div className="container">
                        <article className="service-article">
                            {service.content.map((block, index) => (
                                <div key={index} className="service-article-block">
                                    <h2>{block.heading}</h2>
                                    {block.paragraphs?.map((text, i) => <p key={i}>{text}</p>)}
                                    {block.list?.length > 0 && (
                                        <ul>
                                            {block.list.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </article>
                    </div>
                </section>
            )}

            {/* FAQ */}
            {service.faq?.length > 0 && (
                <section className="section section-light">
                    <div className="container">
                        <h2 className="text-center mb-8">Ko'p beriladigan savollar</h2>
                        <div className="service-faq">
                            {service.faq.map((item, index) => (
                                <details key={index} className="service-faq-item">
                                    <summary>{item.question}</summary>
                                    <p>{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Other Services */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-8">Boshqa xizmatlar</h2>
                    <div className="other-services-grid">
                        {otherServices.map(s => (
                            <Link to={`/xizmatlar/${s.slug}`} key={s.id} className="service-card">
                                <div className="service-icon">{s.icon}</div>
                                <h3>{s.shortTitle}</h3>
                                <p>{s.description.substring(0, 80)}...</p>
                                <span className="service-link">Batafsil →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetail;
