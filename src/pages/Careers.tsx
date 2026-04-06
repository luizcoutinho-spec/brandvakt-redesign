import './Careers.css';

const Careers = () => {
  return (
    <div className="page-wrapper careers-page">
      {/* Hero */}
      <section className="hero-careers animate-fade-up">
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <p className="overline text-copper" style={{marginBottom: '1rem'}}>Careers</p>
          <h1 className="heading-display text-warm-white">
            Secure your<br /><em className="text-copper">future</em> here
          </h1>
          <p className="body-large text-muted mt-4" style={{maxWidth: '600px'}}>
            Join a team protecting businesses across financial services, telecommunications, and critical infrastructure.
          </p>
          <div className="chips-container mt-6">
            <span className="career-chip">&middot; 6 Global Offices</span>
            <span className="career-chip">&middot; Security-First Culture</span>
            <span className="career-chip">&middot; Growing Team</span>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="section bg-surface">
        <div className="container culture-grid-cr animate-fade-up">
          <div className="culture-text-cr">
            <p className="overline text-copper" style={{marginBottom: '1rem'}}>Who We Are</p>
            <h2 className="heading-primary" style={{marginBottom: '1.5rem'}}>Security-minded people on the right side of the fence</h2>
            <p className="body-large text-muted">Security-minded people protecting client continuity across financial services, telecommunications, and critical infrastructure.</p>
          </div>
          <div className="values-grid-cr">
            <div className="value-card-cr glass-panel" style={{borderTop: '3px solid var(--color-copper)'}}>
              <div className="icon-cr">
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 className="heading-secondary">Integrity</h4>
              <p className="text-muted text-sm mt-1">Honesty and transparency in every engagement.</p>
            </div>
            <div className="value-card-cr glass-panel" style={{borderTop: '3px solid var(--color-teal)'}}>
              <div className="icon-cr">
                <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h4 className="heading-secondary">Excellence</h4>
              <p className="text-muted text-sm mt-1">Highest standards in every assessment and advisory.</p>
            </div>
            <div className="value-card-cr glass-panel" style={{borderTop: '3px solid var(--color-blue)'}}>
              <div className="icon-cr">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 className="heading-secondary">Collaboration</h4>
              <p className="text-muted text-sm mt-1">We work closely with client teams, not just for them.</p>
            </div>
            <div className="value-card-cr glass-panel" style={{borderTop: '3px solid var(--color-purple)'}}>
              <div className="icon-cr">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4 className="heading-secondary">Inclusion</h4>
              <p className="text-muted text-sm mt-1">Diverse teams and partnerships across every region we operate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Brandvakt */}
      <section className="section bg-midnight">
        <div className="container animate-fade-up">
          <p className="overline text-teal">Our Culture</p>
          <h2 className="heading-primary mt-2">Life at Brandvakt</h2>
          
          <div className="life-grid-cr mt-8">
            <div className="life-pillar glass-panel" style={{borderTop: '2px solid var(--color-teal)'}}>
              <div className="icon-cr mb-4 text-teal"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h4 className="heading-secondary mb-2">Security-First Culture</h4>
              <p className="text-muted text-sm">Security embedded in how we work, communicate, and make decisions.</p>
            </div>
            <div className="life-pillar glass-panel" style={{borderTop: '2px solid var(--color-copper)'}}>
              <div className="icon-cr mb-4 text-teal"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
              <h4 className="heading-secondary mb-2">Global Perspective</h4>
              <p className="text-muted text-sm">Offices across Africa, Latin America, Europe, and the Middle East — regional expertise in every market.</p>
            </div>
            <div className="life-pillar glass-panel" style={{borderTop: '2px solid var(--color-blue)'}}>
              <div className="icon-cr mb-4 text-teal"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
              <h4 className="heading-secondary mb-2">Continuous Growth</h4>
              <p className="text-muted text-sm">Certifications, training, and cross-functional exposure to stay ahead of what's next.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section bg-surface" style={{borderTop: '1px solid rgba(255,255,255,0.05)'}}>
         <div className="container animate-fade-up">
            <p className="overline text-teal">Why Brandvakt</p>
            <h2 className="heading-primary mt-2">What you get</h2>

            <div className="perks-grid-cr mt-8">
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                  <h4 className="heading-secondary mb-2">Security Certifications</h4>
                  <p className="text-muted text-sm">Brandvakt sponsors CISSP, CEH, OSCP, CISM, and ISO 27001 Lead Auditor certifications.</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                  <h4 className="heading-secondary mb-2">Remote-Friendly</h4>
                  <p className="text-muted text-sm">Most roles remote or hybrid, with optional access to offices in London, Abidjan, Kinshasa, Luanda, Dubai, and São Paulo.</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
                  <h4 className="heading-secondary mb-2">Competitive Compensation</h4>
                  <p className="text-muted text-sm">Global benchmarks, performance bonuses tied to client outcomes.</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                  <h4 className="heading-secondary mb-2">Diverse Global Team</h4>
                  <p className="text-muted text-sm">15+ nationalities — local market knowledge combined with global threat intelligence.</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
                  <h4 className="heading-secondary mb-2">Continuous Learning</h4>
                  <p className="text-muted text-sm">Annual budget for training and conferences, plus internal threat briefings and red team exercises.</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                  <h4 className="heading-secondary mb-2">Mission-Driven Work</h4>
                  <p className="text-muted text-sm">Financial systems, critical infrastructure, and governments in emerging markets.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Positions */}
      <section className="section bg-midnight">
         <div className="container animate-fade-up">
            <p className="overline text-copper">Open Positions</p>
            <h2 className="heading-primary mt-2 mb-8">Current opportunities</h2>

            <div className="positions-list flex-col gap-4">
               <div className="position-card glass-panel">
                  <div className="pos-info">
                     <div className="flex gap-2 mb-2">
                        <span className="pos-dept">Security Operations</span>
                        <span className="pos-type">Full-time</span>
                     </div>
                     <h3 className="heading-secondary mb-1">SOC Analyst</h3>
                     <p className="pos-loc text-xs text-muted mb-2">&middot; Multiple Offices &middot; Remote</p>
                     <p className="text-sm text-muted mb-4 max-w-xl">Monitor, detect and respond to security incidents in our 24/7 operations center. Work with SIEM platforms, threat intelligence feeds, and our proprietary detection playbooks.</p>
                     <ul className="pos-reqs text-xs text-muted">
                        <li>2+ years security monitoring experience</li>
                        <li>SIEM proficiency (Splunk, QRadar, or similar)</li>
                        <li>Security certifications (CompTIA Security+, CEH preferred)</li>
                     </ul>
                  </div>
                  <a href="mailto:careers@brandvakt.com?subject=Application: SOC Analyst" className="btn btn-primary btn-sm pos-apply">Apply &rarr;</a>
               </div>

               <div className="position-card glass-panel">
                  <div className="pos-info">
                     <div className="flex gap-2 mb-2">
                        <span className="pos-dept">GRC</span>
                        <span className="pos-type">Full-time</span>
                     </div>
                     <h3 className="heading-secondary mb-1">GRC Consultant</h3>
                     <p className="pos-loc text-xs text-muted mb-2">&middot; Europe &middot; LATAM &middot; Remote</p>
                     <p className="text-sm text-muted mb-4 max-w-xl">Help clients navigate complex regulatory landscapes across GDPR, DORA, NIS2, and industry-specific frameworks. Deliver assessments, gap analyses, and remediation roadmaps.</p>
                     <ul className="pos-reqs text-xs text-muted">
                        <li>3+ years GRC or compliance experience</li>
                        <li>Knowledge of ISO 27001, NIST, or similar</li>
                        <li>Fluency in English + French or Portuguese preferred</li>
                     </ul>
                  </div>
                  <a href="mailto:careers@brandvakt.com?subject=Application: GRC Consultant" className="btn btn-primary btn-sm pos-apply">Apply &rarr;</a>
               </div>

               <div className="position-card glass-panel">
                  <div className="pos-info">
                     <div className="flex gap-2 mb-2">
                        <span className="pos-dept">Offensive Security</span>
                        <span className="pos-type">Full-time</span>
                     </div>
                     <h3 className="heading-secondary mb-1">Penetration Tester</h3>
                     <p className="pos-loc text-xs text-muted mb-2">&middot; Remote &middot; Client Sites</p>
                     <p className="text-sm text-muted mb-4 max-w-xl">Conduct authorized offensive security testing for enterprise clients. Red team exercises, web application testing, social engineering assessments, and vulnerability research.</p>
                     <ul className="pos-reqs text-xs text-muted">
                        <li>2+ years offensive security experience</li>
                        <li>OSCP or equivalent certification</li>
                        <li>Experience with Kali Linux, Metasploit, Burp Suite</li>
                     </ul>
                  </div>
                  <a href="mailto:careers@brandvakt.com?subject=Application: Penetration Tester" className="btn btn-primary btn-sm pos-apply">Apply &rarr;</a>
               </div>

               <div className="position-card glass-panel">
                  <div className="pos-info">
                     <div className="flex gap-2 mb-2">
                        <span className="pos-dept">Sales</span>
                        <span className="pos-type">Full-time</span>
                     </div>
                     <h3 className="heading-secondary mb-1">Business Development Manager</h3>
                     <p className="pos-loc text-xs text-muted mb-2">&middot; São Paulo &middot; Abidjan &middot; Kinshasa</p>
                     <p className="text-sm text-muted mb-4 max-w-xl">Drive revenue growth across African and LATAM markets. Build C-suite relationships, identify security requirements, and position Brandvakt's full portfolio.</p>
                     <ul className="pos-reqs text-xs text-muted">
                        <li>3+ years B2B sales (cybersecurity preferred)</li>
                        <li>Existing network in Financial Services or Telecom</li>
                        <li>Portuguese or French fluency a plus</li>
                     </ul>
                  </div>
                  <a href="mailto:careers@brandvakt.com?subject=Application: Business Development Manager" className="btn btn-primary btn-sm pos-apply">Apply &rarr;</a>
               </div>
            </div>
         </div>
      </section>

      {/* No Role */}
      <section className="section bg-surface text-center">
         <div className="container animate-fade-up">
            <p className="overline text-teal mb-2">Open Application</p>
            <h2 className="heading-primary mb-4">Don't see the right role?</h2>
            <p className="body-large text-muted mx-auto mb-6" style={{maxWidth: '600px'}}>Send us your CV and a brief note about your security expertise. We're always looking for talented people.</p>
            <a href="mailto:careers@brandvakt.com" className="btn btn-primary">Send your application &rarr;</a>
         </div>
      </section>
      
    </div>
  );
};

export default Careers;
