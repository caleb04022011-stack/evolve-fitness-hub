import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnchorButton, PageHeader } from "@/components/ui-kit";
import { plans, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos e preços | Forja Performance" },
      {
        name: "description",
        content:
          "Compare os planos mensal, trimestral e anual de acompanhamento com preços, benefícios e descontos na loja.",
      },
      { property: "og:title", content: "Planos e preços | Forja Performance" },
      {
        property: "og:description",
        content: "Mensal, trimestral ou anual: escolha o acompanhamento ideal para o seu objetivo.",
      },
    ],
  }),
  component: PlanosPage,
});

const comparison = [
  ["Treino personalizado", true, true, true],
  ["App de treinos", true, true, true],
  ["Suporte no WhatsApp", true, true, true],
  ["Plano alimentar de apoio", false, true, true],
  ["Avaliação a cada 45 dias", false, true, true],
  ["Sessões presenciais mensais", false, false, true],
  ["Desconto na loja", "—", "10%", "15%"],
] as const;

function PlanosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Planos"
        title="Escolha seu compromisso"
        text="Quanto maior o período, menor a mensalidade e maior o nível de acompanhamento. Cancele quando quiser no plano mensal."
      />

      <section className="section mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-lg border bg-card p-7",
                  p.highlight ? "border-primary shadow-glow" : "border-border",
                )}
              >
                {p.highlight && (
                  <span className="mb-4 w-fit rounded bg-gradient-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
                    Mais escolhido
                  </span>
                )}
                <h2 className="text-2xl">{p.name}</h2>
                <p className="mt-4 font-display text-5xl">
                  {p.price}
                  <span className="font-sans text-base font-medium text-muted-foreground">
                    {p.period}
                  </span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-primary">{p.note}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <AnchorButton
                  href={whatsappLink(`Olá! Quero assinar o plano ${p.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  variant={p.highlight ? "primary" : "outline"}
                  className="mt-7 w-full"
                >
                  Assinar {p.name}
                </AnchorButton>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="bg-card">
              <tr>
                <th className="px-5 py-4 text-left text-xs uppercase tracking-widest text-muted-foreground">
                  Benefício
                </th>
                {plans.map((p) => (
                  <th key={p.name} className="px-5 py-4 text-center text-xs tracking-widest">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  <td className="px-5 py-4 text-muted-foreground">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="px-5 py-4 text-center">
                      {cell === true ? (
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      ) : cell === false ? (
                        <span className="text-muted-foreground">—</span>
                      ) : (
                        <span className="font-bold text-primary">{cell}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
