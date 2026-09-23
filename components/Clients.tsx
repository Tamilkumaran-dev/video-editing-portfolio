'use client';

import { instagramClients } from '@/data/portfolio';
import styles from './Clients.module.css';

export default function Clients() {
  const handleClientClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="clients" className={`section ${styles.clientsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Clients</span>
          <h2 className="section-title">
            People I <span className="gradient-text">Work With</span>
          </h2>
          <p className={styles.subtitle}>
            A selection of creators and brands I have collaborated with. Click to view their profiles on Instagram.
          </p>
        </div>

        <div className={styles.grid}>
          {instagramClients.map((client, index) => (
            <div
              key={client.id}
              className={styles.card}
              onClick={() => handleClientClick(client.link)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.content}>
                <div className={styles.avatarPlaceholder}>
                  {client.name.substring(0, 2).toUpperCase()}
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{client.name}</h3>
                  <div className={styles.username}>@{client.username}</div>
                  <p className={styles.category}>{client.category}</p>
                </div>
              </div>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Followers</span>
                  <span className={styles.statValue}>{client.followers}</span>
                </div>
                <div className={styles.iconArrow}>↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
