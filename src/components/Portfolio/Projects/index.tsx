"use client";

import { portfolioProjects } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="py-16 mobile:py-20 md:py-24 lg:py-32 bg-muted/50 px-4 mobile:px-6 md:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl mobile:text-4xl md:text-5xl font-heading font-bold mb-3">
            {t("title")}
          </h2>
          <p className="text-base mobile:text-lg font-body text-muted-foreground max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {portfolioProjects.map((project) => (
            <li key={project.title} className="py-5 mobile:py-6 md:py-7">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                <div className="min-w-0 space-y-1">
                  <h3 className="text-lg mobile:text-xl font-heading font-semibold">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm font-body text-muted-foreground">{project.subtitle}</p>
                  )}
                  <p className="text-sm mobile:text-base font-body text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-[42%] md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-body bg-primary/10 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
