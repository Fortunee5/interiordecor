import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 2, backgroundColor: 'rgba(217, 119, 6, 0.8)' });
      gsap.to(follower, { scale: 3, opacity: 0 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'white' });
      gsap.to(follower, { scale: 1, opacity: 1 });
    };

    const hoverables = document.querySelectorAll('a, button, .project-card');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor"
      ></div>
      <div 
        ref={followerRef} 
        className="custom-follower"
      ></div>
    </>
  );
};

export default CustomCursor;
