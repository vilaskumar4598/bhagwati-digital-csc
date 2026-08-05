import { Shield, Zap, UserCheck, Tag, HeadphonesIcon, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Government Authorized",
      description: "We are a certified Common Service Centre under the Digital India initiative.",
      icon: <Shield size={24} />
    },
    {
      title: "Fast & Secure",
      description: "All transactions and data processing are done with highest security standards.",
      icon: <Zap size={24} />
    },
    {
      title: "Experienced Operators",
      description: "Skilled staff to ensure your applications are filled correctly without errors.",
      icon: <UserCheck size={24} />
    },
    {
      title: "Affordable Charges",
      description: "Transparent and minimal fees as per government guidelines for all services.",
      icon: <Tag size={24} />
    },
    {
      title: "Customer Support",
      description: "Friendly assistance to track your applications and resolve queries.",
      icon: <HeadphonesIcon size={24} />
    },
    {
      title: "Same Day Processing",
      description: "Most of our services are initiated the same day to save your valuable time.",
      icon: <Clock size={24} />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-semibold tracking-wider uppercase text-sm mb-2">Our Advantage</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
          <p className="max-w-2xl mx-auto text-gray-600">We are committed to providing the best digital service experience in the region.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors rounded-xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
