import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  FileText,
  Fingerprint,
  GraduationCap,
  Laptop,
  Network,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import './LowerSections.css';

// ---- Capabilities ----

interface Capability {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const CAPABILITIES: Capability[] = [
  {
    icon: ClipboardCheck,
    title: 'Maturity Assessment',
    desc: 'Gap analysis and risk scoring against recognized frameworks — ISO 27001, NIST CSF, CIS Controls.',
  },
  {
    icon: Network,
    title: 'Network Security',
    desc: 'Monitor and harden networks transmitting protected data across distributed operations.',
  },
  {
    icon: SearchCheck,
    title: 'Vulnerability Management',
    desc: 'Continuous assessment, prioritized by risk exposure, with precise remediation guidance.',
  },
  {
    icon: Fingerprint,
    title: 'Digital Identity',
    desc: 'Identities are the new perimeter. Protecting workforce access and consumer credentials.',
  },
  {
    icon: Laptop,
    title: 'Endpoint Security',
    desc: 'Advanced protection for employee devices against an evolving and adversarial threat surface.',
  },
  {
    icon: Target,
    title: 'Penetration Testing',
    desc: 'Simulated ethical attacks to find vulnerabilities before adversaries can exploit them.',
  },
  {
    icon: GraduationCap,
    title: 'Cyber Awareness',
    desc: 'Training programs that address the human factor — your ultimate line of defence.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance, Risk & Compliance',
    desc: 'Navigate SWIFT, PCI DSS, LGPD, and DORA with executable security and data frameworks.',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'Secure cloud perimeters across AWS, Azure, Google, or complex multi-tenant environments.',
  },
];

export const CapabilitiesSection = () => (
  <section className="section caps-section">
    <div className="container">
      <p className="overline">How we protect you</p>
      <h2 className="heading-primary caps-heading">Our Capabilities</h2>
      <div className="caps-grid">
        {CAPABILITIES.map((cap) => {
          const CapIcon = cap.icon;
          return (
            <div key={cap.title} className="cap-card">
              <div className="cap-card-icon">
                <CapIcon aria-hidden="true" />
              </div>
              <h3 className="cap-card-title">{cap.title}</h3>
              <p className="cap-card-desc">{cap.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ---- SOC ----

interface SocMetric {
  value: string;
  label: string;
  barWidth: string;
}

const SOC_METRICS: SocMetric[] = [
  { value: '$4.24M', label: 'Average breach cost', barWidth: '82%' },
  { value: '287',    label: 'Days avg. to detect',  barWidth: '65%' },
  { value: '650+',   label: 'Threat groups tracked', barWidth: '75%' },
];

const SOC_CHECKPOINTS = [
  '24/7 threat detection and incident response',
  'Outsourced, managed, or collaborative SOC models',
  'SIEM-powered event correlation and triage',
];

export const SOCSection = () => {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bar-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    barRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section soc-section">
      <div className="container soc-cols">
        <div className="soc-panel">
          <div className="soc-panel-header">
            <span>Threat Landscape</span>
            <span><Activity aria-hidden="true" /> Live telemetry</span>
          </div>
          <div className="soc-panel-body">
            {SOC_METRICS.map((m, i) => (
              <div key={m.label} className="soc-metric">
                <div className="soc-metric-row">
                  <span className="soc-metric-val">{m.value}</span>
                  <span className="soc-metric-lbl">{m.label}</span>
                </div>
                <div className="soc-bar-track">
                  <div
                    className="soc-bar-fill"
                    ref={(el) => { barRefs.current[i] = el; }}
                    style={{ '--bar-width': m.barWidth } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="soc-text">
          <p className="overline">Security Operations Center</p>
          <h2 className="heading-primary soc-heading">
            Always hunting.<br />Always responding.
          </h2>
          <p className="body-large soc-desc">
            Continuous monitoring of endpoints, networks, and user activity for
            high-fidelity indicators of compromise — before damage is done.
          </p>
          <ul className="soc-checkpoints">
            {SOC_CHECKPOINTS.map((pt) => (
              <li key={pt} className="soc-checkpoint">
                <CheckCircle2 aria-hidden="true" />
                {pt}
              </li>
            ))}
          </ul>
          <Link to="/soc" className="button-secondary">
            Explore our SOC
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// ---- Products ----

interface Product {
  icon: LucideIcon;
  badge: string;
  badgeVariant: 'amber' | 'teal';
  title: string;
  desc: string;
  cta: string;
  href: string;
  flagship: boolean;
}

const PRODUCTS: Product[] = [
  {
    icon: Sparkles,
    badge: 'AI Partner',
    badgeVariant: 'amber',
    title: 'HomoDeus AI',
    desc: 'Operational AI systems that replace manual workflows, automate decisions, and compound capability over time.',
    cta: 'Explore Partnership',
    href: '/homodeus-partnership',
    flagship: true,
  },
  {
    icon: BookOpen,
    badge: 'Training',
    badgeVariant: 'teal',
    title: 'Academy',
    desc: 'Recognized cybersecurity training programs built by active industry practitioners, for real-world application.',
    cta: 'View Academy',
    href: '/academy',
    flagship: false,
  },
  {
    icon: FileText,
    badge: 'GRC Platform',
    badgeVariant: 'teal',
    title: 'Docs byGRC',
    desc: 'AI-powered GRC document intelligence. Centralized access to frameworks, controls, and compliance dashboards.',
    cta: 'View byGRC',
    href: '/bygrc',
    flagship: false,
  },
];

export const ProductsSection = () => (
  <section className="section products-section">
    <div className="container">
      <p className="overline">Products</p>
      <h2 className="heading-primary products-heading">Purpose-built platforms</h2>
      <div className="products-grid">
        {PRODUCTS.map((p) => {
          const ProductIcon = p.icon;
          return (
            <div key={p.title} className={`product-card glass-panel${p.flagship ? ' product-flagship' : ''}`}>
              <div className="product-card-top">
                <span className={`product-badge product-badge--${p.badgeVariant}`}>{p.badge}</span>
                <ProductIcon aria-hidden="true" />
              </div>
              <h3 className="heading-secondary product-title">{p.title}</h3>
              <p className="product-desc">{p.desc}</p>
              <Link
                to={p.href}
                className={p.flagship ? 'button-primary product-cta' : 'button-secondary product-cta'}
              >
                {p.cta}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ---- CTA / Contact ----

const CONTACT_EMAIL = 'info@brandvakt.com';

export const CTASection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const region = String(data.get('region') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      region ? `Region: ${region}` : null,
      '',
      message,
    ].filter(Boolean).join('\n');
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Enquiry from ${name || 'website'}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <div className="cta-header">
          <h2 className="heading-display">
            Your digital sentinel,<br />on the right side of the fence.
          </h2>
          <p className="body-large cta-sub">
            Security-minded experts committed to your business continuity.
            We are the Firewatch.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="overline">Get in touch</p>
            <h3 className="heading-secondary contact-heading">Contact us</h3>

            <div className="contact-field">
              <span className="contact-field-label">Email</span>
              <p className="body-large">
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>

            <div className="contact-field">
              <span className="contact-field-label">Regions</span>
              <p className="body-large contact-offices">
                Africa &middot; LATAM &middot; Europe &middot; Middle East
              </p>
            </div>

            <div className="contact-field">
              <span className="contact-field-label">Response time</span>
              <p className="body-large">Within 24 hours</p>
            </div>
          </div>

          <div className="contact-form glass-panel">
            <h3 className="heading-secondary contact-form-title">Send a message</h3>
            {sent ? (
              <div className="contact-form-success">
                <p className="body-large">
                  Thanks — your mail client should be opening. If it didn't, write to{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
                <button
                  type="button"
                  className="button-secondary"
                  onClick={() => setSent(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <input name="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="form-field">
                  <input name="email" type="email" placeholder="Your Email" required />
                </div>
                <div className="form-field">
                  <input name="region" type="text" placeholder="Region or Country" />
                </div>
                <div className="form-field">
                  <textarea name="message" rows={4} placeholder="Tell us about your security needs..." required />
                </div>
                <button type="submit" className="button-primary form-submit">
                  Send Enquiry
                  <Send aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
