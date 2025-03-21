
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
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-xcend-600">Xcend</span>
            <span className="font-light">Labs</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a 
            href="#services" 
            className="text-sm font-medium hover:text-xcend-600 transition-colors"
          >
            Services
          </a>
          <a 
            href="#results" 
            className="text-sm font-medium hover:text-xcend-600 transition-colors"
          >
            Results
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium hover:text-xcend-600 transition-colors"
          >
            Contact
          </a>
          <Button className="bg-xcend-600 hover:bg-xcend-700 text-white rounded-md">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
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
          "md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out px-6 pt-24",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-8">
          <a 
            href="#services" 
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#results" 
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Results
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button 
            className="bg-xcend-600 hover:bg-xcend-700 text-white w-full mt-4"
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
