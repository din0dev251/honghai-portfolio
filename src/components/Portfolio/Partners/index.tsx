"use client";

import Image from "next/image";
import { portfolioPartners } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function Partners() {
  const t = useTranslations("Partners");

  return (
    <section
      id="partners"
      className="py-16 mobile:py-20 md:py-24 lg:py-32 bg-background px-4 mobile:px-6 md:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl mobile:text-4xl md:text-5xl font-heading font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-base mobile:text-lg font-body text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mobile:gap-4 md:gap-5">
          {portfolioPartners.map((partner) => (
            <li
              key={partner.name}
              className="group flex h-28 mobile:h-32 md:h-36 items-center justify-center rounded-2xl border border-border bg-white px-4 transition-all duration-300 hover:border-primary/40 hover:shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={80}
                className="max-h-14 mobile:max-h-16 md:max-h-[4.5rem] w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
