import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../pages/Admin/Admin.css';

const AdminLayout = () => {
    const { signOut } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate('/login');
    };

    const isActive = (path) => {
        if (path === '/admin') {
            return location.pathname === '/admin' ? 'active' : '';
        }
        return location.pathname.startsWith(path) ? 'active' : '';
    };

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    Admin Panel
                </div>
                <nav className="admin-nav">
                    <Link to="/admin" className={isActive('/admin')}>
                        Dashboard
                    </Link>
                    <Link to="/admin/services" className={isActive('/admin/services')}>
                        Xizmatlar
                    </Link>
                    <Link to="/admin/blog" className={isActive('/admin/blog')}>
                        Blog & Yangiliklar
                    </Link>
                    <Link to="/admin/scientific-works" className={isActive('/admin/scientific-works')}>
                        Ilmiy Ishlar
                    </Link>
                    <Link to="/admin/publications" className={isActive('/admin/publications')}>
                        Nashrlar
                    </Link>
                    <Link to="/admin/faq" className={isActive('/admin/faq')}>
                        FAQ
                    </Link>
                </nav>
                <div className="admin-sidebar-footer">
                    <button onClick={handleLogout} className="logout-btn">
                        Chiqish
                    </button>
                </div>
            </aside>
            <main className="admin-content">
                <header className="admin-header">
                    <h3>Ilmiy Xizmat Boshqaruv</h3>
                </header>
                <div className="admin-main">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
