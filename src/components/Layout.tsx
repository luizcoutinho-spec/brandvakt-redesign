import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../lib/asset';
import './Navbar.css';

interface NavLinkDef {
  to?: string;
  label: string;
  subtitle?: string;
  badge?: string;
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
  | { kind: 'link'; to: string; label: string }
  | { kind: 'menu'; id: string; label: string; items: NavLinkDef[] };

// "Company" dropdown — replaces the standalone About link; groups About,
// Partners and Careers under it.
const COMPANY_LINKS: NavLinkDef[] = [
  { to: '/about',    label: 'About' },
  { to: '/partners', label: 'Partners' },
  { to: '/careers',  label: 'Careers' },
];

// "Our Products" dropdown — label + descriptive subtitle, with a FREE badge on
// the CSMA assessment and a final "Request a Demo" entry (-> /contact).
const PRODUCT_LINKS: NavLinkDef[] = [
  { to: '/enterprise/phisher',             label: 'PhishER',            subtitle: 'Phishing simulation & human risk management' },
  { to: '/enterprise/conscientizacao',     label: 'Security Awareness', subtitle: 'Multi-language corporate training' },
  { to: '/enterprise/compliance',          label: 'Compliance Suite',   subtitle: 'Regulatory intelligence & reporting' },
  { to: '/enterprise/maturity-assessment', label: 'CSMA',               subtitle: 'Cybersecurity Maturity Assessment', badge: 'FREE' },
  { label: 'Request a Demo', subtitle: 'Talk to an enterprise specialist', calendly: 'https://calendly.com/luiz-coutinho-brandvakt-group/30min' },
];

const NAV_ITEMS: NavItem[] = [
  { kind: 'menu', id: 'company',          label: 'Company',               items: COMPANY_LINKS },
  { kind: 'link', to: '/services',        label: 'Services' },
  { kind: 'link', to: '/soc',             label: 'SOC' },
  { kind: 'link', to: '/bygrc',           label: 'byGRC' },
  { kind: 'link', to: '/homodeus-partnership', label: 'Brandvakt × HomoDeus' },
  { kind: 'link', to: '/academy',         label: 'Academy' },
  { kind: 'menu', id: 'products',         label: 'Our Products',          items: PRODUCT_LINKS },
];

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => { setOpen(false); setOpenMenu(null); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const contactActive = location.pathname === '/contact';

  return (
    <nav className={`nav${open ? ' nav-open' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={asset('assets/logo-white.png')} alt="Brandvakt" />
        </Link>

        <button
          type="button"
          className={`nav-toggle${open ? ' nav-toggle-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
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
                    to={item.to}
                    className={location.pathname === item.to ? 'active' : ''}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openMenu === item.id;
              const isActive = item.items.some((l) => location.pathname === l.to);
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
                    {item.label}
                    <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                  </button>
                  <div className="nav-dropdown-panel">
                    {item.items.map((p) => {
                      const inner = (
                        <>
                          <span className="nav-dd-row">
                            <span className="nav-dd-label">{p.label}</span>
                            {p.badge && <span className="nav-dd-badge">{p.badge}</span>}
                          </span>
                          {p.subtitle && <span className="nav-dd-sub">{p.subtitle}</span>}
                        </>
                      );

                      if (p.calendly) {
                        return (
                          <button
                            key={p.label}
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
                          to={p.to!}
                          className={location.pathname === p.to ? 'active' : ''}
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
          <Link
            to="/contact"
            className={`button-primary nav-cta${contactActive ? ' active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="heading-secondary">BRANDVAKT</h2>
          <p className="body-large footer-tagline">Digital Trust in the Age of AI.</p>
        </div>
        <div className="footer-links">
          <strong>Platform</strong>
          <Link to="/services">Services</Link>
          <Link to="/soc">SOC</Link>
          <Link to="/bygrc">byGRC</Link>
          <Link to="/academy">Academy</Link>
          <Link to="/homodeus-partnership">Brandvakt × HomoDeus</Link>
        </div>
        <div className="footer-links">
          <strong>Company</strong>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <strong>Legal</strong>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookies">Cookies Policy</Link>
        </div>
      </div>
    </footer>
  );
};
