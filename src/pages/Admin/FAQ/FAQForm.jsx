import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../../lib/useData';

const FAQForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getById, save } = useData('faq');
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    });

    useEffect(() => {
        if (isEditMode) {
            const faq = getById(id);
            if (faq) {
                setFormData({ ...faq });
            }
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSave = { ...formData };
        if (isEditMode) {
            dataToSave.id = Number(id);
        }

        save(dataToSave);
        navigate('/admin/faq');
    };

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h2>{isEditMode ? 'Savolni Tahrirlash' : 'Yangi Savol Qo\'shish'}</h2>
            </div>

            <div className="admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Savol</label>
                        <input
                            type="text"
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            required
                            placeholder="Masalan: Buyurtma qanday beriladi?"
                        />
                    </div>

                    <div className="form-group">
                        <label>Javob</label>
                        <textarea
                            name="answer"
                            value={formData.answer}
                            onChange={handleChange}
                            rows="6"
                            required
                            placeholder="Savolga to'liq javob yozing"
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button type="submit" className="login-btn">
                            Saqlash
                        </button>
                        <button type="button" onClick={() => navigate('/admin/faq')} className="logout-btn">
                            Bekor qilish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FAQForm;
