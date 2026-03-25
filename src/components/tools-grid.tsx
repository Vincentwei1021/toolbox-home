"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10 flex items-center gap-3">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">All Tools</h2>
        <Badge variant="secondary" className="bg-brand-muted text-brand border-transparent text-xs">
          {tools.length}
        </Badge>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {tools.map((tool, i) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${visible ? "animate-fade-in-up" : "opacity-0"}`}
            style={visible ? { animationDelay: `${i * 50}ms` } : undefined}
          >
            <Card className="h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-brand/20 group-hover:shadow-md">
              <CardContent className="flex flex-col gap-2 pt-2">
                <span className="text-3xl" role="img" aria-label={tool.name}>
                  {tool.emoji}
                </span>
                <span className="text-base font-semibold">{tool.name}</span>
                <span className="text-sm text-muted-foreground">
                  {tool.desc}
                </span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
