import React, { useState } from "react";
import "./styles/TaskList.scss";

const TaskList = (props) => {
  // const [updatedTaskList, setUpdatedTaskList] = useState([]);
  // const [checkedTasks, setCheckedTasks] = useState([]);

  // Remove task when X is clicked
  const removeTaskHandler = (deletingTask) => {
    const updatedTaskList = props.tasks.filter((task) => task !== deletingTask);
    console.log(deletingTask);
    console.log(updatedTaskList);
    props.setTodoList(updatedTaskList);
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
                    onClick={(e) => props.checkBoxHandler(e, index)}
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
          <button onClick={props.completedListHandler}>Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
