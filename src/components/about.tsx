export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Philosophy
          </span>
          <h2 className="mt-1 font-display text-3xl tracking-tight sm:text-4xl">
            Why Toolbox Lite
          </h2>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          <div className="group">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-lg text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
              &rarr;
            </div>
            <h3 className="font-display text-lg tracking-tight">No sign-up</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Open a tool, use it, leave. No accounts, no email gates, no
              friction. Your time matters more than our metrics.
            </p>
          </div>

          <div className="group">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sage-muted text-lg text-sage transition-colors group-hover:bg-sage group-hover:text-white">
              &bull;
            </div>
            <h3 className="font-display text-lg tracking-tight">Privacy first</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Most tools run entirely in your browser. When we need a server,
              your data is processed and forgotten — never stored or sold.
            </p>
          </div>

          <div className="group">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-lg text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
              +
            </div>
            <h3 className="font-display text-lg tracking-tight">Always growing</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              New tools land regularly. From AI-powered utilities to developer
              essentials — the collection keeps expanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
