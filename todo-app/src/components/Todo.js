import React, { useState, useEffect } from "react";
import "./Todo.css";
import Task from "./Task.js";
import CreateTask from "./CreateTask";

//todo component
function Todo() {
  //set intial tasks and fxn to update task
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  const [tasksRemaining, setTasksRemaining] = useState(0);

  useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
};

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  //returning a list of tasks
  return (
    <div className="todo-container">
      <div className="header">Pending tasks ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task 
          task={task} 
          index={index} 
          completeTask={completeTask}
          removeTask={removeTask}
          key={index} />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
