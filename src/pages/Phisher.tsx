import { Link } from 'react-router-dom';
import './Phisher.css';
import { useMeta } from '../lib/useMeta';

const STATS = [
  { value: '1,000+', label: 'Phishing Templates' },
  { value: '95%',    label: 'Detection Improvement' },
  { value: '6+',     label: 'Languages Supported' },
  { value: '< 24h',  label: 'Deployment Time' },
];

const FEATURES = [
  { icon: '📧', title: 'Automated Phishing Campaigns', desc: "Schedule and deploy realistic phishing simulations with 1,000+ customizable templates targeting your organization's specific threat profile." },
  { icon: '🎯', title: 'Department-Level Targeting',   desc: 'Personalize campaigns by department, role, location, and risk profile for maximum behavioral insight.' },
  { icon: '📊', title: 'Real-Time Risk Dashboard',     desc: 'Track click rates, reporting rates, and user vulnerability scores with executive-ready dashboards.' },
  { icon: '🔄', title: 'Automated Training Triggers',  desc: 'Automatically enroll at-risk users in targeted security awareness training when they fail simulations.' },
  { icon: '🛡', title: 'Human Risk Score',             desc: 'Each user receives a dynamic risk score based on simulation performance, training completion, and behavioral indicators.' },
];

const STEPS = [
  { title: 'Configure Your Campaign', desc: 'Select from 1,000+ realistic templates, choose your target audience, and schedule your simulation window.' },
  { title: 'Launch Simulation',       desc: 'PhishER automatically delivers personalized phishing attempts across your organization with full tracking.' },
  { title: 'Analyze & Identify Risk', desc: 'Review detailed reports showing who clicked, who reported, and which departments need attention.' },
  { title: 'Auto-Remediate',          desc: 'Users who fail are automatically enrolled in targeted microlearning modules to address specific vulnerabilities.' },
];

const Phisher = () => {
  useMeta({
    title: 'PhishER',
    description: 'Automated Phishing Simulation & Human Risk Management. Deploy realistic phishing simulations, identify vulnerable users, and build cyber resilience with targeted training interventions.',
  });

  return (
    <div className="page-wrapper product-page phisher-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">Our Products · PhishER</span>
          <h1 className="heading-display">
            <span className="product-icon" aria-hidden="true">🎣</span> PhishER
          </h1>
          <p className="body-large header-subtitle">
            Automated Phishing Simulation &amp; Human Risk Management
          </p>
          <p className="body-large product-lede">
            Deploy realistic phishing simulations across your organization, identify vulnerable
            users, and build cyber resilience with targeted training interventions.
          </p>
          <Link to="/contact" className="button-primary">Request a Demo</Link>
        </div>
      </header>

      <section className="section container">
        <div className="product-stats">
          {STATS.map((s) => (
            <div key={s.label} className="product-stat">
              <div className="product-stat-value">{s.value}</div>
              <div className="product-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <span className="overline text-teal">Capabilities</span>
        <h2 className="heading-secondary product-section-title">Everything you need to manage human risk</h2>
        <div className="product-features">
          {FEATURES.map((f) => (
            <div key={f.title} className="service-card-premium glass-panel product-feature">
              <span className="product-feature-icon" aria-hidden="true">{f.icon}</span>
              <h3 className="heading-secondary product-feature-title">{f.title}</h3>
              <p className="body-large product-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <span className="overline">How it works</span>
        <h2 className="heading-secondary product-section-title">From simulation to remediation</h2>
        <div className="product-steps">
          {STEPS.map((s, i) => (
            <div key={s.title} className="product-step">
              <span className="product-step-number text-teal">{String(i + 1).padStart(2, '0')}</span>
              <strong className="product-step-title">{s.title}</strong>
              <p className="product-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section product-cta">
        <div className="container animate-fade-up">
          <p className="overline" style={{ color: 'var(--color-copper)', marginBottom: '1rem' }}>Get Started</p>
          <h2 className="heading-display mb-4">Turn your people into your<br />strongest line of defense</h2>
          <p className="body-large text-muted mb-8 max-w-2xl mx-auto">
            See how PhishER measures and reduces human risk across your organization.
          </p>
          <Link to="/contact" className="button-primary">Request a Demo</Link>
        </div>
      </section>
    </div>
  );
};

export default Phisher;
