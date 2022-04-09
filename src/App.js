import React, { useState, useEffect } from "react";

import MainHeader from "./components/Layout/MainHeader";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [todaysDate, setTodaysDate] = useState();

  useEffect(() => {
    // Set today's date
    setTodaysDate(new Date().toLocaleDateString());

    // Retrieve tasks stored in local storage
    const storedLocalTasks = localStorage.getItem("tasks");

    if (storedLocalTasks) setTasks(JSON.parse(storedLocalTasks));
  }, []);

  useEffect(() => {
    console.log("RUNNING");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTaskHandler = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const editTaskHandler = (editedTaskData) => {
    // Edit task
    const editedTasks = [...tasks];
    const oldTaskIndex = editedTasks.findIndex(
      (task) => task.id === editedTaskData.id
    );

    editedTasks[oldTaskIndex] = editedTaskData;

    setTasks(editedTasks);
  };

  const deleteTaskHandler = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <MainHeader todaysDate={todaysDate} />
      <NewTask onAddNewTask={addNewTaskHandler} />
      <Tasks
        todaysDate={todaysDate}
        tasks={tasks}
        onDeleteTask={deleteTaskHandler}
        onEditTask={editTaskHandler}
      />
    </div>
  );
}

export default App;
