'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating color scheme options based on an analyzed design style.
 *
 * - generateColorScheme - A function that generates color scheme options.
 * - GenerateColorSchemeInput - The input type for the generateColorScheme function.
 * - GenerateColorSchemeOutput - The output type for the generateColorScheme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateColorSchemeInputSchema = z.object({
  designStyle: z
    .string()
    .describe(
      'The analyzed design style of the reference portfolio website, including dominant colors, overall aesthetic, and any specific design principles observed.'
    ),
  numOptions: z
    .number()
    .default(3)
    .describe(
      'The number of color scheme options to generate. Defaults to 3 if not provided.'
    ),
});
export type GenerateColorSchemeInput = z.infer<typeof GenerateColorSchemeInputSchema>;

const GenerateColorSchemeOutputSchema = z.object({
  colorSchemes: z
    .array(z.string())
    .describe(
      'An array of color scheme options, with each color scheme represented as a string containing a list of color codes.'
    ),
});
export type GenerateColorSchemeOutput = z.infer<typeof GenerateColorSchemeOutputSchema>;

export async function generateColorScheme(input: GenerateColorSchemeInput): Promise<GenerateColorSchemeOutput> {
  return generateColorSchemeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateColorSchemePrompt',
  input: {schema: GenerateColorSchemeInputSchema},
  output: {schema: GenerateColorSchemeOutputSchema},
  prompt: `You are an expert color palette generator for product designer portfolios.

Given the following design style, generate {{numOptions}} professional and clean color scheme options.
Each color scheme should contain a list of color codes suitable for a portfolio website that showcases UX/UI work. The palette should be modern, accessible, and not distract from the work being presented.

Output each color scheme option as a string containing a list of color codes for background, card, primary, accent, and text colors.

Design Style: {{{designStyle}}}`,
});

const generateColorSchemeFlow = ai.defineFlow(
  {
    name: 'generateColorSchemeFlow',
    inputSchema: GenerateColorSchemeInputSchema,
    outputSchema: GenerateColorSchemeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
