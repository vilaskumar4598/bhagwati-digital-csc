import { Users, LayoutGrid, Clock, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { title: "Happy Customers", value: "5000+", icon: <Users size={32} /> },
    { title: "Digital Services", value: "100+", icon: <LayoutGrid size={32} /> },
    { title: "Years Experience", value: "5+", icon: <Clock size={32} /> },
    { title: "Satisfaction Rate", value: "98%", icon: <ThumbsUp size={32} /> },
  ];

  return (
    <section className="py-16 bg-brand-blue border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-800/50 text-brand-orange flex items-center justify-center rounded-2xl mb-4 shadow-inner">
                {stat.icon}
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-blue-200 font-medium text-sm sm:text-base">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
