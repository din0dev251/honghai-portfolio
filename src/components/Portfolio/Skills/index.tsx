"use client";

import Image from "next/image";
import { portfolioSkillGroups } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section
      id="skills"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioSkillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-background rounded-2xl border border-border p-6 mobile:p-8"
            >
              <h3 className="text-xl font-heading font-semibold mb-2">{group.title}</h3>
              {group.description && (
                <p className="text-sm font-body text-muted-foreground mb-4">{group.description}</p>
              )}
              <div className="grid grid-cols-2 mobile:grid-cols-3 sm:grid-cols-4 gap-3 mobile:gap-4 mt-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-muted/30 px-2 py-3 transition-colors hover:border-primary/40 hover:bg-muted/60"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white border border-border">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                        unoptimized
                        className="h-7 w-7 object-contain"
                      />
                    </div>
                    <span className="text-center text-[11px] mobile:text-xs font-body text-muted-foreground leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
