import { Helmet } from '@dr.pogodin/react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    type = 'website',
    image,
    article,
    jsonLd,
    noindex = false,
}) => {
    const location = useLocation();
    const siteName = 'Ilmiyxizmat.uz';
    const siteUrl = 'https://ilmiyxizmat.uz';
    const defaultDesc = "O'zbekistonda №1 ilmiy ishlar yozish xizmati. BMI, dissertatsiya, ilmiy maqola, kurs ishi tayyorlash. 5000+ bajarilgan ish.";
    const defaultImage = `${siteUrl}/og-image.jpg`;

    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Ilmiy ishlar yozish xizmati | BMI, Dissertatsiya, Ilmiy maqola`;
    const metaDescription = description || defaultDesc;
    const metaImage = image || defaultImage;
    const canonicalUrl = `${siteUrl}${location.pathname}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="uz_UZ" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Article specific */}
            {article && article.publishedTime && (
                <meta property="article:published_time" content={article.publishedTime} />
            )}
            {article && article.author && (
                <meta property="article:author" content={article.author} />
            )}

            {/* JSON-LD Structured Data */}
            {jsonLd && !Array.isArray(jsonLd) && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
            {jsonLd && Array.isArray(jsonLd) && jsonLd.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
