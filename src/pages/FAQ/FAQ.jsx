import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { useData } from '../../lib/useData';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const { items: faqs } = useData('faq');

    // FAQPage schema - Google'da accordion ko'rinishda chiqadi
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <SEO
                title="Savol-javob (FAQ) - Ilmiy ishlar haqida ko'p beriladigan savollar"
                description="Ilmiy ishlar yozish xizmati haqida ko'p beriladigan savollar va javoblar. BMI, dissertatsiya, ilmiy maqola, narxlar, muddatlar haqida."
                jsonLd={faqJsonLd}
            />
            <section className="page-header">
                <div className="container">
                    <span className="badge badge-primary">FAQ</span>
                    <h1>Ko'p beriladigan savollar - Ilmiy ishlar xizmati</h1>
                    <p>Ilmiy ishlar yozish xizmati haqida eng ko'p beriladigan savollarga javoblar</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="faq-cta">
                        <h3>Savolingizga javob topmadingizmi?</h3>
                        <p>Biz bilan bog'laning, yordam beramiz</p>
                        <Link to="/aloqa" className="btn btn-primary">Bog'lanish</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
