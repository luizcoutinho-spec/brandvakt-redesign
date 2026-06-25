import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';
import './Contact.css';
import { useMeta } from '../lib/useMeta';

const CONTACT_EMAIL = 'info@brandvakt.com';

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const { t } = useTranslation('pages');
  useMeta({
    title: 'Contact',
    description: t('contact.meta_desc'),
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
          <span className="overline">{t('contact.overline')}</span>
          <h1 className="heading-display">{t('contact.h1')}</h1>
          <p className="body-large header-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>
      </header>

      <section className="section container">
        <div className="glass-panel contact-shell">
          <div>
            <h2 className="heading-secondary">{t('contact.contact_us')}</h2>

            <div className="contact-info-block">
              <span className="overline text-teal">{t('contact.label_email')}</span>
              <div className="contact-email-link">
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>

            <div className="contact-info-block">
              <span className="overline text-teal">{t('contact.label_regions')}</span>
              <div className="contact-info-value">Africa · LATAM · Europe · Middle East</div>
            </div>

            <div className="contact-info-block">
              <span className="overline text-teal">{t('contact.label_response')}</span>
              <div className="contact-info-value">{t('contact.value_response')}</div>
            </div>
          </div>

          <div className="contact-form-col">
            {status === 'success' ? (
              <div className="contact-success">
                <h3 className="heading-secondary">{t('contact.success_title')}</h3>
                <p className="body-large">
                  {t('contact.success_body')}
                </p>
                <button type="button" className="button-secondary" onClick={() => setStatus('idle')}>
                  {t('contact.success_btn')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-first">{t('contact.f_first')}</label>
                    <input id="contact-first" name="first" type="text" required autoComplete="given-name" />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-last">{t('contact.f_last')}</label>
                    <input id="contact-last" name="last" type="text" required autoComplete="family-name" />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">{t('contact.f_email')}</label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-details">{t('contact.f_details')}</label>
                  <textarea id="contact-details" name="details" rows={5} required />
                </div>

                {status === 'error' && (
                  <p className="contact-error">
                    {t('contact.error_msg')}{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                  </p>
                )}

                <button type="submit" className="button-primary contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? t('contact.btn_sending') : t('contact.btn_submit')}
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
