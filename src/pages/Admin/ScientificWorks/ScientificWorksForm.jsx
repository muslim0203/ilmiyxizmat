import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const ScientificWorksForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getById, save } = useData('scientificWorks');
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        icon: '',
        requirements: '',
        duration: '',
        relatedService: '',
        metaTitle: '',
        metaDescription: ''
    });

    useEffect(() => {
        if (isEditMode) {
            const work = getById(id);
            if (work) {
                setFormData({
                    ...work,
                    requirements: Array.isArray(work.requirements) ? work.requirements.join('\n') : work.requirements || ''
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
            requirements: formData.requirements
                .split('\n')
                .map(r => r.trim())
                .filter(r => r.length > 0)
        };

        if (isEditMode) {
            dataToSave.id = Number(id);
        }

        try {
            await save(dataToSave);
            navigate('/admin/scientific-works');
        } catch (err) {
            alert('Saqlashda xatolik: ' + err.message);
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>{isEditMode ? 'Ilmiy Ishni Tahrirlash' : 'Yangi Ilmiy Ish Qo\'shish'}</h2>
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
                            placeholder="Masalan: Bitiruv malakaviy ishi (BMI)"
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
                                placeholder="bitiruv-malakaviy-ishi-bmi"
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
                            placeholder="Ilmiy ish haqida tavsif"
                        />
                    </div>

                    <div className="form-group">
                        <label>Icon (emoji)</label>
                        <input
                            type="text"
                            name="icon"
                            value={formData.icon}
                            onChange={handleChange}
                            placeholder="🎓"
                            style={{ width: '80px' }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Talablar (har bir qator — bitta talab)</label>
                        <textarea
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            rows="5"
                            placeholder="40-60 bet hajm&#10;Antiplagiat 70%+&#10;3 bob + ilova"
                        />
                    </div>

                    <div className="form-group">
                        <label>Muddat</label>
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="2-3 oy"
                        />
                    </div>

                    <div className="form-group">
                        <label>Bog'liq xizmat slug'i</label>
                        <input
                            type="text"
                            name="relatedService"
                            value={formData.relatedService}
                            onChange={handleChange}
                            placeholder="bmi-yozish"
                        />
                    </div>

                    <div className="form-group">
                        <label>Meta Title (SEO)</label>
                        <input
                            type="text"
                            name="metaTitle"
                            value={formData.metaTitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Meta Description (SEO)</label>
                        <textarea
                            name="metaDescription"
                            value={formData.metaDescription}
                            onChange={handleChange}
                            rows="2"
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="submit" className="login-btn">
                            Saqlash
                        </button>
                        <button type="button" onClick={() => navigate('/admin/scientific-works')} className="logout-btn">
                            Bekor qilish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ScientificWorksForm;
