import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnchorButton, ButtonLink, Eyebrow } from "@/components/ui-kit";
import {
  differentials,
  gallery,
  images,
  site,
  testimonials,
  whatsappLink,
  workouts,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forja Performance | Transforme seu corpo com treino sério" },
      {
        name: "description",
        content:
          "Personal trainer em São Paulo e consultoria online: treinos personalizados, acompanhamento semanal e suplementos com curadoria.",
      },
      { property: "og:title", content: "Forja Performance | Transforme seu corpo" },
      {
        property: "og:description",
        content: "Treino personalizado, acompanhamento de perto e suplementação sem enrolação.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={images.hero}
          alt="Atleta treinando levantamento de peso em academia"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 md:px-6">
          <Eyebrow>Studio + consultoria online</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl md:text-7xl">
            Transforme seu corpo, <span className="text-gradient">transforme sua vida</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Método de treino individualizado, acompanhamento semanal e suplementação orientada. Sem
            promessa mágica — só progressão consistente.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/planos" size="lg">
              Começar agora <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <AnchorButton
              href={whatsappLink("Olá! Quero uma avaliação gratuita.")}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
            >
              Avaliação gratuita
            </AnchorButton>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              ["+430", "alunos treinados"],
              ["12 anos", "de experiência"],
              ["4.9/5", "nota dos alunos"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl text-primary md:text-3xl">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src={images.coach}
              alt={`${site.coach}, personal trainer`}
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded-lg border border-border object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Sobre</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Quem está do seu lado em cada série
            </h2>
            <p className="mt-5 text-muted-foreground">
              Sou {site.coach}, treinador há 12 anos, especialista em fisiologia do exercício e
              treinamento de força. Já acompanhei mais de 430 alunos — de iniciantes que nunca
              pisaram numa academia a atletas amadores em preparação de prova.
            </p>
            <p className="mt-4 text-muted-foreground">
              Aqui não existe treino de prateleira. Cada planilha nasce de avaliação física, rotina
              real e histórico do aluno, e é revisada com base em dados de carga, medidas e
              percepção de esforço.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "CREF 067894-G/SP",
                "Pós-graduação em Fisiologia do Exercício (USP)",
                "Especialização em treinamento de força e reabilitação",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 shrink-0 text-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal>
            <Eyebrow>Diferenciais</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl">Por que funciona</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d, i) => (
              <Reveal key={d.title} delay={i * 90}>
                <div className="h-full rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/70">
                  <span className="font-display text-3xl text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <Eyebrow>Treinos</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl">Escolha seu objetivo</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.slice(0, 3).map((w, i) => (
            <Reveal key={w.slug} delay={i * 90}>
              <Link
                to="/treinos/$slug"
                params={{ slug: w.slug }}
                className="block h-full rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {w.category}
                </span>
                <h3 className="mt-3 text-xl">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.short}</p>
                <p className="mt-5 font-display text-2xl">{w.price}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink to="/treinos" variant="outline">
            Ver todos os treinos <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>

      <section className="section border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal>
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl">Resultados de quem treina aqui</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-lg border border-border bg-background p-6">
                  <Quote className="h-6 w-6 text-primary" />
                  <blockquote className="mt-4 flex-1 text-sm text-muted-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex min-w-0 items-center gap-3 border-t border-border pt-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-primary font-display text-sm text-primary-foreground">
                      {t.initials}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold">{t.name}</span>
                      <span className="block text-xs uppercase tracking-widest text-primary">
                        {t.result}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
            <span className="ml-2">4.9 de média em 218 avaliações</span>
          </div>
        </div>
      </section>

      <section className="section mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <Eyebrow>Galeria</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl">Antes e depois</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Transformações reais de alunos, com consistência de treino e alimentação ao longo de
            meses — nada de atalho.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.name} delay={i * 80}>
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="grid grid-cols-2">
                  {["Antes", "Depois"].map((label, idx) => (
                    <div
                      key={label}
                      className="relative aspect-[3/4] overflow-hidden border-border first:border-r"
                    >
                      <img
                        src={idx === 0 ? images.coach : images.hero}
                        alt={`${g.name} — ${label}`}
                        loading="lazy"
                        width={900}
                        height={1200}
                        className={`h-full w-full object-cover ${idx === 0 ? "grayscale" : ""}`}
                      />
                      <span className="absolute bottom-1 left-1 rounded bg-background/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold">{g.name}</p>
                  <p className="text-xs uppercase tracking-widest text-primary">{g.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-gradient-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl text-primary-foreground md:text-5xl">
            Sua próxima série começa hoje
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-primary-foreground/80">
            Avaliação inicial gratuita, sem compromisso. Escolha um plano e receba sua primeira
            planilha em até 48 horas.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              to="/planos"
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-background text-foreground hover:border-background"
            >
              Ver planos
            </ButtonLink>
            <AnchorButton
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              size="lg"
              variant="outline"
              className="border-primary-foreground/60 text-primary-foreground hover:bg-background hover:text-foreground"
            >
              Falar no WhatsApp
            </AnchorButton>
          </div>
        </div>
      </section>
    </>
  );
}
