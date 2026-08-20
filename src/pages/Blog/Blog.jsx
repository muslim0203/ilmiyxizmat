import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import './Blog.css';

const Blog = () => {
    const { items: blogPosts } = useData('blog');

    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Ilmiyxizmat.uz Blog",
        "description": "Ilmiy ishlar, BMI yozish, dissertatsiya, ilmiy maqola haqida foydali maqolalar va qo'llanmalar.",
        "url": "https://www.ilmiyxizmat.uz/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Ilmiyxizmat.uz",
            "url": "https://www.ilmiyxizmat.uz"
        }
    };

    return (
        <>
            <SEO
                title="Blog - Ilmiy ishlar haqida foydali maqolalar"
                description="Ilmiy ishlar yozish bo'yicha foydali maqolalar: BMI qanday yoziladi, APA-7 format, antiplagiat, OAK jurnal talablari va boshqalar."
                jsonLd={blogJsonLd}
            />
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-primary">Blog</span>
                    <h1>Ilmiy ishlar haqida foydali maqolalar</h1>
                    <p>BMI, dissertatsiya, ilmiy maqola yozish bo'yicha bilimlaringizni oshiring</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map(post => (
                            <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
                                <div className="blog-card-image">📄</div>
                                <div className="blog-card-content">
                                    <span className="blog-category">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="blog-meta">
                                        <span>📅 {post.date}</span>
                                        <span>⏱️ {post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
