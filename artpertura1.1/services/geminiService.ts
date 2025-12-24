
import { GoogleGenAI, Type } from "@google/genai";
import { FullAnalysis } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const ARTPERTURA_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    textureAndStyle: {
      type: Type.OBJECT,
      properties: {
        category: { type: Type.STRING },
        percentage: { type: Type.NUMBER },
        analysis: { type: Type.STRING },
        symbolism: { type: Type.STRING },
      },
      required: ["category", "percentage", "analysis", "symbolism"],
    },
    lightAndShadow: {
      type: Type.OBJECT,
      properties: {
        category: { type: Type.STRING },
        percentage: { type: Type.NUMBER },
        analysis: { type: Type.STRING },
        symbolism: { type: Type.STRING },
      },
      required: ["category", "percentage", "analysis", "symbolism"],
    },
    lines: {
      type: Type.OBJECT,
      properties: {
        category: { type: Type.STRING },
        percentage: { type: Type.NUMBER },
        analysis: { type: Type.STRING },
        symbolism: { type: Type.STRING },
      },
      required: ["category", "percentage", "analysis", "symbolism"],
    },
    poseAndExpression: {
      type: Type.OBJECT,
      properties: {
        category: { type: Type.STRING },
        percentage: { type: Type.NUMBER },
        analysis: { type: Type.STRING },
        symbolism: { type: Type.STRING },
      },
      required: ["category", "percentage", "analysis", "symbolism"],
    },
    overallAtmosphere: {
      type: Type.OBJECT,
      properties: {
        category: { type: Type.STRING },
        percentage: { type: Type.NUMBER },
        analysis: { type: Type.STRING },
        symbolism: { type: Type.STRING },
      },
      required: ["category", "percentage", "analysis", "symbolism"],
    },
    colorIntensity: {
      type: Type.OBJECT,
      properties: {
        category: { type: Type.STRING },
        percentage: { type: Type.NUMBER },
        analysis: { type: Type.STRING },
        symbolism: { type: Type.STRING },
      },
      required: ["category", "percentage", "analysis", "symbolism"],
    },
  },
  required: [
    "textureAndStyle",
    "lightAndShadow",
    "lines",
    "poseAndExpression",
    "overallAtmosphere",
    "colorIntensity"
  ],
};

export async function analyzeArt(base64Image: string): Promise<FullAnalysis> {
  const prompt = `
    You are an Art Therapy Expert for the AI&Hope project (formerly Artpertura). 
    AI&Hope is focused on "Tech connects, care protects".
    Perform a "Qualitative Estimation" of the provided user drawing across 6 dimensions.
    
    IMPORTANT: Provide all analysis in professional, clinical yet accessible English.
    
    Dimensions:
    1. Texture and Style: fragmented vs. cohesive, brushstroke energy.
    2. Light and Shadow: tension, contrast, identity positioning.
    3. Lines: stability vs. chaos, obsessive patterns.
    4. Pose and Expression: anatomical tilts, facial cues.
    5. Overall Atmosphere: emotional weight, inner conflict.
    6. Color Intensity: saturation, palette choices, unconventional tones.

    Assign a percentage influence for each (total 100%).
    Output format: JSON.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      { text: prompt },
      {
        inlineData: {
          mimeType: 'image/png',
          data: base64Image.split(',')[1],
        },
      },
    ],
    config: {
      responseMimeType: 'application/json',
      responseSchema: ARTPERTURA_SCHEMA,
    },
  });

  return JSON.parse(response.text || "{}");
}
