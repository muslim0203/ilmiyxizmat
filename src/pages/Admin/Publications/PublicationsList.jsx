import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const PublicationsList = () => {
    const { items: publications, loading, remove } = useData('publications');

    const handleDelete = (id) => {
        if (!window.confirm('Haqiqatan ham o\'chirmoqchimisiz?')) return;
        remove(id);
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>Nashrlar</h2>
                <Link to="/admin/publications/new" className="btn-primary">
                    + Yangi Nashr
                </Link>
            </div>

            <div className="admin-table-container">
            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>Yuklanmoqda...</div>
            ) : publications.length === 0 ? (
                    <div className="empty-state">
                        <p>Hozircha nashrlar yo'q.</p>
                    </div>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Nomi</th>
                                <th>Slug</th>
                                <th>Narxi</th>
                                <th>Muddat</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {publications.map((pub) => (
                                <tr key={pub.id}>
                                    <td>{pub.icon}</td>
                                    <td>{pub.title}</td>
                                    <td><code>{pub.slug}</code></td>
                                    <td>{pub.price} so'm</td>
                                    <td>{pub.timeline || '-'}</td>
                                    <td>
                                        <Link to={`/admin/publications/${pub.id}`} className="btn-edit">
                                            Tahrirlash
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(pub.id)}
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

export default PublicationsList;
