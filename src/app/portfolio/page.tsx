
'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PortfolioPage() {
    const projects = [
    {
      title: 'Project Alpha',
      description: 'A mobile app designed to streamline team collaboration and project management, boosting productivity by 20%.',
      image: 'https://placehold.co/600x400.png',
      tags: ['UX Design', 'Mobile App', 'Case Study'],
      hint: 'tech product'
    },
    {
      title: 'Project Beta',
      description: 'A complete redesign of a SaaS platform\'s user onboarding flow, resulting in a 35% increase in user retention.',
      image: 'https://placehold.co/600x400.png',
      tags: ['UX Research', 'Web App', 'SaaS'],
      hint: 'dashboard ui'
    },
    {
      title: 'Project Gamma',
      description: 'Creating an accessible design system for a large-scale e-commerce website to ensure inclusivity for all users.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Design System', 'Accessibility', 'E-commerce'],
      hint: 'design system'
    },
    {
      title: 'Project Delta',
      description: 'Conceptualizing and prototyping a new feature for a social media app to enhance user engagement.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Prototyping', 'UI Design', 'Social Media'],
      hint: 'mobile ui'
    },
    {
      title: 'Project Epsilon',
      description: 'Designing a gamified learning platform for a non-profit organization, increasing user engagement by 50%.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Gamification', 'UI Design', 'Non-profit'],
      hint: 'gamification ui'
    },
    {
      title: 'Project Zeta',
      description: 'A data visualization dashboard for a fintech startup, simplifying complex financial data for investors.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Data Viz', 'Fintech', 'Dashboard'],
      hint: 'financial dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
        <main className="container px-4 py-16 mx-auto md:px-8">
            <section id="work" className="py-20">
                <h2 className="mb-2 text-sm font-semibold tracking-widest text-center uppercase text-muted-foreground">Portfolio</h2>
                <h3 className="mb-12 text-3xl font-bold text-center md:text-4xl font-headline">All Case Studies</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden transition-all duration-300 shadow-md bg-card/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1">
                        <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full"
                        data-ai-hint={project.hint}
                        />
                        <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                        <h4 className="text-2xl font-bold font-headline">{project.title}</h4>
                        <p className="mt-2 text-muted-foreground">{project.description}</p>
                        <Button variant="link" className="px-0 mt-4">
                            View Case Study <ArrowRight className="ml-2" />
                        </Button>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </section>
        </main>
    </div>
  );
}
