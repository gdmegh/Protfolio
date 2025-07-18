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
  prompt: `You are an expert product design analyst. Analyze the design of the portfolio website provided in the URL, focusing on how it presents the work of a product designer.

URL: {{{portfolioUrl}}}

Focus on the following aspects:
- Case Study Presentation: How are case studies structured? Is there a clear narrative (problem, process, solution, impact)?
- UI/UX Showcase: How are UI elements, wireframes, and prototypes displayed?
- Layout & Navigation: Describe the overall layout and site navigation. Is it clean, intuitive, and user-friendly?
- Visual Design: Analyze the color scheme, typography, and use of imagery. Does it create a professional and trustworthy feel?

Provide a concise summary of these elements, tailored to what makes an effective product design portfolio.`,
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
