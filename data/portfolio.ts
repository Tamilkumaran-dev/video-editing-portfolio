export type VideoCategory = 'All' | 'Commercial' | 'Short Film' | 'Reels' | 'Wedding' | 'Documentary' | 'Music Video';

export interface VideoProject {
  id: string;
  title: string;
  category: Exclude<VideoCategory, 'All'>;
  description: string;
  thumbnail: string;
  driveLink: string;
  duration: string;
  year: number;
  client?: string;
}

export const categories: VideoCategory[] = [
  'All',
  'Commercial',
  'Short Film',
  'Reels',
  'Wedding',
  'Documentary',
  'Music Video',
];

export const portfolioProjects: VideoProject[] = [
  {
    id: 'prj-01',
    title: 'Yana Trips — Travel Edit',
    category: 'Reels',
    description:
      'A dynamic travel edit for Yana Trips featuring fast-paced cuts, vibrant color grading, and engaging transitions.',
    thumbnail: '/images/thumbnail_reels.png',
    driveLink: 'https://drive.google.com/file/d/1X5m-N7Sh1wBiWyzIsUrYVgGepd3h1zh1/view?usp=drive_link',
    duration: '0:30',
    year: 2024,
    client: '@yanatrips.in',
  },
  {
    id: 'prj-02',
    title: 'Yana Trips content reel',
    category: 'Reels',
    description:
      'An energetic adventure reel showcasing beautiful destinations with seamless transitions and beat-synced editing.',
    thumbnail: '/images/thumbnail_documentary.png',
    driveLink: 'https://drive.google.com/file/d/1Oo5hNjALVRDw4dxHNKzWIwKuwLwbyBRu/view?usp=sharing',
    duration: '0:45',
    year: 2024,
    client: '@travelpanlama',
  },
  {
    id: 'prj-03',
    title: 'Cinematic Visuals — Showcase',
    category: 'Commercial',
    description:
      'A cinematic showcase highlighting premium color grading, pacing, and visual storytelling for digital campaigns.',
    thumbnail: '/images/thumbnail_commercial.png',
    driveLink: 'https://drive.google.com/file/d/17U9MYfvGrQtfKs1Y5ziSQRWFq7eTXXbZ/view?usp=sharing',
    duration: '1:15',
    year: 2024,
    client: 'Creative Showcase',
  },
  {
    id: 'prj-04',
    title: 'YouTube Shorts — High Retention Edit',
    category: 'Reels',
    description:
      'A high-retention YouTube Short optimized for the algorithm with captions, sound effects, and fast pacing.',
    thumbnail: '/images/thumbnail_shortfilm.png',
    driveLink: 'https://www.youtube.com/shorts/pJbuLQQK-yA',
    duration: '0:60',
    year: 2024,
    client: 'YouTube Creator',
  },
];

export const testimonials = [
  {
    id: 'test-01',
    name: 'Yana Trips',
    role: 'Travel Agency',
    text: 'Tamilkumaran took our raw footage and turned it into engaging, high-energy reels that our audience loved. The turnaround time and quality were exceptional!',
    rating: 5,
    avatar: 'YT',
  },
  {
    id: 'test-02',
    name: 'Travel Panlama',
    role: 'Travel Creator',
    text: 'Working with Tamilkumaran has elevated our social media presence. The beat-synced edits and clean transitions really make our content stand out.',
    rating: 5,
    avatar: 'TP',
  },
];

export const services = [
  {
    id: 'svc-01',
    icon: '🎬',
    title: 'Video Editing',
    description: 'Precision editing that tells your story with rhythm, pacing, and emotional impact. From raw footage to polished final cut.',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
  },
  {
    id: 'svc-02',
    icon: '🎨',
    title: 'Color Grading',
    description: 'Cinematic color science that sets the mood and elevates the visual quality of your production to broadcast standard.',
    tools: ['DaVinci Resolve', 'Lumetri'],
  },
  {
    id: 'svc-03',
    icon: '✨',
    title: 'Motion Graphics',
    description: 'Animated titles, lower thirds, transitions, and visual effects that add a premium, professional layer to your videos.',
    tools: ['After Effects', 'Motion'],
  },
  {
    id: 'svc-04',
    icon: '🎵',
    title: 'Sound Design',
    description: 'Audio mixing, music selection, SFX layering, and dialogue cleanup that makes your video sound as good as it looks.',
    tools: ['Audition', 'Logic Pro'],
  },
  {
    id: 'svc-05',
    icon: '📱',
    title: 'Social Media Reels',
    description: 'Fast, engaging short-form content optimized for Instagram, TikTok, and YouTube Shorts with trending formats.',
    tools: ['Premiere Pro', 'CapCut'],
  },
  {
    id: 'svc-06',
    icon: '🏆',
    title: 'Brand Commercials',
    description: 'Full production editing for brand films and commercials — from 15-second ads to 3-minute brand stories.',
    tools: ['Premiere Pro', 'After Effects'],
  },
];
