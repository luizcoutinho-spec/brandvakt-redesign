import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/assets/logo-white.png" alt="Brandvakt Logo" />
        </Link>
        <div className="nav-links">
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/soc" className={location.pathname === '/soc' ? 'active' : ''}>SOC</Link>
          <Link to="/bygrc" className={location.pathname === '/bygrc' ? 'active' : ''}>byGRC</Link>
          <Link to="/homodeus-partnership" className={location.pathname === '/homodeus-partnership' ? 'active' : ''}>Brandvakt × HomoDeus</Link>
          <Link to="/academy" className={location.pathname === '/academy' ? 'active' : ''}>Academy</Link>
          <Link to="/partners" className={location.pathname === '/partners' ? 'active' : ''}>Partners</Link>
          <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link>
        </div>
        <Link to="/contact" className="button-primary nav-cta">Contact</Link>
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
          <p className="body-large" style={{ fontSize: '0.9rem', marginTop: '1rem' }}>Digital Trust in the Age of AI.</p>
        </div>
        <div className="footer-links">
          <strong>Company</strong>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/partners">Partners</Link>
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
