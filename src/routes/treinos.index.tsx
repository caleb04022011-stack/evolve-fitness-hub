import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, PageHeader } from "@/components/ui-kit";
import { workouts } from "@/data/site";

export const Route = createFileRoute("/treinos/")({
  head: () => ({
    meta: [
      { title: "Treinos e programas | Forja Performance" },
      {
        name: "description",
        content:
          "Programas de emagrecimento, hipertrofia, condicionamento, consultoria online e personal presencial com valores e duração.",
      },
      { property: "og:title", content: "Treinos e programas | Forja Performance" },
      {
        property: "og:description",
        content: "Escolha entre emagrecimento, hipertrofia, condicionamento, online ou presencial.",
      },
    ],
  }),
  component: TreinosPage,
});

function TreinosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programas"
        title="Treinos para cada objetivo"
        text="Cinco programas com periodização própria. Todos incluem avaliação inicial, acesso ao app e revisão periódica da planilha."
      />
      <section className="section mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((w, i) => (
            <Reveal key={w.slug} delay={i * 80}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {w.category}
                </span>
                <h2 className="mt-3 text-xl">{w.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{w.short}</p>
                <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  {w.duration}
                </p>
                <p className="mt-4 font-display text-2xl">{w.price}</p>
                <ButtonLink
                  to="/treinos/$slug"
                  params={{ slug: w.slug }}
                  variant="outline"
                  className="mt-5 w-full"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
