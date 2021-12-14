import React, { useRef } from 'react';
import classes from './AddTask.module.css';

const AddTask = () => {
  const taskRef = useRef();
  const remainderRef = useRef();

  const submitHandeler = (e) => {
    e.preventDefault();

    const enteredTask = taskRef.current.value;
    const enteredRemainder = remainderRef.current.value;
    const url =
      'https://first-demo--tasks-default-rtdb.firebaseio.com/Tasks.json';
    // POST-Request To Add Tasks in The Data-Base
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        taskTitle: enteredTask,
        taskEndDate: enteredRemainder,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => console.log(data));
      } else {
        return res
          .json()
          .then((data) => {
            let errorMessage = data.error.message;
            throw new Error(errorMessage);
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    });
  };

  return (
    <section>
      <form className={classes.task} onSubmit={submitHandeler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Task</label>
          <input ref={taskRef} placeholder='YOUR TASK' />
        </div>
        <div className={classes.control}>
          <label>End Date</label>
          <input ref={remainderRef} placeholder='END DATE' />
        </div>
        <div className={classes.actions}>
          <button>Add Task</button>
        </div>
      </form>
    </section>
  );
};

export default AddTask;
