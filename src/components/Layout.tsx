import { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../lib/asset';
import './Navbar.css';

interface NavLinkDef {
  to: string;
  label: string;
}

const NAV_LINKS: NavLinkDef[] = [
  { to: '/about',                 label: 'About' },
  { to: '/services',              label: 'Services' },
  { to: '/soc',                   label: 'SOC' },
  { to: '/bygrc',                 label: 'byGRC' },
  { to: '/homodeus-partnership',  label: 'Brandvakt × HomoDeus' },
  { to: '/academy',               label: 'Academy' },
  { to: '/partners',              label: 'Partners' },
  { to: '/careers',               label: 'Careers' },
];

// "Our Products" dropdown — rendered right after the Academy item.
// CSMA points to a route that does not exist yet (placeholder) and will
// fall through to NotFound until the maturity-assessment page is added.
const PRODUCT_LINKS: NavLinkDef[] = [
  { to: '/enterprise/phisher',            label: 'PhishER' },
  { to: '/enterprise/conscientizacao',    label: 'Security Awareness' },
  { to: '/enterprise/compliance',         label: 'Compliance Suite' },
  { to: '/enterprise/maturity-assessment', label: 'CSMA' },
];

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => { setOpen(false); setProductsOpen(false); }, [location.pathname]);

  const productsActive = PRODUCT_LINKS.some((l) => location.pathname === l.to);

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
            {NAV_LINKS.map((l) => (
              <Fragment key={l.to}>
                <Link
                  to={l.to}
                  className={location.pathname === l.to ? 'active' : ''}
                >
                  {l.label}
                </Link>

                {l.to === '/academy' && (
                  <div
                    className={`nav-dropdown${productsOpen ? ' nav-dropdown-open' : ''}`}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      type="button"
                      className={`nav-dropdown-trigger${productsActive ? ' active' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={productsOpen}
                      onClick={() => setProductsOpen((v) => !v)}
                    >
                      Our Products
                      <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
                    </button>
                    <div className="nav-dropdown-panel">
                      {PRODUCT_LINKS.map((p) => (
                        <Link
                          key={p.to}
                          to={p.to}
                          className={location.pathname === p.to ? 'active' : ''}
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
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
