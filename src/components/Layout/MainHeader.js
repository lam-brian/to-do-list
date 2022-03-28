import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={styles.header}>
      <h1>TO-DO LIST</h1>
      <span>{props.todaysDate}</span>
    </header>
  );
};

export default MainHeader;
