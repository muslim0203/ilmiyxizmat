import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const BlogForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getById, save } = useData('blog');
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        readTime: ''
    });

    useEffect(() => {
        if (isEditMode) {
            const post = getById(id);
            if (post) {
                setFormData({ ...post });
            }
        }
    }, [id, isEditMode, getById]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const generateSlug = () => {
        const slug = formData.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        setFormData(prev => ({ ...prev, slug }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSave = { ...formData };
        if (isEditMode) {
            dataToSave.id = Number(id);
        }

        try {
            await save(dataToSave);
            navigate('/admin/blog');
        } catch (err) {
            alert('Saqlashda xatolik: ' + err.message);
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>{isEditMode ? 'Maqolani Tahrirlash' : 'Yangi Maqola Qo\'shish'}</h2>
            </div>

            <div className="admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Sarlavha</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Maqola sarlavhasi"
                        />
                    </div>

                    <div className="form-group">
                        <label>Slug (URL)</label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                required
                                placeholder="maqola-slug"
                                style={{ flex: 1 }}
                            />
                            <button type="button" onClick={generateSlug} className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                                Generatsiya
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Qisqa tavsif (excerpt)</label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Maqola haqida qisqa ma'lumot"
                        />
                    </div>

                    <div className="form-group">
                        <label>Maqola matni (content)</label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="12"
                            placeholder="Maqolaning to'liq matni..."
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>Kategoriya</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Masalan: Formatlash"
                            />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>O'qish vaqti</label>
                            <input
                                type="text"
                                name="readTime"
                                value={formData.readTime}
                                onChange={handleChange}
                                placeholder="10 daqiqa"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Sana</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="submit" className="login-btn">
                            Saqlash
                        </button>
                        <button type="button" onClick={() => navigate('/admin/blog')} className="logout-btn">
                            Bekor qilish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default BlogForm;
