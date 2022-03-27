import Section from "../UI/Section";
import TasksList from "./TasksList";

const Tasks = (props) => {
  return (
    <Section>
      <div>
        <TasksList type="All Tasks" tasks={props.tasks} />
      </div>
    </Section>
  );
};

export default Tasks;
