'use server';

/**
 * @fileOverview Font recommendation AI agent.
 *
 * - recommendFonts - A function that recommends font pairings based on a reference website's style.
 * - RecommendFontsInput - The input type for the recommendFonts function.
 * - RecommendFontsOutput - The return type for the recommendFonts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendFontsInputSchema = z.object({
  referenceSiteDescription: z
    .string()
    .describe('Description of the reference website, including its design style and purpose.'),
});
export type RecommendFontsInput = z.infer<typeof RecommendFontsInputSchema>;

const RecommendFontsOutputSchema = z.object({
  headlineFont: z.string().describe('Recommended headline font for visual appeal.'),
  bodyFont: z.string().describe('Recommended body font for readability.'),
  justification: z
    .string()
    .describe('Justification for the font recommendations based on the reference site.'),
});
export type RecommendFontsOutput = z.infer<typeof RecommendFontsOutputSchema>;

export async function recommendFonts(input: RecommendFontsInput): Promise<RecommendFontsOutput> {
  return recommendFontsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendFontsPrompt',
  input: {schema: RecommendFontsInputSchema},
  output: {schema: RecommendFontsOutputSchema},
  prompt: `You are a font expert who recommends font pairings (headline and body) based on a reference website's design style.

  Analyze the reference website description and suggest suitable font pairings for readability and visual appeal.

  Reference Website Description: {{{referenceSiteDescription}}}
  `,
});

const recommendFontsFlow = ai.defineFlow(
  {
    name: 'recommendFontsFlow',
    inputSchema: RecommendFontsInputSchema,
    outputSchema: RecommendFontsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
