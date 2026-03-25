# TASK: Toolbox Lite Homepage — toolboxlite.com

## Objective
Build a professional landing page showcasing all 15 tools in the Toolbox Lite ecosystem. Think: Vercel's product page meets Raycast's tool directory — clean, fast, professional.

## Tech Stack
- Next.js 14+ (App Router) + TypeScript + Tailwind CSS
- shadcn/ui components
- next-themes for dark/light mode
- Inter font via next/font/google
- Deploy to Vercel

## Step 1: Install Dependencies

```bash
npx shadcn@latest init --defaults
npx shadcn@latest add button card badge separator input
npm install next-themes lucide-react
npx shadcn@latest add sonner
```

## Step 2: Design System

### Brand Color
- Brand: oklch(0.55 0.22 262) — same blue as QR Forge (this is the parent brand)
- Brand foreground: white
- Brand muted: brand / 10%

### Color Palette (oklch)
Light mode:
- Background: white oklch(1 0 0)
- Foreground: near-black oklch(0.145 0 0)
- Cards: white with subtle border
- Muted: oklch(0.97 0 0)
- Muted-foreground: oklch(0.50 0 0)

Dark mode:
- Background: oklch(0.13 0.005 262) — subtle blue tint
- Cards: oklch(0.16 0.005 262)
- Foreground: oklch(0.985 0 0)
- Brand: oklch(0.65 0.22 262) — brighter for contrast

### Typography
- Inter for everything
- Hero: text-5xl sm:text-6xl font-bold tracking-tight
- Tool names: text-base font-semibold
- Descriptions: text-sm text-muted-foreground

## Step 3: Page Structure

### layout.tsx
- Inter font loaded via next/font/google
- ThemeProvider from next-themes (attribute="class", defaultTheme="system", enableSystem)
- Toaster from sonner
- AdSense script: `<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876" crossOrigin="anonymous" strategy="afterInteractive" />`
- SEO metadata:
  - title: "Toolbox Lite — Free AI-Powered Online Tools"
  - description: "15+ free online tools powered by AI. QR codes, email validation, translation, PDF extraction, screenshots, and more. No sign-up required."
  - keywords: relevant tool keywords
  - metadataBase: new URL("https://toolboxlite.com")
  - openGraph with proper og image
  - twitter card

### page.tsx — Main Homepage

#### Header (sticky)
- Logo: "⚡ Toolbox Lite" — text-brand font-bold
- Nav: "Tools" anchor link to #tools section
- ThemeToggle button (h-11 w-11 for 44px touch target)
- Backdrop-blur, border-b

#### Hero Section
- Stagger fade-up animation (badge → h1 → subtitle → CTA)
- Badge: "⚡ 15+ Free Tools — No Sign-up Required" — brand-muted bg
- h1: "Your AI-Powered" / "Online Toolbox" — second line in text-brand
- Subtitle: "Free, fast, and private. Every tool runs in your browser or on our secure API. No accounts, no limits." — text-muted-foreground text-lg
- CTA: "Browse Tools ↓" — brand bg button linking to #tools
- Clean, spacious, max-w-3xl centered

#### Tools Grid Section (id="tools")
- Section title: "All Tools" with tool count badge
- Responsive grid: 1 col mobile, 2 cols sm, 3 cols lg
- Each tool card (shadcn Card component):
  - Emoji (text-3xl) at top
  - Tool name (font-semibold)
  - One-line description (text-sm text-muted-foreground)
  - Entire card is a clickable link (target="_blank" for external subdomains)
  - Hover: shadow-md + border-brand/20 + subtle lift (-translate-y-0.5)
  - Transition: smooth 200ms
- Scroll-triggered fade-in for the grid

#### Tool Data (inline array or separate data file)
```typescript
const tools = [
  { name: "QR Forge", emoji: "🔲", url: "https://qr.toolboxlite.com", desc: "Free QR code generator with custom colors and formats" },
  { name: "MailCheck", emoji: "✉️", url: "https://email.toolboxlite.com", desc: "Validate email addresses instantly" },
  { name: "SummarizeIt", emoji: "📄", url: "https://summarize.toolboxlite.com", desc: "AI-powered text summarization" },
  { name: "ScreenSnap", emoji: "📸", url: "https://screenshot.toolboxlite.com", desc: "Capture website screenshots instantly" },
  { name: "PDFPull", emoji: "📑", url: "https://pdf.toolboxlite.com", desc: "Extract text from PDF documents" },
  { name: "TranslateNow", emoji: "🌍", url: "https://translate.toolboxlite.com", desc: "AI-powered multi-language translation" },
  { name: "IP Geek", emoji: "🌐", url: "https://ip.toolboxlite.com", desc: "IP address lookup and geolocation" },
  { name: "JSON Pretty", emoji: "🔤", url: "https://json.toolboxlite.com", desc: "Format and validate JSON data" },
  { name: "Epoch Now", emoji: "⏱️", url: "https://epoch.toolboxlite.com", desc: "Unix timestamp converter" },
  { name: "Color Switch", emoji: "🎨", url: "https://color.toolboxlite.com", desc: "Convert between color formats" },
  { name: "Price Widget", emoji: "💰", url: "https://price.toolboxlite.com", desc: "Quick price calculations" },
  { name: "Daily Oracle", emoji: "🔮", url: "https://fortune.toolboxlite.com", desc: "Draw your daily fortune reading" },
  { name: "Agent Globe", emoji: "🌍", url: "https://globe.toolboxlite.com", desc: "3D map of AI agents worldwide" },
  { name: "AI Daily", emoji: "📰", url: "https://ai-daily-eight-mu.vercel.app", desc: "Daily AI industry news digest" },
  { name: "Lobster Quiz", emoji: "🦞", url: "https://openclaw-quiz.vercel.app", desc: "Fun AI personality quiz" },
];
```

#### About Section
- Brief paragraph about Toolbox Lite
- "All tools are free, require no sign-up, and respect your privacy."
- Clean typography, brand color for emphasis

#### Footer
- "© 2026 Toolbox Lite"
- Links: Privacy, Terms
- border-t, minimal

### Privacy + Terms pages
- /privacy — standard privacy policy (same pattern as QR Forge)
- /terms — standard terms of service

### SEO
- sitemap.ts with all pages
- robots.ts allowing all
- JSON-LD WebSite schema
- Proper canonical URLs

## Step 4: Animations
- Hero: stagger fade-up (4 elements, 100ms intervals)
- Tool cards: scroll-triggered fade-in with stagger
- Card hover: shadow + lift + brand border tint
- Page load: subtle fade-in for main content
- All CSS-only (no framer-motion)

## Step 5: Responsive
- Mobile: single column tools grid, full-width cards
- Touch targets: all links/buttons ≥ 44px
- Hero text sizes scale down on mobile

## Step 6: Build & Deploy
```bash
npm run build  # Must pass cleanly
npx vercel --prod
```

## Step 7: Git
```bash
gh repo create Vincentwei1021/toolbox-home --public --source=. --push
```
Or if repo exists: `git remote add origin ... && git push`

## What NOT to do
- No complex features — this is a STATIC landing page
- No API routes (except maybe feedback)
- No heavy dependencies
- No animations that compete with content
- Keep it fast: Lighthouse > 90
