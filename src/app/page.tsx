import AdviceCard from './components/AdviceCard';
import HeroSection from './components/HeroSection';
import SectionTitle from './components/SectionTitle';
import QuizHighlight from './components/QuizHighlight';

export default function Home() {
  const practicalAdvice = [
    {
      title: "Campus Navigation",
      condition: "If I had known the campus layout better,",
      result: "I would have saved so much time between classes.",
      tip: "Download the campus map and do a practice walk on your first day."
    },
    {
      title: "Parking Strategy",
      condition: "If I had arrived earlier for parking,",
      result: "I wouldn't have been late to so many morning lectures.",
      tip: "Get to campus by 7:30 AM or consider cycling/public transport."
    },
    {
      title: "Food Planning",
      condition: "If I had prepared meals in advance,",
      result: "I would have eaten healthier and saved money.",
      tip: "Meal prep on Sundays and use the campus microwaves."
    },
    {
      title: "Accommodation Research",
      condition: "If I had started looking for housing earlier,",
      result: "I would have found a better place closer to campus.",
      tip: "Start your accommodation search 3-4 months before starting."
    }
  ];

  const studyAdvice = [
    {
      title: "Study Groups",
      condition: "If I had joined study groups from the beginning,",
      result: "I would have understood difficult concepts much faster.",
      tip: "Form study groups in your first week - don't wait until exams."
    },
    {
      title: "Time Management",
      condition: "If I had used a proper planning system,",
      result: "I wouldn't have felt so overwhelmed with deadlines.",
      tip: "Use apps like Notion or Google Calendar to track all assignments."
    },
    {
      title: "Teacher Relationships",
      condition: "If I had asked more questions in class,",
      result: "I would have built better relationships with my professors.",
      tip: "Participate actively - teachers remember engaged students."
    },
    {
      title: "Project Management",
      condition: "If I had started group projects earlier,",
      result: "I would have avoided last-minute stress and poor grades.",
      tip: "Begin working on projects the day they're assigned, not the week before."
    },
    {
      title: "English Exam Preparation",
      condition: "If I had practiced with online quizzes regularly,",
      result: "I would have passed my final English exam with much better confidence.",
      tip: "Use interactive quiz platforms to improve your English skills progressively."
    }
  ];

  const techAdvice = [
    {
      title: "Laptop Specifications",
      condition: "If I had invested in better hardware,",
      result: "I wouldn't have struggled with slow performance during coding sessions.",
      tip: "Get at least 16GB RAM and an SSD - your future self will thank you."
    },
    {
      title: "Software Setup",
      condition: "If I had learned Git and VS Code earlier,",
      result: "I would have been more efficient from day one.",
      tip: "Spend your first weekend setting up your development environment properly."
    },
    {
      title: "Backup Strategy",
      condition: "If I had set up automatic backups,",
      result: "I wouldn't have lost my entire project two days before submission.",
      tip: "Use cloud storage and Git religiously - backup everything automatically."
    },
    {
      title: "CESI Accounts",
      condition: "If I had activated all my CESI accounts immediately,",
      result: "I wouldn't have missed important announcements in my first week.",
      tip: "Check your CESI email daily and set up all online accounts on day one."
    }
  ];

  const socialAdvice = [
    {
      title: "La Rochelle Exploration",
      condition: "If I had explored the city more in my first month,",
      result: "I would have discovered amazing places and made more local friends.",
      tip: "Take weekend walks around the Old Port and join city activities."
    },
    {
      title: "Student Activities",
      condition: "If I had joined student clubs earlier,",
      result: "I would have had a much richer social experience.",
      tip: "Sign up for at least one club during integration week - don't hesitate!"
    },
    {
      title: "Budgeting",
      condition: "If I had created a monthly budget,",
      result: "I wouldn't have run out of money by the third week each month.",
      tip: "Track your expenses and plan for unexpected costs like textbooks."
    },
    {
      title: "Work-Life Balance",
      condition: "If I had maintained better work-life balance,",
      result: "I wouldn't have burned out during exam periods.",
      tip: "Schedule regular breaks and social time - studying 24/7 isn't effective."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Practical Aspects Section */}
        <section id="practical">
          <SectionTitle 
            icon="🏫"
            title="Practical Aspects"
            subtitle="What former students wish they had known about campus life"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalAdvice.map((advice, index) => (
              <AdviceCard key={index} advice={advice} />
            ))}
          </div>
        </section>

        {/* Study Tips Section */}
        <section id="study">
          <SectionTitle 
            icon="📚"
            title="Study Tips & Academic Success"
            subtitle="Learning strategies that would have made a difference"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studyAdvice.map((advice, index) => (
              <AdviceCard key={index} advice={advice} />
            ))}
          </div>
          
          {/* English Quiz Platform Highlight */}
          <div className="mt-12">
            <QuizHighlight />
          </div>
        </section>

        {/* Technology Section */}
        <section id="tech">
          <SectionTitle 
            icon="💻"
            title="Technology & Tools"
            subtitle="Tech setup advice from students who learned the hard way"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techAdvice.map((advice, index) => (
              <AdviceCard key={index} advice={advice} />
            ))}
          </div>
        </section>

        {/* Social Life Section */}
        <section id="social">
          <SectionTitle 
            icon="🌊"
            title="Social Life & La Rochelle"
            subtitle="Making the most of your student experience"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialAdvice.map((advice, index) => (
              <AdviceCard key={index} advice={advice} />
            ))}
          </div>
        </section>

        {/* Final Message */}
        <section className="text-center py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              If We Had Known Everything...
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              If we had known all this information before starting at CESI La Rochelle, 
              we would have had a much smoother and more enjoyable student experience. 
              Now you have the advantage of learning from our mistakes!
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Remember:</h3>
              <p className="text-lg">
                Every challenge is a learning opportunity. If you face difficulties, 
                you will have gained valuable experience that will help you in the future.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
