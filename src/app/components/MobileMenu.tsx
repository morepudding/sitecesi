'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-blue-600 to-purple-600 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-6 pt-16">
              <nav className="space-y-4">
                <button
                  onClick={() => scrollToSection('practical')}
                  className="block w-full text-left text-white hover:text-blue-200 transition-colors py-3 text-lg"
                >
                  🏫 Practical Aspects
                </button>
                <button
                  onClick={() => scrollToSection('study')}
                  className="block w-full text-left text-white hover:text-blue-200 transition-colors py-3 text-lg"
                >
                  📚 Study Tips
                </button>
                <button
                  onClick={() => scrollToSection('tech')}
                  className="block w-full text-left text-white hover:text-blue-200 transition-colors py-3 text-lg"
                >
                  💻 Technology
                </button>
                <button
                  onClick={() => scrollToSection('social')}
                  className="block w-full text-left text-white hover:text-blue-200 transition-colors py-3 text-lg"
                >
                  🌊 Social Life
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
