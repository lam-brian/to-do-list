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

  const addNewTaskHandler = (task) => {
    setTasks((prevState) => [...prevState, task]);

    // Save tasks to local storage
    const tasksData = [...tasks, task];
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  };

  const editTaskHandler = (editedTaskData) => {
    // Edit task
    const editedTasks = [...tasks];
    const oldTaskIndex = editedTasks.findIndex(
      (task) => task.id === editedTaskData.id
    );

    editedTasks[oldTaskIndex] = editedTaskData;

    setTasks(editedTasks);

    // Update local storage
    localStorage.setItem("tasks", JSON.stringify(editedTasks));
  };

  const deleteTaskHandler = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));

    // Update local storage
    const tasksData = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasksData));
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
