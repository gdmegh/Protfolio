'use server';

/**
 * @fileOverview Portfolio design analysis flow.
 *
 * This file defines a Genkit flow that takes a portfolio URL as input, analyzes its design elements,
 * and provides a summary of its key design characteristics.
 *
 * @exports analyzePortfolioDesign - The main function to trigger the analysis flow.
 * @exports AnalyzePortfolioDesignInput - The input type for the analyzePortfolioDesign function.
 * @exports AnalyzePortfolioDesignOutput - The output type for the analyzePortfolioDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePortfolioDesignInputSchema = z.object({
  portfolioUrl: z
    .string()
    .url()
    .describe('The URL of the portfolio website to analyze.'),
});
export type AnalyzePortfolioDesignInput = z.infer<
  typeof AnalyzePortfolioDesignInputSchema
>;

const AnalyzePortfolioDesignOutputSchema = z.object({
  designSummary: z
    .string()
    .describe('A summary of the key design characteristics of the portfolio, including layout, color scheme, and typography.'),
});
export type AnalyzePortfolioDesignOutput = z.infer<
  typeof AnalyzePortfolioDesignOutputSchema
>;

export async function analyzePortfolioDesign(
  input: AnalyzePortfolioDesignInput
): Promise<AnalyzePortfolioDesignOutput> {
  return analyzePortfolioDesignFlow(input);
}

const analyzePortfolioDesignPrompt = ai.definePrompt({
  name: 'analyzePortfolioDesignPrompt',
  input: {schema: AnalyzePortfolioDesignInputSchema},
  output: {schema: AnalyzePortfolioDesignOutputSchema},
  prompt: `You are an expert web design analyst. Analyze the design of the portfolio website provided in the URL, and provide a summary of its key design characteristics.

URL: {{{portfolioUrl}}}

Focus on the following aspects:
- Layout: Describe the overall layout of the website (e.g., grid-based, asymmetrical, minimalist).
- Color Scheme: Identify the dominant colors and describe the overall color palette (e.g., monochromatic, complementary, vibrant).
- Typography: Analyze the fonts used for headings and body text, and describe their style (e.g., serif, sans-serif, modern, classic).
- Imagery: Analyze the use of images.

Provide a concise summary of these design elements.`,
});

const analyzePortfolioDesignFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioDesignFlow',
    inputSchema: AnalyzePortfolioDesignInputSchema,
    outputSchema: AnalyzePortfolioDesignOutputSchema,
  },
  async input => {
    const {output} = await analyzePortfolioDesignPrompt(input);
    return output!;
  }
);
