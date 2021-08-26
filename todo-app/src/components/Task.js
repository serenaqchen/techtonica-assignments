import React from "react";
import "./Task.css";

//task component
function Task({ task, index, completeTask, removeTask }) {
  return (
      //return a div with task title and the style changes (strike through) when task is complete or not complete
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}

export default Task;
