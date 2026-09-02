import { createFileRoute, notFound } from "@tanstack/react-router";
import { Star, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button, ButtonLink, Eyebrow } from "@/components/ui-kit";
import { brl, products } from "@/data/site";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/suplementos/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Produto indisponível" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | Forja Performance` },
        { name: "description", content: product.short },
        { property: "og:title", content: `${product.name} | Forja Performance` },
        { property: "og:description", content: product.short },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();

  return (
    <article className="pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            className="w-full rounded-lg border border-border object-cover shadow-card"
          />
          <div>
            <Eyebrow>{product.category}</Eyebrow>
            <h1 className="mt-4 text-3xl md:text-5xl">{product.name}</h1>
            <p className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-primary text-primary" /> {product.rating} ·{" "}
              {product.reviews.length} avaliações
            </p>
            <p className="mt-6 font-display text-4xl text-primary">{brl(product.price)}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              ou 3x de {brl(product.price / 3)} sem juros
            </p>
            <p className="mt-6 text-sm text-muted-foreground">{product.description}</p>

            <div className="mt-6 rounded-lg border border-border bg-card p-5">
              <h2 className="text-base">Modo de uso</h2>
              <p className="mt-2 text-sm text-muted-foreground">{product.usage}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="flex-1"
                onClick={() => {
                  add(product.slug);
                  toast.success(`${product.name} adicionado ao carrinho`);
                }}
              >
                Adicionar ao carrinho
              </Button>
              <ButtonLink to="/carrinho" variant="outline" size="lg">
                Ver carrinho
              </ButtonLink>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <Truck className="h-4 w-4 text-primary" /> Frete grátis acima de R$ 299
            </p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl">Avaliações</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {product.reviews.map((r) => (
              <figure key={r.name} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm text-muted-foreground">“{r.text}”</blockquote>
                <figcaption className="mt-3 text-xs font-bold uppercase tracking-widest">
                  {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
