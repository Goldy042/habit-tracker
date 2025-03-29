import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-6">
      {/* Hero Content */}
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-800">Build Better Habits Every Day</h2>
        <p className="mt-3 text-gray-600">Track your progress, stay motivated, and achieve your goals.</p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-600">Get Started</button>
          <button className="px-6 py-3 border border-gray-600 text-gray-600 rounded-md hover:bg-gray-800 hover:text-white">
            Learn More
          </button>
        </div>

        {/* Fitness Tracker Section */}
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700">Fitness Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
            <div className="bg-gray-800 h-4 rounded-full w-3/5"></div>
          </div>
          <p className="mt-2 text-gray-800">60% of your weekly goal completed</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;