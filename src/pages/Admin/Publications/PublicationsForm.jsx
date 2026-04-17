import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const PublicationsForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getById, save } = useData('publications');
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        icon: '',
        price: '',
        timeline: '',
        benefits: '',
        requirements: ''
    });

    useEffect(() => {
        if (isEditMode) {
            const pub = getById(id);
            if (pub) {
                setFormData({
                    ...pub,
                    benefits: Array.isArray(pub.benefits) ? pub.benefits.join('\n') : (pub.benefits || ''),
                    requirements: Array.isArray(pub.requirements) ? pub.requirements.join('\n') : (pub.requirements || '')
                });
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

        const dataToSave = {
            ...formData,
            benefits: formData.benefits ? formData.benefits.split('\n').map(s => s.trim()).filter(Boolean) : [],
            requirements: formData.requirements ? formData.requirements.split('\n').map(s => s.trim()).filter(Boolean) : []
        };
        if (isEditMode) {
            dataToSave.id = Number(id);
        }

        try {
            await save(dataToSave);
            navigate('/admin/publications');
        } catch (err) {
            alert('Saqlashda xatolik: ' + err.message);
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>{isEditMode ? 'Nashrni Tahrirlash' : 'Yangi Nashr Qo\'shish'}</h2>
            </div>

            <div className="admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nomi</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Masalan: OAK jurnallari"
                        />
                    </div>

                    <div className="form-group">
                        <label>Slug (URL uchun)</label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                required
                                placeholder="oak-jurnallar"
                                style={{ flex: 1 }}
                            />
                            <button type="button" onClick={generateSlug} className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                                Generatsiya
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Tavsif</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Nashr haqida tavsif"
                        />
                    </div>

                    <div className="form-group">
                        <label>Icon (emoji)</label>
                        <input
                            type="text"
                            name="icon"
                            value={formData.icon}
                            onChange={handleChange}
                            placeholder="🏛️"
                            style={{ width: '80px' }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>Narx</label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="1 000 000"
                            />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>Muddat</label>
                            <input
                                type="text"
                                name="timeline"
                                value={formData.timeline}
                                onChange={handleChange}
                                placeholder="1-3 oy"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Afzalliklar (har bir qatorda bitta)</label>
                        <textarea
                            name="benefits"
                            value={formData.benefits}
                            onChange={handleChange}
                            rows="4"
                            placeholder={"Tezkor nashr\nSifat kafolati\nRasmiy sertifikat"}
                        />
                    </div>

                    <div className="form-group">
                        <label>Talablar (har bir qatorda bitta)</label>
                        <textarea
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            rows="4"
                            placeholder={"Maqola matni\nMuallif ma'lumotlari\nAnnotatsiya"}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="submit" className="login-btn">
                            Saqlash
                        </button>
                        <button type="button" onClick={() => navigate('/admin/publications')} className="logout-btn">
                            Bekor qilish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default PublicationsForm;
