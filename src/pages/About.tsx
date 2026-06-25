import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './About.css';
import { useMeta } from '../lib/useMeta';

const TIMEZONES: Record<string, string> = {
  kinshasa: 'Africa/Kinshasa',
  luanda: 'Africa/Luanda',
  abidjan: 'Africa/Abidjan',
  bamako: 'Africa/Bamako',
  saopaulo: 'America/Sao_Paulo',
  // Region primaries for CTA region cards
  africa: 'Africa/Kinshasa',
  latam: 'America/Sao_Paulo',
  middleeast: 'Asia/Dubai'
};

const About = () => {
  const { t } = useTranslation('institutional');
  useMeta({
    title: t('about.meta_title'),
    description: t('about.meta_desc'),
  });
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      Object.keys(TIMEZONES).forEach(city => {
        newTimes[city] = new Date().toLocaleTimeString('en-GB', {
          timeZone: TIMEZONES[city],
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const OFFICES = [
    {city: 'Kinshasa', countryKey: 'about.country_drcongo', tz: 'kinshasa'},
    {city: 'Luanda', countryKey: 'about.country_angola', tz: 'luanda'},
    {city: 'Abidjan', countryKey: 'about.country_ivory', tz: 'abidjan'},
    {city: 'Bamako', countryKey: 'about.country_mali', tz: 'bamako'},
    {city: 'São Paulo', countryKey: 'about.country_brazil', tz: 'saopaulo'}
  ];

  const REGIONS = [
    {key: 'africa',     name: 'Africa',      hub: 'Kinshasa',  tz: 'africa'},
    {key: 'latam',      name: 'LATAM',       hub: 'São Paulo', tz: 'latam'},
    {key: 'middleeast', name: 'Middle East', hub: 'Dubai',     tz: 'middleeast'}
  ];

  return (
    <div className="page-wrapper about-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">{t('about.overline')}</span>
          <h1 className="heading-display">{t('about.h1_a')} <em>{t('about.h1_em')}</em>{t('about.h1_b')}<br/>{t('about.h1_c')}</h1>
          <p className="body-large header-subtitle">
            {t('about.subtitle')}
          </p>
        </div>
      </header>

      {/* Story & Etymology */}
      <section className="section container animate-fade-up">
        <div className="story-grid">
           <div>
              <p className="overline" style={{color: 'var(--color-purple)'}}>{t('about.company_overline')}</p>
              <h2 className="heading-primary">{t('about.founded_l1')}<br/>{t('about.founded_l2')}</h2>

              <div className="glass-panel" style={{marginTop: '2rem', padding: '2rem', borderLeft: '3px solid var(--color-teal)'}}>
                 <div style={{fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--color-teal)'}}>Brandvakt</div>
                 <div style={{fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--color-text-secondary)', marginBottom: '1rem'}}>{t('about.etym_def')}</div>
                 <p className="body-large">{t('about.etym_desc')}</p>
              </div>
           </div>
           <div>
              <blockquote className="story-quote">
                {t('about.story_quote')}
              </blockquote>
              <p className="body-large" style={{marginTop: '2rem', color: 'var(--color-text-secondary)'}}>
                {t('about.story_p')}
              </p>
           </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section container animate-fade-up">
          <p className="overline text-teal">{t('about.journey_overline')}</p>
          <h2 className="heading-primary" style={{marginBottom: '3rem'}}>{t('about.journey_title')}</h2>
          <div className="timeline-grid glass-panel">
             <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-details">
                   <strong>{t('about.tl_2020_t')}</strong>
                   <p>{t('about.tl_2020_d')}</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2021</div>
                <div className="timeline-details">
                   <strong>{t('about.tl_2021_t')}</strong>
                   <p>{t('about.tl_2021_d')}</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-details">
                   <strong>{t('about.tl_2022_t')}</strong>
                   <p>{t('about.tl_2022_d')}</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-details">
                   <strong>{t('about.tl_2023_t')}</strong>
                   <p>{t('about.tl_2023_d')}</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-details">
                   <strong>{t('about.tl_2024_t')}</strong>
                   <p>{t('about.tl_2024_d')}</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-details">
                   <strong>{t('about.tl_2025_t')}</strong>
                   <p>{t('about.tl_2025_d')}</p>
                </div>
             </div>
          </div>
      </section>

      {/* Standards */}
      <section className="section container animate-fade-up">
         <p className="overline text-purple">{t('about.std_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '1rem'}}>{t('about.std_title')}</h2>
         <p className="body-large" style={{marginBottom: '3rem'}}>{t('about.std_sub')}</p>
         <div className="standards-grid">
            <div className="glass-panel standard-card">
               <div className="standard-abbr">NIST</div>
               <div className="standard-name text-teal">{t('about.std_nist_name')}</div>
               <p>{t('about.std_nist_d')}</p>
            </div>
            <div className="glass-panel standard-card">
               <div className="standard-abbr">ISO 27001</div>
               <div className="standard-name text-teal">{t('about.std_iso_name')}</div>
               <p>{t('about.std_iso_d')}</p>
            </div>
            <div className="glass-panel standard-card">
               <div className="standard-abbr">CIS</div>
               <div className="standard-name text-teal">{t('about.std_cis_name')}</div>
               <p>{t('about.std_cis_d')}</p>
            </div>
            <div className="glass-panel standard-card">
               <div className="standard-abbr">MITRE</div>
               <div className="standard-name text-teal">{t('about.std_mitre_name')}</div>
               <p>{t('about.std_mitre_d')}</p>
            </div>
         </div>
      </section>

      {/* Ethics & Policies */}
      <section className="section container animate-fade-up">
          <p className="overline text-blue">{t('about.ethics_overline')}</p>
          <h2 className="heading-primary" style={{marginBottom: '3rem'}}>{t('about.ethics_title')}</h2>
          <div className="values-grid">
             <div className="glass-panel value-card">
                <div className="value-num text-teal">01</div>
                <h4 className="heading-secondary">{t('about.val1_t')}</h4>
                <p>{t('about.val1_d')}</p>
             </div>
             <div className="glass-panel value-card">
                <div className="value-num text-purple">02</div>
                <h4 className="heading-secondary">{t('about.val2_t')}</h4>
                <p>{t('about.val2_d')}</p>
             </div>
             <div className="glass-panel value-card">
                <div className="value-num text-blue">03</div>
                <h4 className="heading-secondary">{t('about.val3_t')}</h4>
                <p>{t('about.val3_d')}</p>
             </div>
          </div>

          <h3 className="heading-secondary" style={{marginTop: '4rem', marginBottom: '2rem'}}>{t('about.policies_title')}</h3>
          <div className="policies-grid">
             {['pol1','pol2','pol3','pol4','pol5','pol6','pol7','pol8','pol9'].map(k => (
               <div key={k} className="glass-panel policy-card">
                 <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                   <div style={{color: 'var(--color-teal)'}}>•</div>
                   <div style={{flex: 1, fontSize: '0.9rem'}}>{t(`about.${k}`)}</div>
                 </div>
               </div>
             ))}
          </div>
      </section>

      {/* CSR */}
      <section className="section container animate-fade-up">
         <p className="overline text-copper">{t('about.csr_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '1rem'}}>{t('about.csr_title')}</h2>
         <p className="body-large" style={{marginBottom: '3rem'}}>{t('about.csr_sub')}</p>
         <div className="values-grid">
            <div className="glass-panel value-card" style={{borderTop: '3px solid var(--color-teal)'}}>
               <div className="value-num text-teal">01</div>
               <h4 className="heading-secondary">{t('about.csr1_t')}</h4>
               <p>{t('about.csr1_d')}</p>
            </div>
            <div className="glass-panel value-card" style={{borderTop: '3px solid var(--color-teal)'}}>
               <div className="value-num text-teal">02</div>
               <h4 className="heading-secondary">{t('about.csr2_t')}</h4>
               <p>{t('about.csr2_d')}</p>
            </div>
            <div className="glass-panel value-card" style={{borderTop: '3px solid var(--color-teal)'}}>
               <div className="value-num text-teal">03</div>
               <h4 className="heading-secondary">{t('about.csr3_t')}</h4>
               <p>{t('about.csr3_d')}</p>
            </div>
         </div>
      </section>

      {/* Global Offices */}
      <section className="section container animate-fade-up">
         <p className="overline text-teal">{t('about.offices_overline')}</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>{t('about.offices_title')}</h2>
         <div className="offices-grid">
            {OFFICES.map(office => (
               <div key={office.city} className="glass-panel office-card">
                  <h3 className="heading-secondary">{office.city}</h3>
                  <div className="office-country text-teal">{t(office.countryKey)}</div>
                  <div className="office-time">
                     <span className="office-time-label">{t('about.office_time_label')}</span> {times[office.tz] || '--:--:--'}
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* CTA Layer */}
      <section className="section" style={{ background: 'var(--color-obsidian)', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline" style={{color: 'var(--color-copper)', marginBottom: '1rem'}}>{t('about.cta_overline')}</p>
           <h2 className="heading-display mb-4">{t('about.cta_l1')}<br/>{t('about.cta_l2')}</h2>
           <p className="body-large text-muted mb-8 max-w-2xl mx-auto">{t('about.cta_sub')}</p>
           <Link to="/contact" className="button-primary">{t('about.cta_btn')}</Link>

           <div className="region-cta-grid">
              {REGIONS.map(region => (
                <Link key={region.key} to="/contact" className="glass-panel region-cta-card">
                   <div className="region-cta-name">{region.name}</div>
                   <div className="region-cta-hub">{t('about.region_hub_prefix')} {region.hub}</div>
                   <div className="region-cta-time">{times[region.tz] || '--:--:--'}</div>
                </Link>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default About;
