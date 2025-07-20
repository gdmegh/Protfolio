
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, User, Calendar } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';
import { allProjects } from '@/lib/data/projects';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects.filter((p) => p.slug !== params.slug).slice(0, 4);
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  )

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="container mx-auto px-4 py-16 md:px-8">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl font-headline">{project.title}</h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">{project.description}</p>
          <div className="flex justify-center flex-wrap gap-2 mt-4">
            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </header>

        <div className="mb-12">
            <Carousel 
                plugins={[plugin.current]}
                className="w-full max-w-4xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {project.metrics.map((metric, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                  <metric.icon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
            <article className="lg:w-2/3">
                <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
                    <h2 className="text-3xl font-bold font-headline">Problem Statement</h2>
                    <p>{project.problemStatement}</p>
                    
                    <h2 className="text-3xl font-bold font-headline mt-8">Solution Methodology</h2>
                    <p>{project.solutionMethodology}</p>

                    <h2 className="text-3xl font-bold font-headline mt-8">The Process</h2>
                    <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
                </div>
            </article>

            <aside className="lg:w-1/3 lg:sticky top-24 self-start">
                <Card className="bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-xl font-headline">Project Info</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <p className="font-semibold">Client</p>
                                <p className="text-muted-foreground">{project.client}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <User className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <p className="font-semibold">My Role</p>
                                <p className="text-muted-foreground">{project.role}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <p className="font-semibold">Duration</p>
                                <p className="text-muted-foreground">{project.duration}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </aside>
        </div>

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
