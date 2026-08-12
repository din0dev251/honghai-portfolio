"use client";

import { portfolioServices } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  return (
    <section
      id="services"
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

        <div className="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 mobile:p-8 bg-muted/50 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 mobile:w-14 mobile:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 mobile:w-7 mobile:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-xl mobile:text-2xl font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm mobile:text-base font-body text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
