import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Careers.css';
import { useMeta } from '../lib/useMeta';

interface Position {
  apiTitle: string;   // stable English title sent to /api/apply (internal email stays EN)
  titleKey: string;
  deptKey: string;
  locKey: string;
  descKey: string;
  reqKeys: string[];
}

const POSITIONS: Position[] = [
  {
    apiTitle: 'SOC Analyst',
    titleKey: 'careers.p1_title',
    deptKey: 'careers.p1_dept',
    locKey: 'careers.p1_loc',
    descKey: 'careers.p1_desc',
    reqKeys: ['careers.p1_req1', 'careers.p1_req2', 'careers.p1_req3'],
  },
  {
    apiTitle: 'GRC Consultant',
    titleKey: 'careers.p2_title',
    deptKey: 'careers.p2_dept',
    locKey: 'careers.p2_loc',
    descKey: 'careers.p2_desc',
    reqKeys: ['careers.p2_req1', 'careers.p2_req2', 'careers.p2_req3'],
  },
  {
    apiTitle: 'Penetration Tester',
    titleKey: 'careers.p3_title',
    deptKey: 'careers.p3_dept',
    locKey: 'careers.p3_loc',
    descKey: 'careers.p3_desc',
    reqKeys: ['careers.p3_req1', 'careers.p3_req2', 'careers.p3_req3'],
  },
  {
    apiTitle: 'Business Development Manager',
    titleKey: 'careers.p4_title',
    deptKey: 'careers.p4_dept',
    locKey: 'careers.p4_loc',
    descKey: 'careers.p4_desc',
    reqKeys: ['careers.p4_req1', 'careers.p4_req2', 'careers.p4_req3'],
  },
];

const OPEN_APPLICATION: Position = {
  apiTitle: 'Open Application',
  titleKey: 'careers.open_app_title',
  deptKey: '',
  locKey: '',
  descKey: 'careers.open_app_desc',
  reqKeys: [],
};

const MAX_BYTES = 2.5 * 1024 * 1024; // 2.5 MB
type Status = 'idle' | 'sending' | 'success' | 'error';

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.split(',')[1] ?? ''); // strip the data:...;base64, prefix
    };
    reader.onerror = () => reject(new Error('read error'));
    reader.readAsDataURL(file);
  });
}

