import React from "react";
import { FaHome, FaTasks, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        🧠 Productivity
      </div>
      <ul className="mt-6 space-y-4 p-4">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer flex items-center gap-3">
          <FaHome />
          Home
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer flex items-center gap-3">
          {" "}
          <FaTasks />
          Tasks
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer flex items-center gap-3">
          {" "}
          <FaChartBar />
          Analytics
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer flex items-center gap-3">
          <FaCog /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
