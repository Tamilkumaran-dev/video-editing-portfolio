'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Cursor glow */}
      <div ref={cursorRef} className={styles.cursorGlow} aria-hidden="true" />

      {/* BG image */}
      <div className={styles.bgImage} aria-hidden="true" />

      {/* Gradient overlays */}
      <div className={styles.overlay1} aria-hidden="true" />
      <div className={styles.overlay2} aria-hidden="true" />

      {/* Floating film strip accents */}
      <div className={styles.filmStrip1} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.filmFrame} />
        ))}
      </div>
      <div className={styles.filmStrip2} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.filmFrame} />
        ))}
      </div>

      {/* Floating orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for new projects
        </div>

        <h1 className={styles.headline}>
          <span className={styles.lineSmall}>Crafting Stories</span>
          <span className={styles.lineLarge}>
            Frame by <span className="gradient-text">Frame</span>
          </span>
        </h1>

        <p className={styles.subheadline}>
          Freelance Video Editor turning raw footage into
          engaging content — specializing in short-form content, reels, and cinematic edits.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>90+</span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Major Clients</span>
          </div>
        </div>

        <div className={styles.ctaGroup}>
          <button
            id="hero-view-work-btn"
            className="btn-primary"
            onClick={scrollToPortfolio}
          >
            <span>▶</span> View My Work
          </button>
          <button
            id="hero-hire-btn"
            className="btn-secondary"
            onClick={scrollToContact}
          >
            Let&apos;s Collaborate
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to explore</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
