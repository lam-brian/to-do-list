import React, { useState } from "react";

import styles from "./TaskForm.module.css";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Reset input fields
    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredDueDate("");

    // Lift state data
    props.onAddNewTask({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      id: Math.random().toString(),
    });
  };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  const dueDateChangeHandler = (e) => {
    setEnteredDueDate(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="title">Task Name</label>
        <input
          type="text"
          id="title"
          required
          placeholder="Finish To-Do List"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          cols="30"
          rows="3"
          placeholder="Use React to create To-Do list..."
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        ></textarea>
      </div>
      <div>
        <label htmlFor="due-date">Due Date</label>
        <input
          type="date"
          id="due-date"
          value={enteredDueDate}
          onChange={dueDateChangeHandler}
        />
      </div>
      <button>SUBMIT</button>
    </form>
  );
};

export default TaskForm;
