"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      router.push("/dashboard");
    } else {
      setError("Credenziali non valide");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      {/* Card con effetto glass */}
      <div className="relative p-8 rounded-2xl shadow-lg w-96 bg-white/10 backdrop-blur-md border border-white/20 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-400 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-white/20 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Inserisci username"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-white/20 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Inserisci password"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition font-semibold">
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
}
