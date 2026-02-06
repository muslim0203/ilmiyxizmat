import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

// Hardcoded admin parol — kerak bo'lsa o'zgartiring
const ADMIN_PASSWORD = 'admin123';
const SESSION_KEY = 'admin_session';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // LocalStorage dan session tekshirish
        const session = localStorage.getItem(SESSION_KEY);
        if (session === 'authenticated') {
            setUser({ role: 'admin' });
        }
        setLoading(false);
    }, []);

    const signIn = async (password) => {
        if (password === ADMIN_PASSWORD) {
            localStorage.setItem(SESSION_KEY, 'authenticated');
            setUser({ role: 'admin' });
            return { error: null };
        }
        return { error: { message: 'Parol noto\'g\'ri!' } };
    };

    const signOut = async () => {
        localStorage.removeItem(SESSION_KEY);
        setUser(null);
    };

    const value = {
        signIn,
        signOut,
        user,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
