import { useState } from "react";

function Register({ onNavigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Register:", { name, email, password });
  }

  return (
    <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-xl">
      <h1 className="text-2xl font-bold mb-2">Criar conta</h1>
      <p className="text-gray-400 mb-6 text-sm">
        Comece a organizar suas tarefas
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-1 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-1 block">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          />
        </div>

        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 transition rounded-lg py-2 font-semibold mt-2"
        >
          Criar conta
        </button>
      </form>

      <p className="text-center text-gray-400 text-sm mt-6">
        Já tem conta?{" "}
        <button
          onClick={() => onNavigate("login")}
          className="text-violet-400 hover:underline"
        >
          Entrar
        </button>
      </p>
    </div>
  );
}

export default Register;
