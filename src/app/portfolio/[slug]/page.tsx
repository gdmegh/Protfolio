
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Zap } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';

const allProjects = [
    {
      title: 'Project Alpha',
      slug: 'project-alpha',
      description: 'A mobile app designed to streamline team collaboration and project management, boosting productivity by 20%.',
      longDescription: "<p>Project Alpha was born from the need to simplify the chaotic world of project management for small, agile teams. Traditional tools were often too complex or too simple. We aimed to find the sweet spot.</p><p>Our process began with extensive user research, including interviews and surveys with project managers and team members across various industries. We discovered key pain points were communication overhead and lack of clarity on task ownership. We developed a mobile-first application with a highly intuitive interface, drag-and-drop task boards, and integrated real-time chat. The result was a tool that felt both powerful and effortless, leading to a significant boost in user-reported productivity.</p>",
      image: 'https://placehold.co/600x400.png',
      tags: ['UX Design', 'Mobile App', 'Case Study'],
      hint: 'tech product',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'mobile app screen' },
        { src: 'https://placehold.co/1200x800.png', hint: 'app analytics dashboard' },
        { src: 'https://placehold.co/1200x800.png', hint: 'user profile ui' },
      ],
      metrics: [
        { title: 'Productivity Boost', value: '+20%', icon: Zap },
        { title: 'User Adoption', value: '10k+ Teams', icon: Users },
        { title: 'Core Challenge', value: 'Streamline Collaboration', icon: Target },
      ]
    },
    {
      title: 'Project Beta',
      slug: 'project-beta',
      description: 'A complete redesign of a SaaS platform\'s user onboarding flow, resulting in a 35% increase in user retention.',
      longDescription: "<p>The primary challenge for Project Beta was high user drop-off during the initial onboarding phase. The existing flow was confusing and overwhelming for new users.</p><p>We took a data-driven approach, analyzing user behavior funnels and heatmaps to pinpoint exact drop-off points. Our redesign focused on a guided, step-by-step tour, interactive tutorials, and personalized setup checklists. By breaking down the process into manageable chunks and providing immediate value, we successfully increased user retention by 35% within the first month post-launch.</p>",
      image: 'https://placehold.co/600x400.png',
      tags: ['UX Research', 'Web App', 'SaaS'],
      hint: 'dashboard ui',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'saas dashboard' },
        { src: 'https://placehold.co/1200x800.png', hint: 'onboarding flow' },
        { src: 'https://placehold.co/1200x800.png', hint: 'user analytics chart' },
      ],
      metrics: [
        { title: 'Retention Increase', value: '+35%', icon: Zap },
        { title: 'Active Users', value: '50k+', icon: Users },
        { title: 'Core Challenge', value: 'Improve Onboarding', icon: Target },
      ]
    },
    {
      title: 'Project Gamma',
      slug: 'project-gamma',
      description: 'Creating an accessible design system for a large-scale e-commerce website to ensure inclusivity for all users.',
      longDescription: "<p>Project Gamma addressed the critical need for an accessible and consistent user experience across a massive e-commerce platform. The lack of a unified design system led to inconsistencies and significant accessibility gaps.</p><p>Our team developed a comprehensive design system from the ground up, with a strong focus on WCAG 2.1 AA compliance. This involved creating a library of reusable components, defining clear style guidelines, and documenting best practices for accessibility. The new system not only made the site accessible to a wider audience but also accelerated the development process for new features by over 40%.</p>",
      image: 'https://placehold.co/600x400.png',
      tags: ['Design System', 'Accessibility', 'E-commerce'],
      hint: 'design system',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'design system components' },
        { src: 'https://placehold.co/1200x800.png', hint: 'color palette styleguide' },
        { src: 'https://placehold.co/1200x800.png', hint: 'typography examples' },
      ],
      metrics: [
        { title: 'Development Speed', value: '+40%', icon: Zap },
        { title: 'Audience Reach', value: 'WCAG 2.1 AA', icon: Users },
        { title: 'Core Challenge', value: 'Ensure Inclusivity', icon: Target },
      ]
    },
    {
      title: 'Project Delta',
      slug: 'project-delta',
      description: 'Conceptualizing and prototyping a new feature for a social media app to enhance user engagement.',
      longDescription: "<p>Project Delta was an exploratory project to conceptualize a new feature aimed at increasing user engagement on a popular social media platform. The goal was to create a more meaningful way for users to interact with content.</p><p>Through brainstorming sessions, user journey mapping, and rapid prototyping, we developed a concept for 'Collaborative Stories.' This feature allowed multiple users to contribute to a single story, creating a shared narrative. High-fidelity prototypes were tested with user groups, showing a potential 25% increase in session duration and positive qualitative feedback on the feature's novelty and fun factor.</p>",
      image: 'https://placehold.co/600x400.png',
      tags: ['Prototyping', 'UI Design', 'Social Media'],
      hint: 'mobile ui',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'social media app' },
        { src: 'https://placehold.co/1200x800.png', hint: 'user feed' },
        { src: 'https://placehold.co/1200x800.png', hint: 'collaboration feature' },
      ],
      metrics: [
        { title: 'Engagement Lift', value: '+25%', icon: Zap },
        { title: 'User Feedback', value: 'Positive', icon: Users },
        { title: 'Core Challenge', value: 'Enhance Interaction', icon: Target },
      ]
    },
    {
      title: 'Project Epsilon',
      slug: 'project-epsilon',
      description: 'Designing a gamified learning platform for a non-profit organization, increasing user engagement by 50%.',
      longDescription: "<p>A non-profit organization approached us to make their educational content more engaging for a younger audience. Project Epsilon was our answer: a gamified learning platform.</p><p>We introduced elements like points, badges, leaderboards, and learning streaks to motivate users. The UI was designed to be vibrant and encouraging. The platform was built as a progressive web app to ensure accessibility on all devices. Post-launch, the platform saw a 50% increase in daily active users and a 70% increase in course completion rates, demonstrating the power of gamification in education.</p>",
      image: 'https://placehold.co/600x400.png',
      tags: ['Gamification', 'UI Design', 'Non-profit'],
      hint: 'gamification ui',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'learning app interface' },
        { src: 'https://placehold.co/1200x800.png', hint: 'gamified badges' },
        { src: 'https://placehold.co/1200x800.png', hint: 'leaderboard screen' },
      ],
      metrics: [
        { title: 'Engagement Up', value: '+50%', icon: Zap },
        { title: 'Completion Rate', value: '+70%', icon: Users },
        { title: 'Core Challenge', value: 'Motivate Learners', icon: Target },
      ]
    },
    {
      title: 'Project Zeta',
      slug: 'project-zeta',
      description: 'A data visualization dashboard for a fintech startup, simplifying complex financial data for investors.',
      longDescription: "<p>Project Zeta tackled the challenge of presenting complex financial data in a way that was both powerful for expert investors and understandable for novices. The goal was to create a dashboard that demystified market trends.</p><p>We designed a highly interactive dashboard featuring customizable charts, real-time data streams, and clear visual indicators for market movements. A key innovation was the 'Insight' panel, which used natural language generation to summarize key data points. The final product was praised for its clarity and power, helping the fintech startup secure its next round of funding.</p>",
      image: 'https://placehold.co/600x400.png',
      tags: ['Data Viz', 'Fintech', 'Dashboard'],
      hint: 'financial dashboard',
      mockupImages: [
        { src: 'https://placehold.co/1200x800.png', hint: 'financial data chart' },
        { src: 'https://placehold.co/1200x800.png', hint: 'investment dashboard' },
        { src: 'https://placehold.co/1200x800.png', hint: 'stock market graph' },
      ],
      metrics: [
        { title: 'Data Clarity', value: 'High', icon: Zap },
        { title: 'User Base', value: 'Investors', icon: Users },
        { title: 'Core Challenge', value: 'Simplify Complexity', icon: Target },
      ]
    }
  ];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects.filter((p) => p.slug !== params.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="container mx-auto px-4 py-16 md:px-8">
        <article>
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl font-headline">{project.title}</h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">{project.description}</p>
            <div className="flex justify-center flex-wrap gap-2 mt-4">
              {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          </header>

          <div className="mb-12">
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

          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
             <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
          </div>
        </article>

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
