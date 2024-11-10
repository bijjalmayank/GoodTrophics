import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const advantages = [
  {
    title: 'Natural Energy Boost',
    description: 'Rich in natural sugars and carbohydrates for sustained energy throughout the day.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Easy Digestion',
    description: 'Gentle on your stomach and perfect for smoothies and baking.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Nutrient Dense',
    description: 'Packed with essential vitamins and minerals for optimal health.',
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }
];

const Advantages = () => {
  return (
    <section className="py-20 px-4 bg-white" id="advantages">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our Banana Powder?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={advantage.image} 
                  alt={advantage.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600 mb-4">{advantage.description}</p>
                <button className="flex items-center text-yellow-600 font-medium group-hover:text-yellow-500 transition-colors">
                  Read More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;