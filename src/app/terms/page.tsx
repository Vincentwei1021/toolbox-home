import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service — Toolbox Lite",
  description: "Terms of service for Toolbox Lite and all associated tools.",
  alternates: { canonical: "https://toolboxlite.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>
            <strong className="text-foreground">Last updated:</strong> March 25,
            2026
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Acceptance of Terms
          </h2>
          <p>
            By accessing and using Toolbox Lite and any of its associated tools,
            you agree to be bound by these terms of service. If you do not agree
            to these terms, please do not use our services.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Use of Services
          </h2>
          <p>
            Toolbox Lite provides free online tools for personal and commercial
            use. You agree to use these tools responsibly and not to misuse or
            abuse our services.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Disclaimer of Warranties
          </h2>
          <p>
            Our tools are provided &ldquo;as is&rdquo; without warranties of
            any kind, either express or implied. We do not guarantee that our
            tools will be error-free, uninterrupted, or meet your specific
            requirements.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Limitation of Liability
          </h2>
          <p>
            Toolbox Lite shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use
            of or inability to use our services.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of our services after changes constitutes acceptance of the
            updated terms.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            If you have questions about these terms, please reach out through
            our website.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
