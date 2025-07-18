'use server';

import { analyzePortfolioDesign } from '@/ai/flows/analyze-portfolio-design';
import { generateColorScheme } from '@/ai/flows/generate-color-scheme';
import { recommendFonts } from '@/ai/flows/recommend-fonts';
import { suggestLayoutFromExample } from '@/ai/flows/suggest-layout-from-example';

export async function runAnalysisAndGenerateSuggestions(portfolioUrl: string) {
  try {
    if (!portfolioUrl || !portfolioUrl.startsWith('http')) {
        throw new Error('Please enter a valid URL (e.g., https://example.com)');
    }

    const analysisResult = await analyzePortfolioDesign({ portfolioUrl });
    const designSummary = analysisResult.designSummary;

    if (!designSummary) {
      throw new Error('Could not analyze the design of the provided URL.');
    }

    const [layoutResult, colorResult, fontResult] = await Promise.all([
      suggestLayoutFromExample({ designExample: designSummary }),
      generateColorScheme({ designStyle: designSummary, numOptions: 6 }),
      recommendFonts({ referenceSiteDescription: designSummary }),
    ]);

    return {
      analysis: analysisResult,
      layouts: layoutResult,
      colors: colorResult,
      fonts: fontResult,
      error: null,
    };
  } catch (e: any) {
    console.error(e);
    return { 
      analysis: null,
      layouts: null,
      colors: null,
      fonts: null,
      error: e.message || 'An unexpected error occurred.' 
    };
  }
}
