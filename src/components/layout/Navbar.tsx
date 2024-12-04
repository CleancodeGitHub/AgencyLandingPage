import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">Flare</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 block"
    >
      {children}
    </a>
  );
}