import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Loft',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 2,
    title: 'Urban Office Space',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/36573009/pexels-photo-36573009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 3,
    title: 'Luxury Penthouse',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/10493902/pexels-photo-10493902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 4,
    title: 'Eco-Friendly Villa',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/27165071/pexels-photo-27165071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 5,
    title: 'Contemporary Boutique',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/35547069/pexels-photo-35547069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 6,
    title: 'Mountain Retreat',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/12401710/pexels-photo-12401710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-title-wrapper">
            <span className="portfolio-eyebrow">Our Works</span>
            <h2 className="portfolio-title">Featured Projects</h2>
          </div>
          
          <div className="portfolio-filters">
            {['All', 'Residential', 'Commercial'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? 'filter-btn-active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3 className="project-card-title">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
