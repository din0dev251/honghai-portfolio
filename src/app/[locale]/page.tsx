"use client";

import Header from "@/components/Portfolio/Header";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Experience from "@/components/Portfolio/Experience";
import Services from "@/components/Portfolio/Services";
import Skills from "@/components/Portfolio/Skills";
import Partners from "@/components/Portfolio/Partners";
import Projects from "@/components/Portfolio/Projects";
import Approach from "@/components/Portfolio/Approach";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <Services />
        <Skills />
        <Partners />
        <Projects />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
