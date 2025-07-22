import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
