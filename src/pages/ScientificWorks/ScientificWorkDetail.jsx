import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import './ScientificWorkDetail.css';

const ScientificWorkDetail = () => {
    const { slug } = useParams();
    const { getBySlug } = useData('scientificWorks');
    const work = getBySlug(slug);

    if (!work) {
        return (
            <section className="section">
                <SEO title="Sahifa topilmadi" noindex={true} />
                <div className="container text-center">
                    <h1>Sahifa topilmadi</h1>
                    <Link to="/ilmiy-ishlar" className="btn btn-primary mt-4">Orqaga</Link>
                </div>
            </section>
        );
    }

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
                "name": "Ilmiy ishlar",
                "item": "https://www.ilmiyxizmat.uz/ilmiy-ishlar"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": work.title,
                "item": `https://www.ilmiyxizmat.uz/ilmiy-ishlar/${work.slug}`
            }
        ]
    };

    return (
        <>
            <SEO
                title={work.metaTitle || work.title}
                description={work.metaDescription || work.description}
                jsonLd={breadcrumbJsonLd}
            />

            {/* Breadcrumb */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <ol>
                        <li><Link to="/">Bosh sahifa</Link></li>
                        <li><Link to="/ilmiy-ishlar">Ilmiy ishlar</Link></li>
                        <li aria-current="page">{work.title}</li>
                    </ol>
                </div>
            </nav>

            <section className="work-header">
                <div className="container">
                    <div className="work-header-icon">{work.icon}</div>
                    <h1>{work.title}</h1>
                    <p>{work.description}</p>
                    <div className="work-header-meta">⏱️ Muddat: {work.duration}</div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="work-detail-grid">
                        <div className="work-requirements">
                            <h2>Talablar</h2>
                            <ul>
                                {work.requirements.map((req, i) => <li key={i}>📌 {req}</li>)}
                            </ul>
                        </div>
                        <div className="work-cta-card">
                            <h3>Yordam kerakmi?</h3>
                            <p>Biz sizga {work.title.toLowerCase()} yozishda yordam beramiz</p>
                            <Link to={`/xizmatlar/${work.relatedService}`} className="btn btn-gold btn-lg">Xizmatni ko'rish</Link>
                            <Link to="/buyurtma" className="btn btn-outline btn-lg">Buyurtma</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScientificWorkDetail;
