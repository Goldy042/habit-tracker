import React from "react";
import DashboardLayout from "./DashboardWrapper";
import Overview from "../overview/page";
import HabitList from "../HabitList.tsx/page";
import ProgressChart from "./ProgressChart";
const Dashboard = () => {
  return (
    <>
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      <p className="mt-2 text-gray-600">Track your habits and build a better routine!</p>
      <Overview />
      <div>
      <h2 className="text-xl font-bold mb-4">Your Weekly Progress</h2>
      <ProgressChart />
    </div>
 
 
      <HabitList />

    </DashboardLayout>
     </>
    
  );
};

export default Dashboard;
