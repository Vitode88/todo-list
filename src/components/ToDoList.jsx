import { useState } from "react";
import ToDoItem from "./ToDoItem";
import { sortTasks } from "../utils/sort";

function ToDoList() {
  const tasksInitialState = [
    { title: "edit report", completed: false },
    { title: "make reservation", completed: false },
  ];

  const [tasks, setTasks] = useState(tasksInitialState);
  const [newTask, setNewTask] = useState("");

  console.log(tasks);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, { title: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function markAsDoneTask(e, index) {
    let updatedTasks = [...tasks];
    updatedTasks[index].completed = e.target.checked;
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>TO DO LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-btn" onClick={addTask}>
          Add task
        </button>
      </div>
      <ol>
        {sortTasks(tasks).map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            markAsDoneTask={markAsDoneTask}
          />
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
