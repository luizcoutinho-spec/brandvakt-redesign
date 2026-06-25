import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Conscientizacao.css';
import { useMeta } from '../lib/useMeta';

const STATS = [
  { value: '6+',    labelKey: 'awareness.stat_languages' },
  { value: '200+',  labelKey: 'awareness.stat_library' },
  { value: '99.9%', labelKey: 'awareness.stat_uptime' },
  { value: '50+',   labelKey: 'awareness.stat_countries' },
];

const FEATURES = [
  { icon: '🌍', titleKey: 'awareness.feat_interactive_title', descKey: 'awareness.feat_interactive_desc' },
  { icon: '📋', titleKey: 'awareness.feat_assignment_title',  descKey: 'awareness.feat_assignment_desc' },
  { icon: '🏆', titleKey: 'awareness.feat_cert_title',        descKey: 'awareness.feat_cert_desc' },
  { icon: '🤖', titleKey: 'awareness.feat_ai_title',          descKey: 'awareness.feat_ai_desc' },
  { icon: '📈', titleKey: 'awareness.feat_analytics_title',   descKey: 'awareness.feat_analytics_desc' },
  { icon: '🔗', titleKey: 'awareness.feat_sso_title',         descKey: 'awareness.feat_sso_desc' },
];

const STEPS = [
  { titleKey: 'awareness.step_import_title',   descKey: 'awareness.step_import_desc' },
  { titleKey: 'awareness.step_assign_title',   descKey: 'awareness.step_assign_desc' },
  { titleKey: 'awareness.step_complete_title', descKey: 'awareness.step_complete_desc' },
  { titleKey: 'awareness.step_measure_title',  descKey: 'awareness.step_measure_desc' },
];

const Conscientizacao = () => {
  const { t } = useTranslation(['products', 'common']);
  useMeta({
    title: 'Security Awareness',
    description: t('awareness.meta_desc'),
  });

  return (
    <div className="page-wrapper product-page awareness-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">{t('shared.our_products')} · Security Awareness</span>
          <h1 className="heading-display">
            <span className="product-icon" aria-hidden="true">🌐</span> Security Awareness
          </h1>
          <p className="body-large header-subtitle">
            {t('awareness.subtitle')}
          </p>
          <p className="body-large product-lede">
            {t('awareness.lede')}
          </p>
          <Link to="/contact" className="button-primary">{t('common:nav.demo')}</Link>
        </div>
      </header>

      <section className="section container">
        <div className="product-stats">
          {STATS.map((s) => (
            <div key={s.labelKey} className="product-stat">
              <div className="product-stat-value">{s.value}</div>
              <div className="product-stat-label">{t(s.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <span className="overline text-teal">{t('shared.capabilities')}</span>
        <h2 className="heading-secondary product-section-title">{t('awareness.caps_title')}</h2>
        <div className="product-features">
          {FEATURES.map((f) => (
            <div key={f.titleKey} className="service-card-premium glass-panel product-feature">
              <span className="product-feature-icon" aria-hidden="true">{f.icon}</span>
              <h3 className="heading-secondary product-feature-title">{t(f.titleKey)}</h3>
              <p className="body-large product-feature-desc">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <span className="overline">{t('shared.how_it_works')}</span>
        <h2 className="heading-secondary product-section-title">{t('awareness.steps_title')}</h2>
        <div className="product-steps">
          {STEPS.map((s, i) => (
            <div key={s.titleKey} className="product-step">
              <span className="product-step-number text-teal">{String(i + 1).padStart(2, '0')}</span>
              <strong className="product-step-title">{t(s.titleKey)}</strong>
              <p className="product-step-desc">{t(s.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section product-cta">
        <div className="container animate-fade-up">
          <p className="overline" style={{ color: 'var(--color-copper)', marginBottom: '1rem' }}>{t('shared.get_started')}</p>
          <h2 className="heading-display mb-4">{t('awareness.cta_l1')}<br />{t('awareness.cta_l2')}</h2>
          <p className="body-large text-muted mb-8 max-w-2xl mx-auto">
            {t('awareness.cta_sub')}
          </p>
          <Link to="/contact" className="button-primary">{t('common:nav.demo')}</Link>
        </div>
      </section>
    </div>
  );
};

export default Conscientizacao;
