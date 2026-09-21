import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  CircleHelp,
  Copy,
  Github,
  Info,
  Menu,
  Moon,
  Network,
  Orbit,
  Rocket,
  Search,
  Sun,
  X,
  Zap,
} from "lucide-react";
import brandAsset from "@/assets/impulsa-brand.jpeg.asset.json";
import { docs, completeDocs, getDoc, navGroups, type DocPage, type DocSection } from "@/lib/docs-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type AppSearch = { doc?: string };
type FontSize = "small" | "base" | "large";

const journey = ["Aprender", "Praticar", "Contribuir", "Receber feedback", "Registrar experiência"];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="relative size-10 shrink-0 overflow-hidden rounded-md bg-brand-soft">
        <img src={brandAsset.url} alt="" className="absolute h-[300%] w-[300%] max-w-none -left-[13%] -top-[83%] object-cover" />
      </div>
      {!compact && <div className="min-w-0"><div className="truncate font-display text-lg font-bold text-foreground">IMPULSA <span className="text-primary">DOCS</span></div><div className="text-[11px] font-semibold uppercase text-muted-foreground">Open Source sem mistério</div></div>}
    </div>
  );
}

function CodeBlock({ language, value }: { language: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="my-5 overflow-hidden rounded-md border border-code-border bg-code">
      <div className="flex items-center justify-between border-b border-code-border px-4 py-2">
        <span className="font-mono text-xs font-medium text-code-muted">{language}</span>
        <Button variant="ghost" size="sm" onClick={copy} className="h-8 text-code-muted hover:bg-code-hover hover:text-code-foreground" aria-label="Copiar código">
          {copied ? <Check /> : <Copy />}<span>{copied ? "Copiado" : "Copiar"}</span>
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-7 text-code-foreground"><code>{value}</code></pre>
    </div>
  );
}

function Callout({ callout }: { callout: NonNullable<DocSection["callout"]> }) {
  const Icon = callout.kind === "warning" ? CircleAlert : callout.kind === "tip" ? Zap : Info;
  return <div className={cn("my-5 flex gap-3 rounded-md border-l-4 p-4", callout.kind === "warning" ? "border-l-warning bg-warning-soft" : callout.kind === "tip" ? "border-l-primary bg-primary-soft" : "border-l-info bg-info-soft")}><Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" /><div><p className="font-semibold text-foreground">{callout.title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{callout.text}</p></div></div>;
}

function DocSectionView({ section }: { section: DocSection }) {
  return <section className="scroll-mt-24 border-t border-border py-8 first:border-0 first:pt-0"><h2 className="font-display text-2xl font-bold text-foreground">{section.title}</h2>{section.body?.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-reading">{paragraph}</p>)}{section.bullets && <ul className="mt-4 space-y-3">{section.bullets.map((item) => <li key={item} className="flex gap-3 leading-7 text-reading"><CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul>}{section.callout && <Callout callout={section.callout} />}{section.code && <CodeBlock {...section.code} />}{section.table && <div className="mt-5 overflow-x-auto rounded-md border border-border"><table className="w-full min-w-[520px] border-collapse text-left text-sm"><thead className="bg-muted"> <tr>{section.table.headers.map((header) => <th key={header} className="border-b border-border px-4 py-3 font-semibold text-foreground">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row.join("-")} className="border-b border-border last:border-0">{row.map((cell) => <td key={cell} className="px-4 py-3 leading-6 text-reading">{cell}</td>)}</tr>)}</tbody></table></div>}{section.checklist && <ul className="mt-5 space-y-2 rounded-md border border-border bg-card p-4">{section.checklist.map((item) => <li key={item} className="flex items-start gap-3 py-1 text-reading"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-sm border border-primary text-primary"><Check className="size-3" /></span>{item}</li>)}</ul>}</section>;
}

