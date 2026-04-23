import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  useMeta({
    title: 'About',
    description: 'Founded in crisis, built for resilience. Brandvakt — the digital sentinels of our age. Offices across Africa and LATAM; partnerships across four continents.'
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

  return (
    <div className="page-wrapper about-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">About Brandvakt</span>
          <h1 className="heading-display">The digital <em>sentinels</em><br/>of our age</h1>
          <p className="body-large header-subtitle">
            From the ancient city guards who watched for fire, to the cybersecurity professionals protecting your organization today.
          </p>
        </div>
      </header>

      {/* Story & Etymology */}
      <section className="section container animate-fade-up">
        <div className="story-grid">
           <div>
              <p className="overline" style={{color: 'var(--color-purple)'}}>Our Company</p>
              <h2 className="heading-primary">Founded in crisis,<br/>built for resilience</h2>
              
              <div className="glass-panel" style={{marginTop: '2rem', padding: '2rem', borderLeft: '3px solid var(--color-teal)'}}>
                 <div style={{fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--color-teal)'}}>Brandvakt</div>
                 <div style={{fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--color-text-secondary)', marginBottom: '1rem'}}>Swedish, noun. From brand (fire) + vakt (watch, guard).</div>
                 <p className="body-large">The sentinel who ensures the fire burns smoothly, doesn't spread, contains it if something goes wrong, and ensures the safety of everyone.</p>
              </div>
           </div>
           <div>
              <blockquote className="story-quote">
                "The word Brandvakt means 'Firewatch'. The Brandvakt ensures the fire burns smoothly, doesn't spread, and ensures the safety of everyone — that is how we see our role in the digital world."
              </blockquote>
              <p className="body-large" style={{marginTop: '2rem', color: 'var(--color-text-secondary)'}}>
                Founded during the pandemic, Brandvakt is a trusted partner for financial services, telecommunications, and energy sectors — using AI to accelerate threat detection, automate incident response, and anticipate risks before they materialize.
              </p>
           </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section container animate-fade-up">
          <p className="overline text-teal">Our Journey</p>
          <h2 className="heading-primary" style={{marginBottom: '3rem'}}>Built from first principles</h2>
          <div className="timeline-grid glass-panel">
             <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-details">
                   <strong>Founded in the pandemic</strong>
                   <p>Digital threats surged. Organizations were unprepared. Brandvakt launched.</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2021</div>
                <div className="timeline-details">
                   <strong>Kinshasa opens</strong>
                   <p>First international office. DRC presence established to serve Central African enterprises.</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-details">
                   <strong>Luanda & São Paulo</strong>
                   <p>Angola and Brazil opened simultaneously — spanning the South Atlantic corridor.</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-details">
                   <strong>Ivory Coast & Mali "Bamako"</strong>
                   <p>West Africa expansion. Offices established in Abidjan and Bamako to serve francophone enterprises.</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-details">
                   <strong>Launch of Brandvakt Academy</strong>
                   <p>Q4 2024. Recognized cybersecurity training programs built by active industry practitioners.</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-details">
                   <strong>Partnership with HomoDeus</strong>
                   <p>AI-native partnership with HomoDeus integrated into the full service portfolio.</p>
                </div>
             </div>
          </div>
      </section>

      {/* Standards */}
      <section className="section container animate-fade-up">
         <p className="overline text-purple">Professional Standards</p>
         <h2 className="heading-primary" style={{marginBottom: '1rem'}}>Built on industry-recognized frameworks</h2>
         <p className="body-large" style={{marginBottom: '3rem'}}>Proven, defensible frameworks. No proprietary reinvention.</p>
         <div className="standards-grid">
            <div className="glass-panel standard-card">
               <div className="standard-abbr">NIST</div>
               <div className="standard-name text-teal">Cybersecurity Framework</div>
               <p>Identify, Protect, Detect, Respond, Recover — the five pillars of resilient security.</p>
            </div>
            <div className="glass-panel standard-card">
               <div className="standard-abbr">ISO 27001</div>
               <div className="standard-name text-teal">Information Security Mgmt</div>
               <p>International standard for establishing and maintaining an effective ISMS.</p>
            </div>
            <div className="glass-panel standard-card">
               <div className="standard-abbr">CIS</div>
               <div className="standard-name text-teal">Critical Security Controls</div>
               <p>18 prioritized controls defending against the most prevalent attack techniques.</p>
            </div>
            <div className="glass-panel standard-card">
               <div className="standard-abbr">MITRE</div>
               <div className="standard-name text-teal">ATT&CK Framework</div>
               <p>Adversary tactics and techniques powering our threat detection and hunting operations.</p>
            </div>
         </div>
      </section>

      {/* Ethics & Policies */}
      <section className="section container animate-fade-up">
          <p className="overline text-blue">Governance & Ethics</p>
          <h2 className="heading-primary" style={{marginBottom: '3rem'}}>How we operate</h2>
          <div className="values-grid">
             <div className="glass-panel value-card">
                <div className="value-num text-teal">01</div>
                <h4 className="heading-secondary">Trust & Credibility</h4>
                <p>Reputation is an asset. Every interaction reinforces it.</p>
             </div>
             <div className="glass-panel value-card">
                <div className="value-num text-purple">02</div>
                <h4 className="heading-secondary">Integrity & Impartiality</h4>
                <p>We avoid conflicts of interest. Quality of work is non-negotiable.</p>
             </div>
             <div className="glass-panel value-card">
                <div className="value-num text-blue">03</div>
                <h4 className="heading-secondary">Zero Tolerance</h4>
                <p>No bribery, no corruption, no fraud. No exceptions.</p>
             </div>
          </div>
          
          <h3 className="heading-secondary" style={{marginTop: '4rem', marginBottom: '2rem'}}>Corporate Policies</h3>
          <div className="policies-grid">
             {['Anti-Corruption Policy', 'Code of Business Ethics', 'Competition Laws Policy', 'Conflicts of Interest', 'Data Protection Policy', 'Environmental Policy', 'ESG Policy', 'Human Rights Policy', 'Supplier Standards Policy'].map(policy => (
               <div key={policy} className="glass-panel policy-card">
                 <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                   <div style={{color: 'var(--color-teal)'}}>•</div>
                   <div style={{flex: 1, fontSize: '0.9rem'}}>{policy}</div>
                 </div>
               </div>
             ))}
          </div>
      </section>

      {/* CSR */}
      <section className="section container animate-fade-up">
         <p className="overline text-copper">Corporate Social Responsibility</p>
         <h2 className="heading-primary" style={{marginBottom: '1rem'}}>Sustainable development as a foundation</h2>
         <p className="body-large" style={{marginBottom: '3rem'}}>Social, economic, and environmental accountability are embedded in operations — not appended as policy.</p>
         <div className="values-grid">
            <div className="glass-panel value-card" style={{borderTop: '3px solid var(--color-teal)'}}>
               <div className="value-num text-teal">01</div>
               <h4 className="heading-secondary">Digital Inclusion</h4>
               <p>Security knowledge should not be a privilege. We train young professionals to close that gap.</p>
            </div>
            <div className="glass-panel value-card" style={{borderTop: '3px solid var(--color-teal)'}}>
               <div className="value-num text-teal">02</div>
               <h4 className="heading-secondary">Diversity & Inclusion</h4>
               <p>Merit-driven. Participation open to all who share the mission.</p>
            </div>
            <div className="glass-panel value-card" style={{borderTop: '3px solid var(--color-teal)'}}>
               <div className="value-num text-teal">03</div>
               <h4 className="heading-secondary">Environmental Stewardship</h4>
               <p>Economic, social, and environmental balance — across every process.</p>
            </div>
         </div>
      </section>

      {/* Global Offices */}
      <section className="section container animate-fade-up">
         <p className="overline text-teal">Global Presence</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>Our Offices</h2>
         <div className="offices-grid">
            {[
              {city: 'Kinshasa', country: 'DR Congo', tz: 'kinshasa'},
              {city: 'Luanda', country: 'Angola', tz: 'luanda'},
              {city: 'Abidjan', country: 'Ivory Coast', tz: 'abidjan'},
              {city: 'Bamako', country: 'Mali', tz: 'bamako'},
              {city: 'São Paulo', country: 'Brazil', tz: 'saopaulo'}
            ].map(office => (
               <div key={office.city} className="glass-panel office-card">
                  <h3 className="heading-secondary">{office.city}</h3>
                  <div className="office-country text-teal">{office.country}</div>
                  <div className="office-time">
                     <span className="office-time-label">LOCAL TIME:</span> {times[office.tz] || '--:--:--'}
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* CTA Layer */}
      <section className="section" style={{ background: 'var(--color-obsidian)', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline" style={{color: 'var(--color-copper)', marginBottom: '1rem'}}>Work with us</p>
           <h2 className="heading-display mb-4">Ready to strengthen<br/>your security posture?</h2>
           <p className="body-large text-muted mb-8 max-w-2xl mx-auto">Architect, implement, and manage your security capabilities with us.</p>
           <Link to="/contact" className="button-primary">Get in touch</Link>

           <div className="region-cta-grid">
              {[
                {key: 'africa',     name: 'Africa',      hub: 'Kinshasa',  tz: 'africa'},
                {key: 'latam',      name: 'LATAM',       hub: 'São Paulo', tz: 'latam'},
                {key: 'middleeast', name: 'Middle East', hub: 'Dubai',     tz: 'middleeast'}
              ].map(region => (
                <Link key={region.key} to="/contact" className="glass-panel region-cta-card">
                   <div className="region-cta-name">{region.name}</div>
                   <div className="region-cta-hub">Primary hub · {region.hub}</div>
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
