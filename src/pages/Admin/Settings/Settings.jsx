import { useState } from 'react';
import { useSiteSettings } from '../../../context/SiteSettingsContext';

const Settings = () => {
    const { settings, updateSettings, resetSettings } = useSiteSettings();
    const [formData, setFormData] = useState({ ...settings });
    const [saved, setSaved] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSettings(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const handleReset = () => {
        if (window.confirm('Barcha sozlamalar boshlang\'ich holatga qaytariladi. Davom etsinmi?')) {
            resetSettings();
            setFormData({
                phone: '+998 90 123 45 67',
                phoneRaw: '+998901234567',
                telegram: '@ilmiyxizmat',
                telegramUrl: 'https://t.me/ilmiyxizmat',
                email: 'info@ilmiyxizmat.uz',
                instagram: 'ilmiyxizmat',
                instagramUrl: 'https://instagram.com/ilmiyxizmat',
                workingHours: 'Dush-Shan: 09:00 - 21:00',
                address: 'Toshkent, O\'zbekiston',
            });
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        fontSize: '1rem',
        transition: 'border-color 0.15s',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '600',
        color: '#374151',
        fontSize: '0.9rem',
    };

    const groupStyle = {
        marginBottom: '1.25rem',
    };

    const hintStyle = {
        fontSize: '0.8rem',
        color: '#9ca3af',
        marginTop: '0.25rem',
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                    <h1 style={{ margin: 0 }}>Sayt Sozlamalari</h1>
                    <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0' }}>
                        Telefon, Telegram, email va boshqa aloqa ma'lumotlarini boshqaring
                    </p>
                </div>
            </div>

            {saved && (
                <div style={{
                    background: '#d1fae5',
                    color: '#065f46',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    marginBottom: '1.5rem',
                    fontWeight: '500',
                }}>
                    Sozlamalar muvaffaqiyatli saqlandi!
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                }}>
                    <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#1f2937', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.75rem' }}>
                        Telefon
                    </h3>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Telefon raqam (ko'rsatiladigan)</label>
                        <input
                            style={inputStyle}
                            type="text"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+998 90 123 45 67"
                        />
                        <p style={hintStyle}>Saytda foydalanuvchilarga ko'rinadigan format</p>
                    </div>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Telefon raqam (link uchun)</label>
                        <input
                            style={inputStyle}
                            type="text"
                            value={formData.phoneRaw}
                            onChange={(e) => handleChange('phoneRaw', e.target.value)}
                            placeholder="+998901234567"
                        />
                        <p style={hintStyle}>Bo'sh joysiz, tel: linki uchun ishlatiladi</p>
                    </div>
                </div>

                <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                }}>
                    <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#1f2937', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.75rem' }}>
                        Ijtimoiy tarmoqlar
                    </h3>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Telegram username</label>
                        <input
                            style={inputStyle}
                            type="text"
                            value={formData.telegram}
                            onChange={(e) => handleChange('telegram', e.target.value)}
                            placeholder="@ilmiyxizmat"
                        />
                    </div>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Telegram link</label>
                        <input
                            style={inputStyle}
                            type="url"
                            value={formData.telegramUrl}
                            onChange={(e) => handleChange('telegramUrl', e.target.value)}
                            placeholder="https://t.me/ilmiyxizmat"
                        />
                    </div>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Instagram username</label>
                        <input
                            style={inputStyle}
                            type="text"
                            value={formData.instagram}
                            onChange={(e) => handleChange('instagram', e.target.value)}
                            placeholder="ilmiyxizmat"
                        />
                    </div>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Instagram link</label>
                        <input
                            style={inputStyle}
                            type="url"
                            value={formData.instagramUrl}
                            onChange={(e) => handleChange('instagramUrl', e.target.value)}
                            placeholder="https://instagram.com/ilmiyxizmat"
                        />
                    </div>
                </div>

                <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                }}>
                    <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#1f2937', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.75rem' }}>
                        Boshqa ma'lumotlar
                    </h3>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Email</label>
                        <input
                            style={inputStyle}
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="info@ilmiyxizmat.uz"
                        />
                    </div>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Ish vaqti</label>
                        <input
                            style={inputStyle}
                            type="text"
                            value={formData.workingHours}
                            onChange={(e) => handleChange('workingHours', e.target.value)}
                            placeholder="Dush-Shan: 09:00 - 21:00"
                        />
                    </div>

                    <div style={groupStyle}>
                        <label style={labelStyle}>Manzil</label>
                        <input
                            style={inputStyle}
                            type="text"
                            value={formData.address}
                            onChange={(e) => handleChange('address', e.target.value)}
                            placeholder="Toshkent, O'zbekiston"
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
                    <button
                        type="button"
                        onClick={handleReset}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: '#fee2e2',
                            color: '#b91c1c',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            fontSize: '0.95rem',
                        }}
                    >
                        Boshlang'ich holatga qaytarish
                    </button>
                    <button
                        type="submit"
                        style={{
                            padding: '0.75rem 2rem',
                            background: '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '1rem',
                        }}
                    >
                        Saqlash
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
