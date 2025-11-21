"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("AboutSection");
  return (
    <section
      id="about"
      className="py-16 mobile:py-20 md:py-24 lg:py-32 bg-background px-4 mobile:px-6 md:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative w-full h-[300px] mobile:h-[400px] md:h-[500px]">
            <div className="w-full h-full bg-muted rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Image
                  src="/assets/about/avatar.jpg"
                  alt="Profile"
                  width={650}
                  height={650}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl mobile:text-4xl md:text-5xl font-heading font-bold">
              {t("title")}
            </h2>
            <div className="space-y-4 font-body text-base mobile:text-lg text-muted-foreground">
              <p>{t("description_1")}</p>
              <p>{t("description_2")}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl mobile:text-4xl font-heading font-bold text-primary">
                  6+
                </div>
                <div className="text-sm mobile:text-base font-body text-muted-foreground mt-1">
                  {t("years_experience")}
                </div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl mobile:text-4xl font-heading font-bold text-primary">
                  20+
                </div>
                <div className="text-sm mobile:text-base font-body text-muted-foreground mt-1">
                  {t("projects_completed")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
