import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Services.css';
import { useMeta } from '../lib/useMeta';

const Services = () => {
  const { t } = useTranslation('institutional');
  useMeta({
    title: t('services.meta_title'),
    description: t('services.meta_desc'),
  });
  return (
    <div className="page-wrapper services-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">{t('services.overline')}</span>
          <h1 className="heading-display">{t('services.h1')}</h1>
          <p className="body-large header-subtitle">
            {t('services.subtitle')}
          </p>
        </div>
      </header>

      <section className="section container">
        <div className="services-grid-expansive">

          {/* 1. CSMA */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-teal">01</span>
                  <h2 className="heading-secondary">{t('services.s1_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s1_desc')}</p>
               <div className="service-details">
                 <h4 className="overline" style={{marginBottom: '0.5rem', color: 'var(--color-purple)'}}>{t('services.s1_process')}</h4>
                 <div className="process-timeline">
                   <div className="process-step">
                      <strong>{t('services.s1_step1_t')}</strong>
                      <p>{t('services.s1_step1_d')}</p>
                   </div>
                   <div className="process-step">
                      <strong>{t('services.s1_step2_t')}</strong>
                      <p>{t('services.s1_step2_d')}</p>
                   </div>
                   <div className="process-step">
                      <strong>{t('services.s1_step3_t')}</strong>
                      <p>{t('services.s1_step3_d')}</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* 2. Network Security */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-blue">02</span>
                  <h2 className="heading-secondary">{t('services.s2_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s2_desc')}</p>
               <div className="service-details">
                 <ul className="premium-list">
                    <li>{t('services.s2_li1')}</li>
                    <li>{t('services.s2_li2')}</li>
                    <li>{t('services.s2_li3')}</li>
                 </ul>
               </div>
            </div>
          </div>

          {/* 3. Vulnerability Management */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-teal">03</span>
                  <h2 className="heading-secondary">{t('services.s3_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s3_desc')}</p>
               <div className="service-details">
                  <div className="powered-by">{t('shared.powered_by')} Tenable</div>
                  <ul className="premium-list">
                     <li><strong>{t('services.s3_identify_t')}</strong> — {t('services.s3_identify_d')}</li>
                     <li><strong>{t('services.s3_evaluate_t')}</strong> — {t('services.s3_evaluate_d')}</li>
                     <li><strong>{t('services.s3_remediate_t')}</strong> — {t('services.s3_remediate_d')}</li>
                     <li><strong>{t('services.s3_report_t')}</strong> — {t('services.s3_report_d')}</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 4. Digital Identity */}
          <div className="service-card-premium glass-panel wide-card digital-identity">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-purple">04</span>
                  <h2 className="heading-secondary" style={{ color: 'var(--color-purple)' }}>{t('services.s4_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s4_desc')}</p>
               <div className="service-details">
                  <div className="grid-7-dimensions">
                     <div><strong>1. {t('services.s4_dim1_t')}:</strong> {t('services.s4_dim1_d')}</div>
                     <div><strong>2. {t('services.s4_dim2_t')}:</strong> {t('services.s4_dim2_d')}</div>
                     <div><strong>3. {t('services.s4_dim3_t')}:</strong> {t('services.s4_dim3_d')}</div>
                     <div><strong>4. {t('services.s4_dim4_t')}:</strong> {t('services.s4_dim4_d')}</div>
                     <div><strong>5. {t('services.s4_dim5_t')}:</strong> {t('services.s4_dim5_d')}</div>
                     <div><strong>6. {t('services.s4_dim6_t')}:</strong> {t('services.s4_dim6_d')}</div>
                     <div><strong>7. {t('services.s4_dim7_t')}:</strong> {t('services.s4_dim7_d')}</div>
                  </div>
               </div>
            </div>
          </div>

          {/* 5. Endpoint Security */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-teal">05</span>
                  <h2 className="heading-secondary">{t('services.s5_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s5_desc')}</p>
               <div className="service-details">
                  <ul className="premium-list">
                     <li>{t('services.s5_li1')}</li>
                     <li>{t('services.s5_li2')}</li>
                     <li>{t('services.s5_li3')}</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 6. Pen Testing */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-blue">06</span>
                  <h2 className="heading-secondary">{t('services.s6_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s6_desc')}</p>
               <div className="service-details">
                  <ul className="premium-list">
                     <li>{t('services.s6_li1')}</li>
                     <li>{t('services.s6_li2')}</li>
                     <li>{t('services.s6_li3')}</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 7. Cyber Awareness */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-teal">07</span>
                  <h2 className="heading-secondary">{t('services.s7_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s7_desc')}</p>
               <div className="service-details">
                  <div className="powered-by">{t('shared.powered_by')} KnowBe4</div>
                  <ul className="premium-list">
                     <li>{t('services.s7_li1')}</li>
                     <li>{t('services.s7_li2')}</li>
                     <li>{t('services.s7_li3')}</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 8. GRC / CISO as a Service */}
          <div className="service-card-premium glass-panel wide-card grc">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-blue">08</span>
                  <h2 className="heading-secondary" style={{color: 'var(--color-blue)'}}>{t('services.s8_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s8_desc')}</p>
               <div className="service-details">
                 <h4 className="overline" style={{marginBottom: '0.5rem', color: 'var(--color-blue)'}}>{t('services.s8_approach')}</h4>
                 <div className="process-timeline">
                   <div className="process-step">
                      <strong>{t('services.s8_step1_t')}</strong>
                      <p>{t('services.s8_step1_d')}</p>
                   </div>
                   <div className="process-step">
                      <strong>{t('services.s8_step2_t')}</strong>
                      <p>{t('services.s8_step2_d')}</p>
                   </div>
                   <div className="process-step">
                      <strong>{t('services.s8_step3_t')}</strong>
                      <p>{t('services.s8_step3_d')}</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* 9. Cloud Security */}
          <div className="service-card-premium glass-panel wide-card cloud">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-purple">09</span>
                  <h2 className="heading-secondary" style={{color: 'var(--color-purple)'}}>{t('services.s9_title')}</h2>
               </div>
               <p className="body-large service-desc">{t('services.s9_desc')}</p>
               <div className="service-details">
                 <h4 className="overline" style={{marginBottom: '1rem', color: 'var(--color-purple)'}}>{t('services.s9_heading')}</h4>
                 <div className="grid-6r">
                    <div className="cloud-r">
                       <strong className="text-purple">1. Rehost:</strong> {t('services.s9_r1_d')}
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">2. Replatform:</strong> {t('services.s9_r2_d')}
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">3. Repurchase:</strong> {t('services.s9_r3_d')}
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">4. Refactor:</strong> {t('services.s9_r4_d')}
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">5. Retain:</strong> {t('services.s9_r5_d')}
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">6. Retire:</strong> {t('services.s9_r6_d')}
                    </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Layer */}
      <section className="section" style={{ background: 'var(--color-obsidian)', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline" style={{color: 'var(--color-copper)', marginBottom: '1rem'}}>{t('shared.get_started')}</p>
           <h2 className="heading-display mb-4">{t('services.cta_l1')}<br/>{t('services.cta_l2')}</h2>
           <p className="body-large text-muted mb-8 max-w-2xl mx-auto">{t('services.cta_sub')}</p>
           <Link to="/contact" className="button-primary">{t('services.cta_btn')}</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
