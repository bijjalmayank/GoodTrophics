import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden" id="home">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="h-full flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-white max-w-3xl">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium mb-4 inline-block">
                100% Natural & Organic
              </span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              GoodTrphics
              <span className="block text-yellow-400 mt-2">Raw Banana Powder</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your baking and boost your health with nature's superfood. 
              Rich in resistant starch, vitamins, and minerals.
            </motion.p>
            <motion.div
              className="space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300">
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-white">
              <div>
                <h3 className="text-yellow-400 text-lg font-semibold mb-2">Natural Energy</h3>
                <p className="text-sm text-gray-300">Sustained release carbohydrates for lasting energy</p>
              </div>
              <div>
                <h3 className="text-yellow-400 text-lg font-semibold mb-2">Gut Health</h3>
                <p className="text-sm text-gray-300">Rich in resistant starch and prebiotics</p>
              </div>
              <div>
                <h3 className="text-yellow-400 text-lg font-semibold mb-2">Versatile Use</h3>
                <p className="text-sm text-gray-300">Perfect for baking, smoothies, and more</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;