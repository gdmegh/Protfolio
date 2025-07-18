
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="container px-4 py-16 mx-auto md:px-8">
        <section id="about" className="py-20">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-2 text-sm font-semibold tracking-widest uppercase text-muted-foreground">About Me</h2>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl font-headline">A Passion for Problem-Solving</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Aminul, a product designer with a knack for understanding user needs and translating them into functional and delightful digital products. My journey into design began with a fascination for how technology can improve people's lives, and that curiosity continues to drive my work today.
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
                alt="Aminul Islam working"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
                data-ai-hint="person working"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
