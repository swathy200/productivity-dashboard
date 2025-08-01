import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import DashboardCard from "./components/DashboardCard";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newtask) => {
    setTasks([...tasks, newtask]);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DashboardCard title="Tasks Completed" value="23" />
          <DashboardCard title="Focus Hours" value="5h 30m" />
          <DashboardCard title="Productivity Score" value="92%" />
        </div>
      </main>
      <TaskInput onAddTask={handleAddTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
