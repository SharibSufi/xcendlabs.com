
import { useEffect, useRef } from 'react';
import { Settings, Mail, Share, LineChart, Layers, Code } from 'lucide-react';

const services = [
  {
    icon: <Settings className="h-10 w-10 text-xcend-500 group-hover:text-white transition-colors duration-300" />,
    title: "Custom Automation",
    description: "Streamline your business operations with tailored automation solutions designed for your specific workflow needs.",
    delay: 0
  },
  {
    icon: <Code className="h-10 w-10 text-xcend-500 group-hover:text-white transition-colors duration-300" />,
    title: "GHL Automation",
    description: "Maximize your Go High Level platform with expert automation that turns your CRM into a powerful growth engine.",
    delay: 0.1
  },
  {
    icon: <Layers className="h-10 w-10 text-xcend-500 group-hover:text-white transition-colors duration-300" />,
    title: "Funnel Building",
    description: "Create high-converting funnels that guide prospects through a seamless journey from awareness to conversion.",
    delay: 0.2
  },
  {
    icon: <Mail className="h-10 w-10 text-xcend-500 group-hover:text-white transition-colors duration-300" />,
    title: "Email Marketing",
    description: "Deploy strategic email campaigns that nurture leads, convert prospects, and maximize customer lifetime value.",
    delay: 0.3
  },
  {
    icon: <Share className="h-10 w-10 text-xcend-500 group-hover:text-white transition-colors duration-300" />,
    title: "Social Media Growth",
    description: "Build authentic engagement and expand your reach with organic social media strategies tailored to your audience.",
    delay: 0.4
  },
  {
    icon: <LineChart className="h-10 w-10 text-xcend-500 group-hover:text-white transition-colors duration-300" />,
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
      {/* Improved background graphics */}
      <div className="absolute -right-40 top-20 w-96 h-96 bg-xcend-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-20 w-96 h-96 bg-xcend-50/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      
      {/* Add animated grid lines */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
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
              className="group p-8 rounded-xl glass-panel reveal-on-scroll relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,143,236,0.3)] hover:-translate-y-1 border border-transparent hover:border-xcend-500/30"
              style={{ transitionDelay: `${service.delay}s` }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-xcend-300/5 to-xcend-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-xcend-400/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="p-3 bg-xcend-50 rounded-lg inline-block mb-5 relative z-10 transition-colors duration-300 group-hover:bg-xcend-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground relative z-10">{service.description}</p>
              
              {/* Add interactive bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-xcend-400 to-xcend-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
