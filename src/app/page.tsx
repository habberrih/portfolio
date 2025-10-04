'use client';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Portfolio from '@/components/Portfolio/Portfolio';
import Services from '@/components/Services/Services';
import News from '@/components/News/News';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

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
