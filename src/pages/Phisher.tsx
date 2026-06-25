import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Phisher.css';
import { useMeta } from '../lib/useMeta';

const STATS = [
  { value: '1,000+', labelKey: 'phisher.stat_templates' },
  { value: '95%',    labelKey: 'phisher.stat_detection' },
  { value: '6+',     labelKey: 'phisher.stat_languages' },
  { value: '< 24h',  labelKey: 'phisher.stat_deploy' },
];

const FEATURES = [
  { icon: '📧', titleKey: 'phisher.feat_campaigns_title', descKey: 'phisher.feat_campaigns_desc' },
  { icon: '🎯', titleKey: 'phisher.feat_targeting_title', descKey: 'phisher.feat_targeting_desc' },
  { icon: '📊', titleKey: 'phisher.feat_dashboard_title', descKey: 'phisher.feat_dashboard_desc' },
  { icon: '🔄', titleKey: 'phisher.feat_triggers_title',  descKey: 'phisher.feat_triggers_desc' },
  { icon: '🛡', titleKey: 'phisher.feat_score_title',     descKey: 'phisher.feat_score_desc' },
];

const STEPS = [
  { titleKey: 'phisher.step_configure_title', descKey: 'phisher.step_configure_desc' },
  { titleKey: 'phisher.step_launch_title',    descKey: 'phisher.step_launch_desc' },
  { titleKey: 'phisher.step_analyze_title',   descKey: 'phisher.step_analyze_desc' },
  { titleKey: 'phisher.step_remediate_title', descKey: 'phisher.step_remediate_desc' },
];

const Phisher = () => {
  const { t } = useTranslation(['products', 'common']);
  useMeta({
    title: 'PhishER',
    description: t('phisher.meta_desc'),
  });

  return (
    <div className="page-wrapper product-page phisher-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">{t('shared.our_products')} · PhishER</span>
          <h1 className="heading-display">
            <span className="product-icon" aria-hidden="true">🎣</span> PhishER
          </h1>
          <p className="body-large header-subtitle">
            {t('phisher.subtitle')}
          </p>
          <p className="body-large product-lede">
            {t('phisher.lede')}
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
        <h2 className="heading-secondary product-section-title">{t('phisher.caps_title')}</h2>
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
        <h2 className="heading-secondary product-section-title">{t('phisher.steps_title')}</h2>
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
          <h2 className="heading-display mb-4">{t('phisher.cta_l1')}<br />{t('phisher.cta_l2')}</h2>
          <p className="body-large text-muted mb-8 max-w-2xl mx-auto">
            {t('phisher.cta_sub')}
          </p>
          <Link to="/contact" className="button-primary">{t('common:nav.demo')}</Link>
        </div>
      </section>
    </div>
  );
};

export default Phisher;
