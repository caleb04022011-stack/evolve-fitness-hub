import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button, ButtonLink } from "@/components/ui-kit";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Área do aluno | Forja Performance" },
      {
        name: "description",
        content: "Acesse suas planilhas de treino, evolução e protocolos de suplementação.",
      },
      { property: "og:title", content: "Área do aluno | Forja Performance" },
      { property: "og:description", content: "Acesse suas planilhas de treino e sua evolução." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const field =
    "mt-2 w-full rounded border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-28">
      <h1 className="text-3xl md:text-4xl">Área do aluno</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Acesse suas planilhas, histórico de cargas e protocolos. Demonstração — nenhuma conta real é
        autenticada nesta versão.
      </p>
      <form
        className="mt-8 rounded-lg border border-border bg-card p-6"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Login simulado com sucesso. Painel do aluno em breve!");
        }}
      >
        <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
          E-mail
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
            placeholder="voce@email.com"
          />
        </label>
        <label className="mt-5 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Senha
          <input
            required
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={field}
            placeholder="••••••••"
          />
        </label>
        <Button type="submit" size="lg" className="mt-6 w-full">
          Entrar
        </Button>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Ainda não é aluno?{" "}
          <ButtonLink to="/planos" variant="ghost" className="px-0 py-0 text-xs">
            Ver planos
          </ButtonLink>
        </p>
      </form>
    </section>
  );
}
