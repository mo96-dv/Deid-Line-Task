import React, { useState } from 'react';

import Header from './components/Header';
import AddTask from './components/AddTask';
import GetTask from './components/GetTask';

function App() {
  const [task, setTask] = useState([]);

  // GET-Request To Get Tasks From The Data Base
  const url =
    'https://first-demo--tasks-default-rtdb.firebaseio.com/Tasks.json';

  const getTasksHandeler = async () => {
    const response = await fetch(url);
    const gettedData = await response.json();

    const loadedData = [];

    for (const key in gettedData) {
      loadedData.push({
        id: key,
        taskTitle: gettedData[key].taskTitle,
        taskEndDate: gettedData[key].taskEndDate,
      });
    }

    setTask(loadedData);
  };

  return (
    <>
      <Header />
      <AddTask />
      <GetTask tasks={task} getData={getTasksHandeler} />
    </>
  );
}

export default App;
