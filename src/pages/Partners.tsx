import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Partners.css';

const partnersData = [
  "AWS", "Brainwave GRC", "Citrix", "CyberArk", "F5", "Forcepoint", "Fortinet", "IBM", "Illumio",
  "Kaspersky", "KnowBe4", "ManagedLogic", "McAfee", "Microsoft", "PingIdentity", "Red Hat", "RSA",
  "Sophos", "Tenable", "Trellix", "Tripwire", "Tufin", "Veracode", "Zscaler", "Yubico", "Cisco",
  "Cobalt", "CrowdStrike", "Mimecast", "LatchManager", "Riverbed", "Varonis", "VMware", "Open Raven",
  "SailPoint", "Abnormal Security", "Lansweeper", "ManageEngine", "Versasec", "WALLIX"
];

const Partners = () => {
  const { t } = useTranslation('institutional');
  return (
    <div className="page-wrapper partners-page">
      {/* Hero */}
      <section className="hero-partners animate-fade-up">
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <p className="overline text-copper" style={{marginBottom: '1rem'}}>{t('partners.hero_overline')}</p>
          <h1 className="heading-display text-warm-white">
            {t('partners.hero_h1_a')}<br /><em className="text-copper">{t('partners.hero_h1_em')}</em>{t('partners.hero_h1_b')}
          </h1>
          <p className="body-large text-muted mt-4" style={{maxWidth: '600px'}}>
            {t('partners.hero_sub')}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-surface">
        <div className="container animate-fade-up">
          <p className="overline text-copper">{t('partners.approach_overline')}</p>
          <h2 className="heading-primary mt-2" style={{maxWidth: '600px'}}>{t('partners.approach_title')}</h2>

          <div className="approach-grid-pt mt-8">
            <div className="approach-card-pt glass-panel">
              <div className="pt-num text-copper">01</div>
              <h4 className="heading-secondary mb-2">{t('partners.ap1_t')}</h4>
              <p className="text-muted text-sm mb-4">{t('partners.ap1_d')}</p>
              <ul className="pt-list text-xs text-muted">
                <li>{t('partners.ap1_li1')}</li>
                <li>{t('partners.ap1_li2')}</li>
                <li>{t('partners.ap1_li3')}</li>
              </ul>
            </div>
            <div className="approach-card-pt glass-panel">
              <div className="pt-num text-copper">02</div>
              <h4 className="heading-secondary mb-2">{t('partners.ap2_t')}</h4>
              <p className="text-muted text-sm mb-4">{t('partners.ap2_d')}</p>
              <ul className="pt-list text-xs text-muted">
                <li>{t('partners.ap2_li1')}</li>
                <li>{t('partners.ap2_li2')}</li>
                <li>{t('partners.ap2_li3')}</li>
              </ul>
            </div>
            <div className="approach-card-pt glass-panel">
              <div className="pt-num text-copper">03</div>
              <h4 className="heading-secondary mb-2">{t('partners.ap3_t')}</h4>
              <p className="text-muted text-sm mb-4">{t('partners.ap3_d')}</p>
              <ul className="pt-list text-xs text-muted">
                <li>{t('partners.ap3_li1')}</li>
                <li>{t('partners.ap3_li2')}</li>
                <li>{t('partners.ap3_li3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="section bg-midnight">
        <div className="container animate-fade-up">
          <p className="overline text-teal">{t('partners.featured_overline')}</p>
          <h2 className="heading-primary mt-2">{t('partners.featured_title')}</h2>

          <div className="featured-grid-pt mt-8">
            <div className="fp-card glass-panel" style={{borderTop: '3px solid var(--color-teal)'}}>
              <span className="fp-badge badge-teal">{t('partners.fp_badge')}</span>
              <h3 className="fp-name text-teal mt-4">KnowBe4</h3>
              <p className="fp-cat">{t('partners.fp1_cat')}</p>
              <p className="text-muted text-sm mt-3">{t('partners.fp1_d')}</p>
            </div>
            <div className="fp-card glass-panel" style={{borderTop: '3px solid var(--color-copper)'}}>
              <span className="fp-badge badge-copper">{t('partners.fp_badge')}</span>
              <h3 className="fp-name text-copper mt-4">Tenable</h3>
              <p className="fp-cat">{t('partners.fp2_cat')}</p>
              <p className="text-muted text-sm mt-3">{t('partners.fp2_d')}</p>
            </div>
            <div className="fp-card glass-panel" style={{borderTop: '3px solid var(--color-blue)'}}>
              <span className="fp-badge badge-blue">{t('partners.fp_badge')}</span>
              <h3 className="fp-name mt-4" style={{color: 'var(--color-blue)'}}>CrowdStrike</h3>
              <p className="fp-cat">{t('partners.fp3_cat')}</p>
              <p className="text-muted text-sm mt-3">{t('partners.fp3_d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Partners Grid */}
      <section className="section partners-logos-bg">
        <div className="container animate-fade-up">
          <p className="overline text-teal">{t('partners.tech_overline')}</p>
          <h2 className="heading-primary mt-2">{t('partners.tech_title')}</h2>

          <div className="logos-grid-pt mt-8">
            {partnersData.map((partner, index) => (
              <div key={index} className="pt-logo-item">
                <span className="pt-logo-dot text-teal">&middot;</span>
                <span className="pt-logo-name">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section bg-midnight">
        <div className="container animate-fade-up">
          <p className="overline text-copper">{t('partners.sectors_overline')}</p>
          <h2 className="heading-primary mt-2">{t('partners.sectors_title')}</h2>

          <div className="sectors-grid-pt mt-8">
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 21v-4h6v4M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">{t('partners.sec1_t')}</h4>
              <p className="text-muted text-sm">{t('partners.sec1_d')}</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7M2 20h20M6 8l4-4 4 4 4-4"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">{t('partners.sec2_t')}</h4>
              <p className="text-muted text-sm">{t('partners.sec2_d')}</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7zM13 2v7h7"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">{t('partners.sec3_t')}</h4>
              <p className="text-muted text-sm">{t('partners.sec3_d')}</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">{t('partners.sec4_t')}</h4>
              <p className="text-muted text-sm">{t('partners.sec4_d')}</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M9 9l-4 3 4 3M15 9l4 3-4 3M12 3l-2 18"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">{t('partners.sec5_t')}</h4>
              <p className="text-muted text-sm">{t('partners.sec5_d')}</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M3 21h18M3 21V7l9-4 9 4v14M9 21v-6h6v6"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">{t('partners.sec6_t')}</h4>
              <p className="text-muted text-sm">{t('partners.sec6_d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface text-center">
        <div className="container animate-fade-up">
          <p className="overline text-teal mb-2">{t('partners.cta_overline')}</p>
          <h2 className="heading-primary mb-4">{t('partners.cta_title')}</h2>
          <p className="body-large text-muted mx-auto mb-6" style={{maxWidth: '520px'}}>{t('partners.cta_sub')}</p>
          <div className="flex gap-4 justify-center">
             <Link to="/contact" className="btn btn-primary">{t('partners.cta_btn')}</Link>
             <a href="mailto:partners@brandvakt.com" className="btn" style={{border: '1px solid rgba(255,255,255,0.2)'}}>partners@brandvakt.com</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Partners;
