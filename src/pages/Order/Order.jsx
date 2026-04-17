import { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import { useSiteSettings } from '../../context/SiteSettingsContext';
import './Order.css';

const Order = () => {
    const { settings } = useSiteSettings();
    const { items: services } = useData('services');
    const [formData, setFormData] = useState({
        name: '', phone: '', service: '', deadline: '', description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = encodeURIComponent(
            `🆕 YANGI BUYURTMA\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n📋 Xizmat: ${formData.service}\n📅 Muddat: ${formData.deadline}\n📝 Tavsif: ${formData.description}`
        );
        window.open(`${settings.telegramUrl}?text=${text}`, '_blank');
    };

    return (
        <>
            <SEO
                title="Buyurtma berish - Ilmiy ish yozish xizmatiga buyurtma"
                description="Ilmiy ish yozish xizmatiga buyurtma bering. BMI, dissertatsiya, ilmiy maqola, kurs ishi. 1 soat ichida javob beramiz. Bepul konsultatsiya."
            />
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-gold">Buyurtma</span>
                    <h1>Ilmiy ish yozish xizmatiga buyurtma berish</h1>
                    <p>Formani to'ldiring, 1 soat ichida javob beramiz</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="order-grid">
                        <form className="order-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Ismingiz *</label>
                                <input type="text" className="form-input" placeholder="To'liq ismingiz"
                                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Telefon raqam *</label>
                                <input type="tel" className="form-input" placeholder="+998 97 007 33 96"
                                    value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Xizmat turi *</label>
                                <select className="form-select" value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })} required>
                                    <option value="">Tanlang</option>
                                    {services.map(s => <option key={s.id} value={s.shortTitle}>{s.shortTitle}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Muddat</label>
                                <input type="text" className="form-input" placeholder="Masalan: 2 hafta"
                                    value={formData.deadline} onChange={(e) => setFormData({ ...formData, deadline: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Qo'shimcha ma'lumot</label>
                                <textarea className="form-textarea" placeholder="Ish haqida batafsil yozing..."
                                    value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
                            </div>
                            <button type="submit" className="btn btn-gold btn-lg">Yuborish</button>
                        </form>

                        <div className="order-info">
                            <h3>Nima uchun biz?</h3>
                            <ul>
                                <li>7 yillik tajriba</li>
                                <li>50+ mutaxassis</li>
                                <li>Kafolat va maxfiylik</li>
                                <li>O'z vaqtida topshirish</li>
                            </ul>
                            <div className="order-contact">
                                <h4>Yoki to'g'ridan-to'g'ri bog'laning:</h4>
                                <a href={settings.telegramUrl} className="btn btn-outline btn-lg">Telegram</a>
                                <a href={`tel:${settings.phoneRaw}`} className="btn btn-outline btn-lg">Qo'ng'iroq</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Order;
