import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Weight, Brain, Heart, Users, Leaf } from 'lucide-react';

const benefitsList = [
  // ... Your benefitsList array here
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50 min-h-screen" id="benefits">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Feel the Goodness of Bananas</h2>
          <p className="text-lg text-gray-600">
            Bananas are a rich source of natural energy, essential vitamins, and minerals, making them an ideal addition to any diet. Our raw banana powder is packed with nutrients to enhance well-being, from boosting energy levels to supporting heart health.
          </p>
          <p className="text-lg text-gray-600">
            With minimal processing and a commitment to sustainability, our banana powder brings the wholesome benefits of bananas in a convenient form for daily consumption. Experience the natural goodness that supports your lifestyle and health.
          </p>
          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefitsList.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                </div>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Banana trees"
            className="rounded-2xl shadow-lg w-full lg:w-4/5 h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
