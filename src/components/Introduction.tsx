import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Brain } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">The Power of Raw Green Banana Powder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover nature's superfood that's revolutionizing health and wellness. Our raw banana powder 
            is packed with essential nutrients that support gut health, weight management, and overall wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="w-8 h-8 text-green-500" />,
              title: "100% Natural",
              description: "Sustainably sourced and minimally processed to preserve all natural nutrients"
            },
            {
              icon: <Heart className="w-8 h-8 text-red-500" />,
              title: "Heart Healthy",
              description: "Rich in potassium and magnesium for optimal cardiovascular health"
            },
            {
              icon: <Brain className="w-8 h-8 text-blue-500" />,
              title: "Brain Power",
              description: "Essential B vitamins support cognitive function and mental clarity"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <img
            src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Banana plantation"
            className="rounded-2xl shadow-lg mx-auto mb-8"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our bananas are carefully selected from sustainable farms and processed using state-of-the-art 
            technology to ensure the highest quality powder while maintaining all natural benefits.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;