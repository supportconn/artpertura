
export interface AutoFlowItem {
  id: string;
  title: string;
  persona: string;
  platforms: string[];
  type: string;
  inspiration: string;
  quantity: number;
  frequency: string;
  isActive: boolean;
}

export interface FactoryCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface InspireItem {
  id: string;
  category: string;
  title: string;
  author: string;
  imageUrl: string;
  views: number;
  likes: number;
  content?: string;
  date?: string;
  handle?: string;
}

export type ViewType = 'dashboard' | 'pipeline-detail' | 'all-agents';
