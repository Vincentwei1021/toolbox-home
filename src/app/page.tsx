import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ToolsGrid } from "@/components/tools-grid";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ToolsGrid />
        <About />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Toolbox Lite",
            url: "https://toolboxlite.com",
            description:
              "14+ free online tools powered by AI. QR codes, email validation, translation, PDF extraction, screenshots, and more.",
          }),
        }}
      />
    </>
  );
}
