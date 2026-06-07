import { useState } from "react";

function Tasks({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAdd() {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  }

  function handleToggle(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="w-full max-w-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Minhas Tarefas</h1>
        <button
          onClick={onLogout}
          className="text-sm text-gray-400 hover:text-white transition"
        >
          Sair
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Nova tarefa..."
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
        />
        <button
          onClick={handleAdd}
          className="bg-violet-600 hover:bg-violet-700 transition rounded-lg px-4 py-2 font-semibold"
        >
          Adicionar
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-12">
          Nenhuma tarefa ainda. Adicione uma acima!
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-900 px-4 py-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleToggle(task.id)}
                  className="accent-violet-500 w-4 h-4"
                />
                <span
                  className={
                    task.done ? "line-through text-gray-500" : "text-white"
                  }
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-gray-500 hover:text-red-400 transition text-sm"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
