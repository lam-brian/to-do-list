import React, { useState } from "react";

import styles from "./TasksItem.module.css";

const TasksItem = (props) => {
  const [editing, setEditing] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState(props.taskData.title);
  const [enteredDescription, setEnteredDescription] = useState(
    props.taskData.description
  );
  const [enteredDueDate, setEnteredDueDate] = useState(props.taskData.dueDate);

  let formattedDate = props.taskData.dueDate;
  if (props.taskData.dueDate) {
    const [year, month, date] = props.taskData.dueDate.split("-");
    formattedDate = `${month}/${date}/${year}`;
  }

  const submitEditHandler = (e) => {
    e.preventDefault();

    const editedTaskData = {
      id: props.taskData.id,
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    props.onEditTask(editedTaskData);
    setEditing(false);
  };

  const cancelFormHandler = (e) => {
    setEditing(false);

    setEnteredTitle(props.taskData.title);
    setEnteredDescription(props.taskData.description);
    setEnteredDueDate(props.taskData.dueDate);
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

  let content = (
    <>
      <h2>{props.taskData.title}</h2>
      <p>{props.taskData.description}</p>
      <p>Due: {formattedDate || "N/A"}</p>
      <div>
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={props.onDeleteTask}>Delete</button>
      </div>
    </>
  );

  const editForm = (
    <form onSubmit={submitEditHandler}>
      <input
        type="text"
        id="title"
        value={enteredTitle}
        onChange={titleChangeHandler}
        required
      />
      <textarea
        type="text"
        id="description"
        rows="1"
        value={enteredDescription}
        onChange={descriptionChangeHandler}
      />
      <input
        type="date"
        id="due-date"
        value={enteredDueDate || ""}
        onChange={dueDateChangeHandler}
      />
      <div>
        <button type="submit">Confirm</button>
        <button type="button" onClick={cancelFormHandler}>
          Cancel
        </button>
      </div>
    </form>
  );

  if (editing) content = editForm;

  return <li className={styles["tasks-item"]}>{content}</li>;
};

export default TasksItem;
