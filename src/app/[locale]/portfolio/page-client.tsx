"use client";

import Header from "@/components/Portfolio/Header";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Services from "@/components/Portfolio/Services";
import Projects from "@/components/Portfolio/Projects";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";
import ScrollToTop from "@/components/Portfolio/ScrollToTop";

export default function PortfolioPageClient() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
