"use client";

import Image from "next/image";
import { portfolioDomains, portfolioStats } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("AboutSection");
  return (
    <section
      id="about"
      className="py-16 mobile:py-20 md:py-24 lg:py-32 bg-background px-4 mobile:px-6 md:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="order-2 md:order-1 relative w-full h-[300px] mobile:h-[400px] md:h-[500px] md:sticky md:top-28">
            <div className="w-full h-full bg-muted rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Image
                  src="/assets/about/avatar.jpg"
                  alt="Hồng Hải"
                  width={650}
                  height={650}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl mobile:text-4xl md:text-5xl font-heading font-bold">
              {t("title")}
            </h2>
            <div className="space-y-4 font-body text-base mobile:text-lg text-muted-foreground">
              <p>{t("description_1")}</p>
              <p>{t("description_2")}</p>
              <p>{t("description_3")}</p>
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">{t("domains_title")}</h3>
              <ul className="grid grid-cols-1 mobile:grid-cols-2 gap-2">
                {portfolioDomains.map((domain) => (
                  <li
                    key={domain}
                    className="text-sm mobile:text-base font-body text-muted-foreground before:content-['•'] before:mr-2 before:text-primary"
                  >
                    {domain}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="text-lg font-heading font-semibold mb-4">{t("stats_title")}</h3>
              <div className="grid grid-cols-2 gap-4">
                {portfolioStats.map((stat) => (
                  <div key={stat.label} className="p-4 bg-muted rounded-lg">
                    <div className="text-2xl mobile:text-3xl font-heading font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs mobile:text-sm font-body text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
