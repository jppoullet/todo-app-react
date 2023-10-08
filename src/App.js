import { useState } from "react";
import "./App.scss";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(todos);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

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
    console.log(allTodos);
  };

  const activeListHandler = () => {
    const activeTodos = allTodos.filter((todo) => {
      if (todo.completed === false) {
        return todo;
      }
    });
    console.log(activeTodos);
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
    <div className="App">
      <header className="App-header">TODO</header>
      <CreateTodo onCreateNewTask={createTodoHandler}></CreateTodo>
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
      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
