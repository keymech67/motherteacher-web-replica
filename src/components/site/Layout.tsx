import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-balance">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-primary-foreground/80">{subtitle}</p>}
      </div>
    </section>
  );
}
