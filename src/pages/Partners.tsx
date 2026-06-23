import { Link } from 'react-router-dom';
import './Partners.css';

const partnersData = [
  "AWS", "Brainwave GRC", "Citrix", "CyberArk", "F5", "Forcepoint", "Fortinet", "IBM", "Illumio", 
  "Kaspersky", "KnowBe4", "ManagedLogic", "McAfee", "Microsoft", "PingIdentity", "Red Hat", "RSA", 
  "Sophos", "Tenable", "Trellix", "Tripwire", "Tufin", "Veracode", "Zscaler", "Yubico", "Cisco", 
  "Cobalt", "CrowdStrike", "Mimecast", "LatchManager", "Riverbed", "Varonis", "VMware", "Open Raven", 
  "SailPoint", "Abnormal Security", "Lansweeper", "ManageEngine", "Versasec", "WALLIX"
];

const Partners = () => {
  return (
    <div className="page-wrapper partners-page">
      {/* Hero */}
      <section className="hero-partners animate-fade-up">
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <p className="overline text-copper" style={{marginBottom: '1rem'}}>Partner Ecosystem</p>
          <h1 className="heading-display text-warm-white">
            Trusted by those who<br /><em className="text-copper">cannot afford</em> to be breached
          </h1>
          <p className="body-large text-muted mt-4" style={{maxWidth: '600px'}}>
            Partnerships across financial services, telecommunications, and oil & gas — where the stakes are measured in continuity and trust.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-surface">
        <div className="container animate-fade-up">
          <p className="overline text-copper">Our Approach</p>
          <h2 className="heading-primary mt-2" style={{maxWidth: '600px'}}>We navigate the security landscape alongside our partners</h2>
          
          <div className="approach-grid-pt mt-8">
            <div className="approach-card-pt glass-panel">
              <div className="pt-num text-copper">01</div>
              <h4 className="heading-secondary mb-2">Risk Assessment</h4>
              <p className="text-muted text-sm mb-4">We weigh risk versus investment appetite to find the right balance between protection and operational efficiency.</p>
              <ul className="pt-list text-xs text-muted">
                <li>Threat modeling</li>
                <li>Security posture review</li>
                <li>Risk vs. investment analysis</li>
              </ul>
            </div>
            <div className="approach-card-pt glass-panel">
              <div className="pt-num text-copper">02</div>
              <h4 className="heading-secondary mb-2">Solutions & Technology</h4>
              <p className="text-muted text-sm mb-4">Matching customers to solutions that align with security frameworks and regulatory requirements.</p>
              <ul className="pt-list text-xs text-muted">
                <li>Vendor evaluation</li>
                <li>Architecture design</li>
                <li>Compliance alignment</li>
              </ul>
            </div>
            <div className="approach-card-pt glass-panel">
              <div className="pt-num text-copper">03</div>
              <h4 className="heading-secondary mb-2">Awareness & Education</h4>
              <p className="text-muted text-sm mb-4">Engaging and educating through cyber awareness programs that build a security-first culture across the organization.</p>
              <ul className="pt-list text-xs text-muted">
                <li>KnowBe4 programs</li>
                <li>Executive briefings</li>
                <li>Incident response drills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="section bg-midnight">
        <div className="container animate-fade-up">
          <p className="overline text-teal">Featured Partnerships</p>
          <h2 className="heading-primary mt-2">Strategic alliances that define our capabilities</h2>
          
          <div className="featured-grid-pt mt-8">
            <div className="fp-card glass-panel" style={{borderTop: '3px solid var(--color-teal)'}}>
              <span className="fp-badge badge-teal">Certified Partner</span>
              <h3 className="fp-name text-teal mt-4">KnowBe4</h3>
              <p className="fp-cat">Security Awareness Training</p>
              <p className="text-muted text-sm mt-3">Certified partner delivering behavior-driven training programs across Africa, Europe, and Latin America.</p>
            </div>
            <div className="fp-card glass-panel" style={{borderTop: '3px solid var(--color-copper)'}}>
              <span className="fp-badge badge-copper">Certified Partner</span>
              <h3 className="fp-name text-copper mt-4">Tenable</h3>
              <p className="fp-cat">Exposure Management & VM</p>
              <p className="text-muted text-sm mt-3">Tenable Nessus deployed for vulnerability scanning and continuous assessment across client infrastructure.</p>
            </div>
            <div className="fp-card glass-panel" style={{borderTop: '3px solid var(--color-blue)'}}>
              <span className="fp-badge badge-blue">Certified Partner</span>
              <h3 className="fp-name mt-4" style={{color: 'var(--color-blue)'}}>CrowdStrike</h3>
              <p className="fp-cat">Endpoint Detection & Response</p>
              <p className="text-muted text-sm mt-3">Next-gen endpoint protection. Our SOC integrates CrowdStrike Falcon for advanced threat detection, hunting, and response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Partners Grid */}
      <section className="section partners-logos-bg">
        <div className="container animate-fade-up">
          <p className="overline text-teal">Technology Partners</p>
          <h2 className="heading-primary mt-2">Our partner network</h2>
          
          <div className="logos-grid-pt mt-8">
            {partnersData.map((partner, index) => (
              <div key={index} className="pt-logo-item">
                <span className="pt-logo-dot text-teal">&middot;</span>
                <span className="pt-logo-name">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section bg-midnight">
        <div className="container animate-fade-up">
          <p className="overline text-copper">Industry Focus</p>
          <h2 className="heading-primary mt-2">Sectors we serve</h2>
          
          <div className="sectors-grid-pt mt-8">
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 21v-4h6v4M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">Financial Services</h4>
              <p className="text-muted text-sm">Banks and financial institutions where regulatory compliance and data protection are non-negotiable mandates.</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7M2 20h20M6 8l4-4 4 4 4-4"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">Telecommunications</h4>
              <p className="text-muted text-sm">Operators managing critical communications infrastructure, large volumes of sensitive data, and customer PII at scale.</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7zM13 2v7h7"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">Oil & Gas</h4>
              <p className="text-muted text-sm">Energy companies protecting operational technology, industrial control systems, and critical national infrastructure.</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">Healthcare</h4>
              <p className="text-muted text-sm">Securing patient records, connected devices, and HIPAA/POPI compliance.</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M9 9l-4 3 4 3M15 9l4 3-4 3M12 3l-2 18"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">Technology</h4>
              <p className="text-muted text-sm">Cloud-native organizations embedding DevSecOps and securing multi-tenant architectures.</p>
            </div>
            <div className="sector-card-pt glass-panel">
              <div className="sector-icon text-copper"><svg viewBox="0 0 24 24"><path d="M3 21h18M3 21V7l9-4 9 4v14M9 21v-6h6v6"/></svg></div>
              <h4 className="heading-secondary mt-4 mb-2">Infrastructure</h4>
              <p className="text-muted text-sm">Public utilities and government bodies building cyber resilience into water, transport, and electricity systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface text-center">
        <div className="container animate-fade-up">
          <p className="overline text-teal mb-2">Join the Ecosystem</p>
          <h2 className="heading-primary mb-4">Become a Brandvakt partner</h2>
          <p className="body-large text-muted mx-auto mb-6" style={{maxWidth: '520px'}}>If your technology complements our cybersecurity portfolio, we'd like to hear from you.</p>
          <div className="flex gap-4 justify-center">
             <Link to="/contact" className="btn btn-primary">Partner Enquiry</Link>
             <a href="mailto:partners@brandvakt.com" className="btn" style={{border: '1px solid rgba(255,255,255,0.2)'}}>partners@brandvakt.com</a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Partners;
