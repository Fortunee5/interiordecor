import { useEffect, useRef } from 'react';
import { Home, Brush, Compass, Building2, Lightbulb, LayoutGrid } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Home size={40} />,
    title: 'Residential Design',
    desc: 'Creating comfortable and stylish homes tailored to your lifestyle and preferences.'
  },
  {
    icon: <Building2 size={40} />,
    title: 'Commercial Design',
    desc: 'Designing professional and inspiring workspaces that boost productivity and brand image.'
  },
  {
    icon: <Brush size={40} />,
    title: 'Interior Styling',
    desc: 'Curating the perfect mix of furniture, art, and accessories to elevate your existing space.'
  },
  {
    icon: <Compass size={40} />,
    title: 'Space Planning',
    desc: 'Optimizing the flow and functionality of your interior through smart layout solutions.'
  },
  {
    icon: <Lightbulb size={40} />,
    title: 'Lighting Design',
    desc: 'Setting the mood with bespoke lighting solutions that highlight architectural features.'
  },
  {
    icon: <LayoutGrid size={40} />,
    title: 'Furniture Design',
    desc: 'Designing custom pieces that fit perfectly in your space and meet your specific needs.'
  }
];

const Services = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="section-padding services-section">
      <div className="container">
        <div className="services-header">
          <span className="services-eyebrow">What We Do</span>
          <h2 className="services-title">Our Design Expertise</h2>
          <div className="services-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={el => { cardsRef.current[idx] = el; }}
              className="service-card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">
                {service.desc}
              </p>
              <a href="#" className="service-card-link">
                Read More +
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
