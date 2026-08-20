import React, { useState } from 'react';
import {
    Document, Packer, Paragraph, TextRun, HeadingLevel,
    AlignmentType, BorderStyle, convertInchesToTwip,
    PageOrientation, ShadingType, UnderlineType,
} from 'docx';
// CommonJS moduli - SSR build da nomlangan eksport ishlamaydi, default orqali olamiz
import fileSaver from 'file-saver';
const { saveAs } = fileSaver;
import api from '../../lib/apiClient';
import SEO from '../../components/SEO/SEO';
import './AIArticle.css';

const AIArticle = () => {
    const [topic, setTopic] = useState('');
    const [field, setField] = useState('Tibbiyot');
    const [language, setLanguage] = useState('O\'zbek tili');
    const [isGenerating, setIsGenerating] = useState(false);
    const [articleResult, setArticleResult] = useState('');
    const [error, setError] = useState('');

    const fields = [
        'Tibbiyot',
        'Filologiya',
        'Huquqshunoslik',
        'Iqtisodiyot',
        'Pedagogika',
        'Axborot texnologiyalari',
        'Tarix',
        'Psixologiya',
        'Tabiiy fanlar'
    ];

    const languages = [
        { id: 'uz', name: 'O\'zbek tili' },
        { id: 'en', name: 'English' },
        { id: 'ru', name: 'Русский языĸ' }
    ];

    const generateArticle = async (e) => {
        e.preventDefault();

        if (!topic.trim()) {
            setError('Iltimos, maqola mavzusini kiriting.');
            return;
        }

        setIsGenerating(true);
        setError('');
        setArticleResult('');

        try {
            const prompt = `You are an expert academic writer. Write a complete, high-quality scientific article strictly following this structure.

Topic: "${topic}"
Field/Domain: ${field}
Language: ${language}

SECTION HEADING LANGUAGE RULE (CRITICAL):
All section headings MUST be written in ${language}, NOT in English. Use these exact translations:
- If O'zbek tili: ANNOTATSIYA | Kalit so'zlar | 1. KIRISH | 2. ADABIYOTLAR TAHLILI | 3. METODOLOGIYA | 4. NATIJALAR VA MUHOKAMA | 5. XULOSA | FOYDALANILGAN ADABIYOTLAR
- If Русский: АННОТАЦИЯ | Ключевые слова | 1. ВВЕДЕНИЕ | 2. ОБЗОР ЛИТЕРАТУРЫ | 3. МЕТОДОЛОГИЯ | 4. РЕЗУЛЬТАТЫ И ОБСУЖДЕНИЕ | 5. ЗАКЛЮЧЕНИЕ | СПИСОК ЛИТЕРАТУРЫ
- If English: ABSTRACT | Keywords | 1. INTRODUCTION | 2. LITERATURE REVIEW | 3. METHODOLOGY | 4. RESULTS AND DISCUSSION | 5. CONCLUSION | REFERENCES

SECTION SIZES:
- ANNOTATSIYA/ABSTRACT/АННОТАЦИЯ: 150-250 words
- Section 1 (KIRISH/INTRODUCTION/ВВЕДЕНИЕ): 3-4 paragraphs
- Section 2 (Adabiyotlar/Literature/Литература): 3-4 paragraphs
- Section 3 (Metodologiya): 2-3 paragraphs
- Section 4 (Natijalar/Results/Результаты): 4-5 paragraphs
- Section 5 (Xulosa/Conclusion/Заключение): 2-3 paragraphs
- REFERENCES list: 8-10 sources

CITATION RULES – GOST 7.0.5-2008 STANDARD:
- Use NUMBERED in-text citations in square brackets: [1], [2, s. 45], [3, 4], [5, s. 12–18]
- Every claim or borrowed idea MUST have an in-text citation [N] or [N, s. X]
- Page abbreviation rules:
    * O'zbek tili (Latin): use lowercase Latin letter  s.  (e.g. [2, s. 45])
    * Русский язык (Cyrillic): use Cyrillic с.  (e.g. [2, с. 45])
    * English: use  p.  (e.g. [2, p. 45])
- ALWAYS use en-dash (–) NOT em-dash (—) everywhere in the article and references.
- The REFERENCES section must be a numbered list formatted strictly per GOST 7.0.5-2008:
    For books:   [N] Familiya I.O. Kitob nomi. – Shahar: Nashriyot, Yil. – XXX b.
    For articles: [N] Familiya I.O. Maqola nomi // Jurnal nomi. – Yil. – T. X, № X. – B. X–X.
    For internet: [N] Familiya I.O. Manba nomi [Elektron resurs]. – URL: http://... (murojaat sanasi: KK.OO.YYYY).
    Adapt language/script of reference entries to match the article language.

OTHER CRITICAL RULES:
- Write the ENTIRE article body in ${language} language only.
- Use appropriate ${field} terminology throughout.
- Body paragraphs: 4-6 sentences each.
- Use **bold** for key terms on first use.
- Do NOT add markdown code blocks or extra formatting symbols.
- Output ONLY the article text, nothing else.`;

            // API key endi backend da yashirin — to'g'ridan-to'g'ri Gemini ga emas, proxy orqali
            const response = await api.post('/api/gemini/generate', { prompt });

            if (response.text) {
                setArticleResult(response.text);
            } else {
                setError('Noma\'lum xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.');
            }
        } catch (err) {
            console.error('Error generating article:', err);
            setError('Maqola yaratishda xatolik yuz berdi: ' + (err.message || 'Tarmoq xatosi'));
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadWordDocument = async () => {
        if (!articleResult) return;

        try {
            // ── helpers ──────────────────────────────────────────────────────
            const twip = (cm) => Math.round(cm * 567);   // 1 cm ≈ 567 twips
            const pt = (p) => p * 2;                   // half-points (1pt = 2 half-points)

            // Simple inline-markdown parser: **bold**, *italic*, __bold__
            const parseInline = (text) => {
                const runs = [];
                const re = /(\*\*|__)(.*?)\1|(\*|_)(.*?)\3/g;
                let last = 0, m;
                while ((m = re.exec(text)) !== null) {
                    if (m.index > last) {
                        runs.push(new TextRun({ text: text.slice(last, m.index), font: 'Times New Roman', size: pt(12) }));
                    }
                    if (m[1]) {
                        runs.push(new TextRun({ text: m[2], bold: true, font: 'Times New Roman', size: pt(12) }));
                    } else {
                        runs.push(new TextRun({ text: m[4], italics: true, font: 'Times New Roman', size: pt(12) }));
                    }
                    last = re.lastIndex;
                }
                if (last < text.length) {
                    runs.push(new TextRun({ text: text.slice(last), font: 'Times New Roman', size: pt(12) }));
                }
                return runs.length ? runs : [new TextRun({ text, font: 'Times New Roman', size: pt(12) })];
            };

            // ── section / margin config ───────────────────────────────────────
            const sectionProps = {
                page: {
                    margin: {
                        top: twip(2.5),
                        bottom: twip(2.5),
                        left: twip(3.0),
                        right: twip(1.5),
                    },
                    size: { width: twip(21), height: twip(29.7) } // A4
                }
            };

            // paragraph defaults (body)
            const bodyStyle = {
                alignment: AlignmentType.JUSTIFIED,
                spacing: { line: 360, lineRule: 'auto', before: 0, after: pt(6) },
                indent: { firstLine: twip(1.27) },
            };

            // ── build children ────────────────────────────────────────────────
            const children = [];

            // Title
            children.push(new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 0, after: pt(12), line: 276, lineRule: 'auto' },
                children: [new TextRun({
                    text: topic.toUpperCase(),
                    bold: true,
                    font: 'Times New Roman',
                    size: pt(14),
                })]
            }));

            // Authors / meta info placeholder
            children.push(new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 0, after: pt(20) },
                children: [new TextRun({
                    text: `Soha: ${field}  |  Til: ${language}`,
                    italics: true,
                    font: 'Times New Roman',
                    size: pt(11),
                    color: '555555',
                })]
            }));

            // Horizontal rule (simulate with border bottom on empty para)
            children.push(new Paragraph({
                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '2563EB', space: 4 } },
                spacing: { before: 0, after: pt(14) },
                children: []
            }));

            // ── Parse AI text ─────────────────────────────────────────────────
            const lines = articleResult.split('\n');

            for (let i = 0; i < lines.length; i++) {
                const raw = lines[i];
                const trimmed = raw.trim();
                if (!trimmed) continue;

                // Heading detection
                const lvl1 = /^#{1}\s+(.+)/.exec(trimmed);
                const lvl2 = /^#{2}\s+(.+)/.exec(trimmed);
                const lvl3 = /^#{3,}\s+(.+)/.exec(trimmed);
                // numbered headings like "1. INTRODUCTION" or "1.1 Something"
                const numH1 = /^(\d+)\.\s+([A-ZA-Z\s]{3,})$/.exec(trimmed);
                const numH2 = /^(\d+\.\d+)\s+(.+)$/.exec(trimmed);
                const isAllCaps = /^[A-Z0-9\s\-:]{4,60}$/.test(trimmed) && trimmed.length < 60;

                if (lvl1 || numH1 || isAllCaps) {
                    const txt = (lvl1 ? lvl1[1] : numH1 ? `${numH1[1]}. ${numH1[2]}` : trimmed).replace(/\*\*/g, '');
                    children.push(new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { before: pt(18), after: pt(6), line: 276, lineRule: 'auto' },
                        children: [new TextRun({
                            text: txt,
                            bold: true,
                            font: 'Times New Roman',
                            size: pt(13),
                            color: '1E3A8A',
                        })]
                    }));
                } else if (lvl2 || numH2) {
                    const txt = (lvl2 ? lvl2[1] : `${numH2[1]} ${numH2[2]}`).replace(/\*\*/g, '');
                    children.push(new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { before: pt(14), after: pt(4), line: 276, lineRule: 'auto' },
                        children: [new TextRun({
                            text: txt,
                            bold: true,
                            font: 'Times New Roman',
                            size: pt(12),
                        })]
                    }));
                } else if (lvl3) {
                    children.push(new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { before: pt(10), after: pt(4), line: 276, lineRule: 'auto' },
                        children: [new TextRun({
                            text: lvl3[1].replace(/\*\*/g, ''),
                            bold: true,
                            italics: true,
                            font: 'Times New Roman',
                            size: pt(12),
                        })]
                    }));
                } else {
                    // Body paragraph
                    children.push(new Paragraph({
                        ...bodyStyle,
                        children: parseInline(trimmed),
                    }));
                }
            }

            // ── Assemble document ─────────────────────────────────────────────
            const doc = new Document({
                numbering: { config: [] },
                styles: {
                    default: {
                        document: {
                            run: { font: 'Times New Roman', size: pt(12), color: '000000' },
                            paragraph: { spacing: { line: 360 } }
                        }
                    }
                },
                sections: [{
                    properties: sectionProps,
                    children,
                }]
            });

            const blob = await Packer.toBlob(doc);
            const safeFileName = topic.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            saveAs(blob, `${safeFileName || 'maqola'}.docx`);

        } catch (err) {
            console.error('Error creating Word document:', err);
            setError('Word faylni yaratishda xatolik yuz berdi: ' + (err.message || ''));
        }
    };

    return (
        <div className="ai-article-container">
            <SEO
                title="AI Maqola Yozish | Ilmiyxizmat.uz"
                description="Sun'iy intellekt yordamida har qanday sohada va tilda ilmiy maqolalar yaratib, Word formatida yuklab oling."
            />

            <div className="container">
                <div className="ai-article-header">
                    <h1>✨ AI Maqola Yozish</h1>
                    <p>Sun'iy intellekt (Gemini) yordamida o'zingiz istagan mavzu, soha va tilda yuqori sifatli maqola yarating va qulay ravishda yuklab oling.</p>
                </div>

                <div className="ai-article-content">
                    {/* Generator Form */}
                    <div className="generator-card">
                        <h2>🛠 Maqola sozlamalari</h2>
                        <form onSubmit={generateArticle}>
                            <div className="form-group">
                                <label htmlFor="topic">Maqola mavzusi</label>
                                <textarea
                                    id="topic"
                                    className="form-control"
                                    placeholder="Masalan: Sun'iy intellektning zamonaviy ta'limdagi o'rni va ahamiyati..."
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    // eslint-disable-next-line jsx-a11y/no-autofocus
                                    autoFocus
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="field">Soha (Yo'nalish)</label>
                                <select
                                    id="field"
                                    className="form-control"
                                    value={field}
                                    onChange={(e) => setField(e.target.value)}
                                >
                                    {fields.map(f => (
                                        <option key={f} value={f}>{f}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="language">Maqola tili</label>
                                <select
                                    id="language"
                                    className="form-control"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    {languages.map(lang => (
                                        <option key={lang.id} value={lang.name}>{lang.name}</option>
                                    ))}
                                </select>
                            </div>

                            {error && <div style={{ color: '#e53e3e', marginBottom: '15px', padding: '10px', background: '#fff5f5', borderRadius: '6px', borderLeft: '4px solid #e53e3e' }}>{error}</div>}

                            <button
                                type="submit"
                                className="btn-generate"
                                disabled={isGenerating || !topic.trim()}
                            >
                                {isGenerating ? (
                                    <>
                                        <span className="loader"></span>
                                        Yaratilmoqda...
                                    </>
                                ) : (
                                    <>✨ Maqola yaratish</>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Result Card */}
                    <div className="result-card">
                        <h2>📄 Natija</h2>

                        {!articleResult && !isGenerating ? (
                            <div className="result-empty">
                                <div className="result-empty-icon">📝</div>
                                <h3>Maqola hali yaratilmadi</h3>
                                <p>Chap tomondagi formani to'ldirib, "Maqola yaratish" tugmasini bosing</p>
                            </div>
                        ) : isGenerating ? (
                            <div className="result-empty">
                                <div className="loader" style={{ width: '40px', height: '40px', borderColor: 'rgba(66, 153, 225, 0.3)', borderTopColor: '#3182ce', marginBottom: '15px' }}></div>
                                <h3>Sun'iy intellekt o'ylamoqda...</h3>
                                <p>Bu jarayon bir necha soniya vaqt olishi mumkin</p>
                            </div>
                        ) : (
                            <>
                                <div className="article-content">
                                    {articleResult}
                                </div>
                                <button className="btn-download" onClick={downloadWordDocument}>
                                    ⬇️ Word (docx) qilib yuklab olish
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIArticle;
