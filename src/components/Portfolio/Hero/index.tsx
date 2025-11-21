"use client";

import Link from "next/link";
import { portfolioSocialLinks } from "@/data/portfolio";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section
      className="relative min-h-[50vh] lg:min-h-[100vh] flex items-center justify-center px-4 mobile:px-6 md:px-8 lg:px-12 py-12 mobile:py-16"
      style={{
        backgroundImage: "url('/assets/bg/portrait.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-center md:justify-start">
          {/* Content */}
          <div className="text-center md:text-left space-y-6 animate-fade-in-up max-w-4xl">
            <span className="text-sm mobile:text-base font-body text-gray-300 uppercase tracking-wider">
              {t("welcome")}
            </span>
            <h1 className="text-4xl mobile:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-white">
              {t("hi")} <span className="text-white">Hồng Hải</span>
              <br />
              <span className="text-white">{t("web_developer")}</span>
            </h1>
            <p className="text-base mobile:text-lg md:text-xl font-body text-gray-400 max-w-2xl">
              {t("base")}
            </p>
            <div className="flex flex-col mobile:flex-row gap-4 justify-center md:justify-start pt-4">
              <div className="flex gap-4 justify-center md:justify-start">
                {portfolioSocialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
