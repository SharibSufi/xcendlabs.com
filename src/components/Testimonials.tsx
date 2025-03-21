
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "XcendLabs completely transformed our lead generation process. Their automation solutions saved us 20+ hours per week while increasing conversions by 43%.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechFirm",
    rating: 5
  },
  {
    quote: "The email marketing campaigns designed by XcendLabs delivered a 3x ROI within the first month. Their strategic approach to funnel building was exactly what we needed.",
    author: "Michael Chen",
    position: "CEO, Growth Solutions",
    rating: 5
  },
  {
    quote: "Our social media engagement increased by 78% after implementing XcendLabs' organic growth strategy. Their team's expertise is unmatched in the industry.",
    author: "Emma Rodriguez",
    position: "Brand Manager, EcoStart",
    rating: 5
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const scrollToTestimonial = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const testimonialElements = scrollRef.current.children;
      if (testimonialElements[index]) {
        testimonialElements[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const nextTestimonial = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    scrollToTestimonial(nextIndex);
  };

  const prevTestimonial = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollToTestimonial(prevIndex);
  };

  return (
    <section 
      id="results" 
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-xcend-50/30"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-full h-full pattern-grid opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 bg-white text-xcend-800 rounded-full text-sm font-medium">
            Client Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Success Stories from Our Clients
          </h2>
          <p className="text-muted-foreground">
            See how XcendLabs has helped businesses achieve remarkable results through automation and strategic marketing.
          </p>
        </div>
        
        <div className="relative reveal-on-scroll">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-10 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-[300px] md:min-w-[500px] lg:min-w-[650px] snap-center p-8 rounded-xl glass-panel flex flex-col flex-shrink-0"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-xcend-400 text-xcend-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl font-medium mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-xcend-500 w-6" : "bg-xcend-200"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-white/80"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-white/80"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
