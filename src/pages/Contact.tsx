import { FormEvent, useState } from 'react';
import './Services.css';
import './Contact.css';
import { useMeta } from '../lib/useMeta';

const CONTACT_EMAIL = 'info@brandvakt.com';

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  useMeta({
    title: 'Contact',
    description: 'Connect with Brandvakt to discuss your security posture, requirements, and compliance challenges. Regions across Africa, LATAM, Europe and the Middle East.'
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      first: String(data.get('first') ?? '').trim(),
      last: String(data.get('last') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      details: String(data.get('details') ?? '').trim(),
    };
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
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
            <h2 className="heading-secondary">Contact us</h2>

            <div className="contact-info-block">
              <span className="overline text-teal">Email</span>
              <div className="contact-email-link">
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>

            <div className="contact-info-block">
              <span className="overline text-teal">Regions</span>
              <div className="contact-info-value">Africa · LATAM · Europe · Middle East</div>
            </div>

            <div className="contact-info-block">
              <span className="overline text-teal">Response Time</span>
              <div className="contact-info-value">Within 24 hours</div>
            </div>
          </div>

          <div className="contact-form-col">
            {status === 'success' ? (
              <div className="contact-success">
                <h3 className="heading-secondary">Thanks — message received.</h3>
                <p className="body-large">
                  We received your message and will reply within 24 hours.
                </p>
                <button type="button" className="button-secondary" onClick={() => setStatus('idle')}>
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

                {status === 'error' && (
                  <p className="contact-error">
                    Something went wrong sending your message. Please email us directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                  </p>
                )}

                <button type="submit" className="button-primary contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit Communication'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