function SearchDialog({ open, onOpenChange, onSelect }: { open: boolean; onOpenChange: (open: boolean) => void; onSelect: (slug: string) => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return completeDocs.slice(0, 7);
    return docs.filter((page) => `${page.title} ${page.description} ${page.keywords.join(" ")}`.toLowerCase().includes(normalized)).slice(0, 8);
  }, [query]);
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="top-[12%] translate-y-0 gap-0 overflow-hidden border-border p-0 sm:max-w-2xl"><DialogHeader className="sr-only"><DialogTitle>Buscar na documentação</DialogTitle><DialogDescription>Digite uma dúvida ou assunto.</DialogDescription></DialogHeader><div className="flex items-center gap-3 border-b border-border px-4"><Search className="size-5 text-muted-foreground" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por uma dúvida, comando ou conceito..." aria-label="Buscar na documentação" className="h-14 min-w-0 flex-1 bg-transparent text-base text-foreground outline-hidden placeholder:text-muted-foreground" /><kbd className="hidden rounded border border-border bg-muted px-2 py-1 font-mono text-xs text-muted-foreground sm:block">ESC</kbd></div><div className="max-h-[55vh] overflow-y-auto p-2">{results.length ? results.map((page) => <Button key={page.slug} variant="ghost" onClick={() => { onSelect(page.slug); onOpenChange(false); setQuery(""); }} className="h-auto w-full justify-start whitespace-normal px-3 py-3 text-left"><BookOpen className="size-4 shrink-0 text-primary" /><span className="min-w-0"><span className="block font-medium text-foreground">{page.title}</span><span className="mt-0.5 block text-xs font-normal text-muted-foreground">{page.description}</span></span></Button>) : <div className="px-4 py-10 text-center"><CircleHelp className="mx-auto size-6 text-muted-foreground" /><p className="mt-3 font-medium">Nenhum resultado encontrado</p><p className="mt-1 text-sm text-muted-foreground">Tente buscar por “fork”, “branch” ou “commit”.</p></div>}</div></DialogContent></Dialog>;
}

function SidebarNav({ current, onSelect, onClose }: { current?: string; onSelect: (slug: string) => void; onClose?: () => void }) {
  return <div className="flex h-full flex-col bg-sidebar"><div className="flex h-20 items-center justify-between border-b border-sidebar-border px-5"><Logo />{onClose && <Button variant="ghost" size="icon" onClick={onClose} aria-label="Fechar menu" className="min-h-11 min-w-11"><X /></Button>}</div><div className="flex-1 overflow-y-auto px-3 py-5"><nav aria-label="Documentação" className="space-y-5">{navGroups.map((group) => { const Icon = group.icon; return <div key={group.title}><div className="mb-1 flex items-center gap-2 px-3 text-xs font-bold uppercase text-sidebar-foreground/65"><Icon className="size-4" /><span>{group.title}</span></div><ul className="space-y-0.5">{group.items.map((item) => <li key={`${group.title}-${item.slug}`}><Button variant="ghost" onClick={() => { onSelect(item.slug); onClose?.(); }} className={cn("h-auto min-h-9 w-full justify-start whitespace-normal px-3 py-2 text-left text-sm font-normal text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", current === item.slug && "bg-sidebar-accent font-semibold text-sidebar-primary")}><span className={cn("mr-1 h-1.5 w-1.5 shrink-0 rounded-full bg-transparent", current === item.slug && "bg-primary")} />{item.title}</Button></li>)}</ul></div>; })}</nav></div><div className="border-t border-sidebar-border p-4"><div className="flex items-center gap-2 text-xs text-sidebar-foreground/60"><Network className="size-4 text-primary" />Feito para a comunidade</div></div></div>;
}

