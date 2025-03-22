
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
      className="min-h-screen relative overflow-hidden pt-32 pb-20 px-6 md:px-12"
      ref={heroRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10 z-0"></div>
      
      {/* Animated orbs/particles */}
      <div className="absolute top-40 -right-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-cyan-400/80 rounded-full animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-500/80 rounded-full animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-pink-500/80 rounded-full animate-pulse-subtle" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-medium animate-fade-in cyber-border">
              Automate. Build. Grow.
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Elevate Your Business with <span className="gradient-text">Strategic Automation</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              XcendLabs helps businesses streamline operations and boost growth through custom automation solutions, advanced funnel building, and strategic marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-6 rounded-md text-base relative overflow-hidden group">
                <span className="relative z-10">Schedule Consultation</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400/20 to-transparent bg-[length:200%_100%] animate-border-flow"></span>
              </Button>
              
              <Button variant="outline" className="group border-cyan-500/50 hover:border-cyan-400 px-8 py-6 rounded-md text-base backdrop-blur-sm bg-black/20">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="futuristic-interface relative w-full aspect-square max-w-lg mx-auto animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
              {/* Circular holographic element */}
              <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 animate-pulse-subtle"></div>
              <div className="absolute inset-4 rounded-full border-2 border-cyan-400/40 animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
              <div className="absolute inset-8 rounded-full border border-cyan-300/50 animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
              
              {/* Center holographic display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-lg glass-panel-dark overflow-hidden relative shadow-lg backdrop-blur-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-cyan-500/10"></div>
                  
                  {/* HUD elements */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="w-20 h-3 bg-cyan-500/40 rounded-full"></div>
                    <div className="w-32 h-3 bg-purple-500/40 rounded-full"></div>
                  </div>
                  
                  <div className="absolute top-1/4 inset-x-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500/60 to-purple-500/60 animate-pulse-subtle"></div>
                    </div>
                  </div>
                  
                  {/* Data visualization elements */}
                  <div className="absolute bottom-10 inset-x-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-20 bg-gradient-to-t from-cyan-500/30 to-transparent rounded"></div>
                      <div className="h-32 bg-gradient-to-t from-purple-500/30 to-transparent rounded"></div>
                      <div className="h-24 bg-gradient-to-t from-cyan-500/30 to-transparent rounded"></div>
                    </div>
                    <div className="mt-2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                    <div className="mt-2 flex justify-between">
                      <div className="w-20 h-2 bg-cyan-500/40 rounded-full"></div>
                      <div className="w-20 h-2 bg-purple-500/40 rounded-full"></div>
                      <div className="w-20 h-2 bg-cyan-500/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating tech elements */}
              <div className="absolute -top-4 right-10 w-12 h-12 rounded-full bg-purple-500/60 animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-10 -left-4 w-16 h-16 rounded-lg bg-cyan-500/60 rotate-12 animate-float" style={{animationDelay: '2.5s'}}></div>
              <div className="absolute top-1/3 -right-6 w-10 h-10 rounded-lg bg-pink-500/60 -rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
              
              {/* Connection lines */}
              <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-cyan-400/50 animate-pulse-subtle"></div>
              <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-purple-500/50 via-cyan-400/50 to-purple-500/50 animate-pulse-subtle" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
