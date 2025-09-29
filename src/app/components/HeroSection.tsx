'use client';

import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            🎓 CESI Guide
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('practical')}
              className="hover:text-blue-200 transition-colors"
            >
              Practical
            </button>
            <button 
              onClick={() => scrollToSection('study')}
              className="hover:text-blue-200 transition-colors"
            >
              Study Tips
            </button>
            <button 
              onClick={() => scrollToSection('tech')}
              className="hover:text-blue-200 transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('social')}
              className="hover:text-blue-200 transition-colors"
            >
              Social Life
            </button>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            If I Had Known...
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            A guide from former students who wish they had known these things before starting at CESI La Rochelle. 
            Learn from our experiences using the third conditional!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold mb-4">What you&apos;ll discover:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏫</span>
                <span>Campus life secrets</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📚</span>
                <span>Study strategies that work</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💻</span>
                <span>Tech setup essentials</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌊</span>
                <span>La Rochelle lifestyle tips</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => scrollToSection('practical')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Learning From Our Mistakes! 📖
          </button>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1200 120L0 16.48V120H1200Z" fill="currentColor" className="text-blue-50 dark:text-gray-900"/>
        </svg>
      </div>
    </header>
  );
}
