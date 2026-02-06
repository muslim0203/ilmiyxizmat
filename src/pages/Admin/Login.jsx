import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Admin.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/admin';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await signIn(password);

        if (result.error) {
            setError(result.error.message);
            setLoading(false);
        } else {
            navigate(from, { replace: true });
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-box">
                <h2>Admin Panel</h2>
                <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                    Kirish uchun parolni kiriting
                </p>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Parol</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Admin parolini kiriting"
                            required
                            autoFocus
                        />
                    </div>
                    <button type="submit" disabled={loading} className="login-btn">
                        {loading ? 'Kirish...' : 'Kirish'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
