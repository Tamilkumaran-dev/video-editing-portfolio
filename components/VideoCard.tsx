'use client';

import Image from 'next/image';
import styles from './VideoCard.module.css';
import { VideoProject } from '@/data/portfolio';

interface VideoCardProps {
  project: VideoProject;
  index: number;
}

export default function VideoCard({ project, index }: VideoCardProps) {
  const handleClick = () => {
    window.open(project.driveLink, '_blank', 'noopener,noreferrer');
  };

  const categoryColors: Record<string, string> = {
    Commercial: '#f5a623',
    'Short Film': '#a78bfa',
    Reels: '#34d399',
    Wedding: '#f472b6',
    Documentary: '#60a5fa',
    'Music Video': '#fb7185',
  };

  const categoryColor = categoryColors[project.category] || '#f5a623';

  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail */}
      <div className={styles.thumbnail} onClick={handleClick}>
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className={styles.thumbnailImg}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className={styles.overlay}>
          <div className={styles.playBtn}>
            <span className={styles.playIcon}>▶</span>
          </div>
          <div className={styles.overlayText}>Watch on Drive</div>
        </div>

        {/* Duration badge */}
        <div className={styles.duration}>{project.duration}</div>

        {/* Category badge */}
        <div
          className={styles.category}
          style={{ color: categoryColor, borderColor: categoryColor, backgroundColor: `${categoryColor}18` }}
        >
          {project.category}
        </div>
      </div>

      {/* Card body */}
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          {project.client && (
            <>
              <span className={styles.metaDot}>·</span>
              <span className={styles.client}>{project.client}</span>
            </>
          )}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <button
          id={`watch-btn-${project.id}`}
          className={styles.watchBtn}
          onClick={handleClick}
          aria-label={`Watch ${project.title} on Google Drive`}
        >
          <span className={styles.watchIcon}>▶</span>
          Watch Project
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
}
