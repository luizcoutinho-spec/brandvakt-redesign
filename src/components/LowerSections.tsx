import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  titleKey: string;
  descKey: string;
}

const CAPABILITIES: Capability[] = [
  { icon: ClipboardCheck, titleKey: 'capabilities.assessment_title', descKey: 'capabilities.assessment_desc' },
  { icon: Network,        titleKey: 'capabilities.network_title',    descKey: 'capabilities.network_desc' },
  { icon: SearchCheck,    titleKey: 'capabilities.vuln_title',       descKey: 'capabilities.vuln_desc' },
  { icon: Fingerprint,    titleKey: 'capabilities.identity_title',   descKey: 'capabilities.identity_desc' },
  { icon: Laptop,         titleKey: 'capabilities.endpoint_title',   descKey: 'capabilities.endpoint_desc' },
  { icon: Target,         titleKey: 'capabilities.pentest_title',    descKey: 'capabilities.pentest_desc' },
  { icon: GraduationCap,  titleKey: 'capabilities.awareness_title',  descKey: 'capabilities.awareness_desc' },
  { icon: ShieldCheck,    titleKey: 'capabilities.grc_title',        descKey: 'capabilities.grc_desc' },
  { icon: Cloud,          titleKey: 'capabilities.cloud_title',      descKey: 'capabilities.cloud_desc' },
];

