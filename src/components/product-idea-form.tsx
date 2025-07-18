
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitProductIdea } from '@/ai/flows/submit-product-idea-flow';
import React from 'react';
import { LoadingSpinner } from './icons';

const formSchema = z.object({
  productName: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  category: z.string({ required_error: 'Please select a category.' }),
  problemStatement: z.string().min(10, {
    message: 'Problem statement must be at least 10 characters.',
  }),
  attachment: z.instanceof(File).optional(),
});

const categories = [
  'SaaS',
  'Mobile App',
  'E-commerce',
  'Fintech',
  'Healthcare',
  'Education',
  'Social Media',
  'Other',
];

export function ProductIdeaForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      problemStatement: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      let attachmentDataUri: string | undefined = undefined;
      if (values.attachment) {
        const reader = new FileReader();
        attachmentDataUri = await new Promise((resolve, reject) => {
          reader.onload = (event) => resolve(event.target?.result as string);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(values.attachment!);
        });
      }

      const result = await submitProductIdea({
        ...values,
        attachmentDataUri,
      });

      toast({
        title: 'Idea Submitted!',
        description: (
          <div className="flex flex-col gap-2">
            <p>Your product idea has been submitted successfully.</p>
            <p className="font-bold">{result.feedback}</p>
          </div>
        ),
      });
      form.reset();
      if(fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Card className="p-6 shadow-lg bg-card/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Have a Product Idea?</CardTitle>
        <CardDescription>Let's collaborate. Fill out the form below to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Project Phoenix" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="problemStatement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Problem Statement or Background</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the problem you are trying to solve..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
                control={form.control}
                name="attachment"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Attachment (Optional)</FormLabel>
                    <FormControl>
                        <Input 
                            type="file" 
                            ref={fileInputRef}
                            onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? <LoadingSpinner className="mr-2" /> : null}
              Let's Create a Product
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

// We need Card components for the form styling
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
