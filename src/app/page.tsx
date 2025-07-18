import { ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/icons';

export default function Home() {
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
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 border-b bg-background/80 backdrop-blur-sm sm:px-6 md:px-8">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-primary" />
          <h1 className="text-xl font-bold font-headline">Jane Doe</h1>
        </div>
        <nav className="items-center hidden gap-6 text-sm font-medium md:flex">
          <a href="#work" className="hover:text-primary">Work</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <Button asChild className="hidden md:flex">
          <a href="mailto:hello@janedoe.com">
            Get in Touch
            <Mail className="ml-2" />
          </a>
        </Button>
      </header>

      <main className="container px-4 py-16 mx-auto md:px-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <Image
            src="https://placehold.co/128x128.png"
            alt="Jane Doe"
            width={128}
            height={128}
            className="mx-auto rounded-full mb-6"
            data-ai-hint="person avatar"
          />
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl font-headline">
            Product Designer Crafting <br />
            <span className="text-primary">Intuitive</span> Digital Experiences
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
            I specialize in turning complex problems into simple, beautiful, and user-centric designs. Explore my work to see how I approach design challenges.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg" asChild>
              <a href="#work">
                View My Work
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="py-20">
          <h2 className="mb-2 text-sm font-semibold tracking-widest text-center uppercase text-muted-foreground">Selected Work</h2>
          <h3 className="mb-12 text-3xl font-bold text-center md:text-4xl font-headline">Case Studies</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
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

        {/* About Section */}
        <section id="about" className="py-20">
           <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-2 text-sm font-semibold tracking-widest uppercase text-muted-foreground">About Me</h2>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl font-headline">A Passion for Problem-Solving</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Jane, a product designer with a knack for understanding user needs and translating them into functional and delightful digital products. My journey into design began with a fascination for how technology can improve people's lives, and that curiosity continues to drive my work today.
                </p>
                <p>
                  I thrive in collaborative environments, working alongside engineers, product managers, and stakeholders to ship high-quality products. My process is rooted in research, iteration, and a deep sense of empathy for the end-user.
                </p>
                <p>When I'm not designing, you can find me exploring new hiking trails, trying out new recipes, or getting lost in a good book.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/400x500.png"
                alt="Jane Doe working"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
                data-ai-hint="person working"
              />
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer / Contact Section */}
      <footer id="contact" className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline">Let's build something great together.</h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="mailto:hello@janedoe.com">
                <Mail className="mr-2" />
                hello@janedoe.com
              </a>
            </Button>
          </div>
          <div className="mt-12 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jane Doe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
