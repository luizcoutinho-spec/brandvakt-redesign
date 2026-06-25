import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Academy.css';
import { useMeta } from '../lib/useMeta';

const Academy = () => {
  const { t } = useTranslation('pages');
  useMeta({
    title: 'Academy',
    description: t('academy.meta_desc'),
  });
  return (
    <div className="page-wrapper academy-page">
      {/* Hero */}
      <section className="hero-academy">
        <div className="hero-academy-bg" aria-hidden="true">ACADEMY</div>
        <div className="container hero-content animate-fade-up" style={{position: 'relative', zIndex: 2}}>
          <p className="overline text-teal" style={{marginBottom: '1rem'}}>Brandvakt Academy</p>
          <h1 className="heading-display text-warm-white" style={{marginBottom: '1.5rem'}}>
            {t('academy.hero_l1')}<br />{t('academy.hero_l2_pre')} <em className="text-teal">{t('academy.hero_em')}</em>
          </h1>
          <p className="body-large text-muted mb-6" style={{maxWidth: '520px'}}>
            {t('academy.hero_sub')}
          </p>
          <div className="flex gap-4 flex-wrap mt-6">
            <a href="https://brandvakt-academy.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('academy.hero_btn_browse')}</a>
            <Link to="/contact" className="btn btn-ghost" style={{border: '1px solid rgba(255,255,255,0.2)'}}>{t('academy.hero_btn_team')} &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="stats-band-acd animate-fade-up" style={{animationDelay: '0.2s'}}>
        <div className="container">
          <div className="stats-inner-acd">
            <div className="stat-item-acd">
              <div className="stat-num-acd">50+</div>
              <div className="stat-lbl-acd">{t('academy.stat1_l')}</div>
            </div>
            <div className="stat-item-acd">
              <div className="stat-num-acd">7</div>
              <div className="stat-lbl-acd">{t('academy.stat2_l')}</div>
            </div>
            <div className="stat-item-acd">
              <div className="stat-num-acd">4</div>
              <div className="stat-lbl-acd">{t('academy.stat3_l')}</div>
            </div>
            <div className="stat-item-acd">
              <div className="stat-num-acd">100%</div>
              <div className="stat-lbl-acd">{t('academy.stat4_l')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-midnight">
        <div className="container">
          <div className="about-grid-acd animate-fade-up">
            <div className="about-left-acd">
              <p className="overline text-teal">{t('academy.about_overline')}</p>
              <h2 className="heading-primary mt-2 mb-4">{t('academy.about_title_l1')}<br /><em className="text-teal">{t('academy.about_title_em')}</em></h2>
              <p className="body-large text-muted mb-4">
                {t('academy.about_p')}
              </p>
              <ul className="ac-features">
                <li>{t('academy.about_li1')}</li>
                <li>{t('academy.about_li2')}</li>
                <li>{t('academy.about_li3')}</li>
              </ul>
            </div>
            <div className="about-right-acd glass-panel">
              <div className="ac-stat-box">
                <div className="ac-stat-num text-teal">ISO</div>
                <div className="ac-stat-lbl">27005 · 31000 · 37001 · 37301 · 42001</div>
              </div>
              <div className="ac-stat-box">
                <div className="ac-stat-num text-teal">ESG</div>
                <div className="ac-stat-lbl">{t('academy.acbox_esg_lbl')}</div>
              </div>
              <div className="ac-stat-box">
                <div className="ac-stat-num text-teal">GRC</div>
                <div className="ac-stat-lbl">{t('academy.acbox_grc_lbl')}</div>
              </div>
              <div className="ac-stat-box">
                <div className="ac-stat-num text-teal">AI</div>
                <div className="ac-stat-lbl">{t('academy.acbox_ai_lbl')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog */}
      <section className="section bg-surface">
        <div className="container">
          <div className="animate-fade-up mb-6">
            <p className="overline">{t('academy.cat_overline')}</p>
            <h2 className="heading-primary">{t('academy.cat_title')}</h2>
          </div>

          <div className="courses-grid-acd animate-fade-up">
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-essentials">Essentials</span>
              <h3 className="course-title">Environmental, Social & Governance (ESG) Essentials</h3>
              <p className="course-desc">{t('academy.c1_desc')}</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">{t('academy.course_cta')} &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-essentials">Essentials</span>
              <h3 className="course-title">Management System (MS) Essentials</h3>
              <p className="course-desc">{t('academy.c2_desc')}</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">{t('academy.course_cta')} &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-iso">ISO/IEC 27005</span>
              <h3 className="course-title">ISO/IEC 27005 Professional</h3>
              <p className="course-desc">{t('academy.c3_desc')}</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">{t('academy.course_cta')} &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-iso">ISO 31000</span>
              <h3 className="course-title">ISO 31000 Practitioner</h3>
              <p className="course-desc">{t('academy.c4_desc')}</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">{t('academy.course_cta')} &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-advanced">ISO 37001</span>
              <h3 className="course-title">ISO 37001 Lead Auditor</h3>
              <p className="course-desc">{t('academy.c5_desc')}</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">{t('academy.course_cta')} &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-advanced">ISO 37001</span>
              <h3 className="course-title">ISO 37001 Lead Implementer</h3>
              <p className="course-desc">{t('academy.c6_desc')}</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">{t('academy.course_cta')} &rarr;</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 animate-fade-up">
             <a href="https://brandvakt-academy.com/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{border: '1px solid rgba(255,255,255,0.2)'}}>{t('academy.cat_viewfull')} &rarr;</a>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="section bg-midnight tracks-section">
         <div className="container">
            <div className="animate-fade-up mb-6">
               <p className="overline">{t('academy.tracks_overline')}</p>
               <h2 className="heading-primary">{t('academy.tracks_title')}</h2>
            </div>
            <div className="tracks-grid-acd animate-fade-up">
               <div className="track-card-acd glass-panel">
                  <div className="track-icon">
                     <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <h4 className="heading-secondary">{t('academy.track1_t')}</h4>
                  <p className="text-muted mt-2 mb-4">{t('academy.track1_d')}</p>
                  <div className="track-courses">
                     <span>— {t('academy.track1_c1')}</span>
                     <span>— {t('academy.track1_c2')}</span>
                     <span>— {t('academy.track1_c3')}</span>
                  </div>
               </div>
               <div className="track-card-acd glass-panel">
                  <div className="track-icon">
                     <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  </div>
                  <h4 className="heading-secondary">{t('academy.track2_t')}</h4>
                  <p className="text-muted mt-2 mb-4">{t('academy.track2_d')}</p>
                  <div className="track-courses">
                     <span>— {t('academy.track2_c1')}</span>
                     <span>— {t('academy.track2_c2')}</span>
                     <span>— {t('academy.track2_c3')}</span>
                  </div>
               </div>
               <div className="track-card-acd glass-panel">
                  <div className="track-icon">
                     <svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h4 className="heading-secondary">{t('academy.track3_t')}</h4>
                  <p className="text-muted mt-2 mb-4">{t('academy.track3_d')}</p>
                  <div className="track-courses">
                     <span>— {t('academy.track3_c1')}</span>
                     <span>— {t('academy.track3_c2')}</span>
                     <span>— {t('academy.track3_c3')}</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Enroll CTA */}
      <section className="section bg-surface text-center">
         <div className="container animate-fade-up">
            <p className="overline text-teal">{t('academy.enroll_overline')}</p>
            <h2 className="heading-primary mt-2 mb-4">{t('academy.enroll_title')}</h2>
            <p className="body-large text-muted mx-auto mb-6" style={{maxWidth: '480px'}}>
               {t('academy.enroll_sub')}
            </p>
            <div className="flex gap-4 justify-center">
               <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('academy.enroll_btn_browse')}</a>
               <Link to="/contact" className="btn" style={{border: '1px solid rgba(255,255,255,0.2)'}}>{t('academy.enroll_btn_ent')}</Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Academy;
