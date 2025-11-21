"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <section
      id="projects"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-muted rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full h-48 mobile:h-56 md:h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden ">
                <Image src={project.image} alt={project.title} fill className="custom-image" />
              </div>
              <div className="p-6 mobile:p-8">
                <h3 className="text-xl mobile:text-2xl font-heading font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm mobile:text-base font-body text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs mobile:text-sm font-body bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.live && (
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="font-heading"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("live_demo")}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
