import './HomodeusPartnership.css';

const HomodeusPartnership = () => {
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
          <p className="overline text-teal">Strategic Partnership</p>
          <div className="hero-logos hd-flex">
            <h2 className="heading-secondary" style={{color: 'var(--color-text-primary)'}}>Brandvakt</h2>
            <span className="logos-sep">×</span>
            <h2 className="heading-secondary" style={{color: 'var(--color-warm-white)'}}>HomoDeus</h2>
          </div>
          <div className="logos-hr"></div>
          <h1 className="heading-display">Autonomous Defense<br/>Intelligence</h1>
          <p className="body-large header-subtitle mt-4 mx-0" style={{maxWidth: '600px'}}>
            Brandvakt's cybersecurity expertise fused with HomoDeus AI.
          </p>
          <div className="hd-actions mt-6">
            <a href="https://homodeus.me" target="_blank" rel="noreferrer" className="btn btn-primary">Explore the Platform &rarr;</a>
            <a href="/services" className="btn" style={{border: '1px solid rgba(255,255,255,0.2)'}}>Our Cybersecurity Services</a>
          </div>
        </div>
      </section>

      {/* Partnership Story */}
      <section className="section bg-midnight">
        <div className="container">
          <div className="text-center animate-fade-up" style={{marginBottom: '4rem'}}>
            <p className="overline text-teal">Why We Built This Together</p>
            <h2 className="heading-primary">Cybersecurity expertise.<br/>AI at operational scale.</h2>
          </div>
          
          <div className="partnership-grid animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="partner-card card-brandvakt glass-panel">
              <div className="partner-subtitle">Cybersecurity</div>
              <h3 className="heading-secondary">Brandvakt</h3>
              <div className="divider-hd"></div>
              <p>Cybersecurity consulting and security operations. Trusted by enterprises across Africa, LATAM, and Europe.</p>
            </div>
            
            <div className="p-sep">×</div>
            
            <div className="partner-card card-homodeus glass-panel">
              <div className="partner-subtitle text-teal">AI Lab</div>
              <h3 className="heading-secondary text-teal">HomoDeus</h3>
              <div className="divider-hd hd-teal"></div>
              <p>Operational AI systems for enterprises. 95% success rate. 20+ clients in production. Miami, Lisbon, Rio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-surface">
        <div className="container">
          <div className="animate-fade-up" style={{marginBottom: '4rem'}}>
            <p className="overline text-teal">The Value We Create Together</p>
            <h2 className="heading-primary">Intelligence-led cybersecurity,<br/>powered by AI</h2>
          </div>
          
          <div className="capabilities-grid-hd animate-fade-up">
            <div className="cap-card glass-panel">
              <div className="cap-num">01</div>
              <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>AI Threat Intelligence</h4>
              <p>AI agents correlate indicators of compromise and surface actionable intelligence. SOC analysts act on it in real time.</p>
            </div>
            <div className="cap-card glass-panel">
              <div className="cap-num">02</div>
              <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>Autonomous Incident Response</h4>
              <p>AI-powered playbooks execute first response in seconds — before a human reads the alert.</p>
            </div>
            <div className="cap-card glass-panel">
              <div className="cap-num">03</div>
              <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>Predictive Risk Analysis</h4>
              <p>AI models trained on your environment identify risk trajectories weeks before they become incidents.</p>
            </div>
            <div className="cap-card glass-panel">
              <div className="cap-num">04</div>
              <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>Continuous Compliance</h4>
              <p>LGPD, DORA, ISO 27001, PCI DSS — mapped and monitored automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto-hd">
         <div className="container animate-fade-up">
           <h2 className="manifesto-text">We don't sell AI.<br/><em className="text-teal">We sell outcomes.</em></h2>
           <p className="manifesto-sub">Brandvakt × HomoDeus — Autonomous Defense Intelligence</p>
         </div>
      </section>

      {/* Platform */}
      <section className="platform-hd section">
         <div className="platform-glow-hd"></div>
         <div className="container position-relative z-1 animate-fade-up">
            <div className="flex flex-col items-start gap-2">
               <div className="hd-badge">★ Flagship Platform</div>
               <p className="overline text-teal mx-0">The Product</p>
            </div>
            <h2 className="heading-primary" style={{marginBottom: '2rem'}}>HomoDeus — Autonomous AI<br/>for Cyber Defense</h2>
            <p className="body-large text-muted italic" style={{maxWidth: '720px', marginBottom: '4rem'}}>
              Autonomous security layer — monitoring, detecting, and responding across your entire digital estate.
            </p>

            <div className="platform-pillars">
               <div className="pillar-hd">
                  <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>Continuous Monitoring</h4>
                  <p>24/7 coverage of endpoints, networks, identity, and cloud. Only signal.</p>
               </div>
               <div className="pillar-hd">
                  <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>Autonomous Response</h4>
                  <p>Ransomware isolated in seconds. Credentials revoked before lateral movement.</p>
               </div>
               <div className="pillar-hd">
                  <h4 className="heading-secondary" style={{marginBottom: '1rem'}}>Adaptive Intelligence</h4>
                  <p>Baselines and threat models improve with every day of operation.</p>
               </div>
            </div>

            <div className="text-center mt-6">
               <a href="https://homodeus.me" target="_blank" rel="noreferrer" className="btn btn-amber">Explore HomoDeus &rarr;</a>
            </div>
         </div>
      </section>

      {/* How It Works */}
      <section className="section bg-midnight">
         <div className="container animate-fade-up">
            <div className="text-center" style={{marginBottom: '4rem'}}>
               <p className="overline text-teal">How It Works</p>
               <h2 className="heading-primary">From assessment to<br/>autonomous defense</h2>
            </div>
            
            <div className="how-steps">
               <div className="how-step">
                  <div className="how-num">01</div>
                  <h4 className="how-title">Assess</h4>
                  <p>Security experts map your threat surface across endpoints, identity, cloud, and OT. Output: a prioritized risk profile.</p>
               </div>
               <div className="how-connector">— —</div>
               <div className="how-step">
                  <div className="how-num">02</div>
                  <h4 className="how-title">Deploy</h4>
                  <p>AI agents calibrated to your threat profile. Integrated into your existing stack within days.</p>
               </div>
               <div className="how-connector">— —</div>
               <div className="how-step">
                  <div className="how-num">03</div>
                  <h4 className="how-title">Monitor</h4>
                  <p>Agents detect and respond around the clock. Brandvakt analysts escalate when human judgment is required.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Stats */}
      <section className="section stats-hd">
         <div className="container animate-fade-up">
            <div className="text-center" style={{marginBottom: '4rem'}}>
               <p className="overline text-teal">By the numbers</p>
               <h2 className="heading-primary">The numbers behind the partnership</h2>
            </div>
            
            <div className="stats-grid-hd">
               <div className="stat-hd">
                  <div className="stat-num text-teal">95%</div>
                  <div className="stat-label">Threat Detection<br/>Accuracy</div>
               </div>
               <div className="stat-hd">
                  <div className="stat-num text-teal">{"<"}4m</div>
                  <div className="stat-label">Mean Time<br/>to Respond</div>
               </div>
               <div className="stat-hd">
                  <div className="stat-num text-teal" style={{fontSize: '3.5rem'}}>0-Day</div>
                  <div className="stat-label">Threat<br/>Intelligence</div>
               </div>
               <div className="stat-hd">
                  <div className="stat-num text-teal">24/7</div>
                  <div className="stat-label">Autonomous<br/>Monitoring</div>
               </div>
            </div>
         </div>
      </section>

      {/* Outcomes (Use Cases) */}
      <section className="section bg-midnight outcomes-section">
         <div className="container animate-fade-up">
            <div className="text-center" style={{marginBottom: '4rem'}}>
               <p className="overline text-teal">Measured Impact</p>
               <h2 className="heading-primary">Results that speak<br/><em className="text-teal">for themselves</em></h2>
            </div>

            <div className="outcomes-grid">
               <div className="outcome-card-hd oc-financial glass-panel">
                  <span className="oc-sector text-teal">Financial Services</span>
                  <div className="oc-headline">Fraud rings dismantled in real-time before exfiltration occurs across transaction flows</div>
                  <div className="oc-metric text-warm-white">0</div>
                  <div className="oc-unit">Undetected breaches in 12 months</div>
               </div>
               <div className="outcome-card-hd oc-telecom glass-panel">
                  <span className="oc-sector text-teal">Telecommunications</span>
                  <div className="oc-headline">SS7 attacks detected and contained before network infrastructure is compromised</div>
                  <div className="oc-metric text-warm-white">{"<"} 4 min</div>
                  <div className="oc-unit">Mean autonomous containment time</div>
               </div>
               <div className="outcome-card-hd oc-energy glass-panel">
                  <span className="oc-sector text-copper">Energy & Critical Infrastructure</span>
                  <div className="oc-headline">ICS and OT environments continuously protected without disrupting operational continuity</div>
                  <div className="oc-metric text-warm-white">100%</div>
                  <div className="oc-unit">Operational uptime maintained under monitoring</div>
               </div>
               <div className="outcome-card-hd oc-banking glass-panel">
                  <span className="oc-sector text-teal">Banking</span>
                  <div className="oc-headline">Legacy SIEM replaced with autonomous AI defense layer across 200+ threat scenarios</div>
                  <div className="oc-metric text-warm-white">67%</div>
                  <div className="oc-unit">Reduction in analyst alert fatigue</div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Layer */}
      <section className="section text-center" style={{ background: 'var(--color-obsidian)', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline text-teal mb-2">Engage with us</p>
           <h2 className="heading-primary text-warm-white mb-4">Ready to explore Autonomous Defense Intelligence?</h2>
           <p className="body-large mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px' }}>Contact the Brandvakt team to schedule a technical deep dive into the HomoDeus platform or request an initial threat assessment.</p>
           <div className="flex justify-center gap-4">
              <a href="#contact" className="btn btn-primary">Schedule a consultation</a>
              <a href="https://homodeus.me" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{border: '1px solid rgba(255,255,255,0.2)'}}>View documentation &rarr;</a>
           </div>
        </div>
      </section>

    </div>
  );
};

export default HomodeusPartnership;
