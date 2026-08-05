import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "918102557161";
  const message = encodeURIComponent("Hello, I need some information about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (!isVisible) return null;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={32} />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm py-2 px-4 rounded-lg shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap font-medium border border-gray-100">
        Chat with us
        <div className="absolute top-1/2 right-[-6px] -translate-y-1/2 w-3 h-3 bg-white transform rotate-45 border-r border-t border-gray-100"></div>
      </div>
    </motion.a>
  );
}
