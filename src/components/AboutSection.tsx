import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutSection.css';

interface StatDef {
  numericValue: number;
  suffix: string;
  labelKey: string;
}

const STATS: StatDef[] = [
  { numericValue: 6,  suffix: '',  labelKey: 'about.stat_offices' },
  { numericValue: 24, suffix: '/7', labelKey: 'about.stat_soc' },
  { numericValue: 9,  suffix: '',  labelKey: 'about.stat_services' },
  { numericValue: 12, suffix: '+', labelKey: 'about.stat_verticals' },
];

const DURATION_MS = 1200;
const EASING = (t: number) => 1 - Math.pow(1 - t, 3); // ease-out cubic

function useCountUp(target: number, active: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const tick = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      setCount(Math.round(EASING(progress) * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target]);

  return count;
}

interface StatCellProps {
  numericValue: number;
  suffix: string;
  label: string;
  index: number;
  active: boolean;
}

const StatCell = ({ numericValue, suffix, label, index, active }: StatCellProps) => {
  const count = useCountUp(numericValue, active);

  return (
    <div
      className={`stat-item${active ? ' stat-visible' : ''}`}
      style={{ '--stat-index': index } as React.CSSProperties}
    >
      <div className="stat-bar-number">
        <span className="stat-count">{count}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-bar-label">{label}</div>
    </div>
  );
};

export const AboutSection = () => {
  const { t } = useTranslation('home');
  const statsBarRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = statsBarRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Part A: What is Brandvakt */}
      <section className="section about-intro-section">
        <div className="about-intro-container container">
          <span className="overline">{t('about.overline')}</span>
          <h2 className="heading-primary about-intro-heading">
            {t('about.heading_l1')}<br />{t('about.heading_l2')}
          </h2>

          <blockquote className="about-blockquote">
            {t('about.quote')}
          </blockquote>

          <ul className="about-bullets">
            <li>
              <span className="about-bullet-accent">✦</span>
              {t('about.bullet_focus')}
            </li>
            <li>
              <span className="about-bullet-accent">✦</span>
              {t('cta.value_regions')}
            </li>
            <li>
              <span className="about-bullet-accent">✦</span>
              {t('about.bullet_infra')}
            </li>
          </ul>
        </div>
      </section>

      {/* Part B: Stats bar */}
      <div className="stats-bar" ref={statsBarRef}>
        <div className="stats-bar-inner">
          {STATS.map((stat, i) => (
            <StatCell
              key={stat.labelKey}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              label={t(stat.labelKey)}
              index={i}
              active={statsActive}
            />
          ))}
        </div>
      </div>
    </>
  );
};
