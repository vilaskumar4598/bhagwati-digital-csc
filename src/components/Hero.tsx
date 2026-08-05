import { motion } from 'motion/react';
import { Search, ArrowRight, FileText, CreditCard, Monitor } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const quickServices = [
    { title: 'Aadhaar Print', icon: <FileText size={20} /> },
    { title: 'PAN Card', icon: <CreditCard size={20} /> },
    { title: 'Ticket Booking', icon: <Monitor size={20} /> },
  ];

  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
      {/* Background with slight pattern */}
      <div className="absolute inset-0 z-0 bg-brand-blue">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left pt-10"
          >
            <div className="inline-block bg-orange-500/20 px-4 py-1.5 rounded-full text-orange-400 font-medium text-sm mb-6 border border-orange-500/30">
              Government Authorized CSC Centre
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Your Trusted Digital <br className="hidden sm:block"/>
              <span className="text-brand-orange">Service Partner</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Your one-stop solution for all government and digital services. Fast, secure, and trusted services for Aadhaar, PAN, banking, ticket booking, and much more.
            </p>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-xl shadow-lg flex items-center max-w-md mx-auto lg:mx-0 mb-8">
              <div className="pl-3 text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for a service... (e.g., PAN Card)"
                className="w-full px-3 py-3 outline-none text-gray-700 bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Search
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-gray-400 text-sm">Popular:</span>
              {quickServices.map((service, idx) => (
                <a 
                  key={idx} 
                  href="#services"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/10"
                >
                  {service.icon}
                  {service.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Graphics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Abstract composition for CSC */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange to-orange-400 rounded-full opacity-20 blur-3xl"></div>
              
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 z-20">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-sm p-1">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CSC_Logo.svg/512px-CSC_Logo.svg.png" 
                      alt="CSC Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Verified Service Center</h3>
                    <p className="text-sm text-gray-500">ID: 251147740018</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-white">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-brand-orange flex items-center gap-1">
                    5000+ Served <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 lg:-right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-30 flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <FileText size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Status</p>
                  <p className="text-sm font-bold text-gray-800">Same Day Process</p>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 lg:-left-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-30 flex items-center gap-3"
              >
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Monitor size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Online</p>
                  <p className="text-sm font-bold text-gray-800">100+ Services</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Wave/Shape Divider - Optional */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 hidden sm:block">
        <svg fill="var(--color-brand-light)" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] lg:h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.34,196.44,111.45C238.25,106.33,281.39,83.1,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
