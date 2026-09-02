import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Clock, Target } from "lucide-react";
import { AnchorButton, ButtonLink, Eyebrow } from "@/components/ui-kit";
import { workouts, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/treinos/$slug")({
  loader: ({ params }) => {
    const workout = workouts.find((w) => w.slug === params.slug);
    if (!workout) throw notFound();
    return { workout };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Treino indisponível" }, { name: "robots", content: "noindex" }],
      };
    }
    const { workout } = loaderData;
    return {
      meta: [
        { title: `${workout.title} — ${workout.category} | Forja Performance` },
        { name: "description", content: workout.short },
        { property: "og:title", content: `${workout.title} | Forja Performance` },
        { property: "og:description", content: workout.short },
      ],
    };
  },
  component: WorkoutDetail,
});

function WorkoutDetail() {
  const { workout } = Route.useLoaderData();

  return (
    <article className="pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Eyebrow>{workout.category}</Eyebrow>
        <h1 className="mt-4 text-4xl md:text-6xl">{workout.title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{workout.short}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section className="rounded-lg border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-primary" /> Objetivo
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{workout.goal}</p>
            </section>

            <section className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-lg">Como é o plano</h2>
              <ol className="mt-4 space-y-3">
                {workout.plan.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded bg-primary/15 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-lg">O que está incluso</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {workout.includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {inc}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-primary/40 bg-card p-6 shadow-card lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Investimento</p>
            <p className="mt-2 font-display text-4xl text-primary">{workout.price}</p>
            <p className="mt-3 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              {workout.duration}
            </p>
            <AnchorButton
              href={whatsappLink(`Olá! Quero contratar o programa ${workout.title}.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full"
            >
              Quero este treino
            </AnchorButton>
            <ButtonLink to="/planos" variant="outline" className="mt-3 w-full">
              Comparar planos
            </ButtonLink>
          </aside>
        </div>
      </div>
    </article>
  );
}