export const CapabilitiesSection = () => {
  const { t } = useTranslation('home');
  return (
    <section className="section caps-section">
      <div className="container">
        <p className="overline">{t('capabilities.overline')}</p>
        <h2 className="heading-primary caps-heading">{t('capabilities.heading')}</h2>
        <div className="caps-grid">
          {CAPABILITIES.map((cap) => {
            const CapIcon = cap.icon;
            return (
              <div key={cap.titleKey} className="cap-card">
                <div className="cap-card-icon">
                  <CapIcon aria-hidden="true" />
                </div>
                <h3 className="cap-card-title">{t(cap.titleKey)}</h3>
                <p className="cap-card-desc">{t(cap.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ---- SOC ----

interface SocMetric {
  value: string;
  labelKey: string;
  barWidth: string;
}

const SOC_METRICS: SocMetric[] = [
  { value: '$4.24M', labelKey: 'soc.metric_breach',  barWidth: '82%' },
  { value: '287',    labelKey: 'soc.metric_detect',  barWidth: '65%' },
  { value: '650+',   labelKey: 'soc.metric_threats', barWidth: '75%' },
];

const SOC_CHECKPOINTS = ['soc.check1', 'soc.check2', 'soc.check3'];

export const SOCSection = () => {
  const { t } = useTranslation('home');
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
            <span>{t('soc.panel_title')}</span>
            <span><Activity aria-hidden="true" /> {t('soc.panel_live')}</span>
          </div>
          <div className="soc-panel-body">
            {SOC_METRICS.map((m, i) => (
              <div key={m.labelKey} className="soc-metric">
                <div className="soc-metric-row">
                  <span className="soc-metric-val">{m.value}</span>
                  <span className="soc-metric-lbl">{t(m.labelKey)}</span>
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
          <p className="overline">{t('soc.overline')}</p>
          <h2 className="heading-primary soc-heading">
            {t('soc.heading_l1')}<br />{t('soc.heading_l2')}
          </h2>
          <p className="body-large soc-desc">
            {t('soc.desc')}
          </p>
          <ul className="soc-checkpoints">
            {SOC_CHECKPOINTS.map((key) => (
              <li key={key} className="soc-checkpoint">
                <CheckCircle2 aria-hidden="true" />
                {t(key)}
              </li>
            ))}
          </ul>
          <Link to="/soc" className="button-secondary">
            {t('soc.cta')}
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
  badgeKey: string;
  badgeVariant: 'amber' | 'teal';
  title: string;
  descKey: string;
  ctaKey: string;
  href: string;
  flagship: boolean;
}

const PRODUCTS: Product[] = [
  {
    icon: Sparkles,
    badgeKey: 'products.badge_ai',
    badgeVariant: 'amber',
    title: 'HomoDeus AI',
    descKey: 'products.desc_homodeus',
    ctaKey: 'products.cta_homodeus',
    href: '/homodeus-partnership',
    flagship: true,
  },
  {
    icon: BookOpen,
    badgeKey: 'products.badge_training',
    badgeVariant: 'teal',
    title: 'Academy',
    descKey: 'products.desc_academy',
    ctaKey: 'products.cta_academy',
    href: '/academy',
    flagship: false,
  },
  {
    icon: FileText,
    badgeKey: 'products.badge_grc',
    badgeVariant: 'teal',
    title: 'Docs byGRC',
    descKey: 'products.desc_bygrc',
    ctaKey: 'products.cta_bygrc',
    href: '/bygrc',
    flagship: false,
  },
];

export const ProductsSection = () => {
  const { t } = useTranslation('home');
  return (
    <section className="section products-section">
      <div className="container">
        <p className="overline">{t('products.overline')}</p>
        <h2 className="heading-primary products-heading">{t('products.heading')}</h2>
        <div className="products-grid">
          {PRODUCTS.map((p) => {
            const ProductIcon = p.icon;
            return (
              <div key={p.title} className={`product-card glass-panel${p.flagship ? ' product-flagship' : ''}`}>
                <div className="product-card-top">
                  <span className={`product-badge product-badge--${p.badgeVariant}`}>{t(p.badgeKey)}</span>
                  <ProductIcon aria-hidden="true" />
                </div>
                <h3 className="heading-secondary product-title">{p.title}</h3>
                <p className="product-desc">{t(p.descKey)}</p>
                <Link
                  to={p.href}
                  className={p.flagship ? 'button-primary product-cta' : 'button-secondary product-cta'}
                >
                  {t(p.ctaKey)}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ---- CTA / Contact ----

const CONTACT_EMAIL = 'info@brandvakt.com';

export const CTASection = () => {
  const { t } = useTranslation('home');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const region = String(data.get('region') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const body = [
      `${t('cta.mail_label_name')}: ${name}`,
      `${t('cta.mail_label_email')}: ${email}`,
      region ? `${t('cta.mail_label_region')}: ${region}` : null,
      '',
      message,
    ].filter(Boolean).join('\n');
    const subject = t('cta.mail_subject', { name: name || t('cta.mail_website') });
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <div className="cta-header">
          <h2 className="heading-display">
            {t('cta.heading_l1')}<br />{t('cta.heading_l2')}
          </h2>
          <p className="body-large cta-sub">
            {t('cta.sub')}
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="overline">{t('cta.overline')}</p>
            <h3 className="heading-secondary contact-heading">{t('cta.contact_heading')}</h3>

            <div className="contact-field">
              <span className="contact-field-label">{t('cta.label_email')}</span>
              <p className="body-large">
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>

            <div className="contact-field">
              <span className="contact-field-label">{t('cta.label_regions')}</span>
              <p className="body-large contact-offices">
                {t('cta.value_regions')}
              </p>
            </div>

            <div className="contact-field">
              <span className="contact-field-label">{t('cta.label_response')}</span>
              <p className="body-large">{t('cta.value_response')}</p>
            </div>
          </div>

          <div className="contact-form glass-panel">
            <h3 className="heading-secondary contact-form-title">{t('cta.form_title')}</h3>
            {sent ? (
              <div className="contact-form-success">
                <p className="body-large">
                  {t('cta.form_success')}{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
                <button
                  type="button"
                  className="button-secondary"
                  onClick={() => setSent(false)}
                >
                  {t('cta.form_send_another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <input name="name" type="text" placeholder={t('cta.ph_name')} required />
                </div>
                <div className="form-field">
                  <input name="email" type="email" placeholder={t('cta.ph_email')} required />
                </div>
                <div className="form-field">
                  <input name="region" type="text" placeholder={t('cta.ph_region')} />
                </div>
                <div className="form-field">
                  <textarea name="message" rows={4} placeholder={t('cta.ph_message')} required />
                </div>
                <button type="submit" className="button-primary form-submit">
                  {t('cta.submit')}
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
