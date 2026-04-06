import './Legal.css';

const Privacy = () => {
  return (
    <div className="page-wrapper legal-page">
      <section className="hero-legal animate-fade-up">
        <div className="container">
          <p className="overline text-copper mb-2">Legal</p>
          <h1 className="heading-primary">Privacy Policy</h1>
        </div>
      </section>

      <section className="legal-content">
        <div className="container animate-fade-up">
          <div className="legal-inner">
            <div className="legal-section">
              <div className="legal-divider"></div>
              <p>
                This Privacy Policy describes how Brandvakt Group collects, uses, and protects personal data
                in accordance with applicable data protection regulations including GDPR and LGPD.
                We are committed to safeguarding your privacy and handling your data with transparency and care.
              </p>
              <p style={{fontSize: '0.85rem', color: 'var(--color-text-muted)'}}>Last updated: January 2026</p>
            </div>

            <div className="legal-section">
              <h2>Data We Collect</h2>
              <p>When you submit our contact form, we collect the following:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Company name</li>
                <li>Any message content you choose to provide</li>
              </ul>
              <p>We do not collect payment information, sensitive personal data, or data from minors.</p>
            </div>

            <div className="legal-section">
              <h2>How We Use It</h2>
              <p>Data collected via the contact form is used solely to respond to your enquiry. We do not use it for marketing, profiling, or automated decision-making. We do not sell, rent, or share your data with third parties.</p>
            </div>

            <div className="legal-section">
              <h2>Data Retention</h2>
              <p>
                Contact form submissions are retained for up to 2 years from the date received. If no ongoing
                client relationship develops, your data is deleted at that point. Where a contractual relationship
                exists, data is retained for the duration of the engagement and for a reasonable period thereafter
                as required by applicable law.
              </p>
            </div>

            <div className="legal-section">
              <h2>Your Rights</h2>
              <p>Depending on your jurisdiction, you have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Access</strong> &mdash; request a copy of the data we hold about you</li>
                <li><strong>Rectification</strong> &mdash; correct inaccurate or incomplete data</li>
                <li><strong>Erasure</strong> &mdash; request deletion under applicable conditions</li>
                <li><strong>Portability</strong> &mdash; receive your data in a structured, machine-readable format</li>
                <li><strong>Restriction</strong> &mdash; limit how we process your data in certain circumstances</li>
                <li><strong>Objection</strong> &mdash; object to processing based on legitimate interests</li>
              </ul>
              <p>To exercise any of these rights, contact us at the address below.</p>
            </div>

            <div className="legal-section">
              <h2>Contact</h2>
              <p>
                For privacy-related queries or to exercise your data rights, contact us at:<br/>
                <a href="mailto:privacy@brandvakt.com">privacy@brandvakt.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
