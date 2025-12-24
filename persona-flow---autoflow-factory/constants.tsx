
import { FactoryCard, AutoFlowItem, InspireItem } from './types';

export const COLORS = {
  primary: '#fcd34d',
  primaryDark: '#fbbf24',
  sidebarBg: '#ffffff',
  mainBg: '#f8fafc',
};

export const MOCK_FACTORY_CARDS: FactoryCard[] = [
  {
    id: 'brand',
    title: 'Brand Promotion',
    description: 'Build unique brand resonance and reach potential customers precisely.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400',
    tag: 'Marketing'
  },
  {
    id: 'industry',
    title: 'Industry Insights',
    description: 'In-depth analysis of industry trends showing professional insight.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    tag: 'Knowledge'
  },
  {
    id: 'feelings',
    title: 'Daily Reflection',
    description: 'Record life moments and establish emotional connections.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400',
    tag: 'Lifestyle'
  },
  {
    id: 'pro',
    title: 'Expert Analysis',
    description: 'Core technical and data analysis for complex propositions.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=400',
    tag: 'Expert'
  }
];

export const MOCK_INSPIRES: InspireItem[] = [
  {
    id: 'i1',
    category: 'Beauty',
    title: 'Winter Skincare Routine',
    author: 'Elena Rose',
    handle: '@elenacosmetics',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400',
    views: 3853,
    likes: 65,
    content: "Who's moving in with me? FINAL DAY of 12 Days of ColourPop! Find the code for 50% OFF...",
    date: '2025-12-16'
  },
  {
    id: 'i2',
    category: 'Tech',
    title: 'The Future of Hardware',
    author: 'Andy Chen',
    handle: '@andy_tech',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400',
    views: 3700,
    likes: 53,
    content: "Exploring the thermal dynamics of the next-gen SOC architecture. Efficiency meets power.",
    date: '2025-12-15'
  },
  {
    id: 'i3',
    category: 'Design',
    title: 'Modernist Interior Architecture',
    author: 'Ludwig Studio',
    handle: '@ludwig_design',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400',
    views: 1189,
    likes: 79,
    content: "A look into minimalist spatial design for 2025. Less is truly more when every line counts.",
    date: '2025-12-14'
  },
  {
    id: 'i4',
    category: 'Fashion',
    title: 'Avant-garde Holiday Looks',
    author: 'Hume Collective',
    handle: '@hume_fashion',
    imageUrl: 'https://images.unsplash.com/photo-1539109132314-34a773ad0214?auto=format&fit=crop&q=80&w=400',
    views: 299,
    likes: 4,
    content: "Redefining the festive aesthetic with structural silhouettes and bold colors.",
    date: '2025-12-14'
  }
];

export const MOCK_FLOWS: AutoFlowItem[] = [
  {
    id: '1',
    title: 'Reddit Community Bot',
    persona: 'Lin',
    platforms: ['reddit'],
    type: 'post',
    inspiration: 'Community',
    quantity: 0,
    frequency: '1 / Day',
    isActive: false
  },
  {
    id: '2',
    title: 'Twitter Engagement Bot',
    persona: 'Lin',
    platforms: ['twitter'],
    type: 'post',
    inspiration: 'Community',
    quantity: 0,
    frequency: '1 / Day',
    isActive: false
  },
  {
    id: '3',
    title: 'Daily Fortune Hunter',
    persona: 'Twi',
    platforms: ['facebook'],
    type: 'post',
    inspiration: 'Credit Card',
    quantity: 0,
    frequency: '1 / Day',
    isActive: false
  }
];
