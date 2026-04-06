import './Legal.css';

const Cookies = () => {
  return (
    <div className="page-wrapper legal-page">
      <section className="hero-legal animate-fade-up">
        <div className="container">
          <p className="overline text-copper mb-2">Legal</p>
          <h1 className="heading-primary">Cookie Policy</h1>
        </div>
      </section>

      <section className="legal-content">
        <div className="container animate-fade-up">
          <div className="legal-inner">
            <div className="legal-section">
              <div className="legal-divider"></div>
              <p>
                This Cookie Policy explains how Brandvakt Group uses cookies and similar tracking technologies
                on our website. By continuing to use our site, you consent to the use of cookies as described below.
              </p>
              <p style={{fontSize: '0.85rem', color: 'var(--color-text-muted)'}}>Last updated: January 2026</p>
            </div>

            <div className="legal-section">
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They allow the site
                to remember your actions and preferences over a period of time, so you do not have to re-enter
                information each time you visit or navigate between pages.
              </p>
            </div>

            <div className="legal-section">
              <h2>Essential Cookies</h2>
              <p>These cookies are required for the website to function. They cannot be disabled because they enable core functionality including navigation, security, and session handling. No personal data is stored beyond what is technically necessary.</p>
            </div>

            <div className="legal-section">
              <h2>Analytics Cookies</h2>
              <p>We may use optional analytics cookies to collect anonymised data on page visits and navigation patterns. This helps us understand how the site is used and where we can improve the experience. No personally identifiable information is collected or linked.</p>
              <p>You can opt out of analytics cookies at any time via your browser settings (see below).</p>
            </div>

            <div className="legal-section">
              <h2>Third-Party Resources</h2>
              <p>
                Our website loads fonts from Google Fonts. Google Fonts serves font files directly from Google's
                CDN. While this may involve a connection to Google's servers, Google Fonts does not set tracking
                cookies and does not use the requests to profile users for advertising. See <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener noreferrer">Google Fonts privacy FAQ</a> for details.
              </p>
              <p>We do not load any other third-party scripts, pixels, or tracking technologies.</p>
            </div>

            <div className="legal-section">
              <h2>How to Opt Out</h2>
              <p>You can control or delete cookies through your browser settings:</p>
              <ul>
                <li><strong>Chrome:</strong> Settings &rarr; Privacy and security &rarr; Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings &rarr; Privacy & Security &rarr; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data</li>
                <li><strong>Edge:</strong> Settings &rarr; Cookies and site permissions</li>
              </ul>
              <p>
                For broader guidance, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>. Note that disabling essential cookies may affect site functionality.
              </p>
            </div>

            <div className="legal-section">
              <h2>Contact</h2>
              <p>
                Questions about our use of cookies can be directed to:<br/>
                <a href="mailto:privacy@brandvakt.com">privacy@brandvakt.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
