
'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { allProjects } from '@/lib/data/projects';

export default function PortfolioPage() {
    const projects = allProjects;

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
        <main className="container px-4 py-16 mx-auto md:px-8">
            <section id="work" className="py-20">
                <h2 className="mb-2 text-sm font-semibold tracking-widest text-center uppercase text-muted-foreground">Portfolio</h2>
                <h3 className="mb-12 text-3xl font-bold text-center md:text-4xl font-headline">All Case Studies</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {projects.map((project, index) => (
                      <Link href={`/portfolio/${project.slug}`} key={index}>
                        <Card className="overflow-hidden transition-all duration-300 shadow-md bg-card/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                            <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover w-full"
                            data-ai-hint={project.hint}
                            />
                            <CardContent className="p-6 flex flex-col flex-grow">
                              <div className="flex flex-wrap gap-2 mb-4">
                                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                              </div>
                              <h4 className="text-2xl font-bold font-headline">{project.title}</h4>
                              <p className="mt-2 text-muted-foreground flex-grow">{project.description}</p>
                            </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
            </section>
        </main>
    </div>
  );
}
