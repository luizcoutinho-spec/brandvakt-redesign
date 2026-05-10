import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, Globe2, Radar, ShieldCheck } from 'lucide-react';
import './HeroSection.css';

const HERO_VIDEOS = [
  '/assets/hero-bg.mp4',
  '/assets/hero-sphere.mp4',
  '/assets/hero-abstractwaves.mp4',
  '/assets/hero-galaxystars.mp4',
  '/assets/hero-code.mp4',
];

const CYCLE_MS = 6000;

const HERO_SIGNALS = [
  { icon: ShieldCheck, label: 'Governance', value: 'ISO, NIST, DORA' },
  { icon: Radar, label: 'Operations', value: '24/7 SOC response' },
  { icon: Globe2, label: 'Regions', value: '4 continents' },
];

export const HeroSection = () => {
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
          Digital Trust &amp; AI Governance
        </span>

        <h1 className="heading-display hero-title">
          Brandvakt
        </h1>

        <p className="hero-tagline">
          Cyber resilience in the age of AI.
        </p>

        <p className="body-large hero-subtitle">
          We combine security operations, compliance engineering, and AI governance
          for organizations operating across complex digital frontiers.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="button-primary">
            Start a conversation
            <ArrowRight aria-hidden="true" />
          </a>
          <Link to="/services" className="button-secondary">
            <ShieldCheck aria-hidden="true" />
            Our services
          </Link>
        </div>

        <div className="hero-signals" aria-label="Brandvakt operating signals">
          {HERO_SIGNALS.map((signal) => {
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
