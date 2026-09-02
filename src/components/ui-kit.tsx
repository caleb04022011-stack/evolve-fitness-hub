import { Link, type LinkComponentProps } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded font-bold uppercase tracking-widest transition-all disabled:opacity-50";
const sizes = { md: "px-6 py-3 text-xs", lg: "px-8 py-4 text-sm" };
const variants = {
  primary: "bg-gradient-primary text-primary-foreground shadow-glow hover:brightness-110",
  outline: "border border-border text-foreground hover:border-primary hover:text-primary",
  ghost: "text-primary hover:underline",
};

type Variant = keyof typeof variants;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; size?: keyof typeof sizes }) {
  return <button className={cn(base, sizes[size], variants[variant], className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: LinkComponentProps & { variant?: Variant; size?: keyof typeof sizes }) {
  return <Link className={cn(base, sizes[size], variants[variant], className)} {...props} />;
}

export function AnchorButton({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: Variant; size?: keyof typeof sizes }) {
  return <a className={cn(base, sizes[size], variants[variant], className)} {...props} />;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-border bg-card/40 pb-12 pt-28 md:pb-16 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 text-4xl md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
