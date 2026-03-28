"use client";

import { useEffect, useRef, useState } from "react";
import { tools } from "@/lib/tools";

export function ToolsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const hero = tools[0];
  const rest = tools.slice(1);

  return (
    <section id="tools" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      {/* Section header */}
      <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Catalog
          </span>
          <h2 className="mt-1 font-display text-3xl tracking-tight sm:text-4xl">
            All Tools
          </h2>
        </div>
        <span className="mb-1 rounded-full bg-brand-muted px-3 py-1 text-xs font-semibold text-brand">
          {tools.length}
        </span>
      </div>

      <div ref={gridRef}>
        {/* Featured first tool — full-width horizontal layout */}
        <a
          href={hero.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`tool-card group relative mb-4 flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-brand" aria-hidden="true" />
          <span className="tool-emoji text-5xl sm:text-6xl" aria-hidden="true">
            {hero.emoji}
          </span>
          <div className="mt-4 flex-1 sm:mt-0">
            <span className="font-display block text-2xl tracking-tight sm:text-3xl">
              {hero.name}
            </span>
            <span className="mt-1 block text-base text-muted-foreground">
              {hero.desc}
            </span>
          </div>
          <span
            className="mt-4 self-end text-lg text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-brand sm:mt-0 sm:self-center"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </a>

        {/* Remaining tools — varied grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((tool, i) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`tool-card group relative overflow-hidden rounded-xl border border-border bg-card p-5 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={visible ? { animationDelay: `${(i + 1) * 60}ms` } : undefined}
            >
              <div className="flex items-start gap-4">
                <span className="tool-emoji inline-block text-3xl" aria-hidden="true">
                  {tool.emoji}
                </span>
                <div className="flex-1">
                  <span className="font-display block text-base tracking-tight">
                    {tool.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {tool.desc}
                  </span>
                </div>
                <span
                  className="mt-auto self-end text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
