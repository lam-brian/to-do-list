import styles from "./TasksItem.module.css";

const TasksItem = (props) => {
  return (
    <li className={styles["tasks-item"]}>
      <h2>{props.taskData.title}</h2>
      <p>{props.taskData.description}</p>
      <p>Due: {props.taskData.dueDate || "N/A"}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default TasksItem;
