'use client';

export default function QuizHighlight() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white shadow-xl">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎯</span>
            <h3 className="text-2xl font-bold">English Quiz Practice Platform</h3>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold text-lg mb-2">Third Conditional Example:</p>
              <p className="text-green-100">
                <span className="font-medium">If I had used this quiz platform before my exam,</span>
                <br />
                <span className="font-medium">I would have scored much higher on my English test!</span>
              </p>
            </div>
            
            <p className="text-lg">
              Practice your English skills with interactive quizzes designed specifically 
              for CESI students preparing for their final English examination.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>Grammar exercises</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>Vocabulary building</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>Reading comprehension</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>Third conditional practice</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <a
            href="https://vercel.com/bottero-romains-projects/quizz-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 Start Practicing Now!
          </a>
          <p className="text-center text-sm mt-2 text-green-100">
            Free • Interactive • Exam-focused
          </p>
        </div>
      </div>
    </div>
  );
}
