import { useEffect, useState } from 'react';
import './About.css';

const TIMEZONES: Record<string, string> = {
  kinshasa: 'Africa/Kinshasa',
  luanda: 'Africa/Luanda',
  abidjan: 'Africa/Abidjan',
  saopaulo: 'America/Sao_Paulo',
  london: 'Europe/London',
  dubai: 'Asia/Dubai'
};

const About = () => {
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
                   <strong>Ivory Coast & Homo Deus partnership</strong>
                   <p>West Africa entry. AI-native partnership with Homo Deus integrated into the full service portfolio.</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-details">
                   <strong>London & byGRC launch</strong>
                   <p>European HQ in London. byGRC compliance platform launched.</p>
                </div>
             </div>
             <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-details">
                   <strong>Dubai — MEA hub</strong>
                   <p>MEA hub operational. Network spans four continents.</p>
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

      {/* Leadership & Board */}
      <section className="section container animate-fade-up">
         <p className="overline text-purple">Our Team</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>Security-minded people on the right side of the fence</h2>
         <div className="leadership-grid">
            <div className="glass-panel leader-card">
               <div className="leader-role text-teal">Chief Executive Officer</div>
               <div className="leader-loc">Kinshasa, D.R. Congo</div>
               <p>Strategic vision and client relationships across African and Latin American markets.</p>
            </div>
            <div className="glass-panel leader-card">
               <div className="leader-role text-purple">Chief Technology Officer</div>
               <div className="leader-loc">São Paulo, Brazil</div>
               <p>Technology stack and AI integration. Continuous, data-driven threat intelligence.</p>
            </div>
            <div className="glass-panel leader-card">
               <div className="leader-role text-blue">Head of Operations, Africa</div>
               <div className="leader-loc">Luanda, Angola</div>
               <p>Delivery and operations across African markets, Kinshasa to Abidjan.</p>
            </div>
         </div>
         
         <h3 className="heading-secondary" style={{marginTop: '4rem', marginBottom: '2rem'}}>Board of Directors</h3>
         <div className="leadership-grid">
            <div className="glass-panel leader-card" style={{borderTop: '3px solid var(--color-copper)'}}>
               <div className="leader-role text-copper">Chairperson</div>
               <div className="leader-loc text-warm-white" style={{fontSize: '1.2rem', marginBottom: '0.25rem'}}>Board Chair</div>
               <p className="text-muted">International Operations</p>
            </div>
            <div className="glass-panel leader-card" style={{borderTop: '3px solid var(--color-copper)'}}>
               <div className="leader-role text-copper">Independent Director</div>
               <div className="leader-loc text-warm-white" style={{fontSize: '1.2rem', marginBottom: '0.25rem'}}>Finance & Risk</div>
               <p className="text-muted">Financial Sector</p>
            </div>
            <div className="glass-panel leader-card" style={{borderTop: '3px solid var(--color-copper)'}}>
               <div className="leader-role text-copper">Independent Director</div>
               <div className="leader-loc text-warm-white" style={{fontSize: '1.2rem', marginBottom: '0.25rem'}}>Technology & Cyber</div>
               <p className="text-muted">Technology Sector</p>
            </div>
            <div className="glass-panel leader-card" style={{borderTop: '3px solid var(--color-copper)'}}>
               <div className="leader-role text-copper">Executive Director</div>
               <div className="leader-loc text-warm-white" style={{fontSize: '1.2rem', marginBottom: '0.25rem'}}>Africa & LATAM Operations</div>
               <p className="text-muted">Southern Hemisphere</p>
            </div>
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
              {city: 'Kinshasa', country: 'DR Congo', tz: 'kinshasa', addr: '76 Ave. de la Justice, Suite #407'},
              {city: 'Luanda', country: 'Angola', tz: 'luanda', addr: 'Avenida Talatona, Condomínio Belas Business Park V'},
              {city: 'Abidjan', country: 'Ivory Coast', tz: 'abidjan', addr: 'Imm. XL, Av. Crozet / Bd République, Plateau'},
              {city: 'São Paulo', country: 'Brazil', tz: 'saopaulo', addr: 'Av. Brig. Faria Lima, 3279, 5º andar'},
              {city: 'London', country: 'United Kingdom', tz: 'london', addr: '1 Canada Square, Canary Wharf, E14 5AB'},
              {city: 'Dubai', country: 'UAE', tz: 'dubai', addr: 'DIFC, Gate Avenue, Level 1'}
            ].map(office => (
               <div key={office.city} className="glass-panel office-card">
                  <h3 className="heading-secondary">{office.city}</h3>
                  <div className="office-country text-teal">{office.country}</div>
                  <p className="office-addr">{office.addr}</p>
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
           <a href="#contact" className="button-primary">Get in touch</a>
        </div>
      </section>
      
    </div>
  );
};

export default About;
