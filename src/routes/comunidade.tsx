import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Compass,
  Cpu,
  GitPullRequest,
  GraduationCap,
  Handshake,
  Lightbulb,
  Network,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import brandAsset from "@/assets/impulsa-brand.jpeg.asset.json";
import { Button } from "@/components/ui/button";

const TITLE = "Impulsa — Talent is everywhere. Opportunity should be too.";
const DESC =
  "Impulsa is a technology community democratizing access to knowledge, networks and opportunities for young talent from the periphery of São Paulo.";

export const Route = createFileRoute("/comunidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

const pillars: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: BookOpen, title: "Access to Knowledge", text: "Make learning resources, technical information, and career guidance easier to discover and understand." },
  { icon: Handshake, title: "Connections That Matter", text: "Help young people discover communities, collaborate with others, and connect with professionals and technology ecosystems." },
  { icon: Sprout, title: "Opportunities to Grow", text: "Encourage practical experience through projects, events, Open Source, hackathons, and career development resources." },
];

const stages = [
  { n: "01", title: "Discover", text: "Find information, learning resources, and career paths that may have been difficult to access." },
  { n: "02", title: "Learn", text: "Develop technical knowledge through courses, guided learning paths, and community resources." },
  { n: "03", title: "Connect", text: "Meet people, participate in events, collaborate on projects, and discover professional networks." },
  { n: "04", title: "Grow", text: "Build practical experience, strengthen confidence, and prepare to pursue new opportunities." },
];

const areas: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: GraduationCap, title: "Learning & Resources", text: "Curated courses, learning paths, technical guides, and educational materials." },
  { icon: GitPullRequest, title: "Open Source", text: "Opportunities to understand collaborative software development, explore repositories, and make contributions at different skill levels." },
  { icon: CalendarDays, title: "Events & Hackathons", text: "Workshops, collaborative challenges, meetups, and experiences that encourage practical learning." },
  { icon: Compass, title: "Career Opportunities", text: "Information about internships, programs, scholarships, challenges, and other opportunities." },
  { icon: Users, title: "Community & Collaboration", text: "A space to exchange knowledge, ask questions, share experiences, and learn with others." },
  { icon: Cpu, title: "Technology Exploration", text: "Resources covering software development, data, artificial intelligence, cloud computing, cybersecurity, and UX/UI design." },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">{children}</p>;
}

function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-border px-5 py-20 sm:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function BrandMark() {
  return (
    <div className="relative size-10 shrink-0 overflow-hidden rounded-md bg-brand-soft">
      <img src={brandAsset.url} alt="" className="absolute h-[300%] w-[300%] max-w-none -left-[13%] -top-[83%] object-cover" />
    </div>
  );
}

