import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { SiteSettingsProvider } from './context/SiteSettingsContext.jsx'
import App from './App.jsx'
import './index.css'

// ScrollToTop component to handle scroll restoration manually
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <SiteSettingsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </SiteSettingsProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
