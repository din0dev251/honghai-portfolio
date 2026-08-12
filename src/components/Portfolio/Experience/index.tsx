"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { portfolioClients, portfolioExperiences } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section
      id="experience"
      className="py-16 mobile:py-20 md:py-24 lg:py-32 bg-muted/50 px-4 mobile:px-6 md:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl mobile:text-4xl md:text-5xl font-heading font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-base mobile:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {portfolioExperiences.map((item) => (
            <article
              key={`${item.organization}-${item.title}`}
              className="bg-background rounded-2xl border border-border p-6 mobile:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl mobile:text-2xl font-heading font-semibold">
                    {item.title} — {item.organization}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm mobile:text-base font-body text-muted-foreground mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {item.period && (
                  <span className="text-sm font-body text-primary font-medium whitespace-nowrap">
                    {item.period}
                  </span>
                )}
              </div>

              <p className="font-body text-muted-foreground mb-4">{item.description}</p>

              {item.link && (
                <Link
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-heading text-primary hover:underline mb-4"
                >
                  {item.link.label}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}

              <ul className="space-y-2 mb-4">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm mobile:text-base font-body text-muted-foreground before:content-['•'] before:mr-2 before:text-primary"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {item.technologies && item.technologies.length > 0 && (
                <div>
                  <p className="text-sm font-heading font-semibold mb-2">{t("technology")}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs mobile:text-sm font-body bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <div>
          <h3 className="text-2xl mobile:text-3xl font-heading font-bold mb-8 text-center">
            {t("clients_title")}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {portfolioClients.map((client) => (
              <article
                key={client.name}
                className="bg-background rounded-2xl border border-border p-6 mobile:p-8"
              >
                <h4 className="text-xl mobile:text-2xl font-heading font-semibold">{client.name}</h4>
                <p className="text-sm mobile:text-base font-body text-primary mt-1 mb-3">
                  {client.subtitle}
                </p>
                <p className="font-body text-muted-foreground mb-4">{client.description}</p>
                <ul className="space-y-2 mb-4">
                  {client.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm font-body text-muted-foreground before:content-['•'] before:mr-2 before:text-primary"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-sm font-heading font-semibold mb-2">{t("technology")}</p>
                  <div className="flex flex-wrap gap-2">
                    {client.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs mobile:text-sm font-body bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
