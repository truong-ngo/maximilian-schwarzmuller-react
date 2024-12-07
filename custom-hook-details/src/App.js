import React, { useCallback, useEffect, useState } from "react";
import useFetch from "./hook/use-fetch";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const applyResponse = useCallback((data, text) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey] });
    }
    setTasks(loadedTasks);
  });

  const { isLoading, error, sendRequest } = useFetch(applyResponse);

  const fetchTasks = useCallback(() => {
    sendRequest({url: "https://upload-file-540c6-default-rtdb.firebaseio.com/tasks.json"})
  }, [])

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
