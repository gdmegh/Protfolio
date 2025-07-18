'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CornerDownLeft, Sparkles, LayoutGrid, Palette, Type, Clipboard, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { runAnalysisAndGenerateSuggestions } from '@/app/actions';
import LivePreview from '@/components/live-preview';
import ExportPanel from '@/components/export-panel';
import { Logo, LoadingSpinner } from '@/components/icons';
import { Skeleton } from '@/components/ui/skeleton';
import type { AnalyzePortfolioDesignOutput } from '@/ai/flows/analyze-portfolio-design';
import type { SuggestLayoutFromExampleOutput } from '@/ai/flows/suggest-layout-from-example';
import type { GenerateColorSchemeOutput } from '@/ai/flows/generate-color-scheme';
import type { RecommendFontsOutput } from '@/ai/flows/recommend-fonts';

const formSchema = z.object({
  portfolioUrl: z.string().url({ message: "Please enter a valid URL." }),
});

type Results = {
  analysis: AnalyzePortfolioDesignOutput;
  layouts: SuggestLayoutFromExampleOutput;
  colors: GenerateColorSchemeOutput;
  fonts: RecommendFontsOutput;
}

export default function PortfolioPilotWorkspace() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Results | null>(null);
  const [selectedColorScheme, setSelectedColorScheme] = useState<string[] | null>(null);
  const [selectedFonts, setSelectedFonts] = useState<{ headline: string; body: string; } | null>(null);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResults(null);
    try {
      const response = await runAnalysisAndGenerateSuggestions(values.portfolioUrl);
      if (response.error) {
        throw new Error(response.error);
      }
      setResults(response as Results);
      setSelectedFonts(response.fonts!);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleColorSelect = (scheme: string) => {
    const colors = scheme.split(',').map(c => c.trim()).filter(Boolean);
    if (colors.length >= 5) {
      setSelectedColorScheme(colors);
    } else {
        toast({
            variant: "destructive",
            title: "Invalid Color Scheme",
            description: "The generated color scheme is incomplete.",
        });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 border-b bg-background/80 backdrop-blur-sm sm:px-6">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-primary" />
          <h1 className="text-xl font-bold font-headline">Portfolio Pilot</h1>
        </div>
        <Button size="sm" onClick={() => {
            setResults(null);
            setSelectedColorScheme(null);
            setSelectedFonts(null);
            form.reset();
        }}>Start Over</Button>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-6 p-4 sm:p-6">
        <div className="lg:col-span-3 space-y-6">
          {!results && !isLoading && (
            <Card className="shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Replicate any portfolio design instantly</CardTitle>
                <CardDescription>Enter the URL of a portfolio you admire, and our AI will analyze its design and generate a replicable theme for you.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
                    <FormField
                      control={form.control}
                      name="portfolioUrl"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="https://your-favorite-portfolio.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? <LoadingSpinner /> : 'Analyze'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {(isLoading) && (
            <div className="space-y-6">
                <Card><CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader><CardContent><Skeleton className="h-20 w-full" /></CardContent></Card>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-24 w-full" /></CardContent></Card>
                    <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-24 w-full" /></CardContent></Card>
                </div>
            </div>
          )}

          {results && (
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-muted-foreground"><Sparkles className="w-4 h-4 text-accent" /> AI DESIGN ANALYSIS</div>
                  <CardTitle className="font-headline">Analysis Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/90">{results.analysis.designSummary}</p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-muted-foreground"><Palette className="w-4 h-4 text-accent" /> COLOR SCHEMES</div>
                        <CardTitle className="font-headline">Color Palettes</CardTitle>
                        <CardDescription>Click a palette to preview.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {results.colors.colorSchemes.map((scheme, i) => {
                        const colors = scheme.split(',').map(c => c.trim()).filter(Boolean);
                        if (colors.length < 5) return null;
                        return (
                        <button key={i} onClick={() => handleColorSelect(scheme)} className="p-2 border rounded-lg hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring">
                            <div className="flex h-12 overflow-hidden rounded-md">
                            {colors.slice(0, 5).map((color, j) => (
                                <div key={j} style={{ backgroundColor: color }} className="w-full h-full" />
                            ))}
                            </div>
                        </button>
                        );
                    })}
                    </CardContent>
                </Card>

                <div>
                    <Card className="mb-6">
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-muted-foreground"><Type className="w-4 h-4 text-accent" /> FONT PAIRING</div>
                            <CardTitle className="font-headline">Typography</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Headline</p>
                                <p className="text-2xl font-headline">{results.fonts.headlineFont}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Body</p>
                                <p className="text-lg">{results.fonts.bodyFont}</p>
                            </div>
                            <p className="text-sm text-card-foreground/80 pt-2">{results.fonts.justification}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-muted-foreground"><LayoutGrid className="w-4 h-4 text-accent" /> LAYOUT IDEAS</div>
                            <CardTitle className="font-headline">Layout Suggestions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 list-disc list-inside">
                            {results.layouts.layoutSuggestions.map((layout, i) => (
                                <li key={i}>{layout}</li>
                            ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline">Live Preview</CardTitle>
              <CardDescription>Your generated design system in action.</CardDescription>
            </CardHeader>
            <CardContent>
              <LivePreview colorScheme={selectedColorScheme} fonts={selectedFonts} />
            </CardContent>
          </Card>
          {results && <ExportPanel colorScheme={selectedColorScheme} fonts={selectedFonts} />}
        </div>
      </main>
    </div>
  );
}
