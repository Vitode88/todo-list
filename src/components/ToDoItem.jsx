export default function ToDoItem({ task, index, markAsDoneTask, deleteTask }) {
  return (
    <li key={index}>
      <span className={`text ${task.completed && 'task-completed-text'}`}>{task.title}</span>
      {task.completed && <p className="task-done-message">done ✅</p>}
      <input
        type="checkbox"
        className="done-input"
        checked={task.completed}
        onClick={(e) => markAsDoneTask(e, index)}
      />

      <button className="delete-btn" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </li>
  );
}
