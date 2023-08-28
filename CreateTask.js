import React from "react";
import { useState } from "react";

import "./styles/CreateTask.scss";

const CreateTask = (props) => {
  const [newTask, setNewTask] = useState("");

  const newTaskHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewTask(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`new task ${newTask} submitted`);
    props.onCreateNewTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <form id="newtodo_container" onSubmit={onSubmitHandler}>
        <label htmlFor="newTodo"></label>
        <input
          type="text"
          id="newTodo"
          placeholder="Create a new todo..."
          value={newTask}
          onChange={newTaskHandler}
          onSubmit={onSubmitHandler}
        />
      </form>
    </div>
  );
};

export default CreateTask;
