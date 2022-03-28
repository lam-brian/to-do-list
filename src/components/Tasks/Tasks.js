import Section from "../UI/Section";
import TasksItem from "./TasksItem";

import styles from "./Tasks.module.css";

const Tasks = (props) => {
  return (
    <Section>
      <div className={styles.tasks}>
        <select>
          <option value="tasks-all">All Tasks</option>
          <option value="tasks-due">Tasks Due Today</option>
        </select>
        <ul>
          {props.tasks.map((task) => (
            <TasksItem key={task.id} taskData={task} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Tasks;
