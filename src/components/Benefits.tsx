import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Weight, Brain, Heart, Users, Leaf } from 'lucide-react';

const benefitsList = [
  {
    title: "For Athletes & Surfers",
    icon: <Activity className="w-6 h-6" />,
    benefits: [
      "Sustained energy release",
      "Improved muscle recovery",
      "Natural electrolyte balance",
      "Enhanced endurance"
    ]
  },
  {
    title: "Weight Management",
    icon: <Weight className="w-6 h-6" />,
    benefits: [
      "High in fiber",
      "Promotes satiety",
      "Low glycemic index",
      "Supports metabolism"
    ]
  },
  {
    title: "Digestive Health",
    icon: <Heart className="w-6 h-6" />,
    benefits: [
      "Rich in prebiotics",
      "Supports gut bacteria",
      "Improves nutrient absorption",
      "Reduces inflammation"
    ]
  },
  {
    title: "Brain Function",
    icon: <Brain className="w-6 h-6" />,
    benefits: [
      "Essential B vitamins",
      "Improved focus",
      "Mental clarity",
      "Cognitive support"
    ]
  },
  {
    title: "Sustainability",
    icon: <Leaf className="w-6 h-6" />,
    benefits: [
      "Minimally processed",
      "Eco-friendly production",
      "Reduces food waste",
      "Supports local farmers"
    ]
  },
  {
    title: "Community Impact",
    icon: <Users className="w-6 h-6" />,
    benefits: [
      "Fair trade practices",
      "Empowers local communities",
      "Sustainable agriculture",
      "Economic growth"
    ]
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50" id="benefits">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Raw Banana Powder?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our premium raw banana powder offers numerous benefits for everyone, from athletes to health enthusiasts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <ul className="space-y-3">
                {benefit.benefits.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
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
            src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Banana trees"
            className="rounded-2xl shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;