// import React from 'react';
import TaskList from './TaskList';
import classes from './GetTask.module.css';

const GetTask = (props) => {
  return (
    <>
      <div className={classes.get_task}>
        <button onClick={props.getData}>Get Your Tasks</button>
      </div>
      {props.tasks.map((task) => (
        <TaskList
          id={task.id}
          title={task.taskTitle}
          endDate={task.taskEndDate}
        />
      ))}
    </>
  );
};

export default GetTask;
