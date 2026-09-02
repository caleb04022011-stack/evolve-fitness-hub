import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button, PageHeader } from "@/components/ui-kit";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e localização | Forja Performance" },
      {
        name: "description",
        content:
          "Fale com a equipe pelo formulário, WhatsApp ou redes sociais e conheça o studio na Vila Madalena, São Paulo.",
      },
      { property: "og:title", content: "Contato e localização | Forja Performance" },
      {
        property: "og:description",
        content: "Formulário, WhatsApp, redes sociais e mapa do studio em São Paulo.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const field =
    "mt-2 w-full rounded border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar"
        text="Responda em poucos minutos pelo WhatsApp ou envie uma mensagem pelo formulário. Primeira avaliação sempre gratuita."
      />

      <section className="section mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <form
            className="rounded-lg border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success(`Obrigado, ${form.nome.split(" ")[0] || "atleta"}! Em breve entramos em contato.`);
              setForm({ nome: "", email: "", telefone: "", mensagem: "" });
            }}
          >
            <h2 className="text-2xl">Envie sua mensagem</h2>
            <div className="mt-6 grid gap-5">
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Nome
                <input
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className={field}
                  placeholder="Seu nome completo"
                />
              </label>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                E-mail
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  placeholder="voce@email.com"
                />
              </label>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Telefone
                <input
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className={field}
                  placeholder="(11) 90000-0000"
                />
              </label>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Mensagem
                <textarea
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className={field}
                  placeholder="Conte seu objetivo e sua rotina de treino"
                />
              </label>
              <Button type="submit" size="lg">
                Enviar mensagem
              </Button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-2xl">Canais diretos</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    WhatsApp {site.whatsappLabel}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={`mailto:${site.email}`} className="hover:text-primary">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">
                    {site.address}
                    <br />
                    {site.hours}
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href={site.instagram}
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={site.youtube}
                  aria-label="YouTube"
                  className="grid h-11 w-11 place-items-center rounded border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Mapa da localização do studio"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6975%2C-23.5615%2C-46.6795%2C-23.5495&layer=mapnik"
                className="h-80 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
