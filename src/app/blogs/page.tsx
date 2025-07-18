
'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BlogsPage() {
  const blogs = [
    {
      title: 'The Art of User-Centric Design',
      description: 'Exploring the principles of putting users at the heart of the design process for better products.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Design Theory', 'UX'],
      hint: 'design book'
    },
    {
      title: 'Why Your Next Project Needs a Design System',
      description: 'A deep dive into how design systems create consistency and efficiency in product development.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Design System', 'Workflow'],
      hint: 'abstract pattern'
    },
    {
      title: 'From Wireframe to High-Fidelity',
      description: 'A step-by-step guide on how to effectively move from low-fidelity sketches to polished prototypes.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Prototyping', 'UI Design'],
      hint: 'wireframe sketch'
    },
    {
      title: 'Accessibility in Design: More Than a Checklist',
      description: 'Understanding the importance of inclusive design and how to implement it in your work.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Accessibility', 'Inclusion'],
      hint: 'inclusive design'
    },
    {
      title: 'The Psychology of Color in UI',
      description: 'How color choices can influence user perception and behavior in digital interfaces.',
      image: 'https://placehold.co/600x400.png',
      tags: ['UI Design', 'Psychology'],
      hint: 'color palette'
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
        <main className="container px-4 py-16 mx-auto md:px-8">
            <section id="blogs" className="py-20">
                 <h2 className="mb-2 text-sm font-semibold tracking-widest text-center uppercase text-muted-foreground">Insights</h2>
                <h3 className="mb-12 text-3xl font-bold text-center md:text-4xl font-headline">All Blog Posts</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {blogs.map((blog, index) => (
                    <Card key={index} className="overflow-hidden transition-all duration-300 shadow-md bg-card/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1">
                        <Image
                        src={blog.image}
                        alt={blog.title}
                        width={600}
                        height={400}
                        className="object-cover w-full"
                        data-ai-hint={blog.hint}
                        />
                        <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                        <h4 className="text-2xl font-bold font-headline">{blog.title}</h4>
                        <p className="mt-2 text-muted-foreground">{blog.description}</p>
                        <Button variant="link" className="px-0 mt-4">
                            Read More <ArrowRight className="ml-2" />
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
