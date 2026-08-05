import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Using a placeholder gradient/pattern since we don't have real images */}
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-blue-900 to-blue-700 flex flex-col items-center justify-center text-white p-8 text-center relative overflow-hidden">
                
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 border-4 border-white/10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

                <h3 className="text-3xl font-bold mb-4 relative z-10">Digital India Initiative</h3>
                <p className="text-blue-100 max-w-md relative z-10 font-medium leading-relaxed">
                  "Making digital services available to every citizen in rural and urban areas."
                </p>
                <div className="mt-8 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 relative z-10">
                  <span className="font-semibold tracking-wider">EST. 2021</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Citizens Through Digital Services</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong className="text-gray-900">Bhagwati Digital Common Service Centre (CSC)</strong> is an authorized digital service center providing a comprehensive suite of government, financial, education, and online services under the Digital India initiative.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Managed by Vilas Kumar, our center is dedicated to helping citizens access important services quickly, securely, and affordably without the need to travel long distances.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Authorized CSC Centre",
                "Secure Transactions",
                "Fast Processing",
                "Expert Assistance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-800 font-medium">
                  <CheckCircle2 className="text-brand-orange" size={20} />
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0 font-bold text-xl">
                VK
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Vilas Kumar</h4>
                <p className="text-sm text-gray-500 mb-2">Owner & Operator</p>
                <p className="text-sm text-gray-600 italic">"Our mission is to bridge the digital divide by bringing essential services right to your neighborhood."</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
