'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExportPanelProps {
  colorScheme: string[] | null;
  fonts: { headline: string; body: string; } | null;
}

const ExportPanel = ({ colorScheme, fonts }: ExportPanelProps) => {
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast({ title: `Copied ${type} to clipboard!` });
    setTimeout(() => setCopied(null), 2000);
  };

  const cssVariables = colorScheme ? `
:root {
  --background: ${colorScheme[0]};
  --card: ${colorScheme[1]};
  --primary: ${colorScheme[2]};
  --accent: ${colorScheme[3]};
  --foreground: ${colorScheme[4]};
}
  `.trim() : ":root {\n  /* Select a color scheme to export */\n}";

  const fontImport = fonts ? 
  `<link href="https://fonts.googleapis.com/css2?family=${fonts.headline.replace(' ', '+')}:wght@400;700&family=${fonts.body.replace(' ', '+')}:wght@400;500;700&display=swap" rel="stylesheet">`
  : "<!-- Select a font to export -->";
  
  const tailwindConfig = `
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        headline: ['${fonts?.headline || 'Space Grotesk'}', 'sans-serif'],
        body: ['${fonts?.body || 'Inter'}', 'sans-serif'],
      },
    },
  },
  plugins: [],
}`.trim();

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="font-headline">Export Your Design</CardTitle>
        <CardDescription>Copy the code below to use in your project.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="css" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="css">CSS</TabsTrigger>
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="tailwind">Tailwind</TabsTrigger>
            </TabsList>
            <TabsContent value="css">
                <div className="relative mt-2">
                    <pre className="p-4 overflow-x-auto text-sm rounded-md bg-muted text-muted-foreground">
                    <code>{cssVariables}</code>
                    </pre>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleCopy(cssVariables, 'CSS')}
                    >
                        {copied === 'CSS' ? <ClipboardCheck className="w-4 h-4" /> : <Clipboard className="w-4 h-4" />}
                    </Button>
                </div>
            </TabsContent>
            <TabsContent value="html">
                <div className="relative mt-2">
                    <pre className="p-4 overflow-x-auto text-sm rounded-md bg-muted text-muted-foreground">
                    <code>{fontImport}</code>
                    </pre>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleCopy(fontImport, 'HTML')}
                    >
                        {copied === 'HTML' ? <ClipboardCheck className="w-4 h-4" /> : <Clipboard className="w-4 h-4" />}
                    </Button>
                </div>
            </TabsContent>
            <TabsContent value="tailwind">
                 <div className="relative mt-2">
                    <pre className="p-4 overflow-x-auto text-sm rounded-md bg-muted text-muted-foreground">
                    <code>{tailwindConfig}</code>
                    </pre>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleCopy(tailwindConfig, 'Tailwind Config')}
                    >
                        {copied === 'Tailwind Config' ? <ClipboardCheck className="w-4 h-4" /> : <Clipboard className="w-4 h-4" />}
                    </Button>
                </div>
            </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ExportPanel;
