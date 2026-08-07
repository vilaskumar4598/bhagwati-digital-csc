import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar for Contact Info */}
      <div className="bg-brand-blue text-white py-2 px-4 hidden md:block text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> +91 8102557161</span>
            <span className="flex items-center gap-2"><Mail size={14} /> bhagwatidigitalcsc@gmail.com</span>
          </div>
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Clock size={14} /> Mon–Sat | 9:00 AM – 7:00 PM</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Sheikhpura, Bihar</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="flex items-center gap-3">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CSC_Logo.svg/512px-CSC_Logo.svg.png" 
                  alt="CSC Logo" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
                <div className="flex flex-col border-l-2 border-gray-200 pl-3">
                  <span className="font-bold text-xl md:text-2xl text-brand-blue leading-tight">Bhagwati Digital<span className="text-brand-orange">.</span></span>
                  <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">COMMON SERVICE CENTRE</span>
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-orange font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand-orange hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-sm"
              >
                Appointment
              </a>

              {/* Top Right Circle Profile Image */}
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-brand-orange shadow-sm hover:scale-105 transition-transform cursor-pointer ml-2"
              />
            </div>

            {/* Mobile Menu Button & Profile Image */}
            <div className="md:hidden flex items-center gap-3">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-9 h-9 rounded-full object-cover border-2 border-brand-orange shadow-sm"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-brand-orange focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brand-orange rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-brand-orange text-white px-5 py-3 rounded-md font-medium"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}