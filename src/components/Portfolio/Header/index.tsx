"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/lib/i18nNavigation";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const switchLocale = () => {
    const newLocale = locale === "en" ? "vi" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md text-black" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto max-w-7xl px-4 mobile:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 mobile:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="text-xl mobile:text-2xl font-heading font-bold focus:outline-none"
            aria-label="Scroll to home"
            type="button"
          >
            D1noDev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 justify-end w-full">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm mobile:text-base font-heading font-medium text-foreground hover:text-primary transition-colors ${isScrolled ? "text-black" : "text-white"}`}
              >
                {t(link.key as any)}
              </button>
            ))}
            {/* Locale Switcher */}
            <button
              onClick={switchLocale}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-muted ${isScrolled ? "text-black" : "text-white"}`}
              aria-label="Switch language"
            >
              <Image
                src={
                  locale === "en"
                    ? "/assets/language/united-kingdom.svg"
                    : "/assets/language/vietnam.svg"
                }
                alt={locale === "en" ? "English" : "Tiếng Việt"}
                width={20}
                height={20}
                className="w-7 h-5"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Locale Switcher chỉ dành cho mobile */}
            <button
              onClick={() => {
                switchLocale();
                setIsMobileMenuOpen(false);
              }}
              className="flex md:hidden items-center gap-2 px-4 py-2 text-base font-heading font-medium text-foreground hover:text-primary transition-colors"
            >
              <Image
                src={
                  locale === "en"
                    ? "/assets/language/united-kingdom.svg"
                    : "/assets/language/vietnam.svg"
                }
                alt={locale === "en" ? "English" : "Tiếng Việt"}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
            <button
              className={cn(
                "md:hidden p-2 rounded-full transition-transform duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary/40",
                isMobileMenuOpen ? "scale-90 rotate-90" : "scale-100 rotate-0"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4 bg-background/95 backdrop-blur-md rounded-b-2xl animate-mobile-menu-down origin-top ">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-base font-heading font-medium text-foreground hover:text-primary transition-colors"
              >
                {t(link.key as any)}
              </button>
            ))}
            {/* Mobile Locale Switcher */}
          </div>
        )}
      </nav>
    </header>
  );
}
