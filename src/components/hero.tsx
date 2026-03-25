import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-24 text-center sm:px-6 sm:pb-24 sm:pt-32">
      <Badge
        variant="secondary"
        className="animate-fade-up bg-brand-muted text-brand mb-6 border-transparent px-4 py-1.5 text-sm font-medium"
      >
        14+ Free Tools — No Sign-up Required
      </Badge>
      <h1 className="animate-fade-up animation-delay-100 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Your AI-Powered
        <br />
        <span className="text-brand">Online Toolbox</span>
      </h1>
      <p className="animate-fade-up animation-delay-200 mt-6 max-w-xl text-lg text-muted-foreground">
        Free, fast, and private. Every tool runs in your browser or on our
        secure API. No accounts, no limits.
      </p>
      <a
        href="#tools"
        className="animate-fade-up animation-delay-300 mt-8 inline-flex h-11 items-center rounded-lg bg-brand px-6 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
      >
        Browse Tools &darr;
      </a>
    </section>
  );
}