function HomePage({ onSelect }: { onSelect: (slug: string) => void }) {
  return <div className="mx-auto max-w-5xl px-5 pb-20 pt-10 sm:px-8 lg:pt-16"><section className="relative overflow-hidden border-b border-border pb-14"><div className="orbit-mark" aria-hidden="true"><span /><span /><span /></div><Badge variant="outline" className="mb-5 border-primary/40 bg-primary-soft text-primary"><Orbit className="mr-1 size-3.5" />Trilha guiada para iniciantes</Badge><h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">Seu primeiro passo no <span className="text-primary">Open Source</span> começa aqui.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-reading">Você está aprendendo tecnologia e ainda não sabe como contribuir para um projeto real? A Impulsa Docs mostra o caminho, do primeiro Git até sua primeira Pull Request.</p><div className="mt-8"><Button size="lg" onClick={() => onSelect("comece-aqui")} className="h-12 px-6 text-base shadow-brand"><Rocket className="size-5" />Começar a trilha<ArrowRight /></Button></div></section><section className="py-12" aria-labelledby="journey-title"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase text-primary">Seu caminho</p><h2 id="journey-title" className="mt-2 font-display text-2xl font-bold">Do primeiro conceito à contribuição real</h2></div><span className="text-sm text-muted-foreground">0 de 5 etapas concluídas</span></div><Progress value={4} className="mt-5 h-2.5 bg-muted" aria-label="Progresso da trilha: zero de cinco etapas" /><ol className="mt-8 grid gap-0 md:grid-cols-5">{journey.map((step, index) => <li key={step} className="relative flex items-center gap-3 border-l border-border py-3 pl-4 md:block md:border-l-0 md:border-t md:px-2 md:pt-5"><span className={cn("grid size-7 shrink-0 place-items-center rounded-full border font-mono text-xs font-bold md:absolute md:-top-3.5 md:left-2", index === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground")}>{index + 1}</span><span className="text-sm font-semibold text-foreground md:block md:pt-1">{step}</span></li>)}</ol></section><section className="border-t border-border py-12"><div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]"><div><p className="text-sm font-bold uppercase text-primary">Por onde começar</p><h2 className="mt-2 font-display text-3xl font-bold">Aprenda no seu ritmo, sem pular fundamentos.</h2><p className="mt-4 leading-7 text-reading">Cada guia responde uma dúvida prática e termina com uma ação. Você lê, testa e avança com contexto.</p></div><div className="divide-y divide-border border-y border-border">{[{ n: "01", title: "Entenda o terreno", text: "Open Source, Git e GitHub em linguagem simples.", slug: "o-que-e-open-source" }, { n: "02", title: "Leia um projeto", text: "Reconheça README, regras e tarefas abertas.", slug: "como-ler-repositorio" }, { n: "03", title: "Faça a jornada", text: "Execute os 14 passos até sua primeira PR.", slug: "primeira-contribuicao" }].map((item) => <Button key={item.n} variant="ghost" onClick={() => onSelect(item.slug)} className="group h-auto w-full justify-start whitespace-normal rounded-none px-1 py-5 text-left hover:bg-transparent"><span className="font-mono text-sm text-primary">{item.n}</span><span className="min-w-0 flex-1"><span className="block font-display text-lg font-bold">{item.title}</span><span className="mt-1 block font-normal text-muted-foreground">{item.text}</span></span><ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" /></Button>)}</div></div></section><section className="border-t border-border pt-10"><div className="flex items-start gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-md bg-primary-soft text-primary"><CircleHelp /></div><div><h2 className="font-display text-xl font-bold">Travou no caminho?</h2><p className="mt-1 text-reading">Busque pelo erro exatamente como ele apareceu ou consulte o guia “Deu erro”.</p><Button variant="link" onClick={() => onSelect("deu-erro")} className="mt-2 h-auto p-0 text-primary">Abrir guia de solução <ArrowRight /></Button></div></div></section></div>;
}

