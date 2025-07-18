
'use server';
/**
 * @fileOverview An AI flow for handling product idea submissions.
 *
 * - submitProductIdea - A function that processes the submitted product idea.
 * - ProductIdeaInput - The input type for the submitProductIdea function.
 * - ProductIdeaOutput - The return type for the submitProductIdea function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ProductIdeaInputSchema = z.object({
  productName: z.string().describe('The name of the product idea.'),
  category: z.string().describe('The category of the product.'),
  problemStatement: z
    .string()
    .describe('The problem statement or background of the product idea.'),
  attachmentDataUri: z
    .string()
    .optional()
    .describe(
      "An optional attachment, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ProductIdeaInput = z.infer<typeof ProductIdeaInputSchema>;

const ProductIdeaOutputSchema = z.object({
  feedback: z
    .string()
    .describe(
      'AI-generated feedback and acknowledgment for the submitted idea.'
    ),
});
export type ProductIdeaOutput = z.infer<typeof ProductIdeaOutputSchema>;

export async function submitProductIdea(
  input: ProductIdeaInput
): Promise<ProductIdeaOutput> {
  return productIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productIdeaPrompt',
  input: { schema: ProductIdeaInputSchema },
  output: { schema: ProductIdeaOutputSchema },
  prompt: `You are a friendly and encouraging product design expert. A user has submitted a new product idea.
Your task is to provide a brief, positive, and encouraging acknowledgement.

Acknowledge the idea for "{{productName}}" in the "{{category}}" space.
Briefly mention that you find the problem statement interesting: "{{problemStatement}}".
If an attachment was provided, acknowledge that as well.

Keep your feedback to one or two sentences.

User's submission:
Product Name: {{{productName}}}
Category: {{{category}}}
Problem Statement: {{{problemStatement}}}
{{#if attachmentDataUri}}
Attachment: {{media url=attachmentDataUri}}
{{/if}}
`,
});

const productIdeaFlow = ai.defineFlow(
  {
    name: 'productIdeaFlow',
    inputSchema: ProductIdeaInputSchema,
    outputSchema: ProductIdeaOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
