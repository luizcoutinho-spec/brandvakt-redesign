import { Link } from 'react-router-dom';
import './Services.css';
import { useMeta } from '../lib/useMeta';

const Services = () => {
  useMeta({
    title: 'Services',
    description: 'End-to-end cybersecurity services — assessment, SOC, identity, vulnerability management, penetration testing, GRC, and cloud security across Africa, LATAM, and the Middle East.'
  });
  return (
    <div className="page-wrapper services-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">Complete Capabilities</span>
          <h1 className="heading-display">The Cyber Resilience Matrix</h1>
          <p className="body-large header-subtitle">
            A continuous, 9-tier operational framework designed to secure, govern, and validate every layer of your enterprise infrastructure.
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
                  <h2 className="heading-secondary">Cybersecurity Maturity Assessment</h2>
               </div>
               <p className="body-large service-desc">Where does your security strategy stand? A gap analysis against ISO 27001, NIST CSF, and CIS Controls. Delivers a prioritized roadmap.</p>
               <div className="service-details">
                 <h4 className="overline" style={{marginBottom: '0.5rem', color: 'var(--color-purple)'}}>The Process</h4>
                 <div className="process-timeline">
                   <div className="process-step">
                      <strong>1. On-site Interviews</strong>
                      <p>Structured discussions with IT, ops, and compliance.</p>
                   </div>
                   <div className="process-step">
                      <strong>2. Remote Analysis</strong>
                      <p>Evaluation against ISO 27001 and NIST.</p>
                   </div>
                   <div className="process-step">
                      <strong>3. Policy Review</strong>
                      <p>Gaps scored, remediation roadmap built.</p>
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
                  <h2 className="heading-secondary">Network Security</h2>
               </div>
               <p className="body-large service-desc">Trusted networks, protected data. Modern threats require modern architecture. We modernize and secure the essential networks.</p>
               <div className="service-details">
                 <ul className="premium-list">
                    <li>Next-generation firewall deployment</li>
                    <li>Network segmentation & Zero-Trust</li>
                    <li>Intrusion detection systems (IDS/IPS)</li>
                 </ul>
               </div>
            </div>
          </div>

          {/* 3. Vulnerability Management */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-teal">03</span>
                  <h2 className="heading-secondary">Vulnerability Management</h2>
               </div>
               <p className="body-large service-desc">Close gaps before they are exploited. Continuous scanning and risk-based prioritization.</p>
               <div className="service-details">
                  <div className="powered-by">Powered by Tenable</div>
                  <ul className="premium-list">
                     <li><strong>Identify</strong> — Continuous discovery</li>
                     <li><strong>Evaluate</strong> — Risk-based prioritization</li>
                     <li><strong>Remediate</strong> — Guided workflows</li>
                     <li><strong>Report</strong> — Executive reporting</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 4. Digital Identity */}
          <div className="service-card-premium glass-panel wide-card digital-identity">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-purple">04</span>
                  <h2 className="heading-secondary" style={{ color: 'var(--color-purple)' }}>Digital Identity</h2>
               </div>
               <p className="body-large service-desc">Identities are the new perimeter. We protect Workforce & Consumer Identity across 7 dimensions.</p>
               <div className="service-details">
                  <div className="grid-7-dimensions">
                     <div><strong>1. Federation:</strong> SAML, OAuth, OIDC trust.</div>
                     <div><strong>2. MFA:</strong> Multi-factor Authentication.</div>
                     <div><strong>3. SSO:</strong> Single Sign-On scope.</div>
                     <div><strong>4. Delegation:</strong> Role-based access.</div>
                     <div><strong>5. Life-cycle:</strong> Joiner/mover/leaver processes.</div>
                     <div><strong>6. Access Management:</strong> Session management.</div>
                     <div><strong>7. Governance:</strong> Certification & audit trails.</div>
                  </div>
               </div>
            </div>
          </div>

          {/* 5. Endpoint Security */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-teal">05</span>
                  <h2 className="heading-secondary">Endpoint Security</h2>
               </div>
               <p className="body-large service-desc">Secure the edge. Every device is a potential entry point for attackers.</p>
               <div className="service-details">
                  <ul className="premium-list">
                     <li>EDR/XDR deployment across all devices</li>
                     <li>Device hardening & config management</li>
                     <li>Behavioral analysis & threat hunting</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 6. Pen Testing */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-blue">06</span>
                  <h2 className="heading-secondary">Penetration Testing</h2>
               </div>
               <p className="body-large service-desc">Simulate the threat. Find vulnerabilities before attackers do. Ethical hacking saves enterprises.</p>
               <div className="service-details">
                  <ul className="premium-list">
                     <li>Web application & API testing</li>
                     <li>Red team exercises & simulation</li>
                     <li>Detailed findings & remediation guidance</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 7. Cyber Awareness */}
          <div className="service-card-premium glass-panel">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-teal">07</span>
                  <h2 className="heading-secondary">Cyber Awareness</h2>
               </div>
               <p className="body-large service-desc">Train the people. Your people are the last line of defense. Certified KnowBe4 partner.</p>
               <div className="service-details">
                  <div className="powered-by">Powered by KnowBe4</div>
                  <ul className="premium-list">
                     <li>Automated phishing simulations</li>
                     <li>World's largest training library</li>
                     <li>Enterprise reporting dashboard</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 8. GRC / CISO as a Service */}
          <div className="service-card-premium glass-panel wide-card grc">
            <div className="service-card-inner">
               <div className="service-header">
                  <span className="service-number text-blue">08</span>
                  <h2 className="heading-secondary" style={{color: 'var(--color-blue)'}}>Governance, Risk & Compliance</h2>
               </div>
               <p className="body-large service-desc">Navigate the regulatory landscape: ISO 27001, SWIFT, PCI DSS, DORA. Includes CISO-as-a-Service.</p>
               <div className="service-details">
                 <h4 className="overline" style={{marginBottom: '0.5rem', color: 'var(--color-blue)'}}>CISO-as-a-Service Approach</h4>
                 <div className="process-timeline">
                   <div className="process-step">
                      <strong>Analyze</strong>
                      <p>Current-state assessment of posture.</p>
                   </div>
                   <div className="process-step">
                      <strong>Strategize</strong>
                      <p>Define a roadmap aligned to business.</p>
                   </div>
                   <div className="process-step">
                      <strong>Execute</strong>
                      <p>Implement controls and KPIs.</p>
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
                  <h2 className="heading-secondary" style={{color: 'var(--color-purple)'}}>Cloud Security</h2>
               </div>
               <p className="body-large service-desc">Shared responsibility, fully covered. AWS, Azure, GCP security gaps eliminated.</p>
               <div className="service-details">
                 <h4 className="overline" style={{marginBottom: '1rem', color: 'var(--color-purple)'}}>The 6 Rs of Cloud Migration</h4>
                 <div className="grid-6r">
                    <div className="cloud-r">
                       <strong className="text-purple">1. Rehost:</strong> Lift-and-shift with minimal changes.
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">2. Replatform:</strong> Lift, tinker, and shift. Optimize.
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">3. Repurchase:</strong> Move to a different product (SaaS).
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">4. Refactor:</strong> Re-architect for cloud-native.
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">5. Retain:</strong> Keep in place for compliance.
                    </div>
                    <div className="cloud-r">
                       <strong className="text-purple">6. Retire:</strong> Turn off unnecessary applications.
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
           <p className="overline" style={{color: 'var(--color-copper)', marginBottom: '1rem'}}>Get Started</p>
           <h2 className="heading-display mb-4">Know where you stand,<br/>then take action</h2>
           <p className="body-large text-muted mb-8 max-w-2xl mx-auto">Tell us where you are. We map the path forward.</p>
           <Link to="/contact" className="button-primary">Start a conversation</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
