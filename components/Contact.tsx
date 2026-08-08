'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a form service (Formspree, Resend, etc.)
    setSubmitted(true);
  };

  const socials = [
    { icon: '📧', label: 'Email', value: 'tamilkumaranofficial07@gmail.com', href: 'mailto:tamilkumaranofficial07@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 9025990187', href: 'tel:+919025990187' },
  ];

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className={styles.subtitle}>
            Have a project in mind? I&apos;d love to hear about it. Fill out the form
            or reach out directly via any of the channels below.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left: Form */}
          <div className={styles.formCol}>
            <form 
              className={styles.form} 
              action="https://formsubmit.co/tamilkumaranofficial07@gmail.com" 
              method="POST"
            >
              {/* Optional Formsubmit settings */}
              <input type="hidden" name="_subject" value="New Project Inquiry!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>Your Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  </div>
                </div>

                <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-phone" className={styles.label}>Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className={styles.input}
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-project-type" className={styles.label}>Project Type</label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    className={styles.select}
                    value={form.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select project type</option>
                    <option value="commercial">Commercial / Brand Film</option>
                    <option value="shortfilm">Short Film</option>
                    <option value="wedding">Wedding Film</option>
                    <option value="reels">Social Media Reels</option>
                    <option value="documentary">Documentary</option>
                    <option value="musicvideo">Music Video</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-budget" className={styles.label}>Budget Range</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    className={styles.select}
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget</option>
                    <option value="5k-10k">₹5,000 – ₹10,000</option>
                    <option value="10k-30k">₹10,000 – ₹30,000</option>
                    <option value="30k-50k">₹30,000 – ₹50,000</option>
                    <option value="50k+">₹50,000+</option>
                  </select>
                </div>
                <div className={styles.field}></div>
              </div>

              <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>Tell Me About Your Project *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Describe your project, timeline, and any specific requirements..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Send Message →
                </button>
              </form>
          </div>

          {/* Right: Info */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Get in Touch Directly</h3>
              <div className={styles.socialList}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    id={`social-link-${s.label.toLowerCase()}`}
                    className={styles.socialItem}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.socialIcon}>{s.icon}</div>
                    <div className={styles.socialInfo}>
                      <div className={styles.socialLabel}>{s.label}</div>
                      <div className={styles.socialValue}>{s.value}</div>
                    </div>
                    <span className={styles.socialArrow}>→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.availCard}>
              <div className={styles.availDot} />
              <div>
                <div className={styles.availTitle}>Currently Available</div>
                <div className={styles.availSub}>for freelance projects starting August 2026</div>
              </div>
            </div>

            <div className={styles.turnaround}>
              <div className={styles.turnaroundItem}>
                <span className={styles.turnaroundIcon}>⚡</span>
                <div>
                  <div className={styles.turnaroundLabel}>Response Time</div>
                  <div className={styles.turnaroundValue}>Within 24 hours</div>
                </div>
              </div>
              <div className={styles.turnaroundItem}>
                <span className={styles.turnaroundIcon}>🌍</span>
                <div>
                  <div className={styles.turnaroundLabel}>Work Style</div>
                  <div className={styles.turnaroundValue}>100% Remote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
