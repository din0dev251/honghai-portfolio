"use client";

import Link from "next/link";
import { portfolioSocialLinks } from "@/data/portfolio";
import { useTranslations } from "next-intl";

const footerLinks = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "services", href: "#services" },
  { key: "skills", href: "#skills" },
  { key: "partners", href: "#partners" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export default function Footer() {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  const scrollToTop = () => {
    const home = document.querySelector("#home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-[linear-gradient(180deg,hsl(var(--muted)/0.55)_0%,hsl(var(--background))_55%)] px-4 mobile:px-6 md:px-8 lg:px-12 pt-14 mobile:pt-16 md:pt-20 pb-8">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/[0.03] blur-3xl"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 mb-12 md:mb-14">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
            >
              <span className="block text-3xl mobile:text-4xl font-heading font-bold tracking-tight group-hover:text-primary transition-colors">
                {t("brand")}
              </span>
            </button>
            <div className="space-y-1">
              <p className="text-sm mobile:text-base font-body text-foreground/80">{t("role")}</p>
              <p className="text-sm mobile:text-base font-body text-primary font-medium">{t("studio")}</p>
            </div>
            <p className="max-w-md text-sm mobile:text-base font-body text-muted-foreground leading-relaxed">
              {t("description")}
            </p>
            <p className="text-sm font-body text-muted-foreground/80">{t("location")}</p>
          </div>

          {/* Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5">
              {t("quick_links")}
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm mobile:text-base font-body text-foreground/80 hover:text-primary transition-colors"
                  >
                    {tHeader(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5">
              {t("follow_me")}
            </h4>
            <div className="flex flex-col gap-3">
              {portfolioSocialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm mobile:text-base font-body text-foreground/80 hover:text-primary transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/80 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{social.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col mobile:flex-row items-start mobile:items-center justify-between gap-4 border-t border-border/80 pt-6">
          <p className="text-xs mobile:text-sm font-body text-muted-foreground">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-xs mobile:text-sm font-heading font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {t("brand")} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
