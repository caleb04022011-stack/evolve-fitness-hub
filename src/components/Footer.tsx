import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-display text-2xl">{site.name}</h3>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Treino sério, acompanhamento de perto e suplementação sem enrolação. Studio em São Paulo
            e consultoria online para todo o Brasil.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.youtube}
              aria-label="YouTube"
              className="grid h-10 w-10 place-items-center rounded border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/treinos", label: "Treinos" },
              { to: "/suplementos", label: "Suplementos" },
              { to: "/planos", label: "Planos" },
              { to: "/contato", label: "Contato" },
              { to: "/login", label: "Área do aluno" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {site.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {site.whatsappLabel}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {site.email}
            </li>
            <li className="text-xs uppercase tracking-widest">{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Conteúdo demonstrativo com dados fictícios.
      </div>
    </footer>
  );
}
