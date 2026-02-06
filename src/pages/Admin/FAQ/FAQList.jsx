import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const FAQList = () => {
    const { items: faqs, remove } = useData('faq');

    const handleDelete = (id) => {
        if (!window.confirm('Haqiqatan ham o\'chirmoqchimisiz?')) return;
        remove(id);
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>Savol-Javoblar (FAQ)</h2>
                <Link to="/admin/faq/new" className="btn-primary">
                    + Yangi Savol
                </Link>
            </div>

            <div className="admin-table-container">
                {faqs.length === 0 ? (
                    <div className="empty-state">
                        <p>Hozircha savollar yo'q. Yangi savol qo'shing.</p>
                    </div>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Savol</th>
                                <th>Javob (qisqa)</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqs.map((faq, index) => (
                                <tr key={faq.id}>
                                    <td>{index + 1}</td>
                                    <td>{faq.question}</td>
                                    <td style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {faq.answer}
                                    </td>
                                    <td>
                                        <Link to={`/admin/faq/${faq.id}`} className="btn-edit">
                                            Tahrirlash
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(faq.id)}
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

export default FAQList;
