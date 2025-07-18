'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LivePreviewProps {
  colorScheme: string[] | null;
  fonts: { headline: string; body: string; } | null;
}

const LivePreview = ({ colorScheme, fonts }: LivePreviewProps) => {

    const safeFonts = {
        headline: fonts?.headline?.replace(/[^a-zA-Z0-9\s]/g, '') || 'Space Grotesk',
        body: fonts?.body?.replace(/[^a-zA-Z0-9\s]/g, '') || 'Inter',
    }

  const customStyles = `
    :root {
      --preview-bg: ${colorScheme?.[0] || 'hsl(var(--background))'};
      --preview-card: ${colorScheme?.[1] || 'hsl(var(--card))'};
      --preview-primary: ${colorScheme?.[2] || 'hsl(var(--primary))'};
      --preview-accent: ${colorScheme?.[3] || 'hsl(var(--accent))'};
      --preview-text: ${colorScheme?.[4] || 'hsl(var(--foreground))'};
      --preview-primary-text: #FFFFFF;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="w-full h-[450px] overflow-hidden transition-colors duration-300 border rounded-lg shadow-inner">
        <div className="h-8 bg-muted flex items-center px-3 gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div 
          className="w-full h-full p-6 overflow-y-auto" 
          style={{ 
            backgroundColor: 'var(--preview-bg)', 
            color: 'var(--preview-text)',
            fontFamily: `'${safeFonts.body}', sans-serif`
          }}
        >
            <header className="flex items-center justify-between">
                <h2 style={{ fontFamily: `'${safeFonts.headline}', sans-serif`, color: 'var(--preview-accent)' }} className="text-xl font-bold">Portfolio</h2>
                <nav className="flex gap-4 text-sm">
                    <span>Work</span>
                    <span>About</span>
                </nav>
            </header>
            <main className="mt-12 text-center">
                <Image 
                    src="https://placehold.co/100x100.png" 
                    alt="Author" 
                    width={100}
                    height={100}
                    className="mx-auto rounded-full" 
                    data-ai-hint="person avatar"
                />
                <h1 style={{ fontFamily: `'${safeFonts.headline}', sans-serif` }} className="mt-6 text-4xl font-bold">
                    I build digital experiences.
                </h1>
                <p className="max-w-md mx-auto mt-4 text-lg" style={{ color: 'var(--preview-text)', opacity: 0.8}}>
                    This is a live preview of your generated design system. Click on colors and fonts to see changes reflected here.
                </p>
                <Button className="mt-8" style={{ backgroundColor: 'var(--preview-primary)', color: 'var(--preview-primary-text)' }}>
                    Get In Touch
                </Button>
            </main>
        </div>
      </div>
    </>
  );
};

export default LivePreview;
