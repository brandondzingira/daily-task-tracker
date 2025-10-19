function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
      return <p className="empty">No tasks yet. Start by adding one!</p>;
    }
  
    return (
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => onToggle(task.id)}>{task.text}</span>
            <button onClick={() => onDelete(task.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  