import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-icon">📚</span>
                            <span className="logo-text">
                                <span className="logo-main">Ilmiyxizmat</span>
                                <span className="logo-sub">.uz</span>
                            </span>
                        </Link>
                        <p className="footer-desc">
                            O'zbekistonda ilmiy ishlar yozish, tahrirlash va nashr qilish bo'yicha professional xizmatlar. BMI, dissertatsiya, ilmiy maqola tayyorlash.
                        </p>
                        <div className="footer-contact">
                            <a href="tel:+998901234567">📞 +998 90 123 45 67</a>
                            <a href="mailto:info@ilmiyxizmat.uz">✉️ info@ilmiyxizmat.uz</a>
                        </div>
                    </div>

                    {/* Xizmatlar */}
                    <div className="footer-links">
                        <h4>Xizmatlar</h4>
                        <ul>
                            <li><Link to="/xizmatlar/bmi-yozish">BMI yozish</Link></li>
                            <li><Link to="/xizmatlar/magistrlik-dissertatsiyasi-yozish">Magistrlik dissertatsiyasi</Link></li>
                            <li><Link to="/xizmatlar/ilmiy-maqola-yozish">Ilmiy maqola yozish</Link></li>
                            <li><Link to="/xizmatlar/antiplagiat-tekshirish">Antiplagiat tekshirish</Link></li>
                            <li><Link to="/xizmatlar/kurs-ishi-yozish">Kurs ishi yozish</Link></li>
                            <li><Link to="/xizmatlar">Barcha xizmatlar →</Link></li>
                        </ul>
                    </div>

                    {/* Sahifalar */}
                    <div className="footer-links">
                        <h4>Sahifalar</h4>
                        <ul>
                            <li><Link to="/ilmiy-ishlar">Ilmiy ishlar turlari</Link></li>
                            <li><Link to="/nashr">Ilmiy nashr xizmatlari</Link></li>
                            <li><Link to="/blog">Blog - foydali maqolalar</Link></li>
                            <li><Link to="/narxlar">Narxlar</Link></li>
                            <li><Link to="/savol-javob">Ko'p beriladigan savollar</Link></li>
                        </ul>
                    </div>

                    {/* Qo'shimcha */}
                    <div className="footer-links">
                        <h4>Qo'shimcha</h4>
                        <ul>
                            <li><Link to="/biz-haqimizda">Biz haqimizda</Link></li>
                            <li><Link to="/aloqa">Aloqa</Link></li>
                            <li><Link to="/buyurtma">Buyurtma berish</Link></li>
                            <li><Link to="/privacy-policy">Maxfiylik siyosati</Link></li>
                            <li><Link to="/terms">Foydalanish shartlari</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Ilmiyxizmat.uz — Barcha huquqlar himoyalangan</p>
                    <div className="footer-social">
                        <a href="https://t.me/ilmiyxizmat" target="_blank" rel="noopener noreferrer">Telegram</a>
                        <a href="https://instagram.com/ilmiyxizmat" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
