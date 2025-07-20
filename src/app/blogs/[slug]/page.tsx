
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { User, Calendar, Tag } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { allBlogs } from '@/lib/data/blogs';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((p) => p.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = allBlogs.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="container mx-auto px-4 py-16 md:px-8">
        <article className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl font-headline">{blog.title}</h1>
                <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap gap-2 mt-4">
                    {blog.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
            </header>

            <div className="mb-12">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1200}
                    height={600}
                    className="w-full rounded-lg shadow-lg object-cover"
                    data-ai-hint={blog.hint}
                />
            </div>
            
            <div 
                className="prose prose-lg dark:prose-invert max-w-none mx-auto prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
                dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
        </article>

        <section className="py-20 mt-12 border-t border-border">
            <h3 className="mb-12 text-3xl font-bold text-center md:text-4xl font-headline">Related Blogs</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                {relatedBlogs.map((relatedBlog, index) => (
                    <Link href={`/blogs/${relatedBlog.slug}`} key={index}>
                        <Card className="overflow-hidden transition-all duration-300 shadow-md bg-card/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                            <Image
                            src={relatedBlog.image}
                            alt={relatedBlog.title}
                            width={600}
                            height={400}
                            className="object-cover w-full"
                            data-ai-hint={relatedBlog.hint}
                            />
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {relatedBlog.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                </div>
                                <h4 className="text-2xl font-bold font-headline">{relatedBlog.title}</h4>
                                <p className="mt-2 text-muted-foreground flex-grow">{relatedBlog.description}</p>
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
