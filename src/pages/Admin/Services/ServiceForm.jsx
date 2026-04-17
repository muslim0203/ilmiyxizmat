import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const ServiceForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getById, save } = useData('services');
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '', shortTitle: '', slug: '', description: '',
        icon: '', features: '', price: '', priceNote: 'dan boshlab',
        popular: false, metaTitle: '', metaDescription: ''
    });

    useEffect(() => {
        if (isEditMode) {
            const service = getById(id);
            if (service) {
                setFormData({
                    ...service,
                    features: Array.isArray(service.features)
                        ? service.features.join('\n')
                        : service.features || ''
                });
            }
        }
    }, [id, isEditMode, getById]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const generateSlug = () => {
        const translitMap = {
            '\u0430':'a','\u0431':'b','\u0432':'v','\u0433':'g','\u0434':'d','\u0435':'e',
            '\u0451':'yo','\u0436':'j','\u0437':'z','\u0438':'i','\u0439':'y','\u043a':'k',
            '\u043b':'l','\u043c':'m','\u043d':'n','\u043e':'o','\u043f':'p','\u0440':'r',
            '\u0441':'s','\u0442':'t','\u0443':'u','\u0444':'f','\u0445':'x','\u0446':'ts',
            '\u0447':'ch','\u0448':'sh','\u0449':'sh','\u044a':'','\u044b':'i','\u044c':'',
            '\u044d':'e','\u044e':'yu','\u044f':'ya','\u045e':'o','\u049b':'q','\u0493':'g','\u04b3':'h',
        };
        const slug = formData.title
            .toLowerCase()
            .replace(/o['\u2018\u02BC\u02BB]/g, 'o')
            .replace(/g['\u2018\u02BC\u02BB]/g, 'g')
            .replace(/[\u0430-\u044f\u0451\u045e\u049b\u0493\u04b3]/g, c => translitMap[c] || c)
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
            features: formData.features.split('\n').map(f => f.trim()).filter(Boolean)
        };
        if (isEditMode) dataToSave.id = Number(id);
        try {
            await save(dataToSave);
            navigate('/admin/services');
        } catch (err) {
            alert('Saqlashda xatolik: ' + err.message);
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>{isEditMode ? 'Xizmatni Tahrirlash' : "Yangi Xizmat Qo'shish"}</h2>
            </div>
            <div className="admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Sarlavha (to'liq)</label>
                        <input type="text" name="title" value={formData.title}
                            onChange={handleChange} required placeholder="Masalan: Ilmiy ish yozish xizmati" />
                    </div>
                    <div className="form-group">
                        <label>Qisqa sarlavha</label>
                        <input type="text" name="shortTitle" value={formData.shortTitle}
                            onChange={handleChange} placeholder="Masalan: Ilmiy ish yozish" />
                    </div>
                    <div className="form-group">
                        <label>Slug (URL uchun)</label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input type="text" name="slug" value={formData.slug}
                                onChange={handleChange} required placeholder="ilmiy-ish-yozish"
                                style={{ flex: 1 }} />
                            <button type="button" onClick={generateSlug} className="btn-primary"
                                style={{ whiteSpace: 'nowrap' }}>Generatsiya</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Tavsif</label>
                        <textarea name="description" value={formData.description}
                            onChange={handleChange} rows="3" placeholder="Xizmat haqida qisqa tavsif" />
                    </div>
                    <div className="form-group">
                        <label>Icon (emoji)</label>
                        <input type="text" name="icon" value={formData.icon}
                            onChange={handleChange} placeholder="📝" style={{ width: '80px' }} />
                    </div>
                    <div className="form-group">
                        <label>Xususiyatlar (har bir qator — bitta xususiyat)</label>
                        <textarea name="features" value={formData.features}
                            onChange={handleChange} rows="4"
                            placeholder={"Individual yondashuv\nYuqori sifat kafolati\nO'z vaqtida topshirish"} />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>Narx</label>
                            <input type="text" name="price" value={formData.price}
                                onChange={handleChange} placeholder="200 000" />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label>Narx eslatmasi</label>
                            <input type="text" name="priceNote" value={formData.priceNote}
                                onChange={handleChange} placeholder="dan boshlab" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="checkbox" name="popular" checked={formData.popular}
                                onChange={handleChange} style={{ width: 'auto', marginRight: '8px' }} />
                            Mashhur xizmat (bosh sahifada ko'rinadi)
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Meta Title (SEO)</label>
                        <input type="text" name="metaTitle" value={formData.metaTitle}
                            onChange={handleChange} placeholder="Ilmiy ish yozish xizmati | Ilmiyxizmat.uz" />
                    </div>
                    <div className="form-group">
                        <label>Meta Description (SEO)</label>
                        <textarea name="metaDescription" value={formData.metaDescription}
                            onChange={handleChange} rows="2" placeholder="SEO uchun sahifa tavsifi" />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="submit" className="login-btn">Saqlash</button>
                        <button type="button" onClick={() => navigate('/admin/services')}
                            className="logout-btn">Bekor qilish</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceForm;
