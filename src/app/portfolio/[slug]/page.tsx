
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, User, Calendar, Target } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';
import { allProjects } from '@/lib/data/projects';
import { Separator } from '@/components/ui/separator';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects.filter((p) => p.slug !== params.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="container mx-auto px-4 py-16 md:px-8">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl font-headline">{project.title}</h1>
            <p className="max-w-3xl text-lg text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-16">
            <Image
                src={project.mockupImages[0].src}
                alt={`${project.title} hero mockup`}
                width={1200}
                height={800}
                className="w-full rounded-lg shadow-lg object-cover"
                data-ai-hint={project.mockupImages[0].hint}
            />
          </div>

          {/* Project Overview */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            <div className="flex flex-col items-center">
                <Briefcase className="w-6 h-6 mb-2 text-primary"/>
                <h3 className="font-semibold">Client</h3>
                <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div className="flex flex-col items-center">
                <User className="w-6 h-6 mb-2 text-primary"/>
                <h3 className="font-semibold">My Role</h3>
                <p className="text-muted-foreground">{project.role}</p>
            </div>
            <div className="flex flex-col items-center">
                <Calendar className="w-6 h-6 mb-2 text-primary"/>
                <h3 className="font-semibold">Duration</h3>
                <p className="text-muted-foreground">{project.duration}</p>
            </div>
            <div className="flex flex-col items-center">
                <Target className="w-6 h-6 mb-2 text-primary"/>
                <h3 className="font-semibold">Core Challenge</h3>
                <p className="text-muted-foreground">{project.metrics.find(m => m.title === 'Core Challenge')?.value}</p>
            </div>
          </section>

          <Separator className="my-16" />

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
              <section className="mb-12">
                  <h2 className="text-3xl font-bold font-headline">The Problem</h2>
                  <p>{project.problemStatement}</p>
              </section>

              <section className="mb-12">
                  <h2 className="text-3xl font-bold font-headline">The Process & Solution</h2>
                  <p>{project.solutionMethodology}</p>
                  <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
              </section>
          </div>

          {/* Results */}
          <section className="my-16">
            <h2 className="mb-8 text-3xl font-bold text-center font-headline">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {project.metrics.filter(m => m.title !== 'Core Challenge').map((metric, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm text-center">
                    <CardHeader>
                      <CardTitle className="flex flex-col items-center gap-2">
                        <metric.icon className="w-8 h-8 text-primary" />
                        <span>{metric.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">{metric.value}</div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </section>

          {/* Image Gallery */}
          <section className="my-16">
            <h2 className="mb-8 text-3xl font-bold text-center font-headline">Visual Design Gallery</h2>
            <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                    {project.mockupImages.map((image, index) => (
                    <CarouselItem key={index}>
                        <Image
                        src={image.src}
                        alt={`${project.title} mockup ${index + 1}`}
                        width={1200}
                        height={800}
                        className="w-full rounded-lg shadow-lg object-cover"
                        data-ai-hint={image.hint}
                        />
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
          </section>
        </article>

        {/* Related Projects */}
        <section className="py-20 mt-12 border-t border-border">
            <h3 className="mb-12 text-3xl font-bold text-center md:text-4xl font-headline">More Projects</h3>
            <Carousel
                opts={{
                align: "start",
                loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                {relatedProjects.map((relatedProject, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Link href={`/portfolio/${relatedProject.slug}`}>
                            <Card className="overflow-hidden transition-all duration-300 shadow-md bg-card/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                                <Image
                                src={relatedProject.image}
                                alt={relatedProject.title}
                                width={600}
                                height={400}
                                className="object-cover w-full"
                                data-ai-hint={relatedProject.hint}
                                />
                                <CardContent className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {relatedProject.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                </div>
                                <h4 className="text-2xl font-bold font-headline">{relatedProject.title}</h4>
                                <p className="mt-2 text-muted-foreground flex-grow">{relatedProject.description}</p>
                                </CardContent>
                            </Card>
                          </Link>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
      </main>
    </div>
  );
}
