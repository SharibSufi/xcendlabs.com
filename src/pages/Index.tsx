
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading with a shorter timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

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
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="space-y-6 text-center">
          <div className="text-3xl font-semibold tracking-tight">
            <span className="text-xcend-600">Xcend</span>
            <span className="font-light">Labs</span>
          </div>
          <div className="w-12 h-12 border-t-2 border-xcend-500 border-r-2 border-b-2 border-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
