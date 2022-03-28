import React, { useState, useEffect } from "react";

import MainHeader from "./components/Layout/MainHeader";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedLocalTasks = localStorage.getItem("tasks");

    if (storedLocalTasks) setTasks(JSON.parse(storedLocalTasks));
  }, []);

  const addNewTaskHandler = (task) => {
    setTasks((prevState) => [...prevState, task]);

    const tasksData = [...tasks, task];

    localStorage.setItem("tasks", JSON.stringify(tasksData));
  };

  return (
    <div className="App">
      <MainHeader />
      <NewTask onAddNewTask={addNewTaskHandler} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
