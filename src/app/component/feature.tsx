import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // For icons

const Features = [
  {
    title: "Track Your Progress",
    description: "Easily monitor your daily habits with visual tracking.",
    icon: <FaCheckCircle className="text-gray-800 text-3xl" />,
  },
  {
    title: "Set Custom Goals",
    description: "Create personalized habits and set achievable milestones.",
    icon: <FaCheckCircle className="text-gray-600 text-3xl" />,
  },
  {
    title: "Daily Reminders",
    description: "Get notified so you never miss a habit again.",
    icon: <FaCheckCircle className="text-gray-600 text-3xl" />,
  },
  {
    title: "Reports & Insights",
    description: "View detailed analytics of your progress over time.",
    icon: <FaCheckCircle className="text-gray-600 text-3xl" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our Habit Tracker?</h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">Stay consistent and achieve your goals with our easy-to-use habit tracking tool.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {Features.map((Feature, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md flex items-start gap-4">
            {Feature.icon}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{Feature.title}</h3>
              <p className="text-gray-600">{Feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
