import { useState } from "react";
import "./App.scss";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasksList, setTodoList] = useState([]);

  const createTaskHandler = (newTask) => {
    // console.log(`${newTask} submitted on APP component`);
    setTodoList((prevTasksList) => {
      return [...prevTasksList, { task: newTask, completed: false }];
    });
  };

  const checkBoxHandler = (event, index) => {
    const isChecked = event.target.checked;

    const copyTaskList = tasksList;
    // copyTaskList[index].completed = isChecked ? true : false;
    if (isChecked) {
      copyTaskList[index].completed = true;
    } else if (!isChecked) {
      copyTaskList[index].completed = false;
    }

    return setTodoList(copyTaskList);
  };

  const completedListHandler = () => {
    console.log(tasksList);
    const checkedTodoItems = tasksList.filter((todo) => {
      if (todo.completed === true) {
        return todo;
      }
      console.log(todo);
    });

    setTodoList(checkedTodoItems);
    console.log(checkedTodoItems);
  };

  return (
    <div className="App">
      <header className="App-header">TODO</header>
      <CreateTask onCreateNewTask={createTaskHandler}></CreateTask>
      <TaskList
        tasks={tasksList}
        setTodoList={setTodoList}
        checkBoxHandler={checkBoxHandler}
        completedListHandler={completedListHandler}
      ></TaskList>
      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
