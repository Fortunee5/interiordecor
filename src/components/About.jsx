import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          <div ref={imgRef} className="about-image-wrapper">
            <div className="about-image-container">
              <img 
                src="https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=640" 
                alt="Modern Interior" 
                className="about-image"
              />
            </div>
            <div className="about-deco-box"></div>
            <div className="about-deco-border"></div>
          </div>

          <div ref={textRef} className="about-text-content">
            <span className="about-eyebrow">Since 1998</span>
            <h2 className="about-title">
              We Craft Unique <br />
              <span className="italic">Architectural Visions</span>
            </h2>
            <div className="about-description">
              <p>
                Our studio is dedicated to the creation of beautiful and functional 
                interiors that reflect the unique personality of our clients. 
                We believe that every space has a story to tell.
              </p>
              <p>
                With over 25 years of experience, we have completed hundreds of 
                residential and commercial projects, each with its own set of 
                challenges and creative solutions.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="about-stat-item">
                <h3 className="about-stat-number">250+</h3>
                <p className="about-stat-label">Projects Done</p>
              </div>
              <div className="about-stat-item">
                <h3 className="about-stat-number">18+</h3>
                <p className="about-stat-label">Awards Won</p>
              </div>
            </div>

            <div className="about-footer">
              <button className="about-cta-btn">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
