import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../lib/useData';

const StatCard = ({ title, count, description, link, color }) => (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderLeft: `4px solid ${color}`,
            transition: 'transform 0.15s, box-shadow 0.15s',
            cursor: 'pointer'
        }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; }}
        >
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#374151', fontSize: '0.9rem' }}>{title}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0', color }}>{count}</p>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.85rem' }}>{description}</p>
        </div>
    </Link>
);

const AdminDashboard = () => {
    const { items: services } = useData('services');
    const { items: posts } = useData('blog');
    const { items: works } = useData('scientificWorks');
    const { items: publications } = useData('publications');
    const { items: faqs } = useData('faq');

    return (
        <div>
            <h1 style={{ marginBottom: '0.5rem' }}>Dashboard</h1>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                Xush kelibsiz! Quyida barcha bo'limlar statistikasi ko'rsatilgan.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem'
            }}>
                <StatCard
                    title="Xizmatlar"
                    count={services.length}
                    description="Jami xizmatlar"
                    link="/admin/services"
                    color="#2563eb"
                />
                <StatCard
                    title="Blog Maqolalari"
                    count={posts.length}
                    description="Jami maqolalar"
                    link="/admin/blog"
                    color="#059669"
                />
                <StatCard
                    title="Ilmiy Ishlar"
                    count={works.length}
                    description="Jami ilmiy ishlar"
                    link="/admin/scientific-works"
                    color="#7c3aed"
                />
                <StatCard
                    title="Nashrlar"
                    count={publications.length}
                    description="Jami nashrlar"
                    link="/admin/publications"
                    color="#ea580c"
                />
                <StatCard
                    title="FAQ"
                    count={faqs.length}
                    description="Savol-javoblar"
                    link="/admin/faq"
                    color="#0891b2"
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
