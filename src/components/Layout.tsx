import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { asset } from '../lib/asset';
import { SUPPORTED_LANGS, isLang, type Lang } from '../i18n';
import './Navbar.css';

interface DropItem {
  to?: string;
  key: string;       // i18n key under common.nav.*
  hasSub?: boolean;  // renders common.nav.{key}_sub
  badge?: 'free';
  calendly?: string; // if set, the item opens a Calendly popup instead of navigating
}

declare global {
  interface Window {
    Calendly?: { initPopupWidget(opts: { url: string }): void };
  }
}

// Lazy-load the Calendly widget (CSS + JS) on first use — never on every page.
function ensureCalendly(): Promise<void> {
  if (window.Calendly) return Promise.resolve();

  if (!document.querySelector('link[data-calendly]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.dataset.calendly = '1';
    document.head.appendChild(link);
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-calendly]');
    if (existing) {
      if (window.Calendly) resolve();
      else existing.addEventListener('load', () => resolve(), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.dataset.calendly = '1';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Calendly failed to load'));
    document.head.appendChild(script);
  });
}

async function openCalendly(url: string): Promise<void> {
  try {
    await ensureCalendly();
    window.Calendly?.initPopupWidget({ url });
  } catch {
    /* best-effort: ignore load failures */
  }
}

type NavItem =
  | { kind: 'link'; to: string; key: string }
  | { kind: 'menu'; id: string; key: string; items: DropItem[] };

const COMPANY_LINKS: DropItem[] = [
  { to: '/about',    key: 'about' },
  { to: '/partners', key: 'partners' },
  { to: '/careers',  key: 'careers' },
];

const PRODUCT_LINKS: DropItem[] = [
  { to: '/enterprise/phisher',             key: 'phisher',    hasSub: true },
  { to: '/enterprise/conscientizacao',     key: 'awareness',  hasSub: true },
  { to: '/enterprise/compliance',          key: 'compliance', hasSub: true },
  { to: '/enterprise/maturity-assessment', key: 'csma',       hasSub: true, badge: 'free' },
  { key: 'demo', hasSub: true, calendly: 'https://calendly.com/luiz-coutinho-brandvakt-group/30min' },
];

const NAV_ITEMS: NavItem[] = [
  { kind: 'menu', id: 'company',  key: 'company',  items: COMPANY_LINKS },
  { kind: 'link', to: '/services', key: 'services' },
  { kind: 'link', to: '/soc',      key: 'soc' },
  { kind: 'link', to: '/bygrc',    key: 'bygrc' },
  { kind: 'link', to: '/homodeus-partnership', key: 'homodeus' },
  { kind: 'link', to: '/academy',  key: 'academy' },
  { kind: 'menu', id: 'products', key: 'products', items: PRODUCT_LINKS },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('common');
  const lang: Lang = isLang(i18n.language) ? i18n.language : 'en';
  const lp = (p: string) => `/${lang}${p}`;

  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => { setOpen(false); setOpenMenu(null); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function switchLang(next: Lang) {
    const rest = location.pathname.replace(/^\/(en|fr|pt)(?=\/|$)/, '');
    i18n.changeLanguage(next);
    navigate(`/${next}${rest}${location.search}`);
  }

  const contactActive = location.pathname === lp('/contact');

  return (
    <nav className={`nav${open ? ' nav-open' : ''}`}>
      <div className="container nav-inner">
        <Link to={`/${lang}`} className="nav-logo" onClick={() => setOpen(false)}>
          <img src={asset('assets/logo-white.png')} alt="Brandvakt" />
        </Link>

        <button
          type="button"
          className={`nav-toggle${open ? ' nav-toggle-open' : ''}`}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>

        <div className={`nav-drawer${open ? ' nav-drawer-open' : ''}`} aria-hidden={!open}>
          <div className="nav-links">
            {NAV_ITEMS.map((item) => {
              if (item.kind === 'link') {
                return (
                  <Link
                    key={item.to}
                    to={lp(item.to)}
                    className={location.pathname === lp(item.to) ? 'active' : ''}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                );
              }

              const isOpen = openMenu === item.id;
              const isActive = item.items.some((l) => l.to && location.pathname === lp(l.to));
              return (
                <div
                  key={item.id}
                  className={`nav-dropdown${isOpen ? ' nav-dropdown-open' : ''}`}
                  onMouseEnter={() => setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={`nav-dropdown-trigger${isActive ? ' active' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu((v) => (v === item.id ? null : item.id))}
                  >
                    {t(`nav.${item.key}`)}
                    <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                  </button>
                  <div className="nav-dropdown-panel">
                    {item.items.map((p) => {
                      const inner = (
                        <>
                          <span className="nav-dd-row">
                            <span className="nav-dd-label">{t(`nav.${p.key}`)}</span>
                            {p.badge && <span className="nav-dd-badge">{t(`nav.${p.badge}`)}</span>}
                          </span>
                          {p.hasSub && <span className="nav-dd-sub">{t(`nav.${p.key}_sub`)}</span>}
                        </>
                      );

                      if (p.calendly) {
                        return (
                          <button
                            key={p.key}
                            type="button"
                            onClick={() => {
                              setOpen(false);
                              setOpenMenu(null);
                              openCalendly(p.calendly!);
                            }}
                          >
                            {inner}
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={p.to}
                          to={lp(p.to!)}
                          className={location.pathname === lp(p.to!) ? 'active' : ''}
                        >
                          {inner}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="nav-lang" role="group" aria-label="Language">
            {SUPPORTED_LANGS.map((l) => (
              <button
                key={l}
                type="button"
                className={`nav-lang-btn${l === lang ? ' active' : ''}`}
                aria-current={l === lang}
                onClick={() => switchLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            to={lp('/contact')}
            className={`button-primary nav-cta${contactActive ? ' active' : ''}`}
          >
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  const { t, i18n } = useTranslation('common');
  const lang: Lang = isLang(i18n.language) ? i18n.language : 'en';
  const lp = (p: string) => `/${lang}${p}`;

  return (
    <footer className="footer section">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="heading-secondary">BRANDVAKT</h2>
          <p className="body-large footer-tagline">{t('footer.tagline')}</p>
        </div>
        <div className="footer-links">
          <strong>{t('footer.platform')}</strong>
          <Link to={lp('/services')}>{t('footer.services')}</Link>
          <Link to={lp('/soc')}>{t('footer.soc')}</Link>
          <Link to={lp('/bygrc')}>{t('footer.bygrc')}</Link>
          <Link to={lp('/academy')}>{t('footer.academy')}</Link>
          <Link to={lp('/homodeus-partnership')}>{t('footer.homodeus')}</Link>
        </div>
        <div className="footer-links">
          <strong>{t('footer.company')}</strong>
          <Link to={lp('/about')}>{t('footer.about')}</Link>
          <Link to={lp('/careers')}>{t('footer.careers')}</Link>
          <Link to={lp('/partners')}>{t('footer.partners')}</Link>
          <Link to={lp('/contact')}>{t('footer.contact')}</Link>
        </div>
        <div className="footer-links">
          <strong>{t('footer.legal')}</strong>
          <Link to={lp('/privacy')}>{t('footer.privacy')}</Link>
          <Link to={lp('/cookies')}>{t('footer.cookies')}</Link>
        </div>
      </div>
    </footer>
  );
};
