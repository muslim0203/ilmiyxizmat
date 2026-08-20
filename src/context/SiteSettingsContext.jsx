import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import api, { isApiEnabled } from '../lib/apiClient';

const SiteSettingsContext = createContext({});
export const useSiteSettings = () => useContext(SiteSettingsContext);

const DEFAULT_SETTINGS = {
    phone:        '+998 97 007 33 96',
    phoneRaw:     '+998970073396',
    telegram:     '@zarifjon0203',
    telegramUrl:  'https://t.me/zarifjon0203',
    email:        'info@ilmiyxizmat.uz',
    instagram:    'ilmiyxizmat',
    instagramUrl: 'https://instagram.com/ilmiyxizmat',
    workingHours: 'Dush-Shan: 09:00 - 21:00',
    address:      "Toshkent, O'zbekiston",
};

export const SiteSettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(DEFAULT_SETTINGS);

    useEffect(() => {
        if (!isApiEnabled()) return;   // backend yo'q - default sozlamalar bilan ishlaymiz
        api.get('/api/settings')
            .then(data => { if (data) setSettings(prev => ({ ...prev, ...data })); })
            .catch(() => { /* backend ulanmadi - default sozlamalar qoladi */ });
    }, []);

    const updateSettings = useCallback(async (newSettings) => {
        const updated = await api.put('/api/settings', newSettings);
        setSettings(prev => ({ ...prev, ...updated }));
        return updated;
    }, []);

    const resetSettings = useCallback(() => setSettings(DEFAULT_SETTINGS), []);

    return (
        <SiteSettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
            {children}
        </SiteSettingsContext.Provider>
    );
};
