import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import { useSiteSettings } from '../../context/SiteSettingsContext';
import { defaultSteps } from '../../data/services';
import './ServiceDetail.css';

const SITE_URL = 'https://www.ilmiyxizmat.uz';

const ServiceDetail = () => {
    const { settings } = useSiteSettings();
    const { slug } = useParams();
    const { items: services, getBySlug } = useData('services');
    const { items: blogPosts } = useData('blog');
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
    const steps = service.steps?.length ? service.steps : defaultSteps;
    const relatedPosts = (service.relatedPosts || [])
        .map(postSlug => blogPosts.find(p => p.slug === postSlug))
        .filter(Boolean);
    const quoteUrl = `/buyurtma?xizmat=${service.slug}`;
    const minPrice = Number(String(service.price).replace(/\s/g, ''));

    // Service JSON-LD schema
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.metaDescription || service.description,
        "url": `${SITE_URL}/xizmatlar/${service.slug}`,
        "provider": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "url": SITE_URL
        },
        "areaServed": {
            "@type": "Country",
            "name": "Uzbekistan",
            "identifier": "UZ"
        },
        // Narx "dan boshlab" - shuning uchun aniq price emas, minPrice
        "offers": {
            "@type": "Offer",
            "url": `${SITE_URL}/xizmatlar/${service.slug}`,
            "priceCurrency": "UZS",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": minPrice,
                "priceCurrency": "UZS"
            },
            "availability": "https://schema.org/InStock"
        },
        "serviceType": service.shortTitle || service.title
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
                "item": SITE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Xizmatlar",
                "item": `${SITE_URL}/xizmatlar`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": `${SITE_URL}/xizmatlar/${service.slug}`
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

            {/* Narx jadvali */}
            {service.pricing?.length > 0 && (
                <section className="section section-light">
                    <div className="container">
                        <h2 className="text-center mb-8">Narxlar va muddatlar</h2>
                        <div className="service-pricing">
                            <div className="service-pricing-scroll">
                                <table className="service-pricing-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Xizmat turi</th>
                                            <th scope="col">Hajm</th>
                                            <th scope="col">Muddat</th>
                                            <th scope="col">Narx</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {service.pricing.map((row, index) => (
                                            <tr key={index}>
                                                <td data-label="Xizmat turi">
                                                    {row.link ? <Link to={row.link}>{row.type}</Link> : row.type}
                                                </td>
                                                <td data-label="Hajm">{row.volume}</td>
                                                <td data-label="Muddat">{row.duration}</td>
                                                <td data-label="Narx" className="service-pricing-price">{row.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="service-pricing-footer">
                                <p>Yakuniy narx hajm, yo'nalish va muddatga qarab belgilanadi.</p>
                                <Link to={quoteUrl} className="btn btn-gold">Aniq narx so'rash</Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Ish bosqichlari */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-8">Ish qanday bajariladi</h2>
                    <ol className="service-steps">
                        {steps.map((step, index) => (
                            <li key={index} className="service-step">
                                <span className="service-step-number">{index + 1}</span>
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </li>
                        ))}
                    </ol>
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

            {/* Namunalar (anonimlashtirilgan). Ma'lumot yo'q bo'lsa faqat dev da eslatma */}
            {service.samples?.length > 0 ? (
                <section className="section">
                    <div className="container">
                        <h2 className="text-center mb-8">Bajarilgan ishlardan namunalar</h2>
                        <div className="service-samples">
                            {service.samples.map((sample, index) => (
                                <div key={index} className="service-sample">
                                    <h3>{sample.title}</h3>
                                    {sample.meta && <span className="service-sample-meta">{sample.meta}</span>}
                                    {sample.description && <p>{sample.description}</p>}
                                    {sample.file && (
                                        <a href={sample.file} className="service-sample-link" target="_blank" rel="noopener noreferrer">
                                            Namunani ko'rish →
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : import.meta.env.DEV && (
                <section className="section">
                    <div className="container">
                        <div className="service-dev-note">
                            Namunalar bloki bo'sh: <code>src/data/services.js</code> da
                            <code>{` samples: [{ title, meta, description, file }]`}</code> qo'shing
                            (faqat dev rejimida ko'rinadi).
                        </div>
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

            {/* Foydali maqolalar */}
            {relatedPosts.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2 className="text-center mb-8">Foydali maqolalar</h2>
                        <div className="service-related-posts">
                            {relatedPosts.map(post => (
                                <Link to={`/blog/${post.slug}`} key={post.slug} className="service-related-post">
                                    <span className="service-related-category">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <span className="service-related-more">O'qish →</span>
                                </Link>
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
