import { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import { useSiteSettings } from '../../context/SiteSettingsContext';
import './Contact.css';

const Contact = () => {
    const { settings } = useSiteSettings();
    const [formData, setFormData] = useState({
        name: '', phone: '', message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = encodeURIComponent(
            `Ilmiyxizmat.uz\n\nIsm: ${formData.name}\nTelefon: ${formData.phone}\nXabar: ${formData.message}`
        );
        window.open(`${settings.telegramUrl}?text=${text}`, '_blank');
    };

    const contactJsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Ilmiyxizmat.uz - Aloqa",
        "description": "Ilmiyxizmat.uz bilan bog'laning. Telefon, Telegram, email orqali.",
        "url": "https://www.ilmiyxizmat.uz/aloqa",
        "mainEntity": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "telephone": settings.phoneRaw,
            "email": settings.email,
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": settings.phoneRaw,
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
                description={`Ilmiyxizmat.uz bilan bog'laning. Telefon: ${settings.phone}. Telegram: ${settings.telegram}. Email: ${settings.email}. 24/7 aloqadamiz. Bepul konsultatsiya.`}
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
                                    <a href={`tel:${settings.phoneRaw}`}>{settings.phone}</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">💬</span>
                                <div>
                                    <strong>Telegram</strong>
                                    <a href={settings.telegramUrl} target="_blank" rel="noopener noreferrer">{settings.telegram}</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <a href={`mailto:${settings.email}`}>{settings.email}</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">🕐</span>
                                <div>
                                    <strong>Ish vaqti</strong>
                                    <span>{settings.workingHours}</span>
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
                                    placeholder="+998 97 007 33 96"
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
