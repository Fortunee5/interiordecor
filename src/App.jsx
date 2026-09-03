import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import ParallaxText from './components/ParallaxText';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    revealElements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Marquee />
        <Stats />
        <Portfolio />
        <ParallaxText />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
