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

  const [copyTaskList, setCopyTaskList] = useState(tasksList);
  const checkBoxHandler = (event, index) => {
    const isChecked = event.target.checked;

    const copyTaskListConst = tasksList;
    setCopyTaskList(copyTaskListConst);

    // const copyTaskList = tasksList;
    // copyTaskList[index].completed = isChecked ? true : false;
    if (isChecked) {
      copyTaskListConst[index].completed = true;
    } else if (!isChecked) {
      copyTaskListConst[index].completed = false;
    }

    // return setTodoList(copyTaskList);
  };

  const allTodosListHandler = () => {
    setTodoList(copyTaskList);
  };

  const completedListHandler = () => {
    console.log(tasksList);
    const checkedTodoItems = tasksList.filter((todo) => {
      if (todo.completed === true) {
        console.log(todo);
        return todo;
      }
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
        allTodosListHandler={allTodosListHandler}
        completedListHandler={completedListHandler}
      ></TaskList>
      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
