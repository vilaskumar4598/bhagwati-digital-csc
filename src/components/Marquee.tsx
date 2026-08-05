import { Megaphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Marquee() {
  const updates = [
    "New PM Kisan Samman Nidhi registration is now open.",
    "Get your PAN card updated within 24 hours.",
    "E-Shram card registration available free of cost.",
    "Ayushman Bharat card printing available.",
    "Apply for PM Vishwakarma Yojana at our center."
  ];

  return (
    <div className="bg-brand-orange text-white py-2 overflow-hidden flex items-center border-b-4 border-orange-600 relative z-20">
      <div className="px-4 bg-brand-orange z-10 flex items-center gap-2 font-semibold shadow-[10px_0_10px_-5px_rgba(255,107,0,1)]">
        <Megaphone size={18} />
        <span className="hidden sm:inline whitespace-nowrap">Govt Updates:</span>
      </div>
      <div className="flex-1 overflow-hidden relative flex group cursor-pointer whitespace-nowrap">
        {/* We use two identical text blocks animating indefinitely */}
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Block 1 */}
          <div className="flex pr-8">
            {updates.map((update, idx) => (
              <span key={idx} className="mx-6 flex items-center text-sm">
                <span className="w-2 h-2 bg-white rounded-full mx-3 opacity-50"></span>
                {update}
              </span>
            ))}
          </div>
          {/* Block 2 (duplicate for seamless loop) */}
          <div className="flex pr-8">
            {updates.map((update, idx) => (
              <span key={`dup-${idx}`} className="mx-6 flex items-center text-sm">
                <span className="w-2 h-2 bg-white rounded-full mx-3 opacity-50"></span>
                {update}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
