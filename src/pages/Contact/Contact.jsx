import { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Ilmiyxizmat.uz%0A%0AIsm: ${formData.name}%0ATelefon: ${formData.phone}%0AXabar: ${formData.message}`;
        window.open(`https://t.me/ilmiyxizmat?text=${text}`, '_blank');
    };

    const contactJsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Ilmiyxizmat.uz - Aloqa",
        "description": "Ilmiyxizmat.uz bilan bog'laning. Telefon, Telegram, email orqali.",
        "url": "https://ilmiyxizmat.uz/aloqa",
        "mainEntity": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "telephone": "+998901234567",
            "email": "info@ilmiyxizmat.uz",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+998901234567",
                    "contactType": "customer service",
                    "availableLanguage": ["uz", "ru"],
                    "hoursAvailable": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "09:00",
                        "closes": "21:00"
                    }
                }
            ]
        }
    };

    return (
        <>
            <SEO
                title="Aloqa - Biz bilan bog'laning"
                description="Ilmiyxizmat.uz bilan bog'laning. Telefon: +998 90 123 45 67. Telegram: @ilmiyxizmat. Email: info@ilmiyxizmat.uz. 24/7 aloqadamiz. Bepul konsultatsiya."
                jsonLd={contactJsonLd}
            />
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-primary">Aloqa</span>
                    <h1>Biz bilan bog'laning - bepul konsultatsiya</h1>
                    <p>Savollaringizga javob berishdan mamnunmiz</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Bog'lanish ma'lumotlari</h2>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <div>
                                    <strong>Telefon</strong>
                                    <a href="tel:+998901234567">+998 90 123 45 67</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">💬</span>
                                <div>
                                    <strong>Telegram</strong>
                                    <a href="https://t.me/ilmiyxizmat" target="_blank" rel="noopener noreferrer">@ilmiyxizmat</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <a href="mailto:info@ilmiyxizmat.uz">info@ilmiyxizmat.uz</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">🕐</span>
                                <div>
                                    <strong>Ish vaqti</strong>
                                    <span>Dush-Shan: 09:00 - 21:00</span>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h2>Xabar yuboring</h2>
                            <div className="form-group">
                                <label className="form-label">Ismingiz</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Ismingizni kiriting"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Telefon</label>
                                <input
                                    type="tel"
                                    className="form-input"
                                    placeholder="+998 90 123 45 67"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Xabar</label>
                                <textarea
                                    className="form-textarea"
                                    placeholder="Xabaringizni yozing..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-gold btn-lg">Yuborish</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
