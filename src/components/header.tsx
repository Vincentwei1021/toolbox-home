import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="text-lg font-bold text-brand">
          Toolbox Lite
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#tools"
            className="inline-flex h-11 items-center px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tools
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