const Careers = () => {
  const { t } = useTranslation('pages');
  useMeta({
    title: t('careers.meta_title'),
    description: t('careers.meta_desc'),
  });
  const [selected, setSelected] = useState<Position | null>(null);
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileErr, setFileErr] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  function openModal(pos: Position) {
    setSelected(pos);
    setEmail('');
    setFile(null);
    setFileErr('');
    setStatus('idle');
  }
  function closeModal() {
    setSelected(null);
  }

  // Esc to close + lock body scroll while the modal is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    if (!f) { setFile(null); setFileErr(''); return; }
    if (f.type !== 'application/pdf' || !/\.pdf$/i.test(f.name)) {
      setFile(null);
      setFileErr(t('careers.err_pdf'));
      return;
    }
    if (f.size > MAX_BYTES) {
      setFile(null);
      setFileErr(t('careers.err_size'));
      return;
    }
    setFileErr('');
    setFile(f);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) { setFileErr(t('careers.err_attach')); return; }
    if (!selected) return;
    setStatus('sending');
    try {
      const cvBase64 = await fileToBase64(file);
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          positionTitle: selected.apiTitle,
          email,
          cvBase64,
          cvFilename: file.name,
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="page-wrapper careers-page">
      {/* Hero */}
      <section className="hero-careers animate-fade-up">
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <p className="overline text-copper" style={{marginBottom: '1rem'}}>{t('careers.hero_overline')}</p>
          <h1 className="heading-display text-warm-white">
            {t('careers.hero_h1_a')}<br /><em className="text-copper">{t('careers.hero_h1_em')}</em>{t('careers.hero_h1_b')}
          </h1>
          <p className="body-large text-muted mt-4" style={{maxWidth: '600px'}}>
            {t('careers.hero_sub')}
          </p>
          <div className="chips-container mt-6">
            <span className="career-chip">&middot; {t('careers.chip1')}</span>
            <span className="career-chip">&middot; {t('careers.chip2')}</span>
            <span className="career-chip">&middot; {t('careers.chip3')}</span>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="section bg-surface">
        <div className="container culture-grid-cr animate-fade-up">
          <div className="culture-text-cr">
            <p className="overline text-copper" style={{marginBottom: '1rem'}}>{t('careers.culture_overline')}</p>
            <h2 className="heading-primary" style={{marginBottom: '1.5rem'}}>{t('careers.culture_title')}</h2>
            <p className="body-large text-muted">{t('careers.culture_p')}</p>
          </div>
          <div className="values-grid-cr">
            <div className="value-card-cr glass-panel" style={{borderTop: '3px solid var(--color-copper)'}}>
              <div className="icon-cr">
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 className="heading-secondary">{t('careers.val1_t')}</h4>
              <p className="text-muted text-sm mt-1">{t('careers.val1_d')}</p>
            </div>
            <div className="value-card-cr glass-panel" style={{borderTop: '3px solid var(--color-teal)'}}>
              <div className="icon-cr">
                <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h4 className="heading-secondary">{t('careers.val2_t')}</h4>
              <p className="text-muted text-sm mt-1">{t('careers.val2_d')}</p>
            </div>
            <div className="value-card-cr glass-panel" style={{borderTop: '3px solid var(--color-blue)'}}>
              <div className="icon-cr">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 className="heading-secondary">{t('careers.val3_t')}</h4>
              <p className="text-muted text-sm mt-1">{t('careers.val3_d')}</p>
            </div>
            <div className="value-card-cr glass-panel" style={{borderTop: '3px solid var(--color-purple)'}}>
              <div className="icon-cr">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4 className="heading-secondary">{t('careers.val4_t')}</h4>
              <p className="text-muted text-sm mt-1">{t('careers.val4_d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Brandvakt */}
      <section className="section bg-midnight">
        <div className="container animate-fade-up">
          <p className="overline text-teal">{t('careers.life_overline')}</p>
          <h2 className="heading-primary mt-2">{t('careers.life_title')}</h2>

          <div className="life-grid-cr mt-8">
            <div className="life-pillar glass-panel" style={{borderTop: '2px solid var(--color-teal)'}}>
              <div className="icon-cr mb-4 text-teal"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h4 className="heading-secondary mb-2">{t('careers.life1_t')}</h4>
              <p className="text-muted text-sm">{t('careers.life1_d')}</p>
            </div>
            <div className="life-pillar glass-panel" style={{borderTop: '2px solid var(--color-copper)'}}>
              <div className="icon-cr mb-4 text-teal"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
              <h4 className="heading-secondary mb-2">{t('careers.life2_t')}</h4>
              <p className="text-muted text-sm">{t('careers.life2_d')}</p>
            </div>
            <div className="life-pillar glass-panel" style={{borderTop: '2px solid var(--color-blue)'}}>
              <div className="icon-cr mb-4 text-teal"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
              <h4 className="heading-secondary mb-2">{t('careers.life3_t')}</h4>
              <p className="text-muted text-sm">{t('careers.life3_d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section bg-surface" style={{borderTop: '1px solid rgba(255,255,255,0.05)'}}>
         <div className="container animate-fade-up">
            <p className="overline text-teal">{t('careers.perks_overline')}</p>
            <h2 className="heading-primary mt-2">{t('careers.perks_title')}</h2>

            <div className="perks-grid-cr mt-8">
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                  <h4 className="heading-secondary mb-2">{t('careers.perk1_t')}</h4>
                  <p className="text-muted text-sm">{t('careers.perk1_d')}</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                  <h4 className="heading-secondary mb-2">{t('careers.perk2_t')}</h4>
                  <p className="text-muted text-sm">{t('careers.perk2_d')}</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
                  <h4 className="heading-secondary mb-2">{t('careers.perk3_t')}</h4>
                  <p className="text-muted text-sm">{t('careers.perk3_d')}</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                  <h4 className="heading-secondary mb-2">{t('careers.perk4_t')}</h4>
                  <p className="text-muted text-sm">{t('careers.perk4_d')}</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
                  <h4 className="heading-secondary mb-2">{t('careers.perk5_t')}</h4>
                  <p className="text-muted text-sm">{t('careers.perk5_d')}</p>
               </div>
               <div className="perk-card glass-panel">
                  <div className="perk-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                  <h4 className="heading-secondary mb-2">{t('careers.perk6_t')}</h4>
                  <p className="text-muted text-sm">{t('careers.perk6_d')}</p>
               </div>
            </div>
         </div>
      </section>

      {/* Positions */}
      <section className="section bg-midnight">
         <div className="container animate-fade-up">
            <p className="overline text-copper">{t('careers.pos_overline')}</p>
            <h2 className="heading-primary mt-2 mb-8">{t('careers.pos_title')}</h2>

            <div className="positions-list flex-col gap-4">
               {POSITIONS.map((pos) => (
                 <div key={pos.apiTitle} className="position-card glass-panel">
                    <div className="pos-info">
                       <div className="flex gap-2 mb-2">
                          <span className="pos-dept">{t(pos.deptKey)}</span>
                          <span className="pos-type">{t('careers.type_fulltime')}</span>
                       </div>
                       <h3 className="heading-secondary mb-1">{t(pos.titleKey)}</h3>
                       <p className="pos-loc text-xs text-muted mb-2">{t(pos.locKey)}</p>
                       <p className="text-sm text-muted mb-4 max-w-xl">{t(pos.descKey)}</p>
                       <ul className="pos-reqs text-xs text-muted">
                          {pos.reqKeys.map((r) => <li key={r}>{t(r)}</li>)}
                       </ul>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm pos-apply" onClick={() => openModal(pos)}>
                      {t('careers.apply_overline')} &rarr;
                    </button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* No Role */}
      <section className="section bg-surface text-center">
         <div className="container animate-fade-up">
            <p className="overline text-teal mb-2">{t('careers.norole_overline')}</p>
            <h2 className="heading-primary mb-4">{t('careers.norole_title')}</h2>
            <p className="body-large text-muted mx-auto mb-6" style={{maxWidth: '600px'}}>{t('careers.norole_sub')}</p>
            <button type="button" className="btn btn-primary" onClick={() => openModal(OPEN_APPLICATION)}>
              {t('careers.norole_btn')} &rarr;
            </button>
         </div>
      </section>

      {/* Application modal */}
      {selected && (
        <div
          className="apply-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${t('careers.apply_overline')}: ${t(selected.titleKey)}`}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="apply-modal glass-panel">
            <button type="button" className="apply-close" aria-label={t('careers.modal_close')} onClick={closeModal}>✕</button>

            {status === 'success' ? (
              <div className="apply-success">
                <h3 className="heading-secondary mb-2">{t('careers.apply_success_title')}</h3>
                <p className="text-muted">{t('careers.apply_success_a')} <strong>{t(selected.titleKey)}</strong> {t('careers.apply_success_b')}</p>
                <button type="button" className="btn btn-primary mt-4" onClick={closeModal}>{t('careers.apply_success_close')}</button>
              </div>
            ) : (
              <>
                <p className="overline text-teal mb-1">{t('careers.apply_overline')}</p>
                <h3 className="heading-secondary mb-2">{t(selected.titleKey)}</h3>
                <p className="text-sm text-muted mb-5 apply-desc">{t(selected.descKey)}</p>

                <form onSubmit={handleSubmit} className="apply-form">
                  <div className="apply-field">
                    <label htmlFor="apply-email">{t('careers.f_email')}</label>
                    <input
                      id="apply-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="apply-field">
                    <label htmlFor="apply-cv">{t('careers.f_cv')}</label>
                    <input
                      id="apply-cv"
                      type="file"
                      accept="application/pdf"
                      required
                      onChange={onFileChange}
                    />
                    {file && <p className="apply-filename">{file.name}</p>}
                    {fileErr && <p className="apply-error">{fileErr}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="apply-error">
                      {t('careers.err_submit')}{' '}
                      <a href="mailto:info@brandvakt.com">info@brandvakt.com</a>.
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary apply-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? t('careers.btn_sending') : t('careers.btn_submit')}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
