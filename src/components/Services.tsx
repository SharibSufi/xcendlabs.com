
import { useEffect, useRef } from 'react';
import { Settings, Mail, Share, LineChart, Layers } from 'lucide-react';

const services = [
  {
    icon: <Settings className="h-10 w-10 text-xcend-500" />,
    title: "Custom Automation",
    description: "Streamline your business operations with tailored automation solutions designed for your specific workflow needs.",
    delay: 0
  },
  {
    icon: <Settings className="h-10 w-10 text-xcend-500" />,
    title: "GHL Automation",
    description: "Maximize your Go High Level platform with expert automation that turns your CRM into a powerful growth engine.",
    delay: 0.1
  },
  {
    icon: <Layers className="h-10 w-10 text-xcend-500" />,
    title: "Funnel Building",
    description: "Create high-converting funnels that guide prospects through a seamless journey from awareness to conversion.",
    delay: 0.2
  },
  {
    icon: <Mail className="h-10 w-10 text-xcend-500" />,
    title: "Email Marketing",
    description: "Deploy strategic email campaigns that nurture leads, convert prospects, and maximize customer lifetime value.",
    delay: 0.3
  },
  {
    icon: <Share className="h-10 w-10 text-xcend-500" />,
    title: "Social Media Growth",
    description: "Build authentic engagement and expand your reach with organic social media strategies tailored to your audience.",
    delay: 0.4
  },
  {
    icon: <LineChart className="h-10 w-10 text-xcend-500" />,
    title: "Performance Analytics",
    description: "Gain actionable insights with detailed reporting that tracks performance and identifies optimization opportunities.",
    delay: 0.5
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute -right-40 top-20 w-96 h-96 bg-xcend-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-20 w-96 h-96 bg-xcend-50/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 bg-xcend-50 text-xcend-800 rounded-full text-sm font-medium">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Comprehensive Solutions for Digital Growth
          </h2>
          <p className="text-muted-foreground">
            We offer a full spectrum of services designed to automate your operations,
            build effective funnels, and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="p-8 rounded-xl glass-panel hover-card-effect reveal-on-scroll"
              style={{ transitionDelay: `${service.delay}s` }}
            >
              <div className="p-3 bg-xcend-50 rounded-lg inline-block mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
