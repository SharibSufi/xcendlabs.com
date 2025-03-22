
import { useRef, useEffect } from 'react';
import { Star, BarChart3, TrendingUp, LineChart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
  
  useEffect(() => {
    // Initialize animations
    const animateCards = () => {
      const cards = document.querySelectorAll('.testimonial-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('card-revealed');
        }, 300 * index);
      });
    };
    
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateCards();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(sectionRef.current);
    }
    
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <section 
      id="results" 
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwSDI4VjBoNHYzNHptOCAwaC00VjBoNHYzNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>
      
      {/* Center Graphic Element */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 animate-pulse-subtle"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <BarChart3 className="w-16 h-16 text-cyan-300" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <LineChart className="w-16 h-16 text-purple-300" strokeWidth={1.5} />
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <TrendingUp className="w-16 h-16 text-indigo-300" strokeWidth={1.5} />
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <Zap className="w-16 h-16 text-cyan-300" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-medium border border-white/20">
            Client Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-white to-purple-200 text-transparent bg-clip-text">
            Results That Speak for Themselves
          </h2>
          <p className="text-white/80 text-lg">
            See how XcendLabs has helped businesses achieve remarkable results through innovative automation and strategic marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="testimonial-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out bg-white/10 backdrop-blur-md border border-white/20 text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-20"></div>
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl"></div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg font-medium mb-6 text-white/90 relative">
                  <span className="text-6xl font-serif absolute -top-8 -left-2 text-cyan-500/30">"</span>
                  {testimonial.quote}
                </blockquote>
                
                <div className="relative z-10">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-cyan-300">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
