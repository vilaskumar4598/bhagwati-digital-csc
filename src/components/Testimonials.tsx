import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Abhimanyu Kumar",
      service: "PAN Card Service",
      text: "Very fast PAN card service and friendly behavior. Highly recommended for any document work.",
      rating: 5
    },
    {
      name: "Rakesh Singh",
      service: "Aadhaar Update",
      text: "I got my Aadhaar update completed within 20 minutes. The operator is very knowledgeable.",
      rating: 5
    },
    {
      name: "Suman Devi",
      service: "Online Form Fill-up",
      text: "Best CSC center in our area for all online work. They helped me fill my scholarship form perfectly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decorative Quote */}
        <div className="absolute top-0 right-10 text-blue-800/30">
          <Quote size={200} />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-2">Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h3>
          <p className="max-w-2xl mx-auto text-blue-200">Don't just take our word for it. Read what the people of Sheikhpura have to say about our services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-blue-900/50 p-8 rounded-2xl border border-blue-800 backdrop-blur-sm"
            >
              <div className="flex text-brand-orange mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed italic">"{testi.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-brand-blue rounded-full flex items-center justify-center font-bold text-lg">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testi.name}</h4>
                  <p className="text-sm text-brand-orange">{testi.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
