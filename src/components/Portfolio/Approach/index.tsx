"use client";

import { portfolioApproach } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function Approach() {
  const t = useTranslations("Approach");

  return (
    <section
      id="approach"
      className="py-16 mobile:py-20 md:py-24 lg:py-32 bg-background px-4 mobile:px-6 md:px-8 lg:px-12"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioApproach.map((item, index) => (
            <div
              key={item.title}
              className="p-6 mobile:p-8 rounded-2xl border border-border bg-muted/40"
            >
              <div className="text-sm font-heading text-primary mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl mobile:text-2xl font-heading font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-sm mobile:text-base font-body text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
