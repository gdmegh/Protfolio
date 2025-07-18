
import { Button } from './ui/button';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer id="contact" className="py-12 bg-secondary/50 text-secondary-foreground z-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold font-headline">Let's build something great together.</h2>
        <p className="max-w-xl mx-auto mt-4 text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
        <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/submit-idea">Let's create a product</Link>
            </Button>
        </div>
        <div className="mt-12 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aminul Islam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
