import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ParallaxText.css';

gsap.registerPlugin(ScrollTrigger);

const ParallaxText = () => {
  const triggerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });

    tl.to(text1Ref.current, { x: -200 }, 0);
    tl.to(text2Ref.current, { x: 200 }, 0);
  }, []);

  return (
    <section ref={triggerRef} className="parallax-text-section">
      <div className="parallax-wrapper">
        <div ref={text1Ref} className="parallax-row parallax-row-1">
          Elegance • Sophistication • Luxury • Comfort • Timeless •
        </div>
        <div ref={text2Ref} className="parallax-row parallax-row-2">
          • Architecture • Interior • Design • Lifestyle • Vision •
        </div>
      </div>
    </section>
  );
};

export default ParallaxText;
