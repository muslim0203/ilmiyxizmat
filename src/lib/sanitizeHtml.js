import DOMPurify from 'dompurify';

/**
 * HTML ni tozalaydi.
 *
 * DOMPurify brauzer DOM iga tayanadi, shuning uchun build vaqtidagi prerender
 * (Node) da ishlamaydi. U yerda kontent manbasi loyihaning o'z ma'lumot fayllari
 * bo'lgani uchun matn o'zgarishsiz qaytariladi; brauzerda esa har doim tozalanadi.
 */
export function sanitizeHtml(html) {
    if (!html) return '';
    if (typeof window === 'undefined' || typeof DOMPurify.sanitize !== 'function') {
        return html;
    }
    return DOMPurify.sanitize(html);
}

export default sanitizeHtml;
