"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

// Sample data - replace with real data later
const data = [
  { name: "Mon", progress: 40 },
  { name: "Tue", progress: 60 },
  { name: "Wed", progress: 80 },
  { name: "Thu", progress: 50 },
  { name: "Fri", progress: 90 },
  { name: "Sat", progress: 70 },
  { name: "Sun", progress: 100 },
];

const ProgressChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="progress" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
