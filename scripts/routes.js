/**
 * Saytdagi barcha ommaviy manzillarning yagona manbasi.
 *
 * Prerender ham, sitemap generatori ham shu yerdan oladi - shuning uchun yangi
 * xizmat yoki blog maqolasi qo'shilganda ular avtomatik qamrab olinadi.
 * (Ilgari ro'yxat qo'lda yozilgani uchun sitemap dan bir nechta sahifa tushib qolgan edi.)
 */
import { services }        from '../src/data/services.js';
import { scientificWorks } from '../src/data/scientificWorks.js';
import { publications }    from '../src/data/publications.js';
import { blogPosts }       from '../src/data/blogPosts.js';

export const SITE_URL = 'https://www.ilmiyxizmat.uz';

// { path, priority, changefreq }
export const routes = [
    { path: '/',                priority: '1.0', changefreq: 'daily'   },
    { path: '/xizmatlar',       priority: '0.9', changefreq: 'weekly'  },
    { path: '/narxlar',         priority: '0.9', changefreq: 'weekly'  },
    { path: '/buyurtma',        priority: '0.9', changefreq: 'monthly' },
    { path: '/blog',            priority: '0.9', changefreq: 'daily'   },
    { path: '/ilmiy-ishlar',    priority: '0.8', changefreq: 'weekly'  },
    { path: '/nashr',           priority: '0.8', changefreq: 'weekly'  },
    { path: '/biz-haqimizda',   priority: '0.7', changefreq: 'monthly' },
    { path: '/aloqa',           priority: '0.8', changefreq: 'monthly' },
    { path: '/savol-javob',     priority: '0.7', changefreq: 'weekly'  },
    { path: '/ai-maqola',       priority: '0.6', changefreq: 'weekly'  },
    { path: '/privacy-policy',  priority: '0.3', changefreq: 'yearly'  },
    { path: '/terms',           priority: '0.3', changefreq: 'yearly'  },

    ...services.map(s => ({
        path: `/xizmatlar/${s.slug}`,
        priority: s.popular ? '0.9' : '0.8',
        changefreq: 'monthly',
    })),
    ...scientificWorks.map(w => ({
        path: `/ilmiy-ishlar/${w.slug}`,
        priority: '0.7',
        changefreq: 'monthly',
    })),
    ...publications.map(p => ({
        path: `/nashr/${p.slug}`,
        priority: '0.7',
        changefreq: 'monthly',
    })),
    ...blogPosts.map(b => ({
        path: `/blog/${b.slug}`,
        priority: '0.7',
        changefreq: 'monthly',
    })),
];

export default routes;