function NetworkVisual() {
  const nodes = [
    { x: 70, y: 300, label: "Periphery", main: true },
    { x: 150, y: 120, label: "East Zone" },
    { x: 260, y: 230, label: "Community" },
    { x: 380, y: 90, label: "Faria Lima", main: true },
    { x: 430, y: 260, label: "Berrini", main: true },
    { x: 300, y: 360, label: "South Zone", main: true },
  ];
  const links: [number, number, boolean][] = [
    [0, 2, true], [1, 2, false], [2, 3, true], [2, 4, true], [2, 5, true], [0, 5, false], [1, 3, false], [3, 4, false], [4, 5, false],
  ];
  return (
    <svg viewBox="0 0 500 420" role="img" aria-label="Abstract network connecting the periphery of São Paulo with Faria Lima, Berrini and the South Zone" className="h-auto w-full">
      <g className="text-border" stroke="currentColor" fill="none" strokeWidth="1">
        {[60, 120, 180].map((r) => <circle key={r} cx="260" cy="230" r={r} strokeDasharray="2 6" />)}
        <path d="M20 380 C 140 340, 200 400, 320 330 S 470 300, 490 200" strokeDasharray="1 5" />
        <path d="M30 60 C 120 90, 200 30, 300 70 S 450 140, 480 40" strokeDasharray="1 5" />
      </g>
      {links.map(([a, b, hot], i) => (
        <line key={i} x1={nodes[a]!.x} y1={nodes[a]!.y} x2={nodes[b]!.x} y2={nodes[b]!.y} stroke="currentColor" strokeWidth={hot ? 2 : 1} className={hot ? "text-primary" : "text-info"} strokeOpacity={hot ? 0.9 : 0.45} />
      ))}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r={n.main ? 9 : 5} className={n.main ? "fill-primary" : "fill-info"} />
          {n.main && <circle cx={n.x} cy={n.y} r="16" fill="none" stroke="currentColor" className="text-primary" strokeOpacity="0.35" />}
          <text x={n.x + 14} y={n.y - 12} className="fill-muted-foreground font-mono" fontSize="12">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

function CommunityPage() {
  return (
    <div className="dark min-h-dvh bg-background font-sans text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/comunidade" className="flex items-center gap-3 rounded-md">
            <BrandMark />
            <span className="font-display text-lg font-extrabold">IMPULSA</span>
          </Link>
          <nav aria-label="Main" className="flex items-center gap-1 text-sm">
            <a href="#mission" className="hidden rounded-md px-3 py-2 text-muted-foreground hover:text-foreground sm:block">Mission</a>
            <a href="#community" className="hidden rounded-md px-3 py-2 text-muted-foreground hover:text-foreground sm:block">Community</a>
            <Button asChild size="sm" variant="outline"><Link to="/">Impulsa Docs</Link></Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow>Technology · Access · Opportunity</Eyebrow>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
                Talent is everywhere. <span className="text-primary">Opportunity should be too.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-reading">
                Impulsa is a technology community working to democratize access to information, connect young talents from underserved communities with new opportunities, and help build bridges between the periphery and the technology ecosystem.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 px-6 shadow-brand"><a href="#mission">Discover Our Mission <ArrowRight /></a></Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6"><a href="#community">Explore the Community</a></Button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card/40 p-4 sm:p-6"><NetworkVisual /></div>
          </div>
        </section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>The challenge</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">Potential is not the problem. <span className="text-primary">Access is.</span></h2>
            </div>
            <div className="space-y-6 border-l-2 border-primary pl-6 text-lg leading-8 text-reading">
              <p>Many talented young people grow up far from the professional networks, learning resources, events, and opportunities that can help them enter the technology industry. The distance is not only geographical. It can also be a distance from information, mentorship, professional connections, and the confidence to take the next step.</p>
              <p>Impulsa wants to help reduce that distance by making knowledge easier to access and creating connections that allow young people to explore possibilities beyond the environments they already know.</p>
            </div>
          </div>
        </Section>

        <Section id="mission" className="bg-sidebar">
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Democratize knowledge. Connect people. <span className="text-primary">Expand possibilities.</span>
          </h2>
          <div className="mt-8 grid gap-6 text-lg leading-8 lg:grid-cols-2">
            <p className="text-foreground">Our mission is to democratize access to information and technology education for young people from low-income backgrounds, connecting talent from the periphery with knowledge, communities, networks, and opportunities that can expand their professional horizons.</p>
            <p className="text-reading">We believe that where someone comes from should not determine how far they can go. Access to information can open doors, community can strengthen confidence, and meaningful opportunities can transform potential into experience.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <Eyebrow>The bridge</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">Connecting different realities through shared opportunities.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-reading">Impulsa aims to make the technology ecosystem more accessible to young talents who have historically had fewer opportunities to connect with it. We want to help shorten the distance between where someone starts and the possibilities they can explore.</p>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <div aria-hidden="true" className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-primary to-border md:bottom-auto md:left-3 md:right-3 md:top-[11px] md:h-px md:w-auto md:bg-gradient-to-r" />
            {stages.map((s, i) => (
              <li key={s.n} className="relative pl-10 md:pl-0 md:pt-12">
                <span className={`absolute left-0 top-0 grid size-6 place-items-center rounded-full border-2 ${i === 3 ? "border-primary bg-primary" : "border-primary bg-background"}`} />
                <p className="font-mono text-sm text-primary">{s.n}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-muted-foreground">Impulsa helps people access and discover opportunities. It does not guarantee employment or placement at specific companies.</p>
        </Section>

        <Section id="community" className="bg-sidebar">
          <Eyebrow>What the community makes possible</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">More than learning technology. Building a future together.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-reading">Impulsa brings together learning, collaboration, and discovery to help young people explore the technology ecosystem and take practical steps toward their goals.</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
                <div className="grid size-11 place-items-center rounded-lg bg-primary-soft"><Icon className="size-5 text-primary" aria-hidden="true" /></div>
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-4xl text-center">
            <Lightbulb className="mx-auto size-8 text-primary" aria-hidden="true" />
            <Eyebrow><span className="mt-4 block">Our vision</span></Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">We envision a technology ecosystem with more open doors.</h2>
            <p className="mt-8 text-xl leading-9 text-reading">We want more young people to see themselves in technology, understand the paths available to them, and feel prepared to explore those paths. We believe a more connected ecosystem is one where knowledge circulates, opportunities become easier to discover, and talent from different backgrounds can participate and contribute.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
              {["Individuals", "Communities", "The technology ecosystem"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-muted-foreground"><Network className="size-4 text-primary" aria-hidden="true" />Benefits {t.toLowerCase()}</span>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-12">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">Your starting point should not define your <span className="text-primary">possibilities.</span></h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-reading">Knowledge opens paths. Connections help us move forward. Together, we can make the technology ecosystem more accessible to the next generation of talent.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="h-12 px-6 shadow-brand"><a href="#community">Explore Impulsa <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6"><Link to="/">Discover Learning Resources</Link></Button>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3"><BrandMark /><span className="font-display text-lg font-extrabold">IMPULSA</span></div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Democratizing access to knowledge, connections, and opportunities in technology.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="#mission" className="text-muted-foreground hover:text-foreground">About</a>
            <Link to="/" className="text-muted-foreground hover:text-foreground">Learning Resources</Link>
            <Link to="/" search={{ doc: "o-que-e-open-source" }} className="text-muted-foreground hover:text-foreground">Open Source</Link>
            <span className="text-muted-foreground/70">Events (coming soon)</span>
            <span className="text-muted-foreground/70">Opportunities (coming soon)</span>
          </nav>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">© {new Date().getFullYear()} Impulsa. All rights reserved.</p>
      </footer>
    </div>
  );
}
