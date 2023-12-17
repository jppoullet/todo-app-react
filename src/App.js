import { useState } from "react";
import "./App.scss";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import ThemeSwitch from "./components/ThemeSwitch";
import useLocalStorage from "use-local-storage";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(todos);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const createTodoHandler = (newTask) => {
    setCompletedTaskCount(completedTaskCount + 1);

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          task: newTask,
          completed: false,
          id: Math.floor(Math.random() * 100),
        },
      ];
    });
    setAllTodos(todos);
  };

  const checkBoxHandler = (event, index) => {
    const isChecked = event.target.checked;

    const checkedTodos = todos;
    console.log(checkedTodos);

    if (isChecked) {
      checkedTodos[index].completed = true;
      setCompletedTaskCount(completedTaskCount - 1);
    } else if (!isChecked) {
      checkedTodos[index].completed = false;
      setCompletedTaskCount(completedTaskCount + 1);
    }

    setAllTodos(checkedTodos);
  };

  const allTodosHandler = () => {
    setTodos(allTodos);
  };

  const activeListHandler = () => {
    const activeTodos = allTodos.filter((todo) => {
      if (todo.completed === false) {
        return todo;
      }
    });

    setTodos(activeTodos);
  };

  const completedListHandler = () => {
    const completedTodos = allTodos.filter((todo) => {
      if (todo.completed === true) {
        console.log(todo);
        return todo;
      }
    });

    setTodos(completedTodos);
  };

  return (
    <div className="App" data-theme={theme}>
      <header className="app-header">
        <div className="title-container">
          <div className="title">
            <div className="title-todo">TODO</div>
            <ThemeSwitch setTheme={setTheme} theme={theme} />
          </div>
          <CreateTodo onCreateNewTask={createTodoHandler}></CreateTodo>
        </div>
      </header>

      <TodoList
        tasks={todos}
        setTodos={setTodos}
        setAllTodos={setAllTodos}
        checkBoxHandler={checkBoxHandler}
        allTodosHandler={allTodosHandler}
        activeListHandler={activeListHandler}
        completedListHandler={completedListHandler}
        setCompletedTaskCount={setCompletedTaskCount}
        completedTaskCount={completedTaskCount}
      ></TodoList>
    </div>
  );
}

export default App;
