import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SOC.css';
import { useMeta } from '../lib/useMeta';

const SOC = () => {
  const { t } = useTranslation('institutional');
  useMeta({
    title: t('soc.meta_title'),
    description: t('soc.meta_desc'),
  });
  return (
    <div className="page-wrapper services-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">{t('soc.overline')}</span>
          <h1 className="heading-display">{t('soc.h1')}</h1>
          <p className="body-large header-subtitle">
            {t('soc.subtitle')}
          </p>
        </div>
      </header>

      {/* Live Telemetry Matrix - The React Feature */}
      <section className="section container">
        <div className="soc-dashboard-glass animate-fade-up" style={{animationDelay: '0.2s'}}>
           <div className="soc-header">
              <span className="soc-title">{t('soc.telemetry_title')}</span>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                 <span style={{fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-teal)'}}>{t('soc.conn_secure')}</span>
                 <div className="soc-pulse-dot"></div>
              </div>
           </div>
           <div className="soc-metrics-container">
              <div className="soc-metric-box">
                 <div className="soc-metric-top">
                    <span className="soc-metric-val">128M</span>
                    <span className="soc-metric-label">{t('soc.tm_events')}</span>
                 </div>
                 <div className="soc-metric-bar"><div className="soc-metric-fill" style={{animationDelay: "0s"}}></div></div>
              </div>
              <div className="soc-metric-box">
                 <div className="soc-metric-top">
                    <span className="soc-metric-val">{"<"}10m</span>
                    <span className="soc-metric-label">{t('soc.tm_mttr')}</span>
                 </div>
                 <div className="soc-metric-bar"><div className="soc-metric-fill" style={{animationDelay: "0.5s"}}></div></div>
              </div>
              <div className="soc-metric-box">
                 <div className="soc-metric-top">
                    <span className="soc-metric-val">24/7</span>
                    <span className="soc-metric-label">{t('soc.tm_human')}</span>
                 </div>
                 <div className="soc-metric-bar"><div className="soc-metric-fill" style={{animationDelay: "1s"}}></div></div>
              </div>
           </div>
        </div>
      </section>

      {/* Threat Band */}
      <div className="threat-band animate-fade-up">
         <div className="container" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between'}}>
            <div className="threat-stat">
               <span className="threat-num text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontStyle: 'italic', lineHeight: 1}}>2,500+</span>
               <span className="threat-label">{t('soc.band1')}</span>
            </div>
            <div className="threat-stat">
               <span className="threat-num text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontStyle: 'italic', lineHeight: 1}}>$10.5T</span>
               <span className="threat-label">{t('soc.band2')}</span>
            </div>
            <div className="threat-stat">
               <span className="threat-num text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontStyle: 'italic', lineHeight: 1}}>94%</span>
               <span className="threat-label">{t('soc.band3')}</span>
            </div>
            <div className="threat-stat">
               <span className="threat-num text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontStyle: 'italic', lineHeight: 1}}>39s</span>
               <span className="threat-label">{t('soc.band4')}</span>
            </div>
         </div>
      </div>

      {/* Stats Grid */}
      <section className="section container animate-fade-up">
         <div className="stats-grid">
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>$4.24M</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>{t('soc.stat1')}</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>287<span style={{fontSize: '1.5rem'}}> {t('soc.stat2_unit')}</span></div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>{t('soc.stat2')}</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>82%</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>{t('soc.stat3')}</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>650+</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>{t('soc.stat4')}</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>62%</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>{t('soc.stat5')}</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>20%</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>{t('soc.stat6')}</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>$180</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>{t('soc.stat7')}</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>75%</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>{t('soc.stat8')}</div>
            </div>
         </div>
      </section>

      {/* Outcomes Grid */}
      <section className="section container animate-fade-up">
         <p className="overline text-teal">{t('soc.outcomes_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>{t('soc.outcomes_title')}</h2>
         <div className="outcomes-grid">
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-teal">60%</div>
               <h4 className="heading-secondary">{t('soc.oc1_t')}</h4>
               <p>{t('soc.oc1_d')}</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-purple">4h</div>
               <h4 className="heading-secondary">{t('soc.oc2_t')}</h4>
               <p>{t('soc.oc2_d')}</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-blue">97%</div>
               <h4 className="heading-secondary">{t('soc.oc3_t')}</h4>
               <p>{t('soc.oc3_d')}</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-copper">24/7</div>
               <h4 className="heading-secondary">{t('soc.oc4_t')}</h4>
               <p>{t('soc.oc4_d')}</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-teal">1</div>
               <h4 className="heading-secondary">{t('soc.oc5_t')}</h4>
               <p>{t('soc.oc5_d')}</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-purple">12×</div>
               <h4 className="heading-secondary">{t('soc.oc6_t')}</h4>
               <p>{t('soc.oc6_d')}</p>
            </div>
         </div>
      </section>

      {/* SOC Capabilities Wheel Equivalent */}
      <section className="section container animate-fade-up">
         <p className="overline text-purple">{t('soc.caps_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '1rem'}}>{t('soc.caps_title')}</h2>
         <p className="body-large" style={{marginBottom: '3rem'}}>{t('soc.caps_sub')}</p>

         <div className="capabilities-grid">
            <div className="glass-panel cap-card" style={{borderTop: '2px solid var(--color-teal)'}}>
               <h4 className="heading-secondary">01. {t('soc.cap1_t')}</h4>
               <ul className="premium-list">
                  <li>{t('soc.cap1_li1')}</li>
                  <li>{t('soc.cap1_li2')}</li>
                  <li>{t('soc.cap1_li3')}</li>
                  <li>{t('soc.cap1_li4')}</li>
               </ul>
            </div>
            <div className="glass-panel cap-card" style={{borderTop: '2px solid var(--color-copper)'}}>
               <h4 className="heading-secondary">02. {t('soc.cap2_t')}</h4>
               <ul className="premium-list">
                  <li>{t('soc.cap2_li1')}</li>
                  <li>{t('soc.cap2_li2')}</li>
                  <li>{t('soc.cap2_li3')}</li>
                  <li>{t('soc.cap2_li4')}</li>
               </ul>
            </div>
            <div className="glass-panel cap-card" style={{borderTop: '2px solid var(--color-blue)'}}>
               <h4 className="heading-secondary">03. {t('soc.cap3_t')}</h4>
               <ul className="premium-list">
                  <li>{t('soc.cap3_li1')}</li>
                  <li>{t('soc.cap3_li2')}</li>
                  <li>{t('soc.cap3_li3')}</li>
                  <li>{t('soc.cap3_li4')}</li>
               </ul>
            </div>
            <div className="glass-panel cap-card" style={{borderTop: '2px solid var(--color-purple)'}}>
               <h4 className="heading-secondary">04. {t('soc.cap4_t')}</h4>
               <ul className="premium-list">
                  <li>{t('soc.cap4_li1')}</li>
                  <li>{t('soc.cap4_li2')}</li>
                  <li>{t('soc.cap4_li3')}</li>
                  <li>{t('soc.cap4_li4')}</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Delivery Models */}
      <section className="section container animate-fade-up">
         <p className="overline text-blue">{t('soc.delivery_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>{t('soc.delivery_title')}</h2>
         <div className="delivery-grid">
            <div className="glass-panel delivery-card">
               <div className="delivery-num">01</div>
               <h4 className="heading-secondary" style={{color: 'var(--color-teal)'}}>{t('soc.dm1_t')}</h4>
               <p style={{minHeight: '80px'}}>{t('soc.dm1_d')}</p>
               <div className="delivery-tags">
                  <span className="d-tag">{t('soc.dm1_tag1')}</span>
                  <span className="d-tag">{t('soc.dm1_tag2')}</span>
               </div>
            </div>
            <div className="glass-panel delivery-card">
               <div className="delivery-num">02</div>
               <h4 className="heading-secondary" style={{color: 'var(--color-purple)'}}>{t('soc.dm2_t')}</h4>
               <p style={{minHeight: '80px'}}>{t('soc.dm2_d')}</p>
               <div className="delivery-tags">
                  <span className="d-tag">{t('soc.dm2_tag1')}</span>
                  <span className="d-tag">{t('soc.dm2_tag2')}</span>
               </div>
            </div>
            <div className="glass-panel delivery-card">
               <div className="delivery-num">03</div>
               <h4 className="heading-secondary" style={{color: 'var(--color-blue)'}}>{t('soc.dm3_t')}</h4>
               <p style={{minHeight: '80px'}}>{t('soc.dm3_d')}</p>
               <div className="delivery-tags">
                  <span className="d-tag">{t('soc.dm3_tag1')}</span>
                  <span className="d-tag">{t('soc.dm3_tag2')}</span>
               </div>
            </div>
         </div>
      </section>

      {/* Differentiators */}
      <section className="section container animate-fade-up">
         <p className="overline text-copper">{t('soc.diff_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>{t('soc.diff_title')}</h2>
         <div className="diff-grid-soc">
            <div className="glass-panel diff-soc-card">
               <h4 className="heading-secondary">{t('soc.df1_t')}</h4>
               <p>{t('soc.df1_d')}</p>
            </div>
            <div className="glass-panel diff-soc-card">
               <h4 className="heading-secondary">{t('soc.df2_t')}</h4>
               <p>{t('soc.df2_d')}</p>
            </div>
            <div className="glass-panel diff-soc-card">
               <h4 className="heading-secondary">{t('soc.df3_t')}</h4>
               <p>{t('soc.df3_d')}</p>
            </div>
            <div className="glass-panel diff-soc-card">
               <h4 className="heading-secondary">{t('soc.df4_t')}</h4>
               <p>{t('soc.df4_d')}</p>
            </div>
         </div>
      </section>

      {/* CTA Layer */}
      <section className="section" style={{ background: 'var(--color-obsidian)', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline" style={{color: 'var(--color-copper)', marginBottom: '1rem'}}>{t('shared.get_started')}</p>
           <h2 className="heading-display mb-4">{t('soc.cta_l1')}<br/>{t('soc.cta_l2')}</h2>
           <p className="body-large text-muted mb-8 max-w-2xl mx-auto">{t('soc.cta_sub')}</p>
           <Link to="/contact" className="button-primary">{t('soc.cta_btn')}</Link>
        </div>
      </section>

    </div>
  );
};

export default SOC;
