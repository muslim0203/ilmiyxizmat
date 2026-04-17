import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const { items: blogPosts, getBySlug } = useData('blog');
    const post = getBySlug(slug);

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

    const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

    // Article JSON-LD schema
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://ilmiyxizmat.uz/blog/${post.slug}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "url": "https://ilmiyxizmat.uz"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "url": "https://ilmiyxizmat.uz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ilmiyxizmat.uz/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://ilmiyxizmat.uz/blog/${post.slug}`
        },
        "image": "https://ilmiyxizmat.uz/og-image.jpg",
        "articleSection": post.category,
        "inLanguage": "uz"
    };

    // BreadcrumbList JSON-LD
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Bosh sahifa",
                "item": "https://ilmiyxizmat.uz"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://ilmiyxizmat.uz/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://ilmiyxizmat.uz/blog/${post.slug}`
            }
        ]
    };

    return (
        <>
            <SEO
                title={post.title}
                description={post.excerpt}
                type="article"
                article={{ publishedTime: post.date, author: "Ilmiyxizmat.uz" }}
                jsonLd={[articleJsonLd, breadcrumbJsonLd]}
            />

            {/* Breadcrumb */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <ol>
                        <li><Link to="/">Bosh sahifa</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li aria-current="page">{post.title}</li>
                    </ol>
                </div>
            </nav>

            <section className="post-header">
                <div className="container">
                    <span className="badge badge-primary">{post.category}</span>
                    <h1>{post.title}</h1>
                    <div className="post-meta">
                        <span>📅 {post.date}</span>
                        <span>⏱️ {post.readTime}</span>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <article className="post-content">
                        <p className="lead" style={{fontWeight: "bold"}}>{post.excerpt}</p>
                        {post.content ? (
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
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

                    <div className="post-cta">
                        <h3>Yordam kerakmi?</h3>
                        <p>Professional xizmatlarimizdan foydalaning</p>
                        <Link to="/buyurtma" className="btn btn-gold">Buyurtma berish</Link>
                    </div>

                    <div className="related-posts">
                        <h3>Boshqa maqolalar</h3>
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
