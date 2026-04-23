import { Link } from 'react-router-dom';
import './SOC.css';
import { useMeta } from '../lib/useMeta';

const SOC = () => {
  useMeta({
    title: 'Security Operations Center',
    description: '24/7 threat detection and incident response. Outsourced, managed, or collaborative SOC models with SIEM-powered event correlation and triage.'
  });
  return (
    <div className="page-wrapper services-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">24/7 Security Operations Center</span>
          <h1 className="heading-display">Command & Control</h1>
          <p className="body-large header-subtitle">
            Continuous monitoring, threat detection, and incident response — before they become breaches. A fusion of AI-driven threat hunting and elite analyst intuition.
          </p>
        </div>
      </header>

      {/* Live Telemetry Matrix - The React Feature */}
      <section className="section container">
        <div className="soc-dashboard-glass animate-fade-up" style={{animationDelay: '0.2s'}}>
           <div className="soc-header">
              <span className="soc-title">Live Telemetry Matrix</span>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                 <span style={{fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-teal)'}}>Connection Secure</span>
                 <div className="soc-pulse-dot"></div>
              </div>
           </div>
           <div className="soc-metrics-container">
              <div className="soc-metric-box">
                 <div className="soc-metric-top">
                    <span className="soc-metric-val">128M</span>
                    <span className="soc-metric-label">Events / Day</span>
                 </div>
                 <div className="soc-metric-bar"><div className="soc-metric-fill" style={{animationDelay: "0s"}}></div></div>
              </div>
              <div className="soc-metric-box">
                 <div className="soc-metric-top">
                    <span className="soc-metric-val">{"<"}10m</span>
                    <span className="soc-metric-label">MTTR</span>
                 </div>
                 <div className="soc-metric-bar"><div className="soc-metric-fill" style={{animationDelay: "0.5s"}}></div></div>
              </div>
              <div className="soc-metric-box">
                 <div className="soc-metric-top">
                    <span className="soc-metric-val">24/7</span>
                    <span className="soc-metric-label">Human Overlay</span>
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
               <span className="threat-label">cyberattacks per day globally</span>
            </div>
            <div className="threat-stat">
               <span className="threat-num text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontStyle: 'italic', lineHeight: 1}}>$10.5T</span>
               <span className="threat-label">projected cybercrime cost in 2025</span>
            </div>
            <div className="threat-stat">
               <span className="threat-num text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontStyle: 'italic', lineHeight: 1}}>94%</span>
               <span className="threat-label">of malware delivered by email</span>
            </div>
            <div className="threat-stat">
               <span className="threat-num text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontStyle: 'italic', lineHeight: 1}}>39s</span>
               <span className="threat-label">average time between attacks</span>
            </div>
         </div>
      </div>

      {/* Stats Grid */}
      <section className="section container animate-fade-up">
         <div className="stats-grid">
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>$4.24M</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>Average cost of a data breach to a business</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>287<span style={{fontSize: '1.5rem'}}> days</span></div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>Average time to identify and contain a data breach</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>82%</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>Increase in ransomware related data leaks</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>650+</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>New threat groups detected, with 1,900+ tracked</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>62%</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>Of detections were malware-free</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>20%</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>Of incidents initially caused by compromised credentials</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>$180</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>Average cost per stolen record containing sensitive information</div>
            </div>
            <div className="glass-panel stat-card text-center" style={{padding: '2rem 1.5rem'}}>
               <div className="stat-val text-copper" style={{fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem'}}>75%</div>
               <div className="stat-label text-muted" style={{fontSize: '0.85rem'}}>Of cyberattacks exploit known, unpatched vulnerabilities</div>
            </div>
         </div>
      </section>

      {/* Outcomes Grid */}
      <section className="section container animate-fade-up">
         <p className="overline text-teal">Why a SOC</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>Measurable Security Outcomes</h2>
         <div className="outcomes-grid">
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-teal">60%</div>
               <h4 className="heading-secondary">Cost Effective</h4>
               <p>Clear-term service model instead of maintaining an entire in-house department.</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-purple">4h</div>
               <h4 className="heading-secondary">Reduced Downtime</h4>
               <p>Sole focus on your security results in faster incident resolution and recovery.</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-blue">97%</div>
               <h4 className="heading-secondary">Customer Trust</h4>
               <p>Tight security posture and breach avoidance build lasting client confidence.</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-copper">24/7</div>
               <h4 className="heading-secondary">Continuous Monitoring</h4>
               <p>Around-the-clock analysis of system activity and security events.</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-teal">1</div>
               <h4 className="heading-secondary">Centralized Control</h4>
               <p>Single point of visibility and governance over hardware, software, and data assets.</p>
            </div>
            <div className="glass-panel outcome-card">
               <div className="outcome-val text-purple">12×</div>
               <h4 className="heading-secondary">Faster Detection</h4>
               <p>Decreased timeline between compromise occurrence and detection (MTTD).</p>
            </div>
         </div>
      </section>

      {/* SOC Capabilities Wheel Equivalent */}
      <section className="section container animate-fade-up">
         <p className="overline text-purple">How We Protect You</p>
         <h2 className="heading-primary" style={{marginBottom: '1rem'}}>Proactive Risk Mitigation</h2>
         <p className="body-large" style={{marginBottom: '3rem'}}>Covering every phase of the threat lifecycle.</p>
         
         <div className="capabilities-grid">
            <div className="glass-panel cap-card" style={{borderTop: '2px solid var(--color-teal)'}}>
               <h4 className="heading-secondary">01. Prevention</h4>
               <ul className="premium-list">
                  <li>Threat intelligence feeds</li>
                  <li>GRC policies alignment</li>
                  <li>Security auditing & assessment</li>
                  <li>Attack surface reduction</li>
               </ul>
            </div>
            <div className="glass-panel cap-card" style={{borderTop: '2px solid var(--color-copper)'}}>
               <h4 className="heading-secondary">02. Detection</h4>
               <ul className="premium-list">
                  <li>Continuous security monitoring</li>
                  <li>SIEM correlation and analysis</li>
                  <li>Behavioral anomaly detection</li>
                  <li>Malware-free threat identification</li>
               </ul>
            </div>
            <div className="glass-panel cap-card" style={{borderTop: '2px solid var(--color-blue)'}}>
               <h4 className="heading-secondary">03. Response</h4>
               <ul className="premium-list">
                  <li>Rapid containment and remediation</li>
                  <li>Playbook-driven response workflows</li>
                  <li>Forensic investigation support</li>
                  <li>Escalation and coordination</li>
               </ul>
            </div>
            <div className="glass-panel cap-card" style={{borderTop: '2px solid var(--color-purple)'}}>
               <h4 className="heading-secondary">04. Reporting</h4>
               <ul className="premium-list">
                  <li>Security metrics and KPIs</li>
                  <li>Trend analysis & forecasting</li>
                  <li>Executive advisories</li>
                  <li>Compliance documentation</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Delivery Models */}
      <section className="section container animate-fade-up">
         <p className="overline text-blue">Delivery Models</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>Choose Your Engagement</h2>
         <div className="delivery-grid">
            <div className="glass-panel delivery-card">
               <div className="delivery-num">01</div>
               <h4 className="heading-secondary" style={{color: 'var(--color-teal)'}}>Outsourced SOC</h4>
               <p style={{minHeight: '80px'}}>We integrate with your existing technology stack and provide alert-based monitoring using your established playbooks.</p>
               <div className="delivery-tags">
                  <span className="d-tag">Existing Tech Stack</span>
                  <span className="d-tag">Alert-based</span>
               </div>
            </div>
            <div className="glass-panel delivery-card">
               <div className="delivery-num">02</div>
               <h4 className="heading-secondary" style={{color: 'var(--color-purple)'}}>Managed SOC</h4>
               <p style={{minHeight: '80px'}}>Full-service operations managed entirely by Brandvakt — technology, processes, and expertise included.</p>
               <div className="delivery-tags">
                  <span className="d-tag">Full-Service</span>
                  <span className="d-tag">Zero Overhead</span>
               </div>
            </div>
            <div className="glass-panel delivery-card">
               <div className="delivery-num">03</div>
               <h4 className="heading-secondary" style={{color: 'var(--color-blue)'}}>Collaborative SOC</h4>
               <p style={{minHeight: '80px'}}>Our analysts work alongside your existing team — expert augmentation and knowledge transfer.</p>
               <div className="delivery-tags">
                  <span className="d-tag">Hybrid Model</span>
                  <span className="d-tag">Augmentation</span>
               </div>
            </div>
         </div>
      </section>

      {/* Differentiators */}
      <section className="section container animate-fade-up">
         <p className="overline text-copper">Why Brandvakt</p>
         <h2 className="heading-primary" style={{marginBottom: '3rem'}}>What Sets Us Apart</h2>
         <div className="diff-grid-soc">
            <div className="glass-panel diff-soc-card">
               <h4 className="heading-secondary">Proactive Security</h4>
               <p>Analysts actively hunt for threats, identifying indicators of compromise before escalation.</p>
            </div>
            <div className="glass-panel diff-soc-card">
               <h4 className="heading-secondary">Expert Advisory</h4>
               <p>Strategic guidance on security architecture and long-term cyber resilience.</p>
            </div>
            <div className="glass-panel diff-soc-card">
               <h4 className="heading-secondary">Tailored Services</h4>
               <p>Every engagement scoped to your industry, threat profile, and regulatory environment.</p>
            </div>
            <div className="glass-panel diff-soc-card">
               <h4 className="heading-secondary">Affordable Solutions</h4>
               <p>Enterprise-grade security accessible to organizations of all sizes.</p>
            </div>
         </div>
      </section>

      {/* CTA Layer */}
      <section className="section" style={{ background: 'var(--color-obsidian)', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline" style={{color: 'var(--color-copper)', marginBottom: '1rem'}}>Get Started</p>
           <h2 className="heading-display mb-4">Ready to secure<br/>your operations?</h2>
           <p className="body-large text-muted mb-8 max-w-2xl mx-auto">Talk to our team about the SOC model that fits your organization.</p>
           <Link to="/contact" className="button-primary">Contact Us</Link>
        </div>
      </section>
      
    </div>
  );
};

export default SOC;
