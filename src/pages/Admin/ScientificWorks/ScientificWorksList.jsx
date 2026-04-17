import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const ScientificWorksList = () => {
    const { items: works, loading, remove } = useData('scientificWorks');

    const handleDelete = (id) => {
        if (!window.confirm('Haqiqatan ham o\'chirmoqchimisiz?')) return;
        remove(id);
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>Ilmiy Ishlar</h2>
                <Link to="/admin/scientific-works/new" className="btn-primary">
                    + Yangi Ilmiy Ish
                </Link>
            </div>

            <div className="admin-table-container">
            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>Yuklanmoqda...</div>
            ) : works.length === 0 ? (
                    <div className="empty-state">
                        <p>Hozircha ilmiy ishlar yo'q.</p>
                    </div>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Nomi</th>
                                <th>Slug</th>
                                <th>Muddat</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {works.map((work) => (
                                <tr key={work.id}>
                                    <td>{work.icon}</td>
                                    <td>{work.title}</td>
                                    <td><code>{work.slug}</code></td>
                                    <td>{work.duration || '-'}</td>
                                    <td>
                                        <Link to={`/admin/scientific-works/${work.id}`} className="btn-edit">
                                            Tahrirlash
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(work.id)}
                                            className="btn-delete"
                                        >
                                            O'chirish
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ScientificWorksList;
