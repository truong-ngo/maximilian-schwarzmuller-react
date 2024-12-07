import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetch from "../../hook/use-fetch";
import { useCallback } from "react";

const NewTask = (props) => {
  const applyResponse = useCallback((data, text) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text };
    props.onAddTask(createdTask);
  });

  const { isLoading, error, sendRequest } = useFetch(applyResponse);

  const enterTaskHandler = (taskText) => {
    const requestConfig = {
      url: "https://upload-file-540c6-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      body: taskText,
      headers: {
        "Content-Type": "application/json",
      },
    };
    sendRequest(requestConfig);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
