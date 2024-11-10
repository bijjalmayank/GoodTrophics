import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Battery, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Natural Energy Source",
      description: "Our raw banana powder provides sustained energy through complex carbohydrates and resistant starch. Perfect for athletes, busy professionals, and anyone seeking natural vitality.",
      benefits: [
        "Slow-release energy",
        "No sugar crashes",
        "Enhanced endurance",
        "Improved focus"
      ],
      icon: <Battery className="w-6 h-6" />
    },
    {
      image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Digestive Health",
      description: "Rich in prebiotics and resistant starch, our powder supports optimal gut health and digestion. Experience improved nutrient absorption and digestive comfort.",
      benefits: [
        "Prebiotic support",
        "Improved gut flora",
        "Better digestion",
        "Reduced bloating"
      ],
      icon: <Heart className="w-6 h-6" />
    },
    {
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Brain Function",
      description: "Essential B vitamins and minerals in our banana powder support cognitive function and mental clarity. Stay sharp and focused throughout your day.",
      benefits: [
        "Mental clarity",
        "Improved focus",
        "Memory support",
        "Stress reduction"
      ],
      icon: <Brain className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 mb-20 last:mb-0"
        >
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            index % 2 === 0 ? '' : 'md:flex-row-reverse'
          }`}>
            <div className={index % 2 === 0 ? 'order-1 md:order-none' : ''}>
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="relative">
                <div className="absolute -bottom-6 left-6 right-6 bg-yellow-50 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>100% Natural</span>
                    <span>•</span>
                    <span>Organic Certified</span>
                    <span>•</span>
                    <span>Sustainably Sourced</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  {feature.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{feature.title}</h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Leaf className="w-5 h-5 text-yellow-500 mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Features;