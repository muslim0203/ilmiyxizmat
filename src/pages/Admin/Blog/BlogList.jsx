import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const BlogList = () => {
    const { items: posts, remove } = useData('blog');

    const handleDelete = (id) => {
        if (!window.confirm('Haqiqatan ham o\'chirmoqchimisiz?')) return;
        remove(id);
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>Blog & Yangiliklar</h2>
                <Link to="/admin/blog/new" className="btn-primary">
                    + Yangi Maqola
                </Link>
            </div>

            <div className="admin-table-container">
                {posts.length === 0 ? (
                    <div className="empty-state">
                        <p>Hozircha maqolalar yo'q.</p>
                    </div>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Sarlavha</th>
                                <th>Kategoriya</th>
                                <th>Sana</th>
                                <th>O'qish vaqti</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>
                                        <span style={{
                                            padding: '2px 8px',
                                            borderRadius: '4px',
                                            background: '#e0e7ff',
                                            color: '#3730a3',
                                            fontSize: '0.8rem'
                                        }}>
                                            {post.category || '-'}
                                        </span>
                                    </td>
                                    <td>{post.date || '-'}</td>
                                    <td>{post.readTime || '-'}</td>
                                    <td>
                                        <Link to={`/admin/blog/${post.id}`} className="btn-edit">
                                            Tahrirlash
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post.id)}
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

export default BlogList;
