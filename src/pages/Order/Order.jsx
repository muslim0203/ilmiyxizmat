import { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import { services } from '../../data/services';
import './Order.css';

const Order = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', service: '', deadline: '', description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `🆕 YANGI BUYURTMA%0A%0A👤 Ism: ${formData.name}%0A📞 Telefon: ${formData.phone}%0A📋 Xizmat: ${formData.service}%0A📅 Muddat: ${formData.deadline}%0A📝 Tavsif: ${formData.description}`;
        window.open(`https://t.me/ilmiyxizmat?text=${text}`, '_blank');
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
                                <input type="tel" className="form-input" placeholder="+998 90 123 45 67"
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
                                <a href="https://t.me/ilmiyxizmat" className="btn btn-outline btn-lg">Telegram</a>
                                <a href="tel:+998901234567" className="btn btn-outline btn-lg">Qo'ng'iroq</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Order;
