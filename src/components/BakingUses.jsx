import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Cookie, Wheat, Leaf, Coffee, Sandwich, Info, Settings } from 'lucide-react';

const bakingCategories = [
  {
    title: "Breads & Rolls",
    icon: <Wheat className="w-6 h-6" />,
    description: "Perfect dough conditioner for softer texture and extended freshness",
    applications: [
      "Add 5-10% to bread dough",
      "Improves moisture retention",
      "Creates softer crumb structure",
      "Extends shelf life"
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Cookies & Pastries",
    icon: <Cookie className="w-6 h-6" />,
    description: "Enhances texture and moisture retention in cookies and pastries",
    applications: [
      "Creates chewier texture",
      "Maintains moisture",
      "Improves flakiness",
      "Natural binding"
    ],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Gluten-Free Baking",
    icon: <Leaf className="w-6 h-6" />,
    description: "Essential for improving texture in gluten-free products",
    applications: [
      "Better structure",
      "Improved mouthfeel",
      "Natural binding",
      "Nutritional boost"
    ],
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Vegan Baking",
    icon: <Cake className="w-6 h-6" />,
    description: "Perfect egg replacer for vegan baking needs",
    applications: [
      "Natural egg substitute",
      "Improved texture",
      "Better binding",
      "Added nutrition"
    ],
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const additionalUses = [
  {
    title: "Custards & Puddings",
    icon: <Coffee className="w-6 h-6" />,
    benefits: [
      "Natural thickener",
      "Smooth texture",
      "Consistent results",
      "Clean label ingredient"
    ]
  },
  {
    title: "Pancakes & Waffles",
    icon: <Sandwich className="w-6 h-6" />,
    benefits: [
      "Fluffier texture",
      "Better moisture",
      "Extended freshness",
      "Enhanced nutrition"
    ]
  }
];

const BakingUses = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white" id="baking">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Professional Baking Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your baking with our premium raw banana powder. Perfect for professional 
            bakeries and home bakers seeking superior results.
          </p>
        </motion.div>

        {bakingCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            <div className={index % 2 === 0 ? 'order-1 md:order-none' : ''}>
              <img
                src={category.image}
                alt={category.title}
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <p className="text-lg text-gray-600">{category.description}</p>
              
              <ul className="space-y-3">
                {category.applications.map((app, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Applications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalUses.map((use, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-600 mr-4">
                    {use.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{use.title}</h4>
                </div>
                <ul className="space-y-2">
                  {use.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Tips</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-600 mr-4">
                  <Info className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold">Storage & Handling</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Store in airtight containers</li>
                <li>• Keep in cool, dry conditions</li>
                <li>• Optimal temperature: 18-22°C</li>
                <li>• Shelf life: 12 months when properly stored</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold">Usage Guidelines</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Start with 5-10% substitution</li>
                <li>• Adjust liquid content as needed</li>
                <li>• Perfect for clean label products</li>
                <li>• Ideal egg replacer (1:1 ratio by weight)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BakingUses;
