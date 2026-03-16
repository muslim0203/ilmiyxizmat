import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Bosh sahifa' },
        { path: '/xizmatlar', label: 'Xizmatlar' },
        { path: '/ilmiy-ishlar', label: 'Ilmiy ishlar' },
        { path: '/nashr', label: 'Nashr' },
        { path: '/narxlar', label: 'Narxlar' },
        { path: '/ai-maqola', label: '✨ AI Maqola', isAI: true },
        { path: '/blog', label: 'Blog' },
        { path: '/biz-haqimizda', label: 'Biz haqimizda' },
    ];

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <span className="logo-icon">📚</span>
                        <span className="logo-text">
                            <span className="logo-main">Ilmiyxizmat</span>
                            <span className="logo-sub">.uz</span>
                        </span>
                    </Link>

                    <nav className="nav">
                        <ul className="nav-list">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${link.isAI ? 'nav-link-ai' : ''} ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link to="/aloqa" className="btn-contact">
                            📞 Aloqa
                        </Link>
                        <Link to="/buyurtma" className="btn btn-gold" style={{ padding: '0.4rem 0.8rem', fontSize: '14px', whiteSpace: 'nowrap' }}>
                            Buyurtma berish
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
