import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">GoodTrphics</h3>
            <p className="text-gray-400">
              Natural goodness from nature's best bananas, delivered in every scoop.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#advantages" className="text-gray-400 hover:text-yellow-500 transition-colors">Advantages</a></li>
              <li><a href="#vitamins" className="text-gray-400 hover:text-yellow-500 transition-colors">Vitamins</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@goodtrphics.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Banana Street</li>
              <li>Fruit Valley, FL 12345</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GoodTrphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;