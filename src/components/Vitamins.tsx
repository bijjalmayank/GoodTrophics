import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const vitamins = [
  {
    name: 'Vitamin B6',
    description: 'Essential for brain development and function',
    side: 'left'
  },
  {
    name: 'Vitamin C',
    description: 'Boosts immune system and skin health',
    side: 'right'
  },
  {
    name: 'Potassium',
    description: 'Supports heart health and muscle function',
    side: 'left'
  },
  {
    name: 'Magnesium',
    description: 'Important for bone health and energy production',
    side: 'right'
  }
];

const Vitamins = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-yellow-50" id="vitamins">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Nutritional Benefits
        </motion.h2>

        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-300" />

          {/* Vitamin items */}
          <div className="relative">
            {vitamins.map((vitamin, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${vitamin.side === 'left' ? 'justify-end md:pr-8' : 'justify-start md:pl-8'}`}
                initial={{ opacity: 0, x: vitamin.side === 'left' ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className={`w-full md:w-5/12 ${vitamin.side === 'left' ? 'text-right' : 'text-left'}`}>
                  <div className={`p-6 rounded-2xl shadow-lg bg-white transform transition-transform hover:scale-105 ${vitamin.side === 'left' ? 'mr-4' : 'ml-4'}`}>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-600">{vitamin.name}</h3>
                    <p className="text-gray-600">{vitamin.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vitamins;
