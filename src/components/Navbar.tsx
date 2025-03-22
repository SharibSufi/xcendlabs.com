
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-black/50 backdrop-blur-xl border-b border-cyan-500/30" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <h1 className="text-2xl font-orbitron tracking-wider">
            <span className="text-cyan-400 group-hover:text-white transition-colors duration-300">Xcend</span>
            <span className="font-light group-hover:text-cyan-400 transition-colors duration-300">Labs</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a 
            href="#services" 
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
          >
            Services
          </a>
          <a 
            href="#results" 
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
          >
            Results
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
          >
            Contact
          </a>
          <Button className="bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-md relative overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl z-40 transform transition-transform duration-500 pt-24 px-6",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
        <button 
          className="absolute top-6 right-6 text-cyan-400 focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        <nav className="flex flex-col space-y-8">
          <a 
            href="#services" 
            className="text-xl font-medium text-cyan-400 py-2 border-b border-cyan-900/50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#results" 
            className="text-xl font-medium text-cyan-400 py-2 border-b border-cyan-900/50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Results
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium text-cyan-400 py-2 border-b border-cyan-900/50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white w-full mt-4 py-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
