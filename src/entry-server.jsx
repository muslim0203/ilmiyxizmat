/**
 * SSR kirish nuqtasi - faqat build vaqtidagi prerender uchun ishlatiladi.
 *
 * renderToPipeableStream + onAllReady ishlatamiz: bu React.lazy bilan o'ralgan
 * sahifalarni ham to'liq kutadi, ya'ni natijada "Yuklanmoqda..." emas, haqiqiy
 * sahifa matni chiqadi.
 */
import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'node:stream';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { SiteSettingsProvider } from './context/SiteSettingsContext.jsx';
import App from './App.jsx';

export async function render(url) {
    const helmetContext = {};

    const app = (
        <StrictMode>
            <HelmetProvider context={helmetContext}>
                <SiteSettingsProvider>
                    <StaticRouter location={url}>
                        <App />
                    </StaticRouter>
                </SiteSettingsProvider>
            </HelmetProvider>
        </StrictMode>
    );

    const html = await new Promise((resolve, reject) => {
        let body = '';
        const sink = new Writable({
            write(chunk, _enc, cb) { body += chunk.toString('utf8'); cb(); },
        });
        sink.on('finish', () => resolve(body));

        const { pipe, abort } = renderToPipeableStream(app, {
            onAllReady() { pipe(sink); },
            onError(err) { reject(err); },
        });

        // Osilib qolmasligi uchun himoya
        setTimeout(() => { abort(); reject(new Error(`Render timeout: ${url}`)); }, 20000);
    });

    const { helmet } = helmetContext;
    const head = helmet
        ? [
            helmet.title.toString(),
            helmet.meta.toString(),
            helmet.link.toString(),
            helmet.script.toString(),
        ].filter(Boolean).join('\n    ')
        : '';

    return { html, head };
}
