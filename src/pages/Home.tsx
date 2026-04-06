import { useState, useEffect } from 'react';
import './Home.css';

const HERO_VIDEOS = [
  '/assets/hero-bg.mp4',
  '/assets/hero-sphere.mp4',
  '/assets/hero-abstractwaves.mp4',
  '/assets/hero-galaxystars.mp4',
  '/assets/hero-code.mp4'
];

const Home = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-video-wrapper">
           {HERO_VIDEOS.map((src, idx) => (
             <video 
               key={src}
               className={`hero-video ${idx === activeVideoIndex ? 'active' : ''}`} 
               autoPlay 
               loop 
               muted 
               playsInline
             >
                <source src={src} type="video/mp4" />
             </video>
           ))}
           <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content animate-fade-up">
          <span className="overline">Digital Trust & AI Governance</span>
          <h1 className="heading-display hero-title">
            Leading cyber resilience<br />in the age of AI
          </h1>
          <p className="body-large hero-subtitle">
            Digital trust frameworks and AI governance for organizations navigating the frontier of enterprise technology globally.
          </p>
          <div className="hero-actions mt-4">
            <a href="#contact" className="button-primary">Start a conversation</a>
            <a href="/services" className="button-secondary">Our services</a>
          </div>
        </div>
      </section>

      {/* 2. Trust Section */}
      <section className="trust-section">
        <div className="container trust-inner">
          <span className="trust-label">Frameworks we align with</span>
          <div className="trust-logos">
             <span className="trust-logo">ISO 27001</span>
             <span className="trust-logo">NIST CSF</span>
             <span className="trust-logo">CIS Controls</span>
             <span className="trust-logo">SWIFT</span>
             <span className="trust-logo">PCI DSS</span>
             <span className="trust-logo">LGPD</span>
             <span className="trust-logo">DORA</span>
          </div>
        </div>
      </section>

      {/* 3. The Firewatch (About) */}
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-left animate-fade-up">
            <p className="overline">What is Brandvakt</p>
            <h2 className="heading-primary mt-2">The ancient art of the Firewatch, applied to cyber</h2>
            <div className="about-quote mt-6">
              "The word Brandvakt means 'Firewatch'. We ensure the fire burns smoothly, doesn't spread, contain it if something goes wrong, and ensure the safety of everyone."
            </div>
            <ul className="mt-4 text-muted body-large" style={{listStyle: 'none'}}>
              <li className="mb-2"><span className="text-teal mr-2">✦</span> Assessment, monitoring, identity, and AI governance</li>
              <li className="mb-2"><span className="text-teal mr-2">✦</span> Operating across Africa, LATAM, Europe, Middle East</li>
              <li><span className="text-teal mr-2">✦</span> Practitioners who treat security as critical infrastructure</li>
            </ul>
          </div>
          
          <div className="stats-grid animate-fade-up">
              <div className="stat-card">
                <div className="stat-number">6</div>
                <div className="stat-label">Global offices across 4 continents</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">SOC operations & threat monitoring</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">9</div>
                <div className="stat-label">Core cybersecurity service offerings</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12+</div>
                <div className="stat-label">Industry verticals served globally</div>
              </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities (Services snippet) */}
      <section className="section capabilities-section">
        <div className="container">
          <p className="overline mb-2 animate-fade-up">How we protect you</p>
          <h2 className="heading-primary mb-6 animate-fade-up">Our Capabilities</h2>
          
          <div className="capabilities-grid animate-fade-up">
            <div className="capability-card">
              <h3>Maturity Assessment</h3>
              <p>Gap analysis and risk assessment against recognized frameworks.</p>
            </div>
            <div className="capability-card">
              <h3>Network Security</h3>
              <p>Monitor and secure networks transmitting protected data across operations.</p>
            </div>
            <div className="capability-card">
              <h3>Vulnerability Management</h3>
              <p>Continuous assessment, prioritized by risk and precise remediation.</p>
            </div>
            <div className="capability-card">
              <h3>Digital Identity</h3>
              <p>Identities are the new perimeter. Protecting Workforce and Consumers.</p>
            </div>
            <div className="capability-card">
              <h3>Endpoint Security</h3>
              <p>Advanced protection for employee devices against an evolving threat surface.</p>
            </div>
            <div className="capability-card">
              <h3>Penetration Testing</h3>
              <p>Simulated ethical attacks to find vulnerabilities before adversaries do.</p>
            </div>
            <div className="capability-card">
              <h3>Cyber Awareness</h3>
              <p>Training addressing the human factor — your ultimate line of defence.</p>
            </div>
            <div className="capability-card">
              <h3>Governance, Risk & Compliance</h3>
              <p>Navigate SWIFT, PCI, LGPD with executable security data frameworks.</p>
            </div>
            <div className="capability-card">
              <h3>Cloud Security</h3>
              <p>Secure cloud perimeters seamlessly— AWS, Azure, Google, or multi-tenant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOC Section Matrix */}
      <section className="section about-section">
        <div className="container soc-grid">
          <div className="soc-visual animate-fade-up">
            <div className="soc-v-header">
              <span>Threat Landscape</span>
              <span className="text-obsidian">✦ LIVE TELEMETRY</span>
            </div>
            <div className="soc-metrics">
              <div className="soc-metric">
                <div className="soc-metric-header">
                  <span className="soc-m-val">$4.24M</span>
                  <span className="soc-m-lbl">Avg. breach cost</span>
                </div>
                <div className="soc-bar"><div className="soc-bar-fill" style={{width: '82%'}}></div></div>
              </div>
              <div className="soc-metric">
                <div className="soc-metric-header">
                  <span className="soc-m-val">287</span>
                  <span className="soc-m-lbl">Days to detect</span>
                </div>
                <div className="soc-bar"><div className="soc-bar-fill" style={{width: '65%'}}></div></div>
              </div>
              <div className="soc-metric" style={{borderBottom: 'none'}}>
                <div className="soc-metric-header">
                  <span className="soc-m-val">650+</span>
                  <span className="soc-m-lbl">Threat groups tracked</span>
                </div>
                <div className="soc-bar"><div className="soc-bar-fill" style={{width: '75%'}}></div></div>
              </div>
            </div>
          </div>
          
          <div className="soc-content animate-fade-up">
             <p className="overline">Security Operations Center</p>
             <h2 className="heading-primary mt-2">Always hunting.<br/>Always responding.</h2>
             <p className="body-large text-muted mt-4">Continuous monitoring of endpoints, networks, and user activity for high-fidelity indicators of compromise.</p>
             <ul className="mt-4 mb-6 text-primary body-large" style={{listStyle: 'none'}}>
               <li className="mb-2">✦ 24/7 threat detection and incident response</li>
               <li className="mb-2">✦ Outsourced, managed, or collaborative models</li>
               <li className="mb-2">✦ SIEM-powered event correlation</li>
             </ul>
             <a href="/soc" className="button-secondary">Explore our SOC</a>
          </div>
        </div>
      </section>

      {/* 6. Products Grid */}
      <section className="section capabilities-section">
        <div className="container">
          <p className="overline animate-fade-up">Products</p>
          <h2 className="heading-primary mb-8 animate-fade-up">Purpose-built platforms</h2>
          
          <div className="products-grid animate-fade-up">
            <div className="product-card flagship glass-panel">
               <span className="product-badge">AI Platform</span>
               <h3 className="heading-secondary text-warm-white">Homo Deus</h3>
               <p className="text-muted mt-2 mb-6">Autonomous AI agents that monitor, detect, and respond to cyber threats around the clock — without human intervention.</p>
               <a href="/homodeus-partnership" className="button-primary" style={{width: '100%', padding: '0.75rem'}}>Explore Homo Deus</a>
            </div>
            <div className="product-card glass-panel">
               <span className="product-badge text-teal">Training</span>
               <h3 className="heading-secondary text-warm-white">Academy</h3>
               <p className="text-muted mt-2 mb-6">Recognized cybersecurity training programs systematically built by active industry practitioners.</p>
               <a href="/academy" className="button-secondary" style={{width: '100%', padding: '0.75rem'}}>View Academy</a>
            </div>
            <div className="product-card glass-panel">
               <span className="product-badge text-teal">GRC Platform</span>
               <h3 className="heading-secondary text-warm-white">Docs byGRC</h3>
               <p className="text-muted mt-2 mb-6">AI-powered GRC document intelligence. Centralized access to frameworks and compliance dashboards.</p>
               <a href="/bygrc" className="button-secondary" style={{width: '100%', padding: '0.75rem'}}>View byGRC</a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Verticals & WhyBV */}
      <section className="section about-section">
        <div className="container">
          <p className="overline animate-fade-up">Industry Expertise</p>
          <h2 className="heading-primary mb-8 animate-fade-up">Sectors we serve</h2>
          
          <div className="verticals-grid mb-12 animate-fade-up">
             <div className="v-chip"><div className="v-chip-name">Financial Services</div><div className="v-chip-desc">Zero breach tolerance</div></div>
             <div className="v-chip"><div className="v-chip-name">Telecommunications</div><div className="v-chip-desc">Protecting network infra</div></div>
             <div className="v-chip"><div className="v-chip-name">Energy</div><div className="v-chip-desc">OT/ICS cyber defense</div></div>
             <div className="v-chip"><div className="v-chip-name">Healthcare</div><div className="v-chip-desc">Patient data compliance</div></div>
             <div className="v-chip"><div className="v-chip-name">Retail</div><div className="v-chip-desc">PCI DSS at scale</div></div>
             <div className="v-chip"><div className="v-chip-name">Logistics</div><div className="v-chip-desc">Supply chain integrity</div></div>
             <div className="v-chip"><div className="v-chip-name">Infrastructure</div><div className="v-chip-desc">Gov & utility resilience</div></div>
             <div className="v-chip"><div className="v-chip-name">Technology</div><div className="v-chip-desc">End-to-end DevOps security</div></div>
          </div>

          <h2 className="heading-primary mb-6 animate-fade-up">What sets us apart</h2>
          <div className="whybv-grid animate-fade-up">
            <div className="whybv-item glass-panel">
              <div className="whybv-num">01</div>
              <h4 className="heading-secondary">Southern Hemisphere Specialists</h4>
              <p className="text-muted mt-2">Permanent teams on the ground in Africa and LATAM — built for local regulatory and infrastructure realities.</p>
            </div>
            <div className="whybv-item glass-panel">
              <div className="whybv-num">02</div>
              <h4 className="heading-secondary">Multi-Framework Expertise</h4>
              <p className="text-muted mt-2">GDPR, LGPD, DORA, SWIFT CSP — certified consultants who translate requirements into executable programs.</p>
            </div>
            <div className="whybv-item glass-panel">
              <div className="whybv-num">03</div>
              <h4 className="heading-secondary">AI-Augmented Operations</h4>
              <p className="text-muted mt-2">SOC operations augmented with HomoDeus AI — radically faster response times than legacy SIEMs.</p>
            </div>
            <div className="whybv-item glass-panel">
              <div className="whybv-num">04</div>
              <h4 className="heading-secondary">Sector-Tuned Intelligence</h4>
              <p className="text-muted mt-2">Threat intelligence heavily calibrated to the precise attack patterns of your sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact & CTA */}
      <section className="section capabilities-section" id="contact">
        <div className="container">
          <div className="cta-box animate-fade-up">
             <h2 className="heading-display mb-4">Your digital sentinel,<br/>on the right side of the fence.</h2>
             <p className="body-large text-muted mb-8 max-w-2xl mx-auto">Security-minded experts committed to protecting your business continuity. We are the Firewatch.</p>
          </div>
          
          <div className="contact-grid animate-fade-up mt-8">
            <div className="contact-info">
              <p className="overline mb-2">Get in touch</p>
              <h2 className="heading-primary mb-6">Contact us</h2>
              <div className="mb-6">
                 <h4 className="text-teal mb-1" style={{fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Email</h4>
                 <p className="body-large">info@brandvakt.com</p>
              </div>
              <div className="mb-6">
                 <h4 className="text-teal mb-1" style={{fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Offices</h4>
                 <p className="body-large text-muted">Kinshasa · Luanda · Abidjan<br/>São Paulo · London · Dubai</p>
              </div>
            </div>
            
            <div className="contact-form glass-panel" style={{padding: '3rem'}}>
              <h3 className="heading-secondary mb-6">Send a message</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Region or Country" />
                <textarea rows={4} placeholder="Tell us about your security needs..."></textarea>
                <button type="submit" className="button-primary mt-4">Send Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
