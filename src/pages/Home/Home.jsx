import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import { useSiteSettings } from '../../context/SiteSettingsContext';
import './Home.css';

const Home = () => {
    const { settings } = useSiteSettings();
    const { items: services } = useData('services');
    const popularServices = services.filter(s => s.popular);

    const stats = [
        { number: '5000+', label: "Bajarilgan ishlar" },
        { number: '98%', label: "Mijozlar mamnuniyati" },
        { number: '50+', label: "Mutaxassislar" },
        { number: '7 yil', label: "Tajriba" }
    ];

    // LocalBusiness + ProfessionalService JSON-LD
    const homeJsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ilmiyxizmat.uz",
        "url": "https://ilmiyxizmat.uz",
        "logo": "https://ilmiyxizmat.uz/logo.png",
        "image": "https://ilmiyxizmat.uz/og-image.jpg",
        "description": "O'zbekistonda №1 ilmiy ishlar yozish xizmati. BMI, dissertatsiya, ilmiy maqola, kurs ishi, monografiya tayyorlash va nashr qilish.",
        "telephone": settings.phoneRaw,
        "email": settings.email,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "UZ",
            "addressLocality": "Toshkent",
            "addressRegion": "Toshkent"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.2995",
            "longitude": "69.2401"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "21:00"
        },
        "priceRange": "200000 - 5000000 UZS",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "5000",
            "bestRating": "5"
        },
        "sameAs": [
            settings.telegramUrl,
            settings.instagramUrl
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Ilmiy xizmatlar",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "BMI yozish",
                        "url": "https://ilmiyxizmat.uz/xizmatlar/bmi-yozish"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Magistrlik dissertatsiyasi yozish",
                        "url": "https://ilmiyxizmat.uz/xizmatlar/magistrlik-dissertatsiyasi-yozish"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ilmiy maqola yozish",
                        "url": "https://ilmiyxizmat.uz/xizmatlar/ilmiy-maqola-yozish"
                    }
                }
            ]
        }
    };

    return (
        <>
            <SEO
                title="Bosh sahifa"
                description="Ilmiyxizmat.uz - O'zbekistonda №1 ilmiy ishlar yozish xizmati. BMI yozish, magistrlik va doktorlik dissertatsiyasi, ilmiy maqola, kurs ishi tayyorlash. 5000+ bajarilgan ish, 98% mijozlar mamnuniyati. Bepul konsultatsiya!"
                jsonLd={homeJsonLd}
            />
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">🎓 №1 Ilmiy xizmatlar platformasi</div>
                        <h1>
                            BMI yozish, dissertatsiya va ilmiy maqola tayyorlash - <span className="text-gradient">professional ilmiy xizmatlar</span>
                        </h1>
                        <p className="hero-text">
                            Bitiruv malakaviy ishi (BMI), magistrlik va doktorlik dissertatsiyasi, ilmiy maqola, kurs ishi va boshqa ilmiy ishlarni yuqori sifatda tayyorlab beramiz.
                            Tajribali mutaxassislar jamoasi sizga xizmat ko'rsatadi.
                        </p>
                        <div className="hero-actions">
                            <Link to="/buyurtma" className="btn btn-gold btn-lg">
                                Buyurtma berish
                            </Link>
                            <Link to="/xizmatlar" className="btn btn-white btn-lg">
                                Xizmatlarni ko'rish
                            </Link>
                        </div>
                        <div className="hero-trust">
                            <span>Kafolat</span>
                            <span>O'z vaqtida</span>
                            <span>Maxfiylik</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Services */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <span className="badge badge-primary">Xizmatlar</span>
                        <h2>Mashhur ilmiy xizmatlarimiz</h2>
                        <p>BMI yozish, dissertatsiya tayyorlash, ilmiy maqola va boshqa eng ko'p so'raladigan xizmatlar</p>
                    </div>
                    <div className="services-grid">
                        {popularServices.map(service => (
                            <Link to={`/xizmatlar/${service.slug}`} key={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.shortTitle}</h3>
                                <p>{service.description.substring(0, 100)}...</p>
                                <div className="service-price">
                                    {service.price} so'm <span>{service.priceNote}</span>
                                </div>
                                <div className="service-link">Batafsil →</div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/xizmatlar" className="btn btn-primary btn-lg">
                            Barcha xizmatlar
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-title">
                        <span className="badge badge-gold">Afzalliklar</span>
                        <h2>Nega aynan Ilmiyxizmat.uz ni tanlashingiz kerak?</h2>
                        <p>O'zbekistonda ishonchli ilmiy xizmatlar markazi</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">👨‍🎓</div>
                            <h4>Tajribali mutaxassislar</h4>
                            <p>PhD va DSc darajali olimlar, 10+ yillik tajriba</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h4>Tez bajarish</h4>
                            <p>Shoshilinch buyurtmalar uchun 24 soatdan boshlab</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h4>100% Maxfiylik</h4>
                            <p>Ma'lumotlaringiz to'liq himoyalangan</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">✅</div>
                            <h4>Sifat kafolati</h4>
                            <p>Bepul tuzatishlar va qayta ishlash</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💰</div>
                            <h4>Qulay narxlar</h4>
                            <p>Bo'lib to'lash imkoniyati mavjud</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📞</div>
                            <h4>24/7 Qo'llab-quvvatlash</h4>
                            <p>Telegram orqali tezkor aloqa</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ilmiy ishingiz bilan yordam kerakmi?</h2>
                        <p>Bepul konsultatsiya oling va loyihangizni muhokama qiling</p>
                        <div className="cta-actions">
                            <Link to="/buyurtma" className="btn btn-gold btn-lg">
                                Buyurtma berish
                            </Link>
                            <a href={settings.telegramUrl} className="btn btn-white btn-lg" target="_blank" rel="noopener noreferrer">
                                Telegram orqali bog'lanish
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
