import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';

const SITE_URL = 'https://www.ilmiyxizmat.uz';

/**
 * Ko'rinadigan breadcrumb + BreadcrumbList JSON-LD.
 *
 * items: [{ name, path }] - "Bosh sahifa" avtomatik qo'shiladi, oxirgi element
 * joriy sahifa (havolasiz). Uslub index.css dagi .breadcrumb dan.
 */
const Breadcrumbs = ({ items }) => {
    const trail = [{ name: 'Bosh sahifa', path: '/' }, ...items];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": trail.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`
        }))
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <ol>
                        {trail.map((item, index) => index < trail.length - 1
                            ? <li key={item.path}><Link to={item.path}>{item.name}</Link></li>
                            : <li key={item.path} aria-current="page">{item.name}</li>
                        )}
                    </ol>
                </div>
            </nav>
        </>
    );
};

export default Breadcrumbs;
