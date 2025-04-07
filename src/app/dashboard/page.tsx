import React from "react";
import Dashboard from "@/app/component/dashboard";
// import ProgressChart from "../ProgressChart.tsx/page";
const DashboardPage = () => {
    return(
  <>
  <Dashboard />

  <div>
      <h2 className="text-xl font-bold mb-4">Your Weekly Progress</h2>
      {/* <ProgressChart /> */}
    </div>
 
  </>    
        
    )
}
export default DashboardPage;