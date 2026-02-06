import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import './ScientificWorks.css';

const ScientificWorks = () => {
    const { items: scientificWorks } = useData('scientificWorks');

    const worksJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Ilmiy ish turlari",
        "description": "BMI, magistrlik va doktorlik dissertatsiyalari, ilmiy maqola, monografiya va boshqa ilmiy ishlar haqida ma'lumot.",
        "url": "https://ilmiyxizmat.uz/ilmiy-ishlar",
        "numberOfItems": scientificWorks.length,
        "itemListElement": scientificWorks.map((work, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": work.title,
            "url": `https://ilmiyxizmat.uz/ilmiy-ishlar/${work.slug}`
        }))
    };

    return (
        <>
            <SEO
                title="Ilmiy ish turlari - BMI, Dissertatsiya, Ilmiy maqola"
                description="Ilmiy ish turlari haqida batafsil ma'lumot: Bitiruv malakaviy ishi (BMI), magistrlik dissertatsiyasi, doktorlik dissertatsiyasi, ilmiy maqola, monografiya, kurs ishi."
                jsonLd={worksJsonLd}
            />
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-primary">Ilmiy ishlar</span>
                    <h1>Ilmiy ish turlari - BMI, dissertatsiya, maqola va boshqalar</h1>
                    <p>Har bir ilmiy ish turi haqida batafsil ma'lumot va talablar</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="works-grid">
                        {scientificWorks.map(work => (
                            <Link to={`/ilmiy-ishlar/${work.slug}`} key={work.id} className="work-card">
                                <div className="work-icon">{work.icon}</div>
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                                <div className="work-meta">
                                    <span>⏱️ {work.duration}</span>
                                </div>
                                <span className="work-link">Batafsil →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-dark text-center">
                <div className="container">
                    <h2 className="text-white">Ilmiy ishingiz bilan yordam kerakmi?</h2>
                    <p className="text-muted mb-6">Professional xizmatlarimizdan foydalaning</p>
                    <Link to="/xizmatlar" className="btn btn-gold btn-lg">Xizmatlarni ko'rish</Link>
                </div>
            </section>
        </>
    );
};

export default ScientificWorks;
