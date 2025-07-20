
'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { allProjects } from '@/lib/data/projects';
import { allBlogs } from '@/lib/data/blogs';

export default function Home() {
  const projects = allProjects;
  const blogs = allBlogs.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="container px-4 py-16 mx-auto md:px-8">
        {/* Hero Section */}
        <section className="text-center py-14">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl font-headline">
            Crafting Digital <span className="text-primary">Product</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
            I specialize in turning complex problems into simple, beautiful, and user-centric designs. Explore my work to see how I approach design challenges.
          </p>
          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/submit-idea">Let's create a product</Link>
            </Button>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="py-8">
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

        {/* Latest Blogs Section */}
        <section id="blogs" className="py-20">
          <h2 className="mb-2 text-sm font-semibold tracking-widest text-center uppercase text-muted-foreground">Insights</h2>
          <h3 className="mb-12 text-3xl font-bold text-center md:text-4xl font-headline">Latest Blogs</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {blogs.map((blog, index) => (
              <Link href={`/blogs/${blog.slug}`} key={index}>
                <Card className="overflow-hidden transition-all duration-300 shadow-md bg-card/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="object-cover w-full"
                    data-ai-hint={blog.hint}
                  />
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <h4 className="text-2xl font-bold font-headline">{blog.title}</h4>
                    <p className="mt-2 text-muted-foreground flex-grow">{blog.description}</p>
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
