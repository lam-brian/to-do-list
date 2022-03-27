import React from "react";

import MainHeader from "./components/Layout/MainHeader";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

const DUMMY_DATA = [
  {
    title: "Create project",
    description: "use react in order to create a to-do list",
    date: new Date(),
    dueDate: "march, 26, 2022",
  },
  {
    title: "Workout",
    description: "Goto the gym 5 days a week",
    date: new Date(),
    dueDate: "march, 26, 2022",
  },
  {
    title: "Workout",
    description: "Goto the gym 5 days a week",
    date: new Date(),
    dueDate: "march, 26, 2022",
  },
  {
    title: "Workout",
    description: "Goto the gym 5 days a week",
    date: new Date(),
    dueDate: "march, 26, 2022",
  },
];

function App() {
  return (
    <div className="App">
      <MainHeader />
      <NewTask />
      <Tasks tasks={DUMMY_DATA} />
    </div>
  );
}

export default App;
