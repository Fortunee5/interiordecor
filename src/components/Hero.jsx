import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(bgRef.current, {
      scale: 1.1,
      duration: 10,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
      0.5
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    );
  }, []);

  return (
    <div ref={heroRef} className="hero">
      <div 
        ref={bgRef}
        className="hero-bg"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920")',
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-inner animate-slide-up">Luxury Interior Architecture</span>
          </span>
          <h1 ref={titleRef} className="hero-title">
            Design Your <br />
            <span className="hero-title-italic">Dream Space</span>
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            We transform ordinary spaces into extraordinary experiences through 
            thoughtful design and meticulous craftsmanship.
          </p>
          <div ref={buttonRef} className="hero-buttons">
            <a href="#portfolio" className="hero-btn hero-btn-primary">
              <span>View Projects</span>
              <ArrowRight className="hero-btn-icon" size={16} />
            </a>
            <a href="#contact" className="hero-btn hero-btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-bar">
          <div className="scroll-dot animate-scroll-down"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
