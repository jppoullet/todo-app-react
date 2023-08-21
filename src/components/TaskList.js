import React, { useState } from "react";
import "./styles/TaskList.scss";

const TaskList = (props) => {
  // const [updatedTaskList, setUpdatedTaskList] = useState([]);

  // Remove task when X is clicked
  const removeTaskHandler = (deletingTask) => {
    const updatedTaskList = props.tasks.filter((task) => task !== deletingTask);
    console.log(deletingTask);
    console.log(updatedTaskList);
    props.onDeleteHandler(updatedTaskList);
  };

  const [checkedTasks, setCheckedTasks] = useState([]);

  const verifyIfChecked = (clickedTask, checkedTask) => {
    console.log(props.tasks);
    console.log(clickedTask, checkedTask);
    setCheckedTasks((currentTasksList) => {
      return props.tasks.map((todo) => {
        if (todo === clickedTask) {
          return { ...todo, completed: checkedTask };
        }

        return todo;
      });
    });
    console.log(checkedTasks);
    // const checkedTasks = props.tasks.map((task) => {
    //   if (task === clickedTask) {
    //     return { ...task, checkedTask };
    //   }
    //   return task;
    // });
    // if (checkedTask) {
    //   console.log("checked");
    //   setCheckedTasks((prevTasks) => [...prevTasks, clickedTask]);
    // } else {
    //   console.log("not checked");
    // }
    // console.log(checkedTasks);
  };

  return (
    <div>
      <div id="list_container">
        <form>
          <ul>
            {/* Render a new list item from Task List */}
            {props.tasks.map((temptask, index) => (
              <li key={index}>
                <div>
                  <input
                    type="checkbox"
                    id={index}
                    name="item"
                    onClick={(e) => verifyIfChecked(temptask, e.target.checked)}
                  />
                  <label htmlFor={index}>{temptask.task}</label>
                </div>
                <button
                  className="remove"
                  type="button"
                  onClick={() => removeTaskHandler(temptask)}
                >
                  &#x2715;
                </button>
              </li>
            ))}
          </ul>
        </form>
        <div className="task_status">
          <div>{props.tasks.length} items left</div>
          <button>Clear Completed</button>
        </div>
      </div>
      <div>
        <div className="task_filter">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
