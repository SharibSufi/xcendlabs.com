
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-xcend-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-xcend-50/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="rounded-2xl overflow-hidden glass-panel reveal-on-scroll">
          <div className="relative p-12">
            <div className="absolute top-0 right-0 w-full h-full pattern-grid opacity-30"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-xcend-50/50 via-white/30 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="text-center max-w-xl mx-auto space-y-6">
                <div className="inline-block px-4 py-1.5 bg-xcend-50 text-xcend-800 rounded-full text-sm font-medium">
                  Ready to Grow?
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Transform Your Business with Strategic Automation
                </h2>
                
                <p className="text-muted-foreground">
                  Schedule a free consultation to discover how XcendLabs can help
                  streamline your operations and accelerate your growth.
                </p>
                
                <div className="flex justify-center pt-4">
                  <Button className="bg-xcend-600 hover:bg-xcend-700 text-white h-12 px-6">
                    Book Your Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
