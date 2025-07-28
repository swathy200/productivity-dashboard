import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="p-2 border-b border-gray-200">
            <span className="text-gray-800">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
