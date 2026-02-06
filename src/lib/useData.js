import { useState, useCallback } from 'react';

// Static (default) ma'lumotlar — fallback sifatida ishlatiladi
import { services } from '../data/services';
import { blogPosts } from '../data/blogPosts';
import { scientificWorks } from '../data/scientificWorks';
import { publications } from '../data/publications';
import { faqItems } from '../data/faq';

// Har bir bo'lim uchun LocalStorage kalit nomlari va default ma'lumotlar
const SECTIONS = {
    services: { key: 'admin_services', defaultData: services },
    blog: { key: 'admin_blog', defaultData: blogPosts },
    scientificWorks: { key: 'admin_scientific_works', defaultData: scientificWorks },
    publications: { key: 'admin_publications', defaultData: publications },
    faq: { key: 'admin_faq', defaultData: faqItems },
};

/**
 * LocalStorage dan ma'lumot o'qish.
 * Agar localStorage da bo'lmasa — defaultData qaytaradi.
 */
function loadData(section) {
    const config = SECTIONS[section];
    if (!config) {
        console.warn(`useData: noma'lum bo'lim — "${section}"`);
        return [];
    }

    try {
        const stored = localStorage.getItem(config.key);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.error(`useData: localStorage dan o'qishda xato (${section}):`, e);
    }

    return config.defaultData;
}

/**
 * LocalStorage ga ma'lumot yozish
 */
function saveData(section, data) {
    const config = SECTIONS[section];
    if (!config) return;

    try {
        localStorage.setItem(config.key, JSON.stringify(data));
    } catch (e) {
        console.error(`useData: localStorage ga yozishda xato (${section}):`, e);
    }
}

/**
 * Keyingi bo'sh ID ni hisoblash
 */
function getNextId(items) {
    if (!items || items.length === 0) return 1;
    const maxId = Math.max(...items.map(item => Number(item.id) || 0));
    return maxId + 1;
}

/**
 * Universal data hook — LocalStorage CRUD + static data fallback
 *
 * Foydalanish:
 *   const { items, getById, save, remove } = useData('services');
 */
export function useData(section) {
    const [items, setItems] = useState(() => loadData(section));

    /** Barcha elementlarni qayta yuklash */
    const refresh = useCallback(() => {
        const data = loadData(section);
        setItems(data);
        return data;
    }, [section]);

    /** ID bo'yicha bitta element olish */
    const getById = useCallback((id) => {
        return items.find(item => String(item.id) === String(id));
    }, [items]);

    /** Slug bo'yicha bitta element olish */
    const getBySlug = useCallback((slug) => {
        return items.find(item => item.slug === slug);
    }, [items]);

    /**
     * Saqlash — yangi yoki mavjud elementni
     * Agar item.id bo'lsa — yangilaydi, bo'lmasa — yangi qo'shadi
     */
    const save = useCallback((item) => {
        let updated;

        if (item.id) {
            // Mavjud elementni yangilash
            const exists = items.some(i => String(i.id) === String(item.id));
            if (exists) {
                updated = items.map(i => String(i.id) === String(item.id) ? { ...i, ...item } : i);
            } else {
                // ID bor lekin ro'yxatda yo'q — yangi qo'shish
                updated = [...items, item];
            }
        } else {
            // Yangi element — ID generatsiya qilish
            const newItem = { ...item, id: getNextId(items) };
            updated = [...items, newItem];
        }

        saveData(section, updated);
        setItems(updated);
        return updated;
    }, [items, section]);

    /** Element o'chirish */
    const remove = useCallback((id) => {
        const updated = items.filter(item => String(item.id) !== String(id));
        saveData(section, updated);
        setItems(updated);
        return updated;
    }, [items, section]);

    return {
        items,
        getById,
        getBySlug,
        save,
        remove,
        refresh,
    };
}

export default useData;
