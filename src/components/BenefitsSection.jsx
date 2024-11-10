import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Brain } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Product Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="w-8 h-8 text-green-500" />,
              title: "100% Natural",
              description: "Sustainably sourced and minimally processed to preserve all natural nutrients",
              color: "bg-green-200"
            },
            {
              icon: <Heart className="w-8 h-8 text-red-500" />,
              title: "Heart Healthy",
              description: "Rich in potassium and magnesium for optimal cardiovascular health",
              color: "bg-red-200"
            },
            {
              icon: <Brain className="w-8 h-8 text-blue-500" />,
              title: "Brain Power",
              description: "Essential B vitamins support cognitive function and mental clarity",
              color: "bg-blue-200"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${item.color}`}
            >
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
