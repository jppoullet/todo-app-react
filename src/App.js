import { useState } from "react";
import "./App.scss";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);

  const createTodoHandler = (newTask) => {
    // console.log(`${newTask} submitted on APP component`);
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTask, completed: false }];
    });
    setAllTodos(todos);
  };

  const checkBoxHandler = (event, index) => {
    const isChecked = event.target.checked;

    const checkedTodos = todos;
    console.log(checkedTodos);

    if (isChecked) {
      checkedTodos[index].completed = true;
    } else if (!isChecked) {
      checkedTodos[index].completed = false;
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

  const completedListHandler = (index) => {
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
        checkBoxHandler={checkBoxHandler}
        activeListHandler={activeListHandler}
        allTodosHandler={allTodosHandler}
        completedListHandler={completedListHandler}
      ></TodoList>
      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
