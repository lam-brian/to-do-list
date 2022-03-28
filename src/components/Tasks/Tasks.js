import Section from "../UI/Section";
import TasksItem from "./TasksItem";

import styles from "./Tasks.module.css";

const Tasks = (props) => {
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

  if (props.tasks.length !== 0) {
    content = (
      <ul>
        {props.tasks.map((task) => (
          <TasksItem
            key={task.id}
            taskData={task}
            onDeleteTask={props.onDeleteTask.bind(null, task.id)}
            onEditTask={props.onEditTask}
          />
        ))}
      </ul>
    );
  }

  return (
    <Section>
      <div className={styles.tasks}>
        <select>
          <option value="tasks-all">All Tasks</option>
          <option value="tasks-due">Tasks Due Today</option>
        </select>
        {content}
      </div>
    </Section>
  );
};

export default Tasks;
