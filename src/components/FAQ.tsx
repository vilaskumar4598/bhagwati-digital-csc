import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What documents are required for PAN card application?",
      a: "You will need your Aadhaar card, a registered mobile number, and two passport-size photos for a new PAN card application."
    },
    {
      q: "Do you provide railway ticket booking?",
      a: "Yes, we are authorized to provide railway (IRCTC), bus, and flight booking services securely."
    },
    {
      q: "Is online payment available?",
      a: "Yes, we accept multiple payment methods including UPI (Google Pay, PhonePe, Paytm), cash, and bank transfers."
    },
    {
      q: "How long does it take for Aadhaar address update?",
      a: "The update process at our center takes about 15-20 minutes. Usually, UIDAI takes 3 to 14 days to process and approve the request."
    },
    {
      q: "Can I withdraw money using my Aadhaar card?",
      a: "Yes, we provide AEPS (Aadhaar Enabled Payment System) services where you can withdraw cash from your linked bank account using just your Aadhaar number and fingerprint."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-2">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === idx ? 'border-brand-blue bg-blue-50/30' : 'border-gray-200 bg-white'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                <span className={`text-gray-400 transition-transform duration-200 ${openIndex === idx ? 'text-brand-blue rotate-180' : ''}`}>
                  <ChevronDown size={20} />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
