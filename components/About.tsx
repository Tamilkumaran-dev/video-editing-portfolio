'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './About.module.css';

const tools = [
  { name: 'CapCut', icon: '✂️', level: 90 },
  { name: 'Premiere Pro', icon: '🎬', level: 10 },
  { name: 'After Effects', icon: '✨', level: 10 },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = sectionRef.current?.querySelectorAll('[data-level]');
            bars?.forEach((bar) => {
              const level = bar.getAttribute('data-level');
              (bar as HTMLElement).style.width = `${level}%`;
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`section ${styles.about}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* Image column */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/editor_profile.png"
                alt="Tamilkumaran — Freelance Video Editor"
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className={styles.imageGlow} aria-hidden="true" />
              {/* Floating badge */}
              <div className={styles.floatingBadge}>
                <span className={styles.floatingBadgeIcon}>🎬</span>
                <div>
                  <div className={styles.floatingBadgeTitle}>90+ Projects</div>
                  <div className={styles.floatingBadgeSub}>Successfully Delivered</div>
                </div>
              </div>
              {/* Experience badge */}
              <div className={styles.expBadge}>
                <span className={styles.expNumber}>2</span>
                <span className={styles.expLabel}>Clients</span>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className={styles.contentCol}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Turning Vision Into{' '}
              <span className="gradient-text">Visual Stories</span>
            </h2>
            <p className={styles.bio}>
              I&apos;m Tamilkumaran, a freelance video editor specializing in dynamic, high-quality edits for social media, creators, and brands.
              I have delivered over 90 successful projects.
            </p>
            <p className={styles.bio}>
              My primary tool is CapCut, allowing me to craft fast-paced, engaging content efficiently. I also utilize Premiere Pro and After Effects for advanced cuts, effects, and color grading to ensure every frame counts.
            </p>

            {/* Skills */}
            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Tools & Expertise</h3>
              <div className={styles.skillsList}>
                {tools.map((tool) => (
                  <div key={tool.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillIcon}>{tool.icon}</span>
                      <span className={styles.skillName}>{tool.name}</span>
                      <span className={styles.skillPercent}>{tool.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        data-level={tool.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              id="about-cta-btn"
              className="btn-primary"
              style={{ display: 'inline-flex', marginTop: '8px' }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
