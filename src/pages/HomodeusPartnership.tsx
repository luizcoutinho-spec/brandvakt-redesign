import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomodeusPartnership.css';
import { useMeta } from '../lib/useMeta';

const HomodeusPartnership = () => {
  const { t } = useTranslation('institutional');
  useMeta({
    title: 'Brandvakt × HomoDeus',
    description: t('homodeus.meta_desc'),
  });
  return (
    <div className="page-wrapper homodeus-page">
      {/* Hero Section */}
      <section className="hero-homodeus animate-fade-up">
        {/* Animated Background Glyph that simulates the shield */}
        <div className="hero-glyph" aria-hidden="true">
          <div className="glyph-ring"></div>
          <div className="glyph-ring"></div>
          <div className="glyph-ring"></div>
          <div className="glyph-center">
            <svg className="glyph-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z" />
            </svg>
          </div>
        </div>

        <div className="container hero-content-hd" style={{position: 'relative', zIndex: 2}}>
          <p className="overline text-teal">{t('homodeus.hero_overline')}</p>
          <div className="hero-logos hd-flex">
            <h2 className="heading-secondary" style={{color: 'var(--color-text-primary)'}}>Brandvakt</h2>
            <span className="logos-sep">×</span>
            <h2 className="heading-secondary" style={{color: 'var(--color-warm-white)'}}>HomoDeus</h2>
          </div>
          <div className="logos-hr"></div>
          <h1 className="heading-display">{t('homodeus.hero_h1_l1')}<br/>{t('homodeus.hero_h1_l2')}</h1>
          <p className="body-large header-subtitle mt-4 mx-0" style={{maxWidth: '600px'}}>
            {t('homodeus.hero_sub')}
          </p>
          <div className="hd-actions mt-6">
            <a href="https://homodeus.me" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('homodeus.hero_btn_platform')} &rarr;</a>
            <Link to="/services" className="btn" style={{border: '1px solid rgba(255,255,255,0.2)'}}>{t('homodeus.hero_btn_services')}</Link>
          </div>
        </div>
      </section>

      {/* Partnership Story */}
      <section className="section bg-midnight">
        <div className="container">
          <div className="text-center animate-fade-up" style={{marginBottom: '4rem'}}>
            <p className="overline text-teal">{t('homodeus.story_overline')}</p>
            <h2 className="heading-primary">{t('homodeus.story_l1')}<br/>{t('homodeus.story_l2')}</h2>
          </div>

          <div className="partnership-grid animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="partner-card card-brandvakt glass-panel">
              <div className="partner-subtitle">{t('homodeus.pc_bv_sub')}</div>
              <h3 className="heading-secondary">Brandvakt</h3>
              <div className="divider-hd"></div>
              <p>{t('homodeus.pc_bv_d')}</p>
            </div>

            <div className="p-sep">×</div>

            <div className="partner-card card-homodeus glass-panel">
              <div className="partner-subtitle text-teal">{t('homodeus.pc_hd_sub')}</div>
              <h3 className="heading-secondary text-teal">HomoDeus</h3>
              <div className="divider-hd hd-teal"></div>
              <p>{t('homodeus.pc_hd_d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-surface">
        <div className="container">
          <div className="animate-fade-up" style={{marginBottom: '4rem'}}>
            <p className="overline text-teal">{t('homodeus.caps_overline')}</p>
            <h2 className="heading-primary">{t('homodeus.caps_l1')}<br/>{t('homodeus.caps_l2')}</h2>
          </div>

          <div className="capabilities-grid-hd animate-fade-up">
            <div className="cap-card glass-panel">
              <div className="cap-num">01</div>
              <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>{t('homodeus.cap1_t')}</h4>
              <p>{t('homodeus.cap1_d')}</p>
            </div>
            <div className="cap-card glass-panel">
              <div className="cap-num">02</div>
              <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>{t('homodeus.cap2_t')}</h4>
              <p>{t('homodeus.cap2_d')}</p>
            </div>
            <div className="cap-card glass-panel">
              <div className="cap-num">03</div>
              <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>{t('homodeus.cap3_t')}</h4>
              <p>{t('homodeus.cap3_d')}</p>
            </div>
            <div className="cap-card glass-panel">
              <div className="cap-num">04</div>
              <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>{t('homodeus.cap4_t')}</h4>
              <p>{t('homodeus.cap4_d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto-hd">
         <div className="container animate-fade-up">
           <h2 className="manifesto-text">{t('homodeus.manifesto_a')}<br/><em className="text-teal">{t('homodeus.manifesto_em')}</em></h2>
           <p className="manifesto-sub">{t('homodeus.manifesto_sub')}</p>
         </div>
      </section>

      {/* Platform */}
      <section className="platform-hd section">
         <div className="platform-glow-hd"></div>
         <div className="container position-relative z-1 animate-fade-up">
            <div className="flex flex-col items-start gap-2">
               <div className="hd-badge">★ {t('homodeus.platform_badge')}</div>
               <p className="overline text-teal mx-0">{t('homodeus.platform_overline')}</p>
            </div>
            <h2 className="heading-primary" style={{marginBottom: '2rem'}}>{t('homodeus.platform_l1')}<br/>{t('homodeus.platform_l2')}</h2>
            <p className="body-large text-muted italic" style={{maxWidth: '720px', marginBottom: '4rem'}}>
              {t('homodeus.platform_desc')}
            </p>

            <div className="platform-pillars">
               <div className="pillar-hd">
                  <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>{t('homodeus.pillar1_t')}</h4>
                  <p>{t('homodeus.pillar1_d')}</p>
               </div>
               <div className="pillar-hd">
                  <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>{t('homodeus.pillar2_t')}</h4>
                  <p>{t('homodeus.pillar2_d')}</p>
               </div>
               <div className="pillar-hd">
                  <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>{t('homodeus.pillar3_t')}</h4>
                  <p>{t('homodeus.pillar3_d')}</p>
               </div>
            </div>

            <div className="text-center mt-6">
               <a href="https://homodeus.me" target="_blank" rel="noopener noreferrer" className="btn btn-amber">{t('homodeus.platform_btn')} &rarr;</a>
            </div>
         </div>
      </section>

      {/* How It Works */}
      <section className="section bg-midnight">
         <div className="container animate-fade-up">
            <div className="text-center" style={{marginBottom: '4rem'}}>
               <p className="overline text-teal">{t('homodeus.how_overline')}</p>
               <h2 className="heading-primary">{t('homodeus.how_l1')}<br/>{t('homodeus.how_l2')}</h2>
            </div>

            <div className="how-steps">
               <div className="how-step">
                  <div className="how-num">01</div>
                  <h4 className="how-title">{t('homodeus.how1_t')}</h4>
                  <p>{t('homodeus.how1_d')}</p>
               </div>
               <div className="how-connector">— —</div>
               <div className="how-step">
                  <div className="how-num">02</div>
                  <h4 className="how-title">{t('homodeus.how2_t')}</h4>
                  <p>{t('homodeus.how2_d')}</p>
               </div>
               <div className="how-connector">— —</div>
               <div className="how-step">
                  <div className="how-num">03</div>
                  <h4 className="how-title">{t('homodeus.how3_t')}</h4>
                  <p>{t('homodeus.how3_d')}</p>
               </div>
            </div>
         </div>
      </section>

      {/* Stats */}
      <section className="section stats-hd">
         <div className="container animate-fade-up">
            <div className="text-center" style={{marginBottom: '4rem'}}>
               <p className="overline text-teal">{t('homodeus.numbers_overline')}</p>
               <h2 className="heading-primary">{t('homodeus.numbers_title')}</h2>
            </div>

            <div className="stats-grid-hd">
               <div className="stat-hd">
                  <div className="stat-num text-teal">95%</div>
                  <div className="stat-label">{t('homodeus.stat1_l')}</div>
               </div>
               <div className="stat-hd">
                  <div className="stat-num text-teal">{"<"}4m</div>
                  <div className="stat-label">{t('homodeus.stat2_l')}</div>
               </div>
               <div className="stat-hd">
                  <div className="stat-num text-teal" style={{fontSize: '3.5rem'}}>0-Day</div>
                  <div className="stat-label">{t('homodeus.stat3_l')}</div>
               </div>
               <div className="stat-hd">
                  <div className="stat-num text-teal">24/7</div>
                  <div className="stat-label">{t('homodeus.stat4_l')}</div>
               </div>
            </div>
         </div>
      </section>

      {/* Outcomes (Use Cases) */}
      <section className="section bg-midnight outcomes-section">
         <div className="container animate-fade-up">
            <div className="text-center" style={{marginBottom: '4rem'}}>
               <p className="overline text-teal">{t('homodeus.impact_overline')}</p>
               <h2 className="heading-primary">{t('homodeus.impact_l1')}<br/><em className="text-teal">{t('homodeus.impact_em')}</em></h2>
            </div>

            <div className="outcomes-grid">
               <div className="outcome-card-hd oc-financial glass-panel">
                  <span className="oc-sector text-teal">{t('homodeus.oc1_sector')}</span>
                  <div className="oc-headline">{t('homodeus.oc1_head')}</div>
                  <div className="oc-metric text-warm-white">0</div>
                  <div className="oc-unit">{t('homodeus.oc1_unit')}</div>
               </div>
               <div className="outcome-card-hd oc-telecom glass-panel">
                  <span className="oc-sector text-teal">{t('homodeus.oc2_sector')}</span>
                  <div className="oc-headline">{t('homodeus.oc2_head')}</div>
                  <div className="oc-metric text-warm-white">{"<"} 4 min</div>
                  <div className="oc-unit">{t('homodeus.oc2_unit')}</div>
               </div>
               <div className="outcome-card-hd oc-energy glass-panel">
                  <span className="oc-sector text-copper">{t('homodeus.oc3_sector')}</span>
                  <div className="oc-headline">{t('homodeus.oc3_head')}</div>
                  <div className="oc-metric text-warm-white">100%</div>
                  <div className="oc-unit">{t('homodeus.oc3_unit')}</div>
               </div>
               <div className="outcome-card-hd oc-banking glass-panel">
                  <span className="oc-sector text-teal">{t('homodeus.oc4_sector')}</span>
                  <div className="oc-headline">{t('homodeus.oc4_head')}</div>
                  <div className="oc-metric text-warm-white">67%</div>
                  <div className="oc-unit">{t('homodeus.oc4_unit')}</div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Layer */}
      <section className="section text-center" style={{ background: 'var(--color-obsidian)', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline text-teal mb-2">{t('homodeus.cta_overline')}</p>
           <h2 className="heading-primary text-warm-white mb-4">{t('homodeus.cta_title')}</h2>
           <p className="body-large mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px' }}>{t('homodeus.cta_sub')}</p>
           <div className="flex justify-center gap-4">
              <Link to="/contact" className="btn btn-primary">{t('homodeus.cta_btn1')}</Link>
              <a href="https://homodeus.me" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{border: '1px solid rgba(255,255,255,0.2)'}}>{t('homodeus.cta_btn2')} &rarr;</a>
           </div>
        </div>
      </section>

    </div>
  );
};

export default HomodeusPartnership;
