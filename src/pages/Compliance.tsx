import { Link } from 'react-router-dom';
import './Compliance.css';
import { useMeta } from '../lib/useMeta';

const STATS = [
  { value: '30+',       label: 'Frameworks' },
  { value: '100%',      label: 'Audit Trail' },
  { value: '15+',       label: 'Sectors' },
  { value: 'Real-time', label: 'Risk Scoring' },
];

const FEATURES = [
  { icon: '📜', title: 'Multi-Framework Compliance', desc: 'Track compliance across ISO 27001, ISO 37001, LGPD, GDPR, SOC 2, NIST, and 30+ other frameworks simultaneously.' },
  { icon: '🛤', title: 'Regulatory Training Paths',  desc: 'Industry-specific compliance journeys for Financial Services, Healthcare, Government, Energy, and more.' },
  { icon: '📋', title: 'Audit-Ready Reports',        desc: 'Generate compliance evidence packages, gap analyses, and executive dashboards ready for internal and external audits.' },
  { icon: '🎯', title: 'Human Risk Score',           desc: 'Quantify human risk at the individual, department, and organizational level to prioritize compliance interventions.' },
  { icon: '📝', title: 'Policy Management',          desc: 'Distribute, track acknowledgment, and version-control policies, codes of conduct, and regulatory documents.' },
  { icon: '🗺', title: 'Global Compliance Map',      desc: 'Visualize compliance status across countries, regions, and legal entities with jurisdiction-specific regulatory mapping.' },
];

const STEPS = [
  { title: 'Select Your Frameworks', desc: 'Choose the regulations and standards applicable to your organization, industry, and operating jurisdictions.' },
  { title: 'Map Your Obligations',   desc: 'The platform maps your regulatory requirements to training modules, policies, and controls automatically.' },
  { title: 'Assign & Monitor',       desc: 'Distribute compliance training, policy acknowledgments, and assessments across your workforce with full tracking.' },
  { title: 'Report & Certify',       desc: 'Generate audit evidence, compliance certificates, and executive reports to demonstrate regulatory adherence.' },
];

const Compliance = () => {
  useMeta({
    title: 'Compliance Suite',
    description: 'Regulatory Compliance Intelligence for Global Enterprises. Navigate complex regulatory landscapes with automated compliance tracking, audit-ready reporting, and Human Risk scoring across ISO 27001, LGPD, GDPR, and more.',
  });

  return (
    <div className="page-wrapper product-page compliance-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">Our Products · Compliance Suite</span>
          <h1 className="heading-display">
            <span className="product-icon" aria-hidden="true">⚖️</span> Compliance Suite
          </h1>
          <p className="body-large header-subtitle">
            Regulatory Compliance Intelligence for Global Enterprises
          </p>
          <p className="body-large product-lede">
            Navigate complex regulatory landscapes with automated compliance tracking, audit-ready
            reporting, and Human Risk scoring across ISO 27001, LGPD, GDPR, and more.
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
        <h2 className="heading-secondary product-section-title">Compliance intelligence, fully covered</h2>
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
        <h2 className="heading-secondary product-section-title">From obligation to evidence</h2>
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
          <h2 className="heading-display mb-4">Stay audit-ready across<br />every framework</h2>
          <p className="body-large text-muted mb-8 max-w-2xl mx-auto">
            See how Compliance Suite turns regulatory complexity into a clear, measurable program.
          </p>
          <Link to="/contact" className="button-primary">Request a Demo</Link>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
