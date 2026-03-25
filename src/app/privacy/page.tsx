import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Toolbox Lite",
  description: "Privacy policy for Toolbox Lite and all associated tools.",
  alternates: { canonical: "https://toolboxlite.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p>
            <strong className="text-foreground">Last updated:</strong> March 25,
            2026
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Information We Collect
          </h2>
          <p>
            Toolbox Lite is designed with privacy in mind. Most of our tools run
            entirely in your browser. We do not require account creation or
            collect personal information to use our tools.
          </p>
          <p>
            We may collect anonymous usage data through standard web analytics
            to improve our services. This includes page views, browser type, and
            general geographic location.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            How We Use Your Data
          </h2>
          <p>
            Any data you input into our tools is processed to provide results
            and is not stored on our servers unless explicitly stated. We do not
            sell, share, or distribute your data to third parties.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
          <p>
            We use minimal cookies for functionality such as theme preference.
            Third-party services like Google AdSense may use cookies for
            advertising. You can manage cookie preferences in your browser
            settings.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Third-Party Services
          </h2>
          <p>
            We use Google AdSense for advertising and may use analytics services
            to understand usage patterns. These services have their own privacy
            policies.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            If you have questions about this privacy policy, please reach out
            through our website.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
