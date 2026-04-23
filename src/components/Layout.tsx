import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const contactActive = location.pathname === '/contact';

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src="/assets/logo-white.png" alt="Brandvakt" />
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

        <div className={`nav-drawer${open ? ' nav-drawer-open' : ''}`}>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={location.pathname === l.to ? 'active' : ''}
              >
                {l.label}
              </Link>
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
