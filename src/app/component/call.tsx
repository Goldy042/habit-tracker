import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-800 py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold leading-tight">
          Take Control of Your Habits Today!  
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Start tracking and improving your daily routine with ease.  
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/signup"
            className="bg-gray border-2 border-white text-white-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-600 transition">
              Sign Up Now  
          </Link>
          <Link href="/features"
             className="border-2 border-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-600 hover:text-white-600 transition">
              Learn More  
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
