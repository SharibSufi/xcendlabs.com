
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  
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
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      className="bg-xcend-950 text-white py-16 px-6 md:px-12 relative overflow-hidden"
      ref={footerRef}
    >
      {/* Enhanced footer background with multiple elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-xcend-950 to-black/90"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Add subtle animated glow effects */}
      <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-xcend-700/10 blur-3xl animate-pulse-subtle"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-xcend-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-xcend-400/5 to-xcend-600/10 blur-3xl"></div>
      
      {/* Add horizontal line with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-xcend-400/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 reveal-on-scroll">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              <span className="text-xcend-300">Xcend</span>
              <span className="font-light">Labs</span>
            </h3>
            <p className="text-xcend-100/80 mb-6">
              Empowering businesses through strategic automation and marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-xcend-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-xcend-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-xcend-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-xcend-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-xcend-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-xcend-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-xcend-100">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  Custom Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  GHL Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  Funnel Building
                </a>
              </li>
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  Social Media Growth
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-xcend-100">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-xcend-100/80 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-xcend-400 rounded-full mr-2 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-xcend-100">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 text-xcend-300 flex-shrink-0 mt-0.5 group-hover:text-xcend-400 transition-colors duration-300" />
                <span className="text-xcend-100/80 group-hover:text-white transition-colors duration-300">
                  1234 Innovation Way<br />
                  Tech Center, CA 94107
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-xcend-300 flex-shrink-0 group-hover:text-xcend-400 transition-colors duration-300" />
                <span className="text-xcend-100/80 group-hover:text-white transition-colors duration-300">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-xcend-300 flex-shrink-0 group-hover:text-xcend-400 transition-colors duration-300" />
                <span className="text-xcend-100/80 group-hover:text-white transition-colors duration-300">
                  hello@xcendlabs.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-xcend-800/50 mt-12 pt-8 text-center text-xcend-100/60 text-sm reveal-on-scroll">
          <p>&copy; {new Date().getFullYear()} XcendLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
