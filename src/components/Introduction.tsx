import React from 'react';
import { motion } from 'framer-motion';

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

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Banana photo */}
          <div className="flex-1 relative">
            <motion.img
              src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Banana plantation"
              className="rounded-2xl shadow-lg mx-auto mb-8 opacity-70 h-80 w-full object-cover"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Right side: Benefits of Banana Powder */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Banana Powder is Good for You</h3>
              <p className="text-gray-600 mb-4">
                Raw banana powder is rich in dietary fiber, essential vitamins, and minerals. It's a great addition to your diet to promote gut health, support metabolism, and maintain a healthy weight.
              </p>
              <p className="text-gray-600 mb-4">
                Packed with resistant starch, it aids in digestion and helps maintain healthy blood sugar levels. Its natural energy-boosting properties make it a perfect addition to smoothies and recipes.
              </p>
              <p className="text-gray-600 mb-4">
                The powder is also an excellent source of potassium, helping to maintain a healthy heart and regulate blood pressure.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
