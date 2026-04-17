import { createContext, useContext, useEffect, useState } from 'react';
import api, { tokenStorage } from '../lib/apiClient';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user,    setUser]    = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = tokenStorage.get();
        if (!token) { setLoading(false); return; }
        api.get('/api/auth/me')
            .then(data => setUser({ role: data.role }))
            .catch(() => tokenStorage.remove())
            .finally(() => setLoading(false));
    }, []);

    const signIn = async (password) => {
        try {
            const { token } = await api.post('/api/auth/login', { password });
            tokenStorage.set(token);
            setUser({ role: 'admin' });
            return { error: null };
        } catch (err) {
            return { error: { message: err.message || "Parol noto'g'ri!" } };
        }
    };

    const signOut = async () => {
        tokenStorage.remove();
        setUser(null);
        api.post('/api/auth/logout', {}).catch(() => {});
    };

    return (
        <AuthContext.Provider value={{ signIn, signOut, user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
