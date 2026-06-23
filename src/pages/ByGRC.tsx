import { Link } from 'react-router-dom';
import './ByGRC.css';
import { useMeta } from '../lib/useMeta';

const ByGRC = () => {
  useMeta({
    title: 'Docs byGRC',
    description: 'AI-powered GRC document intelligence. Centralized access to frameworks, controls, and compliance dashboards — SWIFT, PCI DSS, LGPD, DORA.'
  });
  return (
    <div className="page-wrapper bygrc-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <div style={{display: 'inline-block', background: 'var(--color-copper)', color: 'var(--color-canvas)', padding: '0.35rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem'}}>Docs byGRC</div>
          <h1 className="heading-display">The New Era of <em>Intelligent</em> GRC</h1>
          <p className="body-large header-subtitle">
            AI-powered document intelligence that transforms how organizations navigate regulatory complexity.
          </p>
          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <Link to="/contact" className="btn btn-primary">Request a Demo</Link>
            <a href="#features" className="btn" style={{border: '1px solid rgba(255,255,255,0.2)'}}>Explore Features</a>
          </div>
        </div>
      </header>

      {/* Platform Features Band */}
      <section className="animate-fade-up" style={{background: 'var(--color-surface)', padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s'}}>
         <div className="container pf-grid">
            <div className="pf-card-mini">
               <div className="pf-icon">↻</div>
               <div>
                 <strong style={{color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem'}}>Real-Time Updates</strong>
                 <span style={{color: 'var(--color-text-secondary)', fontSize: '0.85rem'}}>Regulatory changes reflected within 24 hours</span>
               </div>
            </div>
            <div className="pf-card-mini">
               <div className="pf-icon">🔍</div>
               <div>
                 <strong style={{color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem'}}>AI-Powered Search</strong>
                 <span style={{color: 'var(--color-text-secondary)', fontSize: '0.85rem'}}>Natural language queries across 30+ frameworks</span>
               </div>
            </div>
            <div className="pf-card-mini">
               <div className="pf-icon">📊</div>
               <div>
                 <strong style={{color: 'var(--color-text-primary)', display: 'block', marginBottom: '0.2rem'}}>Compliance Dashboard</strong>
                 <span style={{color: 'var(--color-text-secondary)', fontSize: '0.85rem'}}>Visual gap analysis and audit-ready reporting</span>
               </div>
            </div>
         </div>
      </section>

      {/* Platform Overview */}
      <section className="section container animate-fade-up">
         <div className="bygrc-intro-grid">
            <div>
               <p className="overline text-copper">Platform Overview</p>
               <h2 className="heading-primary" style={{marginBottom: '2rem'}}>What is Docs byGRC?</h2>
               <p className="body-large" style={{color: 'var(--color-text-secondary)'}}>
                 An AI-curated library that converts scattered compliance documents into living, structured knowledge — with centralized access and real-time visibility across every regulatory domain.
               </p>
            </div>
            <div className="glass-panel" style={{padding: '2rem', borderTop: '2px solid var(--color-copper)'}}>
               <div className="visual-row">
                  <span className="v-label">LGPD Compliance</span>
                  <div className="v-bar"><div className="v-fill bg-copper" style={{width: '87%'}}></div></div>
               </div>
               <div className="visual-row">
                  <span className="v-label">ISO 27001</span>
                  <div className="v-bar"><div className="v-fill bg-teal" style={{width: '94%'}}></div></div>
               </div>
               <div className="visual-row">
                  <span className="v-label">NIST Framework</span>
                  <div className="v-bar"><div className="v-fill bg-copper" style={{width: '76%'}}></div></div>
               </div>
               <div className="visual-row">
                  <span className="v-label">DORA</span>
                  <div className="v-bar"><div className="v-fill bg-teal" style={{width: '91%'}}></div></div>
               </div>
               <div className="visual-row">
                  <span className="v-label">CIS Controls</span>
                  <div className="v-bar"><div className="v-fill bg-muted" style={{width: '82%'}}></div></div>
               </div>
            </div>
         </div>
      </section>

      {/* Why byGRC */}
      <section className="section animate-fade-up" style={{background: 'var(--color-surface)', padding: '5rem 0'}}>
         <div className="container">
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
               <p className="overline text-copper">Why byGRC?</p>
               <h2 className="heading-primary">Compliance shouldn't be a fire drill</h2>
               <p className="body-large mx-auto mt-2" style={{maxWidth: '700px', color: 'var(--color-text-secondary)'}}>Scattered spreadsheets and static PDFs are outdated the moment they're published. byGRC closes that gap.</p>
            </div>
            <div className="why-grid">
               <div className="why-card glass-panel" style={{borderLeft: '4px solid var(--color-copper)'}}>
                  <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-copper)', marginBottom: '1rem'}}>Before</h3>
                  <p>Manual processes. Fragmented documents. Gaps discovered only during audits.</p>
               </div>
               <div className="why-card glass-panel" style={{borderLeft: '4px solid var(--color-teal)'}}>
                  <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-teal)', marginBottom: '1rem'}}>After</h3>
                  <p>Living documents. AI search. Real-time coverage across every framework from one platform.</p>
               </div>
               <div className="why-card glass-panel" style={{borderLeft: '4px solid var(--color-text-secondary)'}}>
                  <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-text-primary)', marginBottom: '1rem'}}>Always</h3>
                  <p>When the law changes, your platform updates — not your workload.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Core Capabilities */}
      <section className="section container animate-fade-up" id="features">
         <p className="overline text-copper">Core Capabilities</p>
         <h2 className="heading-primary" style={{marginBottom: '1rem'}}>Three Pillars of Intelligence</h2>
         <p className="body-large" style={{marginBottom: '3rem', color: 'var(--color-text-secondary)'}}>Structured, searchable, and actionable compliance knowledge — curated by experts, powered by AI.</p>
         <div className="pillars-grid">
            <div className="glass-panel pillar-card">
               <h4 className="heading-secondary">Multidisciplinary Collection</h4>
               <p>Laws, frameworks, case law, and regulatory publications — one platform, every source.</p>
               <div className="pill-tags">
                  <span>LGPD</span> <span>DORA</span> <span>ISO</span> <span>NIST</span> <span>CIS</span>
               </div>
            </div>
            <div className="glass-panel pillar-card">
               <h4 className="heading-secondary">Applied Artificial Intelligence</h4>
               <p>Semantic search across synonyms and translations, with automatic content categorization.</p>
               <div className="pill-tags bg-secondary">
                  <span>Smart Import</span> <span>Semantic Search</span> <span>Auto-categorize</span>
               </div>
            </div>
            <div className="glass-panel pillar-card">
               <h4 className="heading-secondary">Visual & Unified Management</h4>
               <p>Treeview navigation and dashboards showing compliance status in real time.</p>
               <div className="pill-tags bg-tertiary">
                  <span>Treeview</span> <span>Dashboards</span> <span>Real-time</span>
               </div>
            </div>
         </div>
      </section>

      {/* Frameworks Coverage */}
      <section className="section container animate-fade-up">
         <p className="overline text-copper">Coverage</p>
         <h2 className="heading-primary" style={{marginBottom: '2rem'}}>Frameworks & Standards We Cover</h2>
         <div className="frameworks-flex">
            {["GDPR", "NIS2", "DORA", "ISO 27001", "NIST CSF", "CIS Controls", "SOC 2", "PCI DSS", "HIPAA", "SWIFT CSP", "LGPD", "ISO 31000", "ISO 27701", "COBIT 2019", "ISO 22301", "CSA STAR", "NIST 800-53", "ISO 27017", "POPIA", "NDPA", "SAMA CSF", "BACEN", "Cyber Essentials", "SOX", "CCPA", "ENS", "ISO 20000", "Basel IV", "CMMC 2.0", "PIPEDA", "PDPA", "CSX"].map(fw => (
              <span key={fw} className="framework-pill">{fw}</span>
            ))}
         </div>
         <p className="mt-4" style={{color: 'var(--color-text-secondary)'}}>30+ frameworks, 15 jurisdictions — continuously updated as regulations evolve.</p>
      </section>

      {/* Expert Services */}
      <section className="section container animate-fade-up">
         <div className="grc-services-grid">
            <div>
               <p className="overline text-copper">Expert Services</p>
               <h2 className="heading-primary">Brandvakt GRC Consulting</h2>
               <p className="body-large mt-4" style={{color: 'var(--color-text-secondary)'}}>The tool is powerful, but the strategy is human. GRC consulting integrated with Docs byGRC.</p>
            </div>
            <div className="grc-services-list">
               <div className="glass-panel grc-service-card" style={{borderTop: '2px solid var(--color-teal)'}}>
                  <h4 className="heading-secondary" style={{marginBottom: '0.5rem'}}>Specialized Technical Support</h4>
                  <p>On-demand access to compliance specialists who understand your regulatory landscape.</p>
               </div>
               <div className="glass-panel grc-service-card" style={{borderTop: '2px solid var(--color-copper)'}}>
                  <h4 className="heading-secondary" style={{marginBottom: '0.5rem'}}>Privacy Program Implementation</h4>
                  <p>Structured programs from gap analysis to full compliance with LGPD and other regulations.</p>
               </div>
               <div className="glass-panel grc-service-card" style={{borderTop: '2px solid var(--color-blue)'}}>
                  <h4 className="heading-secondary" style={{marginBottom: '0.5rem'}}>Risk Monitoring</h4>
                  <p>Dedicated curation for your sector — stay ahead of regulatory shifts before they become obligations.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Layer */}
      <section className="section text-center" style={{ background: 'var(--color-obsidian)', padding: '6rem 0' }}>
        <div className="container animate-fade-up">
           <p className="overline text-teal mb-2">Get Started</p>
           <h2 className="heading-primary text-warm-white mb-4">Ready to simplify your GRC program?</h2>
           <p className="body-large mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px' }}>byGRC handles the regulatory intelligence. Your team focuses on implementation.</p>
           <Link to="/contact" className="btn btn-primary">Request a Demo</Link>
        </div>
      </section>

    </div>
  );
};

export default ByGRC;
