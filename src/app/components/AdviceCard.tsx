'use client';

import { useState } from 'react';

interface AdviceCardProps {
  advice: {
    title: string;
    condition: string;
    result: string;
    tip: string;
  };
}

export default function AdviceCard({ advice }: AdviceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-64 group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            {advice.title}
          </h3>
          
          <div className="space-y-3">
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-3 rounded">
              <p className="text-red-700 dark:text-red-300 font-medium text-sm">
                {advice.condition}
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-3 rounded">
              <p className="text-green-700 dark:text-green-300 font-medium text-sm">
                {advice.result}
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 text-gray-400 dark:text-gray-500">
            <span className="text-sm">Click to see tip →</span>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">💡 Pro Tip</h3>
          <p className="text-lg leading-relaxed">
            {advice.tip}
          </p>
          
          <div className="absolute bottom-4 right-4 text-blue-100">
            <span className="text-sm">← Click to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
}
