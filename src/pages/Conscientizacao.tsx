import { Link } from 'react-router-dom';
import './Conscientizacao.css';
import { useMeta } from '../lib/useMeta';

const STATS = [
  { value: '6+',     label: 'Languages' },
  { value: '200+',   label: 'Course Library' },
  { value: '99.9%',  label: 'Uptime SLA' },
  { value: '50+',    label: 'Countries' },
];

const FEATURES = [
  { icon: '🌍', title: 'Interactive Multi-Language Training', desc: 'Engage employees with scenario-based learning in 6+ languages, including full RTL support for Arabic and Hebrew.' },
  { icon: '📋', title: 'Automated Assignment & Deadlines',    desc: 'Assign mandatory training by department, role, location, or regulation with automated reminders and escalation.' },
  { icon: '🏆', title: 'Digital Certification',               desc: 'Automatically issue tamper-proof digital certificates with QR codes upon successful course completion.' },
  { icon: '🤖', title: 'AI-Powered Recommendations',          desc: 'Brandvakt AI analyzes individual performance and recommends personalized learning paths to close knowledge gaps.' },
  { icon: '📈', title: 'Executive Analytics',                 desc: 'Track completion rates, scores, engagement, and compliance status across the entire organization with exportable reports.' },
  { icon: '🔗', title: 'SSO & HRIS Integration',             desc: 'Connect with Microsoft 365, Google Workspace, Okta, SAP, Workday, and other enterprise systems for seamless user provisioning.' },
];

const STEPS = [
  { title: 'Import Your Organization',     desc: 'Sync users from your HR system or Active Directory. Set up departments, roles, and reporting hierarchies in minutes.' },
  { title: 'Assign Training Programs',     desc: 'Select from our library or upload custom content. Configure mandatory courses, deadlines, and passing scores by audience.' },
  { title: 'Employees Complete Training',  desc: 'Users receive personalized notifications and complete training on any device in their preferred language.' },
  { title: 'Measure & Report',             desc: 'Monitor real-time progress, generate compliance reports, and export audit-ready documentation for regulators.' },
];

const Conscientizacao = () => {
  useMeta({
    title: 'Security Awareness',
    description: 'Multi-Language Corporate Training at Global Scale. Distribute, monitor, and certify cybersecurity and compliance training across your organization in 6+ languages with enterprise-grade controls.',
  });

  return (
    <div className="page-wrapper product-page awareness-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">Our Products · Security Awareness</span>
          <h1 className="heading-display">
            <span className="product-icon" aria-hidden="true">🌐</span> Security Awareness
          </h1>
          <p className="body-large header-subtitle">
            Multi-Language Corporate Training at Global Scale
          </p>
          <p className="body-large product-lede">
            Distribute, monitor, and certify cybersecurity and compliance training across your
            entire organization in 6+ languages with enterprise-grade controls.
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
        <h2 className="heading-secondary product-section-title">Enterprise-grade training, end to end</h2>
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
        <h2 className="heading-secondary product-section-title">From rollout to reporting</h2>
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
          <h2 className="heading-display mb-4">Build a culture of security<br />across every team</h2>
          <p className="body-large text-muted mb-8 max-w-2xl mx-auto">
            See how Security Awareness scales training and certification worldwide.
          </p>
          <Link to="/contact" className="button-primary">Request a Demo</Link>
        </div>
      </section>
    </div>
  );
};

export default Conscientizacao;
