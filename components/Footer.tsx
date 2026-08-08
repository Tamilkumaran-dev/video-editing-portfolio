'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>▶</span>
            <span className={styles.logoText}>
              Tamil<span style={{ background: 'linear-gradient(135deg,#f5a623,#ffc95c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>kumaran</span>
            </span>
          </div>
          <p className={styles.tagline}>
            Crafting engaging stories — one frame at a time.
          </p>
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {links.map((link) => (
            <button
              key={link.href}
              className={styles.navLink}
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Social */}
        <div className={styles.socials}>
          {[
            { label: 'Instagram', href: 'https://instagram.com', char: '📸' },
            { label: 'YouTube', href: 'https://youtube.com', char: '▶' },
            { label: 'LinkedIn', href: 'https://linkedin.com', char: 'in' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              id={`footer-social-${s.label.toLowerCase()}`}
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {s.char}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copyright}>
            © {year} Tamilkumaran. All rights reserved. Built with{' '}
            <span style={{ color: '#f5a623' }}>♥</span> and Next.js
          </p>
          <p className={styles.madeWith}>
            Freelance Video Editor · Available Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
