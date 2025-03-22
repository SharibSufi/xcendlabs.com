
import { useRef, useEffect } from 'react';
import { Users, Bookmark, Briefcase, TrendingUp } from 'lucide-react';

const statsData = [
  { 
    value: "50+", 
    label: "Happy Clients", 
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500 to-cyan-300"
  },
  { 
    value: "94%", 
    label: "Client Retention", 
    icon: <Bookmark className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500 to-purple-300"
  },
  { 
    value: "125+", 
    label: "Projects Completed", 
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500 to-cyan-300"
  },
  { 
    value: "40%", 
    label: "Avg. Conversion Boost", 
    icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500 to-purple-300"
  }
];

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const statItems = document.querySelectorAll('.stat-item');
          statItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('revealed');
            }, 150 * index);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-indigo-900 to-purple-950"
    >
      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      {/* Animated lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="stat-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 opacity-30"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                
                {/* Icon with glow */}
                <div className="mb-6 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-md opacity-70"></div>
                  <div className="relative bg-black/50 p-3 rounded-full inline-block">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Stat value with gradient */}
                <h3 className={`text-5xl font-bold mb-2 bg-gradient-to-br ${stat.color} text-transparent bg-clip-text font-orbitron`}>
                  {stat.value}
                </h3>
                
                {/* Label */}
                <p className="text-gray-300 text-lg">{stat.label}</p>
                
                {/* Animated corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12">
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-t-0 border-r-[20px] border-b-[20px] border-l-0 border-transparent border-r-transparent border-b-cyan-500/30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
