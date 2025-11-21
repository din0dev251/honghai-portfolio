import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PortfolioPageClient from "./page-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Portfolio" });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function PortfolioPage() {
  return <PortfolioPageClient />;
}
