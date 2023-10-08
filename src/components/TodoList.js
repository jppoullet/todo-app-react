import React, { useState } from "react";
import "./styles/TodoList.scss";

const TodoList = (props) => {
  // const [todosCounter, setTodosCounter] = useState(0);

  // Remove task when X is clicked
  const removeTaskHandler = (task, todoIndex) => {
    const updatedTodos = props.tasks.filter(
      (todo, index) => index != todoIndex
    );
    console.log(todoIndex);
    console.log(updatedTodos);
    props.setTodos(updatedTodos);
    props.setAllTodos(updatedTodos);
    props.setCompletedTaskCount((prev) => {
      if (!task.completed) {
        return prev - 1;
      }

      return prev;
    });
  };

  const clearCompletedHandler = () => {
    const activeTodosLeft = props.tasks.filter((todo) => !todo.completed);
    props.setTodos(activeTodosLeft);
    props.setAllTodos(activeTodosLeft);
  };

  return (
    <div>
      <div id="list_container">
        <form>
          <ul>
            {/* Render a new list item from Task List */}
            {props.tasks.map((task, index) => (
              <li key={task.id}>
                <div>
                  <input
                    type="checkbox"
                    id={task.id}
                    name="item"
                    onClick={(e) => props.checkBoxHandler(e, index)}
                    defaultChecked={task.completed}
                  />
                  <label htmlFor={index}>{task.task}</label>
                </div>
                <button
                  className="remove"
                  type="button"
                  onClick={() => removeTaskHandler(task, index)}
                >
                  &#x2715;
                </button>
              </li>
            ))}
          </ul>
        </form>
        <div className="task_status">
          <div>{props.completedTaskCount} items left</div>
          <button onClick={clearCompletedHandler}>Clear Completed</button>
        </div>
      </div>
      <div>
        <div className="task_filter">
          <div onClick={props.allTodosHandler}>All</div>
          <div onClick={props.activeListHandler}>Active</div>
          <div onClick={props.completedListHandler}>Completed</div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
