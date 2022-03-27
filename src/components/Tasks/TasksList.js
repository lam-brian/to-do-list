import styles from "./TasksList.module.css";

const TasksList = (props) => {
  return (
    <div className={styles["tasks-list"]}>
      <select>
        <option value="tasks-all">All Tasks</option>
        <option value="tasks-due">Tasks Due Today</option>
      </select>
      <ul>
        {props.tasks.map((task) => (
          <li>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
