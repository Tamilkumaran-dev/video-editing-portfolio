'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';
import { testimonials } from '@/data/portfolio';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className={styles.layout}>
          {/* Main testimonial */}
          <div className={styles.mainCard}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <p className={styles.quote}>{t.text}</p>
            <div className={styles.stars}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.avatar}</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorRole}>{t.role}</div>
              </div>
            </div>
          </div>

          {/* Selector list */}
          <div className={styles.list}>
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                id={`testimonial-btn-${item.id}`}
                className={`${styles.listItem} ${i === active ? styles.listItemActive : ''}`}
                onClick={() => setActive(i)}
              >
                <div className={styles.listAvatar}>{item.avatar}</div>
                <div className={styles.listInfo}>
                  <div className={styles.listName}>{item.name}</div>
                  <div className={styles.listRole}>{item.role}</div>
                </div>
                <div className={styles.listArrow}>→</div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.statsRow}>
          {[
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'On-Time Delivery', value: '98%' },
            { label: 'Repeat Clients', value: '70%' },
            { label: 'Projects Delivered', value: '120+' },
          ].map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
