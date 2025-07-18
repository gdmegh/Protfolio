
'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MouseFollower } from '@/components/mouse-follower';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'Project Alpha',
      slug: 'project-alpha',
      description: 'A mobile app designed to streamline team collaboration and project management, boosting productivity by 20%.',
      image: 'https://placehold.co/600x400.png',
      tags: ['UX Design', 'Mobile App', 'Case Study'],
      hint: 'tech product'
    },
    {
      title: 'Project Beta',
      slug: 'project-beta',
      description: 'A complete redesign of a SaaS platform\'s user onboarding flow, resulting in a 35% increase in user retention.',
      image: 'https://placehold.co/600x400.png',
      tags: ['UX Research', 'Web App', 'SaaS'],
      hint: 'dashboard ui'
    },
    {
      title: 'Project Gamma',
      slug: 'project-gamma',
      description: 'Creating an accessible design system for a large-scale e-commerce website to ensure inclusivity for all users.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Design System', 'Accessibility', 'E-commerce'],
      hint: 'design system'
    },
    {
      title: 'Project Delta',
      slug: 'project-delta',
      description: 'Conceptualizing and prototyping a new feature for a social media app to enhance user engagement.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Prototyping', 'UI Design', 'Social Media'],
      hint: 'mobile ui'
    },
    {
      title: 'Project Epsilon',
      slug: 'project-epsilon',
      description: 'Designing a gamified learning platform for a non-profit organization, increasing user engagement by 50%.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Gamification', 'UI Design', 'Non-profit'],
      hint: 'gamification ui'
    },
    {
      title: 'Project Zeta',
      slug: 'project-zeta',
      description: 'A data visualization dashboard for a fintech startup, simplifying complex financial data for investors.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Data Viz', 'Fintech', 'Dashboard'],
      hint: 'financial dashboard'
    }
  ];

  const blogs = [
    {
      title: 'The Art of User-Centric Design',
      slug: 'the-art-of-user-centric-design',
      description: 'Exploring the principles of putting users at the heart of the design process for better products.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Design Theory', 'UX'],
      hint: 'design book'
    },
    {
      title: 'Why Your Next Project Needs a Design System',
      slug: 'why-your-next-project-needs-a-design-system',
      description: 'A deep dive into how design systems create consistency and efficiency in product development.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Design System', 'Workflow'],
      hint: 'abstract pattern'
    },
    {
      title: 'From Wireframe to High-Fidelity',
      slug: 'from-wireframe-to-high-fidelity',
      description: 'A step-by-step guide on how to effectively move from low-fidelity sketches to polished prototypes.',
      image: 'https://placehold.co/600x400.png',
      tags: ['Prototyping', 'UI Design'],
      hint: 'wireframe sketch'
    }
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground font-body">
      <MouseFollower />
      <main className="container px-4 py-16 mx-auto md:px-8 z-10 relative">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl font-headline">
            Crafting Digital Product <br />
            with <span className="text-primary">Aminul Islam</span>
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
        <section id="work" className="py-20">
          <h2 className="mb-2 text-sm font-semibold tracking-widest text-center uppercase text-muted-foreground">Portfolio</h2>
          <h3 className="mb-12 text-3xl font-bold text-center md:text-4xl font-headline">Selected Work</h3>
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
