"use client";

import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import About from "../src/components/About/About";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Services from "../src/components/Services/Services";
import News from "../src/components/News/News";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";

export default function Page() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

