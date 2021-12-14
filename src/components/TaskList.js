import classes from './TaskList.module.css';

const TaskList = (props) => {
  return (
    <>
      <div className={classes.get_task}>
        <ul key={props.id}>
          <li>{props.title}</li>
          <li>{props.endDate}</li>
        </ul>
      </div>
    </>
  );
};

export default TaskList;
