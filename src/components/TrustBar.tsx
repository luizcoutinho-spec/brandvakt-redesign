import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const FRAMEWORKS = [
  'ISO 27001',
  'NIST CSF',
  'CIS Controls',
  'SWIFT',
  'PCI DSS',
  'LGPD',
  'DORA',
];

export const TrustBar = () => {
  const { t } = useTranslation('home');
  return (
  <div className="trust-bar">
    <div className="container trust-bar-inner">
      <span className="trust-bar-label">{t('trustbar.label')}</span>
      <div className="trust-bar-divider" />
      <div className="trust-bar-logos">
        {FRAMEWORKS.map((name) => (
          <span key={name} className="trust-bar-chip">{name}</span>
        ))}
      </div>
    </div>
  </div>
  );
};
