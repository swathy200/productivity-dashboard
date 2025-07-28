import React from "react";
import { useState } from "react";
const TaskInput = ({onAddTask}) => {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        className="flex-1 p-2 rounded border border-gray-300"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;