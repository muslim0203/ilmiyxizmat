import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const ServicesList = () => {
    const { items: services, remove } = useData('services');

    const handleDelete = (id) => {
        if (!window.confirm('Haqiqatan ham o\'chirmoqchimisiz?')) return;
        remove(id);
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>Xizmatlar</h2>
                <Link to="/admin/services/new" className="btn-primary">
                    + Yangi Xizmat
                </Link>
            </div>

            <div className="admin-table-container">
                {services.length === 0 ? (
                    <div className="empty-state">
                        <p>Hozircha xizmatlar yo'q.</p>
                    </div>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Nomi</th>
                                <th>Slug</th>
                                <th>Narxi</th>
                                <th>Mashhur</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service.id}>
                                    <td>{service.icon}</td>
                                    <td>{service.shortTitle || service.title}</td>
                                    <td><code>{service.slug}</code></td>
                                    <td>{service.price} so'm</td>
                                    <td>
                                        <span style={{
                                            padding: '2px 8px',
                                            borderRadius: '4px',
                                            background: service.popular ? '#dcfce7' : '#f3f4f6',
                                            color: service.popular ? '#166534' : '#374151',
                                            fontSize: '0.8rem'
                                        }}>
                                            {service.popular ? 'Ha' : 'Yo\'q'}
                                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/admin/services/${service.id}`} className="btn-edit">
                                            Tahrirlash
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(service.id)}
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

export default ServicesList;
