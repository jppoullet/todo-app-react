import { useState } from "react";
import "./App.scss";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [taskCount, setTaskCount] = useState(tasksList.length);

  const createTaskHandler = (newTask) => {
    // console.log(`${newTask} submitted on APP component`);
    setTasksList((prevTasksList) => {
      return [...prevTasksList, { task: newTask, completed: false }];
    });
  };

  const updatedTaskListHandler = (updatedTaskList) => {
    setTasksList(updatedTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">TODO</header>
      <CreateTask onCreateNewTask={createTaskHandler}></CreateTask>
      <TaskList
        tasks={tasksList}
        taskCounter={taskCount}
        onDeleteHandler={updatedTaskListHandler}
      ></TaskList>
      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
