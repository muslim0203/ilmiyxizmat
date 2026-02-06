import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const ServiceForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getById, save } = useData('services');
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        shortTitle: '',
        slug: '',
        description: '',
        icon: '',
        features: '',
        price: '',
        priceNote: 'dan boshlab',
        popular: false,
        metaTitle: '',
        metaDescription: ''
    });

    useEffect(() => {
        if (isEditMode) {
            const service = getById(id);
            if (service) {
                setFormData({
                    ...service,
                    features: Array.isArray(service.features) ? service.features.join('\n') : service.features || ''
                });
            }
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSave = {
            ...formData,
            features: formData.features
                .split('\n')
                .map(f => f.trim())
                .filter(f => f.length > 0)
        };

        if (isEditMode) {
            dataToSave.id = Number(id);
        }

        save(dataToSave);
        navigate('/admin/services');
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>{isEditMode ? 'Xizmatni Tahrirlash' : 'Yangi Xizmat Qo\'shish'}</h2>
            </div>

            <div className="admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Sarlavha (to'liq)</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Masalan: Ilmiy ish yozish xizmati"
                        />
                    </div>

                    <div className="form-group">
                        <label>Qisqa sarlavha</label>
                        <input
                            type="text"
                            name="shortTitle"
                            value={formData.shortTitle}
                            onChange={handleChange}
                            placeholder="Masalan: Ilmiy ish yozish"
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
                                placeholder="ilmiy-ish-yozish"
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
                            placeholder="Xizmat haqida qisqa tavsif"
                        />
                    </div>

                    <div className="form-group">
                        <label>Icon (emoji)</label>
                        <input
                            type="text"
                            name="icon"
                            value={formData.icon}
                            onChange={handleChange}
                            placeholder="📝"
                            style={{ width: '80px' }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Xususiyatlar (har bir qator — bitta xususiyat)</label>
                        <textarea
                            name="features"
                            value={formData.features}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Individual yondashuv&#10;Yuqori sifat kafolati&#10;O'z vaqtida topshirish"
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
                                placeholder="200 000"
                            />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>Narx eslatmasi</label>
                            <input
                                type="text"
                                name="priceNote"
                                value={formData.priceNote}
                                onChange={handleChange}
                                placeholder="dan boshlab"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                name="popular"
                                checked={formData.popular}
                                onChange={handleChange}
                                style={{ width: 'auto', marginRight: '8px' }}
                            />
                            Mashhur xizmat (bosh sahifada ko'rinadi)
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Meta Title (SEO)</label>
                        <input
                            type="text"
                            name="metaTitle"
                            value={formData.metaTitle}
                            onChange={handleChange}
                            placeholder="Ilmiy ish yozish xizmati | Ilmiyxizmat.uz"
                        />
                    </div>

                    <div className="form-group">
                        <label>Meta Description (SEO)</label>
                        <textarea
                            name="metaDescription"
                            value={formData.metaDescription}
                            onChange={handleChange}
                            rows="2"
                            placeholder="SEO uchun sahifa tavsifi"
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="submit" className="login-btn">
                            Saqlash
                        </button>
                        <button type="button" onClick={() => navigate('/admin/services')} className="logout-btn">
                            Bekor qilish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceForm;
