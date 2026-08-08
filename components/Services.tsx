'use client';

import styles from './Services.module.css';
import { services } from '@/data/portfolio';

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">
            Services & <span className="gradient-text">Specializations</span>
          </h2>
          <p className={styles.subtitle}>
            From raw footage to cinematic final cut — I handle every stage of post-production
            with precision and creative vision.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={styles.card}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
                <div className={styles.iconGlow} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.tools}>
                {service.tools.map((tool) => (
                  <span key={tool} className={styles.toolBadge}>{tool}</span>
                ))}
              </div>
              <div className={styles.cardHoverLine} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className={styles.process}>
          <h3 className={styles.processTitle}>My Process</h3>
          <div className={styles.steps}>
            {[
              { num: '01', label: 'Brief', desc: 'Understand your vision, goals, and timeline' },
              { num: '02', label: 'Edit', desc: 'Craft the story with precision and creativity' },
              { num: '03', label: 'Review', desc: 'Revisions until you love every frame' },
              { num: '04', label: 'Deliver', desc: 'Final export in any format you need' },
            ].map((step, i) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                {i < 3 && <div className={styles.stepLine} aria-hidden="true" />}
                <div className={styles.stepLabel}>{step.label}</div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
