import { useState } from "react";

interface Task {
  text: string;
  done: boolean;
}

function App() {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask() {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  }

  function toggleTask(index: number) {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  function deleteTask(index: number) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Todo List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              margin: "10px",
              cursor: "pointer",
              textDecoration: task.done ? "line-through" : "none",
            }}
            onClick={() => toggleTask(index)}
          >
            {task.text}
            <button
              style={{ marginLeft: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <p>Всего задач: {tasks.length}</p>
    </div>
  );
}

export default App;