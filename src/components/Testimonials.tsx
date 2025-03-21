
import { useRef } from 'react';
import { Star, BarChart3, TrendingUp, LineChart } from 'lucide-react';
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

  return (
    <section 
      id="results" 
      className="py-24 px-6 md:px-12 relative overflow-hidden bg-xcend-50/30"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-full h-full pattern-grid opacity-30"></div>
      
      {/* Center Graphic Element */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-full bg-xcend-400 animate-pulse-subtle"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <BarChart3 className="w-16 h-16 text-xcend-600" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <LineChart className="w-16 h-16 text-xcend-600" strokeWidth={1.5} />
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <TrendingUp className="w-16 h-16 text-xcend-600" strokeWidth={1.5} />
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <BarChart3 className="w-16 h-16 text-xcend-600" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
      
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-on-scroll">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-card-effect bg-white/80 backdrop-blur-sm border border-xcend-100"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-xcend-400 text-xcend-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg font-medium mb-6 text-xcend-900">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-xcend-800">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
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
