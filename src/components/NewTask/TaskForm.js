import styles from "./TaskForm.module.css";

const TaskForm = (props) => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="title">Task Name</label>
        <input
          type="text"
          id="title"
          required
          placeholder="Finish To-Do List"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          cols="30"
          rows="3"
          placeholder="Use React to create To-Do list..."
        ></textarea>
      </div>
      <div>
        <label htmlFor="due-date">Due Date</label>
        <input type="date" id="due-date" />
      </div>
    </form>
  );
};

export default TaskForm;
