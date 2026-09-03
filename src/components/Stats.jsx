import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Stats.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 25, label: 'Years Experience', suffix: '+' },
  { value: 480, label: 'Projects Completed', suffix: '' },
  { value: 120, label: 'Awards Won', suffix: '' },
  { value: 15, label: 'Countries Served', suffix: '' },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, idx) => {
        if (!counter) return;
        
        const target = stats[idx].value;
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: target,
          duration: 2,
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
          },
          onUpdate: () => {
            counter.innerText = Math.floor(obj.val).toString();
          },
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">
                <span ref={el => { countersRef.current[idx] = el; }}>0</span>
                {stat.suffix}
              </div>
              <p className="stat-label">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
