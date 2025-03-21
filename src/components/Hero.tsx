
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="min-h-screen relative overflow-hidden pt-32 pb-20 px-6 md:px-12 pattern-grid"
      ref={heroRef}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-xcend-50/20 to-xcend-100/20 z-0"></div>
      
      <div className="absolute top-40 right-0 w-64 h-64 bg-xcend-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-xcend-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 reveal-on-scroll">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-xcend-50 text-xcend-800 rounded-full text-sm font-medium animate-fade-in">
              Automate. Build. Grow.
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elevate Your Business with <span className="text-xcend-600">Strategic Automation</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              XcendLabs helps businesses streamline operations and boost growth through custom automation solutions, advanced funnel building, and strategic marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-xcend-600 hover:bg-xcend-700 text-white px-8 py-6 rounded-md text-base">
                Schedule Consultation
              </Button>
              
              <Button variant="outline" className="group border-xcend-200 hover:border-xcend-400 px-8 py-6 rounded-md text-base">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 rounded-2xl glass-panel shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-xcend-100/50 via-white/80 to-white/30"></div>
                <div className="absolute inset-0 pattern-grid opacity-30"></div>
                
                <div className="relative h-full w-full p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-2/3 h-6 rounded-md bg-xcend-100"></div>
                    <div className="w-5/6 h-4 rounded-md bg-xcend-50"></div>
                    <div className="w-1/2 h-4 rounded-md bg-xcend-50"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/60">
                      <div className="w-12 h-12 rounded-lg bg-xcend-400 mb-3"></div>
                      <div className="w-3/4 h-3 rounded-md bg-xcend-200 mb-2"></div>
                      <div className="w-1/2 h-3 rounded-md bg-xcend-100"></div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/60">
                      <div className="w-12 h-12 rounded-lg bg-xcend-300 mb-3"></div>
                      <div className="w-3/4 h-3 rounded-md bg-xcend-200 mb-2"></div>
                      <div className="w-1/2 h-3 rounded-md bg-xcend-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-xcend-500 animate-float"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-xcend-300 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
