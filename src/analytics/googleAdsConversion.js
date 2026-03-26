const EVENT_NAME = 'ads_conversion___1';
const EVENT_TIMEOUT_MS = 2000;

function safeGtagEvent(url) {
  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;

  const callback = function () {
    if (typeof url === 'string' && url.length > 0) {
      window.location.href = url;
    }
  };

  gtag('event', EVENT_NAME, {
    event_callback: callback,
    event_timeout: EVENT_TIMEOUT_MS,
  });
}

function closestLinkOrButton(el) {
  if (!el) return null;
  return el.closest?.('a,button') ?? null;
}

function getHref(el) {
  if (!el) return null;
  if (el.tagName?.toLowerCase() === 'a') return el.getAttribute('href');
  return null;
}

function isBuyurtmaLink(href) {
  if (!href) return false;
  try {
    const u = new URL(href, window.location.href);
    return u.pathname.replace(/\/+$/, '') === '/buyurtma';
  } catch {
    return false;
  }
}

function isTelegramOrWhatsAppLink(href) {
  if (!href) return false;
  const h = href.toLowerCase();
  return (
    h.includes('t.me/') ||
    h.includes('telegram.me/') ||
    h.startsWith('tg:') ||
    h.includes('wa.me/') ||
    h.includes('api.whatsapp.com/') ||
    h.startsWith('whatsapp:')
  );
}

function shouldDelayNavigation(el, href) {
  if (!href) return false;
  const tag = el?.tagName?.toLowerCase();
  if (tag !== 'a') return false;

  const target = el.getAttribute('target');
  if (target && target.toLowerCase() === '_blank') return false;

  const lower = href.toLowerCase();
  if (lower.startsWith('#')) return false;
  if (lower.startsWith('mailto:')) return false;
  if (lower.startsWith('tel:')) return false;

  // Internal SPA navigation shouldn't be delayed (React Router handles it).
  if (isBuyurtmaLink(href)) return false;

  // External navigation (Telegram/WhatsApp) can be delayed.
  return isTelegramOrWhatsAppLink(href);
}

export function installGoogleAdsClickTracking() {
  if (typeof window === 'undefined') return;
  if (window.__googleAdsClickTrackingInstalled) return;
  window.__googleAdsClickTrackingInstalled = true;

  document.addEventListener(
    'click',
    (e) => {
      const target = e.target;
      const el = closestLinkOrButton(target);
      if (!el) return;

      const href = getHref(el);
      if (!href) return;

      const shouldTrack = isBuyurtmaLink(href) || isTelegramOrWhatsAppLink(href);
      if (!shouldTrack) return;

      // Fire only on click, not on page load.
      if (shouldDelayNavigation(el, href)) {
        e.preventDefault();
        safeGtagEvent(href);
        return;
      }

      safeGtagEvent();
    },
    true,
  );
}

