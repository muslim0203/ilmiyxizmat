import { useParams, Link } from 'react-router-dom';
import { sanitizeHtml } from '../../lib/sanitizeHtml';
import SEO from '../../components/SEO/SEO';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { useData } from '../../lib/useData';
import contentDates from '../../data/contentDates.json';
import { isPublished, getRelatedPosts } from '../../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const { items: blogPosts, getBySlug } = useData('blog');
    const { items: services } = useData('services');
    const found = getBySlug(slug);
    // Qoralama (draft) maqola faqat dev da ochiladi - prod da prerender ham qilinmaydi
    const post = found && isPublished(found) ? found : null;

    if (!post) {
        return (
            <section className="section">
                <SEO title="Maqola topilmadi" noindex={true} />
                <div className="container text-center">
                    <h1>Maqola topilmadi</h1>
                    <Link to="/blog" className="btn btn-primary mt-4">Blogga qaytish</Link>
                </div>
            </section>
        );
    }

    const relatedService = services.find(s => s.slug === post.relatedService);
    const otherPosts = getRelatedPosts(post, blogPosts, relatedService?.relatedPosts);
    // Fayli hali qo'yilmagan (pending) namunalar prod da ko'rsatilmaydi
    const downloads = (post.downloads || []).filter(d => !d.pending || import.meta.env.DEV);

    // Haqiqiy o'zgarish sanasi - scripts/content-dates.js kontent hash i bo'yicha yuritadi
    const modified = contentDates[`/blog/${post.slug}`]?.modified;
    const dateModified = modified && modified > post.date ? modified : post.date;

    // Article JSON-LD schema
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://www.ilmiyxizmat.uz/blog/${post.slug}`,
        "datePublished": post.date,
        "dateModified": dateModified,
        "author": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "url": "https://www.ilmiyxizmat.uz"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "url": "https://www.ilmiyxizmat.uz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.ilmiyxizmat.uz/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.ilmiyxizmat.uz/blog/${post.slug}`
        },
        "image": "https://www.ilmiyxizmat.uz/og-image.jpg",
        "articleSection": post.category,
        "inLanguage": "uz"
    };

    return (
        <>
            <SEO
                title={post.metaTitle || post.title}
                description={post.metaDescription || post.excerpt}
                type="article"
                article={{ publishedTime: post.date, modifiedTime: dateModified, author: "Ilmiyxizmat.uz" }}
                jsonLd={articleJsonLd}
            />

            <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]} />

            <section className="post-header">
                <div className="container">
                    <span className="badge badge-primary">{post.category}</span>
                    <h1>{post.title}</h1>
                    <div className="post-meta">
                        <span>📅 {post.date}</span>
                        {dateModified !== post.date && <span>🔄 Yangilangan: {dateModified}</span>}
                        <span>⏱️ {post.readTime}</span>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <article className="post-content">
                        {post.shortAnswer && (
                            <div className="post-short-answer">
                                <strong>Qisqacha javob</strong>
                                <p>{post.shortAnswer}</p>
                            </div>
                        )}
                        <p className="lead" style={{fontWeight: "bold"}}>{post.excerpt}</p>
                        {post.content ? (
                            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }} />
                        ) : (
                            <>
                                <p>Bu maqolada {post.title.toLowerCase()} haqida batafsil ma'lumot beriladi.
                                    Ushbu mavzu ilmiy ishlar yozishda juda muhim hisoblanadi.</p>
                                <h2>Asosiy tushunchalar</h2>
                                <p>Ilmiy ishlar yozishda standartlarga rioya qilish muhim.
                                    Bu sizning ishingizning professional ko'rinishini ta'minlaydi.</p>
                            </>
                        )}
                    </article>

                    {downloads.length > 0 && (
                        <div className="post-downloads">
                            <h3>Namunani yuklab olish</h3>
                            <ul>
                                {downloads.map(d => (
                                    <li key={d.file}>
                                        {d.pending ? (
                                            <span className="post-download-pending">
                                                {d.label} ({d.format}) - fayl hali yo'q: <code>public{d.file}</code> ga qo'ying
                                                va <code>pending</code> ni olib tashlang (faqat dev da ko'rinadi)
                                            </span>
                                        ) : (
                                            <a href={d.file} download>{d.label} ({d.format})</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {relatedService ? (
                        <div className="post-cta">
                            <span className="post-cta-label">Mavzuga oid xizmat</span>
                            <h3>{relatedService.icon} {relatedService.title}</h3>
                            <p>{relatedService.description}</p>
                            <p className="post-cta-price">{relatedService.price} so'm {relatedService.priceNote}</p>
                            <div className="post-cta-actions">
                                <Link to={`/xizmatlar/${relatedService.slug}`} className="btn btn-gold">Xizmat haqida batafsil</Link>
                                <Link to="/buyurtma" state={{ xizmat: relatedService.slug }} className="btn btn-white">Narxni bilish</Link>
                            </div>
                        </div>
                    ) : (
                        <div className="post-cta">
                            <h3>Yordam kerakmi?</h3>
                            <p>Professional xizmatlarimizdan foydalaning</p>
                            <Link to="/buyurtma" className="btn btn-gold">Buyurtma berish</Link>
                        </div>
                    )}

                    <div className="related-posts">
                        <h3>O'xshash maqolalar</h3>
                        <div className="related-grid">
                            {otherPosts.map(p => (
                                <Link to={`/blog/${p.slug}`} key={p.id} className="related-card">
                                    <h4>{p.title}</h4>
                                    <span>{p.readTime}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPost;
