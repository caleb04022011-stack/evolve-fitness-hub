import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button, ButtonLink, PageHeader } from "@/components/ui-kit";
import { brl } from "@/data/site";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title: "Carrinho | Forja Performance" },
      {
        name: "description",
        content: "Revise seus suplementos selecionados e finalize o pedido.",
      },
      { property: "og:title", content: "Carrinho | Forja Performance" },
      { property: "og:description", content: "Revise seus suplementos e finalize o pedido." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, total, setQty, remove, clear } = useCart();
  const shipping = total >= 299 || total === 0 ? 0 : 24.9;

  return (
    <>
      <PageHeader
        eyebrow="Loja"
        title="Seu carrinho"
        text="Checkout demonstrativo — nenhum pagamento real é processado nesta versão."
      />
      <section className="section mx-auto max-w-6xl px-4 md:px-6">
        {items.length === 0 ? (
          <div className="rounded-lg border border-border bg-card p-10 text-center">
            <p className="font-display text-2xl">Carrinho vazio</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore a loja e escolha seus suplementos.
            </p>
            <ButtonLink to="/suplementos" className="mt-6">
              Ir para a loja
            </ButtonLink>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <ul className="space-y-4">
              {items.map(({ product, qty }) => (
                <li
                  key={product.slug}
                  className="grid grid-cols-[80px_minmax(0,1fr)] items-center gap-4 rounded-lg border border-border bg-card p-4 sm:grid-cols-[96px_minmax(0,1fr)_auto]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="aspect-square w-full rounded object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{product.name}</p>
                    <p className="text-xs uppercase tracking-widest text-primary">
                      {product.category}
                    </p>
                    <p className="mt-1 font-display text-lg">{brl(product.price)}</p>
                  </div>
                  <div className="col-span-2 flex items-center justify-between gap-3 sm:col-span-1 sm:justify-end">
                    <div className="flex items-center rounded border border-border">
                      <button
                        type="button"
                        aria-label="Diminuir"
                        onClick={() => setQty(product.slug, qty - 1)}
                        className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-primary"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{qty}</span>
                      <button
                        type="button"
                        aria-label="Aumentar"
                        onClick={() => setQty(product.slug, qty + 1)}
                        className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-primary"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      aria-label="Remover"
                      onClick={() => remove(product.slug)}
                      className="grid h-9 w-9 place-items-center rounded border border-border text-muted-foreground hover:border-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-lg border border-primary/40 bg-card p-6 shadow-card lg:sticky lg:top-24">
              <h2 className="text-lg">Resumo</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd>{brl(total)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Frete</dt>
                  <dd>{shipping === 0 ? "Grátis" : brl(shipping)}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3 font-display text-xl">
                  <dt>Total</dt>
                  <dd className="text-primary">{brl(total + shipping)}</dd>
                </div>
              </dl>
              <Button
                className="mt-6 w-full"
                size="lg"
                onClick={() => {
                  toast.success("Pedido simulado com sucesso! Em breve o checkout real.");
                  clear();
                }}
              >
                Finalizar pedido
              </Button>
              <ButtonLink to="/suplementos" variant="outline" className="mt-3 w-full">
                Continuar comprando
              </ButtonLink>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}
