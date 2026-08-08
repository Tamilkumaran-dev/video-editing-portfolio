'use client';

import { useState } from 'react';
import VideoCard from './VideoCard';
import styles from './Portfolio.module.css';
import { portfolioProjects, categories, VideoCategory } from '@/data/portfolio';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('All');

  const filtered =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className={`section ${styles.portfolio}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Selected <span className="gradient-text">Works</span>
            </h2>
            <p className={styles.subtitle}>
              A curated collection of my best work across genres and formats.
              Click any project to watch it on Google Drive.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters} role="tablist" aria-label="Portfolio filter">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? portfolioProjects.length
                : portfolioProjects.filter((p) => p.category === cat).length;
            if (count === 0 && cat !== 'All') return null;
            return (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <VideoCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className={styles.bottomCta}>
          <p className={styles.ctaText}>
            Have a project in mind?
          </p>
          <a
            href="#contact"
            id="portfolio-contact-btn"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
