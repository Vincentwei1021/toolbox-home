"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg transition-shadow duration-300 ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="brand-link font-display text-xl tracking-tight text-foreground">
          Toolbox<span className="text-brand"> Lite</span>
        </Link>
        <nav className="flex items-center gap-1">
          <a
            href="#tools"
            className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tools
          </a>
          <a
            href="#about"
            className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
