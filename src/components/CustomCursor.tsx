
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      // Find all possible interactive elements
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', () => setHidden(false));
    window.addEventListener('mouseleave', () => setHidden(true));
    
    // Set up the link hover detection after a short delay to ensure all elements are loaded
    const timeout = setTimeout(handleLinkHoverEvents, 500);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', () => setHidden(false));
      window.removeEventListener('mouseleave', () => setHidden(true));
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div 
        className={`cyber-cursor-outer pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full border border-cyan-400/60 z-[9999] transition-transform duration-150 ${
          clicked ? 'scale-75' : ''
        } ${linkHovered ? 'scale-150' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          backdropFilter: 'blur(2px)',
          backgroundColor: 'rgba(8, 145, 178, 0.05)',
          transitionProperty: 'transform, width, height, border, opacity',
        }}
      ></div>
      <div 
        className={`cyber-cursor-inner pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 z-[9999] transition-transform duration-150 ${
          clicked ? 'scale-150 opacity-50' : 'opacity-100'
        } ${linkHovered ? 'scale-0' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          boxShadow: '0 0 10px rgba(34, 211, 238, 0.6), 0 0 20px rgba(34, 211, 238, 0.3)',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
