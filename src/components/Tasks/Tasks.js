import React, { useState } from "react";

import Section from "../UI/Section";
import TasksItem from "./TasksItem";

import styles from "./Tasks.module.css";

const Tasks = (props) => {
  const [taskSet, setTaskSet] = useState("tasks-all");

  const filterTasksHandler = (e) => {
    setTaskSet(e.target.value);
  };

  let content = (
    <p
      style={{
        color: "var(--grey-cyan-shade)",
        fontSize: "2.4rem",
        fontWeight: "500",
      }}
    >
      No tasks!
    </p>
  );

  // All tasks
  const tasksAll = props.tasks
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .map((task) => (
      <TasksItem
        key={task.id}
        taskData={task}
        onDeleteTask={props.onDeleteTask.bind(null, task.id)}
        onEditTask={props.onEditTask}
      />
    ));

  // Tasks due
  const tasksDue = props.tasks
    .filter((task) => {
      let [month, date, year] = props.todaysDate.split("/");

      if (month.length === 1) month = "0".concat(month);
      if (date.length === 1) date = "0".concat(date);
      const formattedDate = `${year}-${month}-${date}`;

      return task.dueDate === formattedDate;
    })
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .map((task) => (
      <TasksItem
        key={task.id}
        taskData={task}
        onDeleteTask={props.onDeleteTask.bind(null, task.id)}
        onEditTask={props.onEditTask}
      />
    ));

  if (props.tasks.length !== 0) {
    content = <ul>{taskSet === "tasks-all" ? tasksAll : tasksDue}</ul>;
  }

  return (
    <Section>
      <div className={styles.tasks}>
        <select onChange={filterTasksHandler}>
          <option value="tasks-all">All Tasks</option>
          <option value="tasks-due">Tasks Due Today</option>
        </select>
        {content}
      </div>
    </Section>
  );
};

export default Tasks;
