import { useState, useCallback, useEffect } from 'react';
import api, { isApiEnabled } from './apiClient';
import { services }        from '../data/services';
import { blogPosts }       from '../data/blogPosts';
import { scientificWorks } from '../data/scientificWorks';
import { publications }    from '../data/publications';
import { faqItems }        from '../data/faq';

const ENDPOINTS = {
    services:        '/api/services',
    blog:            '/api/blog',
    scientificWorks: '/api/works',
    publications:    '/api/publications',
    faq:             '/api/faq',
};

const FALLBACKS = {
    services,
    blog:            blogPosts,
    scientificWorks,
    publications,
    faq:             faqItems,
};

export function useData(section) {
    const endpoint = ENDPOINTS[section];
    const fallback = FALLBACKS[section] || [];

    const [items,   setItems]   = useState(fallback);
    const [loading, setLoading] = useState(true);
    const [error,   setError]   = useState(null);

    const refresh = useCallback(async () => {
        if (!endpoint || !isApiEnabled()) { setLoading(false); return; }
        setLoading(true);
        setError(null);
        try {
            const data = await api.get(endpoint);
            // Bo'sh javob kelsa statik ma'lumotni saqlab qolamiz - aks holda
            // backend DB si bo'sh bo'lganda sahifa butunlay bo'sh chiqadi.
            if (Array.isArray(data) && data.length > 0) setItems(data);
        } catch (err) {
            if (!err.disabled) setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

    useEffect(() => { refresh(); }, [refresh]);

    const getById = useCallback((id) =>
        items.find(item => String(item.id) === String(id)), [items]);

    const getBySlug = useCallback((slug) =>
        items.find(item => item.slug === slug), [items]);

    const save = useCallback(async (item) => {
        let result;
        if (item.id) {
            result = await api.put(`${endpoint}/${item.id}`, item);
            setItems(prev => prev.map(i => String(i.id) === String(item.id) ? result : i));
        } else {
            result = await api.post(endpoint, item);
            setItems(prev => [...prev, result]);
        }
        return result;
    }, [endpoint]);

    const remove = useCallback(async (id) => {
        await api.delete(`${endpoint}/${id}`);
        setItems(prev => prev.filter(i => String(i.id) !== String(id)));
    }, [endpoint]);

    return { items, loading, error, getById, getBySlug, save, remove, refresh };
}

export default useData;