function DocPageView({ page, onSelect }: { page: DocPage; onSelect: (slug: string) => void }) {
  const ordered = completeDocs;
  const index = ordered.findIndex((item) => item.slug === page.slug);
  const prev = index > 0 ? ordered[index - 1] : undefined;
  const next = index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined;
  return <article className="mx-auto max-w-3xl px-5 pb-20 pt-8 sm:px-8 lg:pt-12"><nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-sm text-muted-foreground"><Button variant="link" onClick={() => onSelect("")} className="h-auto p-0 text-muted-foreground hover:text-foreground">Início</Button><span aria-hidden="true">/</span><span>{page.group}</span><span aria-hidden="true">/</span><span className="truncate text-foreground">{page.title}</span></nav><header className="mb-10"><div className="flex flex-wrap items-center gap-2"><Badge variant="outline" className="border-border bg-muted text-muted-foreground">{page.group}</Badge>{page.time && <span className="text-sm text-muted-foreground">Leitura: {page.time}</span>}{!page.complete && <Badge variant="secondary">Em preparação</Badge>}</div><h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">{page.title}</h1><p className="mt-4 text-lg leading-8 text-reading">{page.description}</p></header><div>{page.sections.map((section) => <DocSectionView key={section.title} section={section} />)}</div><nav aria-label="Páginas anterior e próxima" className="mt-12 grid gap-3 border-t border-border pt-7 sm:grid-cols-2">{prev ? <Button variant="outline" onClick={() => onSelect(prev.slug)} className="h-auto min-h-20 justify-start whitespace-normal p-4 text-left"><ArrowLeft className="size-5 shrink-0 text-primary" /><span><span className="block text-xs font-normal text-muted-foreground">Anterior</span><span className="mt-1 block font-semibold">{prev.title}</span></span></Button> : <span />}{next && <Button variant="outline" onClick={() => onSelect(next.slug)} className="h-auto min-h-20 justify-end whitespace-normal p-4 text-right"><span><span className="block text-xs font-normal text-muted-foreground">Próximo</span><span className="mt-1 block font-semibold">{next.title}</span></span><ArrowRight className="size-5 shrink-0 text-primary" /></Button>}</nav><div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"><Github className="size-4" />Encontrou algo confuso? Esta documentação cresce com a comunidade.</div></article>;
}

export function ImpulsaDocs({ initialSearch }: { initialSearch: AppSearch }) {
  const navigate = useNavigate({ from: "/" });
  const currentSlug = initialSearch.doc;
  const page = getDoc(currentSlug);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [fontSize, setFontSize] = useState<FontSize>("base");
  const select = (slug: string) => {
    navigate({ search: slug ? { doc: slug } : {}, replace: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset['fontSize'] = fontSize;
  }, [theme, fontSize]);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setSearchOpen(true); } };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return <main className="min-h-dvh bg-background text-foreground"><aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-sidebar-border lg:block"><SidebarNav current={currentSlug} onSelect={select} /></aside>{mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-overlay" aria-label="Fechar menu" onClick={() => setMobileOpen(false)} /><aside className="relative h-full w-[min(88vw,320px)] border-r border-sidebar-border"><SidebarNav current={currentSlug} onSelect={select} onClose={() => setMobileOpen(false)} /></aside></div>}<div className="min-w-0 lg:pl-72"><header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur"><div className="grid h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-3 sm:gap-4 sm:px-6"><Button variant="ghost" size="icon" onClick={() => setMobileOpen(true)} className="min-h-11 min-w-11 lg:hidden" aria-label="Abrir menu"><Menu /></Button><div className="hidden lg:block"><span className="text-sm font-medium text-muted-foreground">{page ? `${page.group} / ${page.title}` : "Aprenda • Pratique • Contribua"}</span></div><Button variant="outline" onClick={() => setSearchOpen(true)} className="col-start-2 h-10 min-w-0 justify-start px-3 text-muted-foreground lg:col-start-auto lg:w-[min(38vw,440px)]"><Search className="shrink-0" /><span className="truncate">Buscar na documentação...</span><kbd className="ml-auto hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] sm:block">Ctrl K</kbd></Button><div className="flex shrink-0 items-center gap-1"><div className="hidden items-center rounded-md border border-border p-0.5 sm:flex" role="group" aria-label="Tamanho do texto"><Button variant="ghost" size="sm" onClick={() => setFontSize("small")} className={cn("h-8 w-8 px-0", fontSize === "small" && "bg-accent")} aria-label="Diminuir texto">A-</Button><Button variant="ghost" size="sm" onClick={() => setFontSize("base")} className={cn("h-8 w-8 px-0", fontSize === "base" && "bg-accent")} aria-label="Tamanho padrão">A</Button><Button variant="ghost" size="sm" onClick={() => setFontSize("large")} className={cn("h-8 w-8 px-0", fontSize === "large" && "bg-accent")} aria-label="Aumentar texto">A+</Button></div><Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="min-h-11 min-w-11" aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}>{theme === "dark" ? <Sun /> : <Moon />}</Button></div></div></header>{page ? <DocPageView page={page} onSelect={select} /> : <HomePage onSelect={select} />}</div><SearchDialog open={searchOpen} onOpenChange={setSearchOpen} onSelect={select} /></main>;
}