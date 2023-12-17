import React, { useEffect, useState } from "react";
import "./styles/TodoList.scss";
import cross from "../images/icon-cross.svg";

const TodoList = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("all-filter");

  // Remove task when X is clicked
  const removeTaskHandler = (task, todoIndex) => {
    const updatedTodos = props.tasks.filter(
      (todo, index) => index != todoIndex
    );

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

  const onFilterHandler = (event) => {
    setSelectedFilter(event.target.id);
  };

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    window.matchMedia("(max-width: 600px)").addEventListener("change", (e) => {
      console.log(e);
      setMatches(e.matches);
    });
  }, []);

  return (
    <div className="todo-list-container">
      <div className="list_container">
        <form>
          <ul>
            {/* Render a new list item from Task List */}
            {props.tasks.map((task, index) => (
              <li key={task.id}>
                <div className="list-item-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id={task.id}
                    name="item"
                    onClick={(e) => props.checkBoxHandler(e, index)}
                    defaultChecked={task.completed}
                  />
                  <label htmlFor={task.id}>{task.task}</label>
                </div>
                <button
                  className="remove"
                  type="button"
                  onClick={() => removeTaskHandler(task, index)}
                >
                  <img src={cross}></img>
                </button>
              </li>
            ))}
          </ul>
        </form>
        <div className="task_status">
          <div>{props.completedTaskCount} items left</div>
          {!matches && (
            <div className="task_filter">
              <div
                id={"all-filter"}
                className={selectedFilter === "all-filter" ? "active" : ""}
                onClick={(event) => {
                  props.allTodosHandler();
                  onFilterHandler(event);
                }}
              >
                All
              </div>
              <div
                id={"active-filter"}
                className={selectedFilter === "active-filter" ? "active" : ""}
                onClick={(event) => {
                  props.activeListHandler();
                  onFilterHandler(event);
                }}
              >
                Active
              </div>
              <div
                id={"completed-filter"}
                className={
                  selectedFilter === "completed-filter" ? "active" : ""
                }
                onClick={(event) => {
                  props.completedListHandler();
                  onFilterHandler(event);
                }}
              >
                Completed
              </div>
            </div>
          )}
          <div className="clear-completed" onClick={clearCompletedHandler}>
            Clear Completed
          </div>
        </div>
      </div>
      {matches && (
        <div className="task_filter">
          <div
            id={"all-filter"}
            className={selectedFilter === "all-filter" ? "active" : ""}
            onClick={(event) => {
              props.allTodosHandler();
              onFilterHandler(event);
            }}
          >
            All
          </div>
          <div
            id={"active-filter"}
            className={selectedFilter === "active-filter" ? "active" : ""}
            onClick={(event) => {
              props.activeListHandler();
              onFilterHandler(event);
            }}
          >
            Active
          </div>
          <div
            id={"completed-filter"}
            className={selectedFilter === "completed-filter" ? "active" : ""}
            onClick={(event) => {
              props.completedListHandler();
              onFilterHandler(event);
            }}
          >
            Completed
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
