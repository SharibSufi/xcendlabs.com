
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading with a shorter timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Only handle scroll reveal after content is loaded
  useEffect(() => {
    if (isLoading) return;
    
    // Add scroll reveal functionality
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealElementsOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealElementsOnScroll);
    // Check on initial load
    setTimeout(() => {
      revealElementsOnScroll();
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', revealElementsOnScroll);
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cyber-black flex items-center justify-center z-50">
        <div className="space-y-8 text-center">
          <div className="text-4xl font-orbitron tracking-wider">
            <span className="text-cyan-400 font-bold">Xcend</span>
            <span className="font-bold text-white">Labs</span>
          </div>
          <div className="w-16 h-16 relative mx-auto">
            <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-500 animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-b-2 border-l-2 border-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <div className="text-sm text-cyan-400/80 font-mono animate-pulse">Initializing Interface</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-cyber-black text-white font-exo">
      <CustomCursor />
      <div className="cyber-grid absolute inset-0 pointer-events-none"></div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
