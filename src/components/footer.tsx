import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto">
      <Separator />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>&copy; 2026 Toolbox Lite</p>
        <div className="flex gap-2">
          <a href="/privacy" className="rounded-lg px-3 py-3 transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="/terms" className="rounded-lg px-3 py-3 transition-colors hover:text-foreground">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
