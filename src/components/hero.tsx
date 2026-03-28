export function Hero() {
  return (
    <section className="stripe-accent relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
      <div className="flex flex-col items-start gap-6">
        {/* Eyebrow */}
        <div className="animate-rise flex items-center gap-3">
          <span className="h-px w-8 bg-brand" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            12 Free Tools
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-rise delay-1 max-w-2xl font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Your everyday
          <br />
          <span className="text-brand">digital workshop</span>
        </h1>

        {/* Subtext */}
        <p className="animate-rise delay-2 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Free, fast, and private. Every tool runs in your browser or on our
          secure API — no accounts, no limits.
        </p>

        {/* CTA */}
        <a
          href="#tools"
          className="animate-rise delay-3 group mt-2 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-all hover:gap-3 hover:bg-brand/90 active:scale-[0.98]"
        >
          Browse all tools
          <span className="cta-arrow" aria-hidden="true">&darr;</span>
        </a>

        {/* Decorative counter */}
        <div className="animate-rise delay-4 mt-8 flex items-end gap-3 border-t border-border pt-6">
          <span className="font-display text-5xl leading-none tracking-tight text-foreground/15 sm:text-6xl">
            12
          </span>
          <span className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            tools &<br />counting
          </span>
        </div>
      </div>
    </section>
  );
}
