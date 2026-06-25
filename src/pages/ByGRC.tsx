import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ByGRC.css';
import { useMeta } from '../lib/useMeta';

const FRAMEWORKS = ["GDPR", "NIS2", "DORA", "ISO 27001", "NIST CSF", "CIS Controls", "SOC 2", "PCI DSS", "HIPAA", "SWIFT CSP", "LGPD", "ISO 31000", "ISO 27701", "COBIT 2019", "ISO 22301", "CSA STAR", "NIST 800-53", "ISO 27017", "POPIA", "NDPA", "SAMA CSF", "BACEN", "Cyber Essentials", "SOX", "CCPA", "ENS", "ISO 20000", "Basel IV", "CMMC 2.0", "PIPEDA", "PDPA", "CSX"];

const ByGRC = () => {
  const { t } = useTranslation(['institutional', 'common']);
  useMeta({
    title: 'Docs byGRC',
    description: t('bygrc.meta_desc'),
  });
  return (
    <div className="page-wrapper bygrc-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <div style={{display: 'inline-block', background: 'var(--color-copper)', color: 'var(--color-canvas)', padding: '0.35rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem'}}>Docs byGRC</div>
          <h1 className="heading-display">{t('bygrc.h1_a')} <em>{t('bygrc.h1_em')}</em>{t('bygrc.h1_b')}</h1>
          <p className="body-large header-subtitle">
            {t('bygrc.subtitle')}
          </p>
          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <Link to="/contact" className="btn btn-primary">{t('common:nav.demo')}</Link>
            <a href="#features" className="btn" style={{border: '1px solid rgba(255,255,255,0.2)'}}>{t('bygrc.explore_btn')}</a>
          </div>
        </div>
      </header>

      {/* Platform Features Band */}
      <section className="animate-fade-up" style={{background: 'var(--color-surface)', padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s'}}>
         <div className="container pf-grid">
            <div className="pf-card-mini">
               <div className="pf-icon">↻</div>
               <div>
                 <strong style={{color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem'}}>{t('bygrc.pf1_t')}</strong>
                 <span style={{color: 'var(--color-text-secondary)', fontSize: '0.85rem'}}>{t('bygrc.pf1_d')}</span>
               </div>
            </div>
            <div className="pf-card-mini">
               <div className="pf-icon">🔍</div>
               <div>
                 <strong style={{color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem'}}>{t('bygrc.pf2_t')}</strong>
                 <span style={{color: 'var(--color-text-secondary)', fontSize: '0.85rem'}}>{t('bygrc.pf2_d')}</span>
               </div>
            </div>
            <div className="pf-card-mini">
               <div className="pf-icon">📊</div>
               <div>
                 <strong style={{color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem'}}>{t('bygrc.pf3_t')}</strong>
                 <span style={{color: 'var(--color-text-secondary)', fontSize: '0.85rem'}}>{t('bygrc.pf3_d')}</span>
               </div>
            </div>
         </div>
      </section>

      {/* Platform Overview */}
      <section className="section container animate-fade-up">
         <div className="bygrc-intro-grid">
            <div>
               <p className="overline text-copper">{t('bygrc.po_overline')}</p>
               <h2 className="heading-primary" style={{marginBottom: '2rem'}}>{t('bygrc.po_title')}</h2>
               <p className="body-large" style={{color: 'var(--color-text-secondary)'}}>
                 {t('bygrc.po_desc')}
               </p>
            </div>
            <div className="glass-panel" style={{padding: '2rem', borderTop: '2px solid var(--color-copper)'}}>
               <div className="visual-row">
                  <span className="v-label">{t('bygrc.vrow_lgpd')}</span>
                  <div className="v-bar"><div className="v-fill bg-copper" style={{width: '87%'}}></div></div>
               </div>
               <div className="visual-row">
                  <span className="v-label">ISO 27001</span>
                  <div className="v-bar"><div className="v-fill bg-teal" style={{width: '94%'}}></div></div>
               </div>
               <div className="visual-row">
                  <span className="v-label">{t('bygrc.vrow_nist')}</span>
                  <div className="v-bar"><div className="v-fill bg-copper" style={{width: '76%'}}></div></div>
               </div>
               <div className="visual-row">
                  <span className="v-label">DORA</span>
                  <div className="v-bar"><div className="v-fill bg-teal" style={{width: '91%'}}></div></div>
               </div>
               <div className="visual-row">
                  <span className="v-label">CIS Controls</span>
                  <div className="v-bar"><div className="v-fill bg-muted" style={{width: '82%'}}></div></div>
               </div>
            </div>
         </div>
      </section>

      {/* Why byGRC */}
      <section className="section animate-fade-up" style={{background: 'var(--color-surface)', padding: '5rem 0'}}>
         <div className="container">
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
               <p className="overline text-copper">{t('bygrc.why_overline')}</p>
               <h2 className="heading-primary">{t('bygrc.why_title')}</h2>
               <p className="body-large mx-auto mt-2" style={{maxWidth: '700px', color: 'var(--color-text-secondary)'}}>{t('bygrc.why_sub')}</p>
            </div>
            <div className="why-grid">
               <div className="why-card glass-panel" style={{borderLeft: '4px solid var(--color-copper)'}}>
                  <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-copper)', marginBottom: '1rem'}}>{t('bygrc.before_t')}</h3>
                  <p>{t('bygrc.before_d')}</p>
               </div>
               <div className="why-card glass-panel" style={{borderLeft: '4px solid var(--color-teal)'}}>
                  <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-teal)', marginBottom: '1rem'}}>{t('bygrc.after_t')}</h3>
                  <p>{t('bygrc.after_d')}</p>
               </div>
               <div className="why-card glass-panel" style={{borderLeft: '4px solid var(--color-text-secondary)'}}>
                  <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-text-primary)', marginBottom: '1rem'}}>{t('bygrc.always_t')}</h3>
                  <p>{t('bygrc.always_d')}</p>
               </div>
            </div>
         </div>
      </section>

      {/* Core Capabilities */}
      <section className="section container animate-fade-up" id="features">
         <p className="overline text-copper">{t('bygrc.core_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '1rem'}}>{t('bygrc.core_title')}</h2>
         <p className="body-large" style={{marginBottom: '3rem', color: 'var(--color-text-secondary)'}}>{t('bygrc.core_sub')}</p>
         <div className="pillars-grid">
            <div className="glass-panel pillar-card">
               <h4 className="heading-secondary">{t('bygrc.pillar1_t')}</h4>
               <p>{t('bygrc.pillar1_d')}</p>
               <div className="pill-tags">
                  <span>LGPD</span> <span>DORA</span> <span>ISO</span> <span>NIST</span> <span>CIS</span>
               </div>
            </div>
            <div className="glass-panel pillar-card">
               <h4 className="heading-secondary">{t('bygrc.pillar2_t')}</h4>
               <p>{t('bygrc.pillar2_d')}</p>
               <div className="pill-tags bg-secondary">
                  <span>Smart Import</span> <span>Semantic Search</span> <span>Auto-categorize</span>
               </div>
            </div>
            <div className="glass-panel pillar-card">
               <h4 className="heading-secondary">{t('bygrc.pillar3_t')}</h4>
               <p>{t('bygrc.pillar3_d')}</p>
               <div className="pill-tags bg-tertiary">
                  <span>Treeview</span> <span>Dashboards</span> <span>Real-time</span>
               </div>
            </div>
         </div>
      </section>

      {/* Frameworks Coverage */}
      <section className="section container animate-fade-up">
         <p className="overline text-copper">{t('bygrc.cov_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '2rem'}}>{t('bygrc.cov_title')}</h2>
         <div className="frameworks-flex">
            {FRAMEWORKS.map(fw => (
              <span key={fw} className="framework-pill">{fw}</span>
            ))}
         </div>
         <p className="mt-4" style={{color: 'var(--color-text-secondary)'}}>{t('bygrc.cov_note')}</p>
      </section>

      {/* Expert Services */}
      <section className="section container animate-fade-up">
         <div className="grc-services-grid">
            <div>
               <p className="overline text-copper">{t('bygrc.exp_overline')}</p>
               <h2 className="heading-primary">{t('bygrc.exp_title')}</h2>
               <p className="body-large mt-4" style={{color: 'var(--color-text-secondary)'}}>{t('bygrc.exp_desc')}</p>
            </div>
            <div className="grc-services-list">
               <div className="glass-panel grc-service-card" style={{borderTop: '2px solid var(--color-teal)'}}>
                  <h4 className="heading-secondary" style={{marginBottom: '0.5rem'}}>{t('bygrc.es1_t')}</h4>
                  <p>{t('bygrc.es1_d')}</p>
               </div>
               <div className="glass-panel grc-service-card" style={{borderTop: '2px solid var(--color-copper)'}}>
                  <h4 className="heading-secondary" style={{marginBottom: '0.5rem'}}>{t('bygrc.es2_t')}</h4>
                  <p>{t('bygrc.es2_d')}</p>
               </div>
               <div className="glass-panel grc-service-card" style={{borderTop: '2px solid var(--color-blue)'}}>
                  <h4 className="heading-secondary" style={{marginBottom: '0.5rem'}}>{t('bygrc.es3_t')}</h4>
                  <p>{t('bygrc.es3_d')}</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Layer */}
      <section className="section text-center" style={{ background: 'var(--color-obsidian)', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline text-teal mb-2">{t('shared.get_started')}</p>
           <h2 className="heading-primary text-warm-white mb-4">{t('bygrc.cta_title')}</h2>
           <p className="body-large mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px' }}>{t('bygrc.cta_sub')}</p>
           <Link to="/contact" className="btn btn-primary">{t('common:nav.demo')}</Link>
        </div>
      </section>

    </div>
  );
};

export default ByGRC;
