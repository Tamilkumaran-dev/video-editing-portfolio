import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tamilkumaran — Freelance Video Editor',
  description:
    'Freelance video editor specializing in social media reels, commercials, and short films. Delivering high-quality edits for brands and creators.',
  keywords: [
    'freelance video editor',
    'video editing',
    'capcut editor',
    'premiere pro',
    'social media reels',
  ],
  openGraph: {
    title: 'Tamilkumaran — Freelance Video Editor',
    description: 'Cinematic storytelling through precision editing.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
