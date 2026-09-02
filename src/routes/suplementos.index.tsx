import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { Button, PageHeader } from "@/components/ui-kit";
import { brl, productCategories, products } from "@/data/site";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/suplementos/")({
  head: () => ({
    meta: [
      { title: "Loja de suplementos | Forja Performance" },
      {
        name: "description",
        content:
          "Whey, creatina, pré-treino e vitaminas com curadoria do treinador. Compre com entrega para todo o Brasil.",
      },
      { property: "og:title", content: "Loja de suplementos | Forja Performance" },
      {
        property: "og:description",
        content: "Whey, creatina, pré-treino e vitaminas selecionados por quem entende de treino.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [cat, setCat] = useState("Todos");
  const { add } = useCart();
  const list = cat === "Todos" ? products : products.filter((p) => p.category === cat);

  return (
    <>
      <PageHeader
        eyebrow="Loja"
        title="Suplementos com curadoria"
        text="Só produtos que eu recomendaria para os meus alunos. Sem fórmula milagrosa, sem promessa vazia."
      />
      <section className="section mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap gap-2">
          {productCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors",
                c === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary">
                <Link to="/suplementos/$slug" params={{ slug: p.slug }} className="block">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="aspect-square w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                    {p.category}
                  </span>
                  <h2 className="mt-2 text-base leading-tight">
                    <Link to="/suplementos/$slug" params={{ slug: p.slug }}>
                      {p.name}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-xs text-muted-foreground">{p.short}</p>
                  <p className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" /> {p.rating}
                  </p>
                  <p className="mt-3 font-display text-2xl">{brl(p.price)}</p>
                  <Button
                    className="mt-4 w-full"
                    onClick={() => {
                      add(p.slug);
                      toast.success(`${p.name} adicionado ao carrinho`);
                    }}
                  >
                    Adicionar ao carrinho
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
