import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Compliance.css';
import { useMeta } from '../lib/useMeta';

const STATS = [
  { value: '30+',  labelKey: 'compliance.stat_frameworks' },
  { value: '100%', labelKey: 'compliance.stat_audit' },
  { value: '15+',  labelKey: 'compliance.stat_sectors' },
  { valueKey: 'compliance.stat_realtime_value', labelKey: 'compliance.stat_scoring' },
];

const FEATURES = [
  { icon: '📜', titleKey: 'compliance.feat_multi_title',    descKey: 'compliance.feat_multi_desc' },
  { icon: '🛤', titleKey: 'compliance.feat_paths_title',    descKey: 'compliance.feat_paths_desc' },
  { icon: '📋', titleKey: 'compliance.feat_reports_title',  descKey: 'compliance.feat_reports_desc' },
  { icon: '🎯', titleKey: 'compliance.feat_score_title',    descKey: 'compliance.feat_score_desc' },
  { icon: '📝', titleKey: 'compliance.feat_policy_title',   descKey: 'compliance.feat_policy_desc' },
  { icon: '🗺', titleKey: 'compliance.feat_map_title',      descKey: 'compliance.feat_map_desc' },
];

const STEPS = [
  { titleKey: 'compliance.step_select_title', descKey: 'compliance.step_select_desc' },
  { titleKey: 'compliance.step_map_title',    descKey: 'compliance.step_map_desc' },
  { titleKey: 'compliance.step_assign_title', descKey: 'compliance.step_assign_desc' },
  { titleKey: 'compliance.step_report_title', descKey: 'compliance.step_report_desc' },
];

const Compliance = () => {
  const { t } = useTranslation(['products', 'common']);
  useMeta({
    title: 'Compliance Suite',
    description: t('compliance.meta_desc'),
  });

  return (
    <div className="page-wrapper product-page compliance-page">
      <header className="page-header animate-fade-up">
        <div className="container">
          <span className="overline text-teal">{t('shared.our_products')} · Compliance Suite</span>
          <h1 className="heading-display">
            <span className="product-icon" aria-hidden="true">⚖️</span> Compliance Suite
          </h1>
          <p className="body-large header-subtitle">
            {t('compliance.subtitle')}
          </p>
          <p className="body-large product-lede">
            {t('compliance.lede')}
          </p>
          <Link to="/contact" className="button-primary">{t('common:nav.demo')}</Link>
        </div>
      </header>

      <section className="section container">
        <div className="product-stats">
          {STATS.map((s) => (
            <div key={s.labelKey} className="product-stat">
              <div className="product-stat-value">{s.valueKey ? t(s.valueKey) : s.value}</div>
              <div className="product-stat-label">{t(s.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <span className="overline text-teal">{t('shared.capabilities')}</span>
        <h2 className="heading-secondary product-section-title">{t('compliance.caps_title')}</h2>
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
        <h2 className="heading-secondary product-section-title">{t('compliance.steps_title')}</h2>
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
          <h2 className="heading-display mb-4">{t('compliance.cta_l1')}<br />{t('compliance.cta_l2')}</h2>
          <p className="body-large text-muted mb-8 max-w-2xl mx-auto">
            {t('compliance.cta_sub')}
          </p>
          <Link to="/contact" className="button-primary">{t('common:nav.demo')}</Link>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
