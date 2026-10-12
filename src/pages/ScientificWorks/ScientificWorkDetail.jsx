import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { useData } from '../../lib/useData';
import './ScientificWorkDetail.css';

const ScientificWorkDetail = () => {
    const { slug } = useParams();
    const { getBySlug } = useData('scientificWorks');
    const { items: blogPosts } = useData('blog');
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

    const relatedPosts = (work.relatedPosts || [])
        .map(postSlug => blogPosts.find(p => p.slug === postSlug))
        .filter(Boolean);

    // FAQPage JSON-LD - talablar bo'yicha savollar (narx savollari xizmat sahifasida)
    const faqJsonLd = work.faq?.length ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": work.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
    } : null;

    return (
        <>
            <SEO
                title={work.metaTitle || work.title}
                description={work.metaDescription || work.description}
                jsonLd={faqJsonLd}
            />

            <Breadcrumbs items={[{ name: 'Ilmiy ishlar', path: '/ilmiy-ishlar' }, { name: work.title, path: `/ilmiy-ishlar/${work.slug}` }]} />

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

            {work.faq?.length > 0 && (
                <section className="section section-light">
                    <div className="container">
                        <h2 className="text-center mb-8">{work.title}: ko'p beriladigan savollar</h2>
                        <div className="work-faq">
                            {work.faq.map((item, index) => (
                                <details key={index} className="work-faq-item">
                                    <summary>{item.question}</summary>
                                    <p>{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {relatedPosts.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2 className="text-center mb-8">Foydali maqolalar</h2>
                        <div className="work-related-posts">
                            {relatedPosts.map(post => (
                                <Link to={`/blog/${post.slug}`} key={post.slug} className="work-related-post">
                                    <span className="work-related-category">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <span className="work-related-more">O'qish →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default ScientificWorkDetail;
