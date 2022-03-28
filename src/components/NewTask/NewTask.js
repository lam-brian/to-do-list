import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  return (
    <Section>
      <TaskForm onAddNewTask={props.onAddNewTask} />
    </Section>
  );
};

export default NewTask;
