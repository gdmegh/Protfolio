
import { ProductIdeaForm } from "@/components/product-idea-form";

export default function SubmitIdeaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <main className="container mx-auto px-4 py-16 md:px-8">
        <div className="mx-auto max-w-2xl">
          <ProductIdeaForm />
        </div>
      </main>
    </div>
  );
}
