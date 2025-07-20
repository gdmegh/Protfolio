
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="container px-4 py-16 mx-auto md:px-8">
        <section id="about" className="py-20">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src="/assets/images/aminul-islam.png"
                alt="Aminul Islam"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
                data-ai-hint="person"
              />
            </div>
            <div>
              
              <h3 className="mb-2 text-4xl font-bold font-headline">I'm<span style={{ color: 'goldenrod' }}> Aminul Islam</span></h3>
              <p className="mb-6 text-xl font-medium text-muted-foreground">Creative Product Designer</p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Expertise in creating intuitive and engaging digital experiences. With a focus on user-centered design, I strive to bridge the gap between complex problems and elegant solutions. My approach involves thorough research, iterative prototyping, and close collaboration with development teams to bring ideas to life.
                </p>
                <p>
                  My passion lies in crafting products that not only meet user needs but also exceed expectations. I believe in the power of design to make technology more accessible and enjoyable for everyone.
                </p>
                <p>Outside of design, I enjoy exploring the outdoors, experimenting in the kitchen, and getting lost in the pages of a good book.</p>
              </div>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="https://linkedin.com/in/gdmegh" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                    Connect on LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
