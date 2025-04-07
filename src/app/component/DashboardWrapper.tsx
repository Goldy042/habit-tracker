import React, { ReactNode } from "react";
import Sidebar from "./sideNav";
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <Sidebar />
      <main className="md:ml-64 w-full p-10 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
