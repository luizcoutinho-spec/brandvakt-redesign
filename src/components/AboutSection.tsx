import { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

interface StatItem {
  numericValue: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { numericValue: 6,  suffix: '',  label: 'Global offices across 4 continents' },
  { numericValue: 24, suffix: '/7', label: 'SOC operations & threat monitoring' },
  { numericValue: 9,  suffix: '',  label: 'Core cybersecurity service offerings' },
  { numericValue: 12, suffix: '+', label: 'Industry verticals served globally' },
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

interface StatCellProps extends StatItem {
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
          <span className="overline">What is Brandvakt</span>
          <h2 className="heading-primary about-intro-heading">
            The ancient art of the Firewatch,<br />applied to the digital age
          </h2>

          <blockquote className="about-blockquote">
            "The word Brandvakt means 'Firewatch'. We ensure the fire burns smoothly,
            doesn't spread, contain it if something goes wrong, and ensure the safety of everyone."
          </blockquote>

          <ul className="about-bullets">
            <li>
              <span className="about-bullet-accent">✦</span>
              Assessment · Monitoring · Identity · AI governance
            </li>
            <li>
              <span className="about-bullet-accent">✦</span>
              Africa · LATAM · Europe · Middle East
            </li>
            <li>
              <span className="about-bullet-accent">✦</span>
              Security as critical infrastructure
            </li>
          </ul>
        </div>
      </section>

      {/* Part B: Stats bar */}
      <div className="stats-bar" ref={statsBarRef}>
        <div className="stats-bar-inner">
          {STATS.map((stat, i) => (
            <StatCell
              key={stat.label}
              {...stat}
              index={i}
              active={statsActive}
            />
          ))}
        </div>
      </div>
    </>
  );
};
