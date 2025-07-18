'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting page layouts based on a design example.
 *
 * - suggestLayoutFromExample - A function that takes a design example and suggests page layouts.
 * - SuggestLayoutFromExampleInput - The input type for the suggestLayoutFromExample function.
 * - SuggestLayoutFromExampleOutput - The return type for the suggestLayoutFromExample function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestLayoutFromExampleInputSchema = z.object({
  designExample: z
    .string()
    .describe("A description of the design example from the user's portfolio."),
});
export type SuggestLayoutFromExampleInput = z.infer<
  typeof SuggestLayoutFromExampleInputSchema
>;

const SuggestLayoutFromExampleOutputSchema = z.object({
  layoutSuggestions: z
    .array(z.string())
    .describe('An array of suggested page layouts.'),
});
export type SuggestLayoutFromExampleOutput = z.infer<
  typeof SuggestLayoutFromExampleOutputSchema
>;

export async function suggestLayoutFromExample(
  input: SuggestLayoutFromExampleInput
): Promise<SuggestLayoutFromExampleOutput> {
  return suggestLayoutFromExampleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestLayoutFromExamplePrompt',
  input: {schema: SuggestLayoutFromExampleInputSchema},
  output: {schema: SuggestLayoutFromExampleOutputSchema},
  prompt: `You are an expert product designer specializing in portfolio layouts. Given the following design analysis, suggest several page layouts that are effective for showcasing product design case studies. Focus on clean, grid-based layouts that prioritize readability and clear visual hierarchy.

Design Example: {{{designExample}}}

Return the suggestions as an array of strings. For example: "A clean, two-column grid for case study summaries on the homepage."`,
});

const suggestLayoutFromExampleFlow = ai.defineFlow(
  {
    name: 'suggestLayoutFromExampleFlow',
    inputSchema: SuggestLayoutFromExampleInputSchema,
    outputSchema: SuggestLayoutFromExampleOutputSchema,
  },
  async input => {
    const {output} = await suggestLayoutFromExample(input);
    return output!;
  }
);
