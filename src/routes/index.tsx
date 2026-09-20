import { createFileRoute } from "@tanstack/react-router";
import { ImpulsaDocs } from "@/components/impulsa-docs";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    doc: typeof search.doc === "string" ? search.doc : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Impulsa Docs — Seu primeiro passo no Open Source" },
      { name: "description", content: "Aprenda Git, GitHub e Open Source em uma trilha guiada até sua primeira Pull Request." },
      { property: "og:title", content: "Impulsa Docs — Seu primeiro passo no Open Source" },
      { property: "og:description", content: "Uma documentação acolhedora para aprender, praticar e fazer sua primeira contribuição." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <ImpulsaDocs initialSearch={Route.useSearch()} />;
}
