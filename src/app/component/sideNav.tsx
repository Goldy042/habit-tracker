"use client"; // Ensures React hooks work in Next.js
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 text-white bg-gray-800 fixed top-4 left-4 rounded-lg z-50"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
        <li>
           <Link href="/dashboard"
             className="flex items-center gap-3 text-lg hover:text-white transition">
                <FaHome /> Dashboard
          
            </Link>
           </li>
          <li>
             <Link href="/progress"
              className="flex items-center gap-3 text-lg hover:text-white transition">
                <FaChartLine /> Progress
        
            </Link>
          </li>
          <li>
            <Link href="/settings"
             className="flex items-center gap-3 text-lg hover:text-white transition">
                <FaCog /> Settings
           
            </Link>
          </li>
          <li>
            <button className="flex items-center gap-3 text-lg text-red-400 hover:text-red-500 transition w-full">
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
