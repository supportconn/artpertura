
export interface AnalysisCategory {
  category: string;
  percentage: number;
  analysis: string;
  symbolism: string;
}

export interface FullAnalysis {
  textureAndStyle: AnalysisCategory;
  lightAndShadow: AnalysisCategory;
  lines: AnalysisCategory;
  poseAndExpression: AnalysisCategory;
  overallAtmosphere: AnalysisCategory;
  colorIntensity: AnalysisCategory;
}

export type AppState = 'landing' | 'simulating' | 'scanning' | 'result';

export interface ToolConfig {
  color: string;
  lineWidth: number;
}

export const MOCK_ANALYSIS: FullAnalysis = {
  textureAndStyle: {
    category: "Texture & Style",
    percentage: 12,
    analysis: "Brushstrokes are highly fragmented and directional inconsistency suggests significant internal cognitive dissonance during creation.",
    symbolism: "Feelings of fragmentation; multi-layered mental loops."
  },
  lightAndShadow: {
    category: "Light & Shadow",
    percentage: 20,
    analysis: "Unnatural light distribution on the figure, with high contrast in non-anatomical areas, indicating identity distortion.",
    symbolism: "Internal conflict; spiritual dissociation."
  },
  lines: {
    category: "Lines",
    percentage: 15,
    analysis: "Lines are shaky, uneven, and show multiple instances of 'obsessive' re-tracing in critical areas.",
    symbolism: "Anxiety; internal chaos and uncertainty."
  },
  poseAndExpression: {
    category: "Pose & Expression",
    percentage: 18,
    analysis: "The subject shows a tilted head, hand supporting the chin, and downcast eyes, representing a state of mental exhaustion.",
    symbolism: "Extreme fatigue; deep longing; self-protective posture."
  },
  overallAtmosphere: {
    category: "Overall Atmosphere",
    percentage: 10,
    analysis: "The overall tone is cold and heavy, with a distinct sense of suffocating emotional pressure.",
    symbolism: "Conflict between external suppression and internal exploration."
  },
  colorIntensity: {
    category: "Color Intensity",
    percentage: 28,
    analysis: "High-contrast complementary colors used, but the skin tone is rendered in a deadened, unnatural gray.",
    symbolism: "Isolation; restlessness; severe mental exhaustion."
  }
};
