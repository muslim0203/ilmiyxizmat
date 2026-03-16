import { createContext, useContext, useState, useCallback } from 'react';

const SiteSettingsContext = createContext({});

export const useSiteSettings = () => useContext(SiteSettingsContext);

const STORAGE_KEY = 'site_settings';

// Default sozlamalar
const DEFAULT_SETTINGS = {
    phone: '+998 97 007 33 96',
    phoneRaw: '+998970073396',
    telegram: '@zarifjon0203',
    telegramUrl: 'https://t.me/zarifjon0203',
    email: 'info@ilmiyxizmat.uz',
    instagram: 'ilmiyxizmat',
    instagramUrl: 'https://instagram.com/ilmiyxizmat',
    workingHours: 'Dush-Shan: 09:00 - 21:00',
    address: 'Toshkent, O\'zbekiston',
};

function loadSettings() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
        }
    } catch (e) {
        console.error('Settings yuklanmadi:', e);
    }
    return DEFAULT_SETTINGS;
}

function saveSettingsToStorage(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Settings saqlanmadi:', e);
    }
}

export const SiteSettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => loadSettings());

    const updateSettings = useCallback((newSettings) => {
        const updated = { ...settings, ...newSettings };
        saveSettingsToStorage(updated);
        setSettings(updated);
        return updated;
    }, [settings]);

    const resetSettings = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setSettings(DEFAULT_SETTINGS);
    }, []);

    return (
        <SiteSettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
            {children}
        </SiteSettingsContext.Provider>
    );
};
