interface SectionTitleProps {
  icon: string;
  title: string;
  subtitle: string;
}

export default function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
    </div>
  );
}
