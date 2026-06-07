import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
      {page === "login" && <Login onNavigate={setPage} />}
      {page === "register" && <Register onNavigate={setPage} />}
      {page === "tasks" && <Tasks onLogout={() => setPage("login")} />}
    </div>
  );
}

export default App;
