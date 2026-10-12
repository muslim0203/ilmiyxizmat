import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { SiteSettingsProvider } from './context/SiteSettingsContext.jsx'
import { installGoogleAdsClickTracking } from './analytics/googleAdsConversion.js'
import App from './App.jsx'
import '@fontsource-variable/inter'
import './index.css'

installGoogleAdsClickTracking()

// ScrollToTop component to handle scroll restoration manually
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <SiteSettingsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </SiteSettingsProvider>
    </HelmetProvider>
  </React.StrictMode>
)

const container = document.getElementById('root')

// Prerender qilingan sahifani hydrate qilamiz: createRoot server HTML ni o'chirib,
// lazy chunk kelguncha "Yuklanmoqda..." ko'rsatib, so'ng qayta chizardi - LCP
// shu ikkinchi chizilishga tushib ~2s kechikardi. 404.html va admin qobig'i
// (spa.html) manzilga mos server HTML emas - ular oddiy render qilinadi.
if (container.hasChildNodes() && !container.hasAttribute('data-client-only')) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
