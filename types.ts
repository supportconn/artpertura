
export interface AnalysisCategory {
  category: string;
  percentage: number;
  analysis: string;
  symbolism: string;
}

export interface FullAnalysis {
  summary: string;
  insightTag: string;
  textureAndStyle: AnalysisCategory;
  lightAndShadow: AnalysisCategory;
  lines: AnalysisCategory;
  poseAndExpression: AnalysisCategory;
  overallAtmosphere: AnalysisCategory;
  colorIntensity: AnalysisCategory;
}

export type AppState = 'landing' | 'drawing' | 'simulating' | 'scanning' | 'result';

export interface ToolConfig {
  color: string;
  lineWidth: number;
}

export const MOCK_ANALYSES: FullAnalysis[] = [
  {
    summary: "The visual patterns identified in your drawing provide a qualitative indicator of severe mental exhaustion. Our 'Tech connects, care protects' framework suggests a need for gentle self-care and professional dialogue.",
    insightTag: "High Sensitivity Alert",
    textureAndStyle: { category: "Texture & Style", percentage: 12, analysis: "Brushstrokes are highly fragmented and directional inconsistency suggests significant internal cognitive dissonance.", symbolism: "Feelings of fragmentation; multi-layered mental loops." },
    lightAndShadow: { category: "Light & Shadow", percentage: 20, analysis: "Unnatural light distribution on the figure, with high contrast in non-anatomical areas.", symbolism: "Internal conflict; spiritual dissociation." },
    lines: { category: "Lines", percentage: 15, analysis: "Lines are shaky, uneven, and show multiple instances of 'obsessive' re-tracing.", symbolism: "Anxiety; internal chaos and uncertainty." },
    poseAndExpression: { category: "Pose & Expression", percentage: 18, analysis: "Tilted head and downcast eyes represent a state of mental exhaustion.", symbolism: "Extreme fatigue; deep longing; self-protective posture." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 10, analysis: "The overall tone is cold and heavy, with a sense of suffocating emotional pressure.", symbolism: "Conflict between external suppression and internal exploration." },
    colorIntensity: { category: "Color Intensity", percentage: 25, analysis: "High-contrast colors used, but rendered in a deadened, unnatural gray.", symbolism: "Isolation; restlessness; severe mental exhaustion." }
  },
  {
    summary: "Your creative expression shows a vibrant but chaotic internal landscape. While energy levels are high, there is a clear lack of grounding. Focus on rhythmic activities to stabilize your emotional core.",
    insightTag: "Creative Overflow",
    textureAndStyle: { category: "Texture & Style", percentage: 18, analysis: "Bold, aggressive strokes with sharp edges indicate a high level of expressive energy.", symbolism: "Assertiveness; desire for breakthrough." },
    lightAndShadow: { category: "Light & Shadow", percentage: 15, analysis: "Deep shadows pooling at the bottom suggest a feeling of being weighed down.", symbolism: "Emotional gravity; hidden burdens." },
    lines: { category: "Lines", percentage: 22, analysis: "Consistent, thick lines demonstrate a strong need for control and boundary-setting.", symbolism: "Structural resilience; defensive layering." },
    poseAndExpression: { category: "Pose & Expression", percentage: 10, analysis: "Profile view indicates a tendency to avoid direct confrontation while focusing on goals.", symbolism: "Strategic withdrawal; visionary posture." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 15, analysis: "A vibrant but chaotic palette suggests a mind filled with ideas but lacking direction.", symbolism: "Creative overflow; lack of grounding." },
    colorIntensity: { category: "Color Intensity", percentage: 20, analysis: "Pulsing warm tones contrast with sharp neon accents.", symbolism: "Passionate core; hypersensitivity to stimuli." }
  },
  {
    summary: "Our analysis detects hidden tension within structured patterns. You may be over-relying on logic to suppress emotional turbulence. Consider allowing more 'free-form' space.",
    insightTag: "Suppressed Tension",
    textureAndStyle: { category: "Texture & Style", percentage: 25, analysis: "Extremely controlled, repetitive patterns suggest a heightened state of vigilance.", symbolism: "Emotional armor; fear of losing control." },
    lightAndShadow: { category: "Light & Shadow", percentage: 10, analysis: "Flat lighting with almost no shadows indicates a desire to hide vulnerabilities.", symbolism: "Social masking; defensive transparency." },
    lines: { category: "Lines", percentage: 30, analysis: "Rigid, geometric line work reveals a strong internal framework but limited flexibility.", symbolism: "Logic over emotion; structural rigidity." },
    poseAndExpression: { category: "Pose & Expression", percentage: 12, analysis: "A very centered, upright posture suggests a conscious effort to 'stay composed'.", symbolism: "Maintaining appearances; stoic endurance." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 13, analysis: "The composition is highly organized, yet feels sterile and lacking in spontaneity.", symbolism: "Orderly chaos; suppressed vitality." },
    colorIntensity: { category: "Color Intensity", percentage: 10, analysis: "Monochromatic palette choices suggest emotional dampening as a coping mechanism.", symbolism: "Emotional numbness; focus on survival." }
  },
  {
    summary: "Your artwork reflects a state of emotional recovery and resilience. The harmonious balance between color and line suggests you are successfully processing recent challenges.",
    insightTag: "Positive Resilience",
    textureAndStyle: { category: "Texture & Style", percentage: 15, analysis: "Flowing, continuous strokes indicate a healthy integration of thought and feeling.", symbolism: "Emotional continuity; healing process." },
    lightAndShadow: { category: "Light & Shadow", percentage: 25, analysis: "Soft, warm light gradients across the canvas symbolize a growing sense of hope.", symbolism: "Inner radiance; emerging clarity." },
    lines: { category: "Lines", percentage: 12, analysis: "Varied line weights show flexibility and an openness to new experiences.", symbolism: "Adaptability; emotional breathing room." },
    poseAndExpression: { category: "Pose & Expression", percentage: 20, analysis: "An open, upward-looking posture suggests curiosity and a positive outlook.", symbolism: "Growth mindset; spiritual openness." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 18, analysis: "A balanced, spacious layout that allows the viewer room to breathe.", symbolism: "Mental clarity; restorative peace." },
    colorIntensity: { category: "Color Intensity", percentage: 10, analysis: "Harmonious earthy tones mixed with soft pastels reflect a stable state.", symbolism: "Nature-inspired healing; emotional balance." }
  },
  {
    summary: "High frequency patterns suggest a state of acute restlessness. Your mind is moving faster than your body can process, leading to a sense of urgent disconnection.",
    insightTag: "Acute Restlessness",
    textureAndStyle: { category: "Texture & Style", percentage: 35, analysis: "Rapid, staccato strokes create a buzzing texture that dominates the visual field.", symbolism: "Nervous energy; over-stimulation." },
    lightAndShadow: { category: "Light & Shadow", percentage: 12, analysis: "Flickering highlights without stable shadows suggest an inability to find rest.", symbolism: "Temporary fixes; lack of permanence." },
    lines: { category: "Lines", percentage: 28, analysis: "Jagged, intersecting lines create a mesh-like barrier around the central subjects.", symbolism: "Mental noise; entrapment in thoughts." },
    poseAndExpression: { category: "Pose & Expression", percentage: 10, analysis: "Tense, angular shapes replace organic forms, suggesting physical manifestations of stress.", symbolism: "Body-mind disconnect; somatic tension." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 10, analysis: "The atmosphere is electric but brittle, feeling as though it might shatter under pressure.", symbolism: "High-stakes fragility; burnout threshold." },
    colorIntensity: { category: "Color Intensity", percentage: 5, analysis: "Limited but neon-bright color application in small, concentrated areas.", symbolism: "Internal alarms; focused irritation." }
  },
  {
    summary: "Minimalist and isolated forms indicate a period of introspection and perceived social distance. This space can be restorative if used for self-discovery.",
    insightTag: "Internal Withdrawal",
    textureAndStyle: { category: "Texture & Style", percentage: 8, analysis: "Sparse, delicate application of media with significant white space remaining.", symbolism: "Vulnerability; desire for invisibility." },
    lightAndShadow: { category: "Light & Shadow", percentage: 32, analysis: "Long, stretching shadows that dominate the figure suggest the past's influence.", symbolism: "Loneliness; the shadow of memory." },
    lines: { category: "Lines", percentage: 10, analysis: "Very faint, almost disappearing lines indicate a lack of certainty or presence.", symbolism: "Fading connections; tentative existence." },
    poseAndExpression: { category: "Pose & Expression", percentage: 35, analysis: "A solitary, small figure in a large void represents internal retreat.", symbolism: "Social isolation; self-contained world." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 10, analysis: "Quiet and hollow atmosphere that suggests a profound sense of emptiness.", symbolism: "Subconscious void; search for meaning." },
    colorIntensity: { category: "Color Intensity", percentage: 5, analysis: "Cool blues and desaturated grays dominate the few colored areas.", symbolism: "Emotional distance; melancholy peace." }
  },
  {
    summary: "Strong symmetry and deliberate use of space reflect a mind that is currently centered and present. You are in a phase of psychological equilibrium.",
    insightTag: "Centered Balance",
    textureAndStyle: { category: "Texture & Style", percentage: 20, analysis: "Symmetrical and rhythmic patterns show high levels of cognitive control.", symbolism: "Harmonious thought; mental organization." },
    lightAndShadow: { category: "Light & Shadow", percentage: 15, analysis: "Balanced light sources from both sides suggest a broad, inclusive perspective.", symbolism: "Fairness; emotional intelligence." },
    lines: { category: "Lines", percentage: 20, analysis: "Smooth, confident curves combined with stable verticals provide a secure frame.", symbolism: "Strength and flexibility; inner core." },
    poseAndExpression: { category: "Pose & Expression", percentage: 15, analysis: "A grounded, front-facing posture represents directness and self-assurance.", symbolism: "Authenticity; readiness to engage." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 20, analysis: "Calm and structured, creating an environment that feels safe and predictable.", symbolism: "Psychological safety; internal sanctuary." },
    colorIntensity: { category: "Color Intensity", percentage: 10, analysis: "A balanced palette of primary and secondary colors in equal measure.", symbolism: "Holistic health; integrated personality." }
  },
  {
    summary: "Broad, heavy strokes suggest a period of low emotional energy and deep reflection. The 'weight' in your art speaks to a significant period of mourning or change.",
    insightTag: "Emotional Gravity",
    textureAndStyle: { category: "Texture & Style", percentage: 10, analysis: "Dense, overlapping layers create a heavy physical presence on the canvas.", symbolism: "Accumulated grief; weighted memories." },
    lightAndShadow: { category: "Light & Shadow", percentage: 35, analysis: "High contrast chiaroscuro suggests deep inner exploration of 'the dark'.", symbolism: "Subconscious depths; truth-seeking." },
    lines: { category: "Lines", percentage: 10, analysis: "Slow, dragging lines that seem to pull toward the bottom of the page.", symbolism: "Fatigue; surrendering to emotion." },
    poseAndExpression: { category: "Pose & Expression", percentage: 25, analysis: "Curled or hunched posture indicates a need for comfort and nurturing.", symbolism: "Primal self-care; emotional hibernation." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 15, analysis: "Somber and introspective, inviting a slow, thoughtful engagement.", symbolism: "Quiet strength; the beauty of sadness." },
    colorIntensity: { category: "Color Intensity", percentage: 5, analysis: "Deep, dark jewel tones like indigo and forest green.", symbolism: "Mystery; untapped potential." }
  },
  {
    summary: "Disconnected elements suggest a fast-moving mind struggling to prioritize conflicting desires. There is brilliance here, but it needs a unifying focus.",
    insightTag: "Cognitive Scattering",
    textureAndStyle: { category: "Texture & Style", percentage: 25, analysis: "Vastly different styles within the same piece suggest identity flux.", symbolism: "Multiple roles; social chameleonism." },
    lightAndShadow: { category: "Light & Shadow", percentage: 10, analysis: "Inconsistent light sources create a confusing sense of space.", symbolism: "Distorted reality; conflicting truths." },
    lines: { category: "Lines", percentage: 15, analysis: "Jagged breaks in lines suggest interruptions in thought or communication.", symbolism: "Unfinished business; short-term focus." },
    poseAndExpression: { category: "Pose & Expression", percentage: 15, analysis: "Multiple points of interest that pull the eye in different directions.", symbolism: "Distraction; richness of experience." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 20, analysis: "Dynamic but unstable, filled with kinetic energy that lacks a target.", symbolism: "Potential energy; fear of commitment." },
    colorIntensity: { category: "Color Intensity", percentage: 15, analysis: "Splashes of vivid color that don't relate to one another logically.", symbolism: "Impulsivity; sensory seeking." }
  },
  {
    summary: "Upward and outward strokes symbolize growth and a readiness to embrace change. Your subconscious is signaling a move toward expansion and new horizons.",
    insightTag: "Visionary Expansion",
    textureAndStyle: { category: "Texture & Style", percentage: 15, analysis: "Feathery, light textures that seem to lift off the canvas surface.", symbolism: "Transcendence; spiritual lightness." },
    lightAndShadow: { category: "Light & Shadow", percentage: 10, analysis: "Bright, over-exposed light from above suggests inspiration or external guidance.", symbolism: "Divine spark; clarity of purpose." },
    lines: { category: "Lines", percentage: 30, analysis: "Long, sweeping lines that extend beyond the boundaries of the main subjects.", symbolism: "Ambition; breaking barriers." },
    poseAndExpression: { category: "Pose & Expression", percentage: 20, analysis: "A posture of flight or reaching upward shows high aspiration levels.", symbolism: "Heroic journey; self-actualization." },
    overallAtmosphere: { category: "Overall Atmosphere", percentage: 15, analysis: "Breezy and optimistic, evoking a sense of limitless possibilities.", symbolism: "Hope; the dawning of a new era." },
    colorIntensity: { category: "Color Intensity", percentage: 10, analysis: "Translucent, layering of bright colors that create a luminous effect.", symbolism: "Radiance; infectious positivity." }
  }
];

export const MOCK_ANALYSIS = MOCK_ANALYSES[0];
