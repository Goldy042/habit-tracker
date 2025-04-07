"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaFire, FaChartLine } from "react-icons/fa";

const Overview = () => {
  // Example state (replace with real data)
  const [streak, setStreak] = useState(7);
  const [completedHabits, setCompletedHabits] = useState(15);
  const [progress, setProgress] = useState(80); // Example: 80% progress

  useEffect(() => {
    // Fetch real habit data here in the future
  }, []);

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Completed Habits */}
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
        whileHover={{ scale: 1.05 }}
      >
        <FaCheckCircle className="text-green-500 text-4xl" />
        <div>
          <h3 className="text-lg font-semibold">Habits Completed</h3>
          <p className="text-2xl font-bold">{completedHabits}</p>
        </div>
      </motion.div>

      {/* Streak Counter */}
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
        whileHover={{ scale: 1.05 }}
      >
        <FaFire className="text-red-500 text-4xl" />
        <div>
          <h3 className="text-lg font-semibold">Current Streak</h3>
          <p className="text-2xl font-bold">{streak} days</p>
        </div>
      </motion.div>

      {/* Progress Percentage with Animated Progress Bar */}
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-4">
          <FaChartLine className="text-blue-500 text-4xl" />
          <div>
            <h3 className="text-lg font-semibold">Progress</h3>
            <p className="text-2xl font-bold">{progress}%</p>
          </div>
        </div>


        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-blue-500 h-3 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Overview;
