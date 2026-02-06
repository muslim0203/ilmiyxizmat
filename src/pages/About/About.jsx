import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import './About.css';

const About = () => {
    const team = [
        { name: "Sardor Karimov", role: "Direktor", icon: "👨‍💼" },
        { name: "Malika Rahimova", role: "Bosh muharrir", icon: "👩‍🏫" },
        { name: "Bobur Aliyev", role: "Ilmiy maslahatchi", icon: "👨‍🔬" }
    ];

    const aboutJsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Ilmiyxizmat.uz haqida",
        "description": "Ilmiyxizmat.uz jamoasi haqida ma'lumot. 2017 yildan buyon faoliyat yuritamiz.",
        "url": "https://ilmiyxizmat.uz/biz-haqimizda",
        "mainEntity": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "foundingDate": "2017",
            "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 50
            }
        }
    };

    return (
        <>
            <SEO
                title="Biz haqimizda - Ilmiyxizmat.uz jamoasi"
                description="Ilmiyxizmat.uz - 2017 yildan buyon O'zbekistonda ilmiy xizmatlar ko'rsatib kelmoqdamiz. 7 yillik tajriba, 5000+ muvaffaqiyatli loyiha, 50+ mutaxassis."
                jsonLd={aboutJsonLd}
            />
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-primary">Kompaniya</span>
                    <h1>Ilmiyxizmat.uz haqida - O'zbekistonda ilmiy xizmatlar markazi</h1>
                    <p>7 yillik tajriba, 5000+ muvaffaqiyatli loyiha</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2>Ilmiyxizmat.uz - sizning ilmiy hamkoringiz</h2>
                            <p>
                                Biz 2017 yildan buyon O'zbekiston bo'ylab talabalar va ilmiy xodimlarga
                                yordam berib kelmoqdamiz. Jamoamizda PhD va DSc darajali 50 dan ortiq
                                mutaxassis faoliyat yuritadi.
                            </p>
                            <p>
                                Bizning maqsadimiz - har bir mijozga yuqori sifatli, o'z vaqtida va
                                ishonchli xizmat ko'rsatish. Biz sizning muvaffaqiyatingiz uchun
                                mas'ulyatni o'z zimmamizga olamiz.
                            </p>
                            <div className="about-stats">
                                <div className="about-stat">
                                    <strong>7+</strong>
                                    <span>Yillik tajriba</span>
                                </div>
                                <div className="about-stat">
                                    <strong>5000+</strong>
                                    <span>Bajarilgan ish</span>
                                </div>
                                <div className="about-stat">
                                    <strong>50+</strong>
                                    <span>Mutaxassis</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <div className="about-image-placeholder">📚</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="section-title">
                        <h2>Bizning jamoa</h2>
                        <p>Tajribali mutaxassislar guruhi</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-icon">{member.icon}</div>
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-dark text-center">
                <div className="container">
                    <h2 className="text-white">Biz bilan ishlashni xohlaysizmi?</h2>
                    <p className="text-muted mb-6">Buyurtma bering yoki bepul konsultatsiya oling</p>
                    <Link to="/buyurtma" className="btn btn-gold btn-lg">Buyurtma berish</Link>
                </div>
            </section>
        </>
    );
};

export default About;
