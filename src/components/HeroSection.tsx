import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Activity, ArrowRight, Globe2, Radar, ShieldCheck } from 'lucide-react';
import { asset } from '../lib/asset';
import { isLang } from '../i18n';
import './HeroSection.css';

const HERO_VIDEOS = [
  'assets/hero-bg.mp4',
  'assets/hero-sphere.mp4',
  'assets/hero-abstractwaves.mp4',
  'assets/hero-galaxystars.mp4',
  'assets/hero-code.mp4',
].map(asset);

const CYCLE_MS = 6000;

export const HeroSection = () => {
  const { t, i18n } = useTranslation('home');
  const lang = isLang(i18n.language) ? i18n.language : 'en';
  const signals = [
    { icon: ShieldCheck, label: t('hero.sig_gov'), value: t('hero.sig_gov_v') },
    { icon: Radar,       label: t('hero.sig_ops'), value: t('hero.sig_ops_v') },
    { icon: Globe2,      label: t('hero.sig_reg'), value: t('hero.sig_reg_v') },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  // Track which videos have ever been active - they stay mounted so the
  // crossfade works. New ones mount lazily so we don't download all five on load.
  const [mountedIndexes, setMountedIndexes] = useState<Set<number>>(() => new Set([0, 1 % HERO_VIDEOS.length]));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % HERO_VIDEOS.length;
        const upcoming = (next + 1) % HERO_VIDEOS.length;
        setMountedIndexes((m) => {
          if (m.has(next) && m.has(upcoming)) return m;
          const copy = new Set(m);
          copy.add(next);
          copy.add(upcoming);
          return copy;
        });
        return next;
      });
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        {HERO_VIDEOS.map((src, idx) => (
          mountedIndexes.has(idx) ? (
            <video
              key={src}
              className={`hero-video${idx === activeIndex ? ' active' : ''}`}
              autoPlay
              loop
              muted
              playsInline
              preload={idx === activeIndex ? 'auto' : 'metadata'}
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : null
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <span className="hero-badge">
          <Activity aria-hidden="true" />
          {t('hero.badge')}
        </span>

        <h1 className="heading-display hero-title">
          Brandvakt
        </h1>

        <p className="hero-tagline">
          {t('hero.tagline')}
        </p>

        <p className="body-large hero-subtitle">
          {t('hero.subtitle')}
        </p>

        <div className="hero-actions">
          <a href="#contact" className="button-primary">
            {t('hero.cta1')}
            <ArrowRight aria-hidden="true" />
          </a>
          <Link to={`/${lang}/services`} className="button-secondary">
            <ShieldCheck aria-hidden="true" />
            {t('hero.cta2')}
          </Link>
        </div>

        <div className="hero-signals" aria-label="Brandvakt operating signals">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div className="hero-signal" key={signal.label}>
                <Icon aria-hidden="true" />
                <span className="hero-signal-label">{signal.label}</span>
                <strong>{signal.value}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
