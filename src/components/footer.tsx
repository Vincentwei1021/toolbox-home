import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Brand */}
          <div>
            <span className="font-display text-lg tracking-tight text-foreground">
              Toolbox<span className="text-brand"> Lite</span>
            </span>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Free, fast, and privacy-respecting online tools. Built for
              everyone.
            </p>
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="rounded-md px-2 py-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="rounded-md px-2 py-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Toolbox Lite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
