import React from "react";
import { FaUserPlus, FaClipboardList, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const guideData = [
  {
    title: "Sign Up",
    description: "Create an account in seconds and get started.",
    icon: <FaUserPlus className="text-gray-800 text-4xl" />,
    link: "/signup",
  },
  {
    title: "Add Your Habits",
    description: "Customize and track your habits easily.",
    icon: <FaClipboardList className="text-gray-800 text-4xl" />,
  },
  {
    title: "Stay Consistent",
    description: "Receive reminders and track your streaks.",
    icon: <FaChartLine className="text-gray-800 text-4xl" />,
  },
];

const Guide = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        Start tracking your habits in just three simple steps!
      </p>

      <div className="grid md:grid-cols-3 gap-8">

{guideData.map((step, index) => (
  <section key={index} className="flex flex-col items-center">
    {step.icon}
    {step.link ? ( 
      <Link href={step.link}
         className="mt-4 text-gray-800 hover:bg-gray-700 transition">
          {step.title}
        
      </Link>
    ) : (
      <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
    )}
    <p className="text-gray-600 mb-10 max-w-xl mx-auto">{step.description}</p>
  </section>
))}

      </div>
    </section>
  );
};

export default Guide;
