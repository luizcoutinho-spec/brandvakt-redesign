import { Link } from 'react-router-dom';
import './Academy.css';
import { useMeta } from '../lib/useMeta';

const Academy = () => {
  useMeta({
    title: 'Academy',
    description: 'ISO-aligned cybersecurity certification programs in GRC, risk management, and AI governance — designed for professionals in high-stakes environments.'
  });
  return (
    <div className="page-wrapper academy-page">
      {/* Hero */}
      <section className="hero-academy">
        <div className="hero-academy-bg" aria-hidden="true">ACADEMY</div>
        <div className="container hero-content animate-fade-up" style={{position: 'relative', zIndex: 2}}>
          <p className="overline text-teal" style={{marginBottom: '1rem'}}>Brandvakt Academy</p>
          <h1 className="heading-display text-warm-white" style={{marginBottom: '1.5rem'}}>
            Cybersecurity training<br />built by <em className="text-teal">practitioners</em>
          </h1>
          <p className="body-large text-muted mb-6" style={{maxWidth: '520px'}}>
            ISO-aligned certification programs in GRC, risk management, and AI governance — designed for professionals who operate in high-stakes environments.
          </p>
          <div className="flex gap-4 flex-wrap mt-6">
            <a href="https://brandvakt-academy.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Browse courses</a>
            <Link to="/contact" className="btn btn-ghost" style={{border: '1px solid rgba(255,255,255,0.2)'}}>Team enrollment &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="stats-band-acd animate-fade-up" style={{animationDelay: '0.2s'}}>
        <div className="container">
          <div className="stats-inner-acd">
            <div className="stat-item-acd">
              <div className="stat-num-acd">50+</div>
              <div className="stat-lbl-acd">Courses available</div>
            </div>
            <div className="stat-item-acd">
              <div className="stat-num-acd">7</div>
              <div className="stat-lbl-acd">ISO standard tracks</div>
            </div>
            <div className="stat-item-acd">
              <div className="stat-num-acd">4</div>
              <div className="stat-lbl-acd">Continents served</div>
            </div>
            <div className="stat-item-acd">
              <div className="stat-num-acd">100%</div>
              <div className="stat-lbl-acd">Practitioner-led curriculum</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-midnight">
        <div className="container">
          <div className="about-grid-acd animate-fade-up">
            <div className="about-left-acd">
              <p className="overline text-teal">What is Brandvakt Academy</p>
              <h2 className="heading-primary mt-2 mb-4">Training that maps to<br /><em className="text-teal">real threat environments</em></h2>
              <p className="body-large text-muted mb-4">
                Built by Brandvakt's operational security team, the Academy translates field experience into certifiable competencies. Every course maps to an international standard.
              </p>
              <ul className="ac-features">
                <li>ISO/IEC and management system certifications recognized globally</li>
                <li>Hands-on curriculum developed from active engagements</li>
                <li>Flexible self-paced and instructor-led formats</li>
              </ul>
            </div>
            <div className="about-right-acd glass-panel">
              <div className="ac-stat-box">
                <div className="ac-stat-num text-teal">ISO</div>
                <div className="ac-stat-lbl">27005 · 31000 · 37001 · 37301 · 42001</div>
              </div>
              <div className="ac-stat-box">
                <div className="ac-stat-num text-teal">ESG</div>
                <div className="ac-stat-lbl">Governance & sustainability essentials</div>
              </div>
              <div className="ac-stat-box">
                <div className="ac-stat-num text-teal">GRC</div>
                <div className="ac-stat-lbl">Risk, compliance & audit frameworks</div>
              </div>
              <div className="ac-stat-box">
                <div className="ac-stat-num text-teal">AI</div>
                <div className="ac-stat-lbl">Governance & security in AI systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog */}
      <section className="section bg-surface">
        <div className="container">
          <div className="animate-fade-up mb-6">
            <p className="overline">Certification catalog</p>
            <h2 className="heading-primary">Featured courses</h2>
          </div>
          
          <div className="courses-grid-acd animate-fade-up">
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-essentials">Essentials</span>
              <h3 className="course-title">Environmental, Social & Governance (ESG) Essentials</h3>
              <p className="course-desc">Foundations of ESG frameworks, reporting standards, and governance integration for security professionals.</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">Enroll &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-essentials">Essentials</span>
              <h3 className="course-title">Management System (MS) Essentials</h3>
              <p className="course-desc">Core principles of ISO management systems — applicable across information security, quality, and risk disciplines.</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">Enroll &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-iso">ISO/IEC 27005</span>
              <h3 className="course-title">ISO/IEC 27005 Professional</h3>
              <p className="course-desc">Information security risk management aligned to ISO 27005 — threat identification, assessment, and treatment.</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">Enroll &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-iso">ISO 31000</span>
              <h3 className="course-title">ISO 31000 Practitioner</h3>
              <p className="course-desc">Enterprise risk management under ISO 31000 — principles, framework design, and risk process implementation.</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">Enroll &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-advanced">ISO 37001</span>
              <h3 className="course-title">ISO 37001 Lead Auditor</h3>
              <p className="course-desc">Anti-bribery management system auditing — plan, conduct, and report ISO 37001 conformity audits.</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">Enroll &rarr;</a>
              </div>
            </div>
            <div className="course-card-acd glass-panel">
              <span className="course-badge type-advanced">ISO 37001</span>
              <h3 className="course-title">ISO 37001 Lead Implementer</h3>
              <p className="course-desc">Design and deploy an ISO 37001-compliant anti-bribery management system within your organization.</p>
              <div className="course-footer">
                <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="course-cta">Enroll &rarr;</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 animate-fade-up">
             <a href="https://brandvakt-academy.com/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{border: '1px solid rgba(255,255,255,0.2)'}}>View full catalog &rarr;</a>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="section bg-midnight tracks-section">
         <div className="container">
            <div className="animate-fade-up mb-6">
               <p className="overline">Learning tracks</p>
               <h2 className="heading-primary">Structured certification paths</h2>
            </div>
            <div className="tracks-grid-acd animate-fade-up">
               <div className="track-card-acd glass-panel">
                  <div className="track-icon">
                     <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <h4 className="heading-secondary">Risk Management</h4>
                  <p className="text-muted mt-2 mb-4">ISO 31000 and ISO 27005 certification sequence for risk professionals.</p>
                  <div className="track-courses">
                     <span>— ISO 31000 Practitioner</span>
                     <span>— ISO/IEC 27005 Professional</span>
                     <span>— MS Essentials (prerequisite)</span>
                  </div>
               </div>
               <div className="track-card-acd glass-panel">
                  <div className="track-icon">
                     <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  </div>
                  <h4 className="heading-secondary">Compliance & Audit</h4>
                  <p className="text-muted mt-2 mb-4">Lead Auditor and Implementer tracks for ISO 37001 and governance frameworks.</p>
                  <div className="track-courses">
                     <span>— ISO 37001 Lead Auditor</span>
                     <span>— ISO 37001 Lead Implementer</span>
                     <span>— ESG Essentials</span>
                  </div>
               </div>
               <div className="track-card-acd glass-panel">
                  <div className="track-icon">
                     <svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h4 className="heading-secondary">AI & Emerging Tech</h4>
                  <p className="text-muted mt-2 mb-4">AI governance and security frameworks for organizations deploying AI systems.</p>
                  <div className="track-courses">
                     <span>— ISO 42001 AI Management</span>
                     <span>— AI Security Fundamentals</span>
                     <span>— Brandvakt × HomoDeus program</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Enroll CTA */}
      <section className="section bg-surface text-center">
         <div className="container animate-fade-up">
            <p className="overline text-teal">Enroll today</p>
            <h2 className="heading-primary mt-2 mb-4">Certify your team</h2>
            <p className="body-large text-muted mx-auto mb-6" style={{maxWidth: '480px'}}>
               Group enrollment discounts available for teams of 5 or more. Contact us to build a custom training program.
            </p>
            <div className="flex gap-4 justify-center">
               <a href="https://brandvakt-academy.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Browse all courses</a>
               <Link to="/contact" className="btn" style={{border: '1px solid rgba(255,255,255,0.2)'}}>Enterprise enrollment</Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Academy;
