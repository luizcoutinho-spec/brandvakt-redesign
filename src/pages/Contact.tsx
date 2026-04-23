import { FormEvent, useState } from 'react';
import './Services.css';
import './Contact.css';
import { useMeta } from '../lib/useMeta';

const CONTACT_EMAIL = 'info@brandvakt.com';

interface GlobalHub {
  city: string;
  country: string;
  role: string;
}

const GLOBAL_HUBS: GlobalHub[] = [
  { city: 'Kinshasa',  country: 'DR Congo',    role: 'Africa Headquarters' },
  { city: 'Luanda',    country: 'Angola',      role: 'Africa Operations' },
  { city: 'Abidjan',   country: 'Ivory Coast', role: 'West Africa Hub' },
  { city: 'Bamako',    country: 'Mali',        role: 'West Africa Hub' },
  { city: 'São Paulo', country: 'Brazil',      role: 'LATAM Operations' },
];

const Contact = () => {
  useMeta({
    title: 'Contact',
    description: 'Connect with Brandvakt to discuss your security posture, requirements, and compliance challenges. Global hubs across Africa and LATAM.'
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const first = String(data.get('first') ?? '').trim();
    const last = String(data.get('last') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const details = String(data.get('details') ?? '').trim();
    const body = [
      `Name: ${first} ${last}`,
      `Email: ${email}`,
      '',
      details,
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Enquiry from ${first || 'website'}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="container">
          <span className="overline">Initiate Engagement</span>
          <h1 className="heading-display">Secure Your Defenses</h1>
          <p className="body-large header-subtitle">
            Connect with our architecture team to discuss your security posture, requirements, and compliance challenges.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className="glass-panel contact-shell">
          <div>
            <h2 className="heading-secondary">Global Hubs</h2>
            <ul className="contact-hub-list">
              {GLOBAL_HUBS.map((hub) => (
                <li key={hub.city}>
                  <strong className="contact-hub-city">{hub.city}, {hub.country}</strong>
                  <div className="contact-hub-role">{hub.role}</div>
                </li>
              ))}
            </ul>
            <div className="contact-email-block">
              <strong className="contact-hub-city">Email</strong>
              <div className="contact-email-link" style={{ marginTop: '0.4rem' }}>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            {sent ? (
              <div className="contact-success">
                <h3 className="heading-secondary">Thanks — we'll be in touch.</h3>
                <p className="body-large">
                  Your mail client should be opening. If it didn't, write to{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
                <button type="button" className="button-secondary" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-first">First Name</label>
                    <input id="contact-first" name="first" type="text" required autoComplete="given-name" />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-last">Last Name</label>
                    <input id="contact-last" name="last" type="text" required autoComplete="family-name" />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Corporate Email</label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-details">Inquiry Details</label>
                  <textarea id="contact-details" name="details" rows={5} required />
                </div>
                <button type="submit" className="button-primary contact-submit">Submit Communication</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
