import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Weight, Brain, Heart, Users, Leaf } from 'lucide-react';

const cardData = [
  {
    title: "Boosts Immunity",
    description: "Packed with vitamins to strengthen your immune system.",
    color: "bg-green-200",
    icon: <Activity className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Natural Energy",
    description: "Provides a steady energy boost without any crash.",
    color: "bg-blue-200",
    icon: <Weight className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Eco-Friendly",
    description: "Sustainably sourced with minimal environmental impact.",
    color: "bg-yellow-200",
    icon: <Leaf className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Supports Wellness",
    description: "Promotes overall health and well-being.",
    color: "bg-purple-200",
    icon: <Heart className="h-8 w-8 text-purple-500" />,
  },
];

const CardSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`${card.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
