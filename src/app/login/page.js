"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";



export default function LoginPage() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();


  useEffect(() => {
  const checkAuth = async () => {
    const res = await fetch("/api/auth/me");

    if (res.ok) {
      const user = await res.json();
      console.log("Logged in as:", user);
    } else {
      console.log("Not logged in");
    }
  };

  checkAuth();
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (mode === "register" && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

const res = await fetch(`/api/auth/${mode}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email,
    password,
    displayName,
  }),
  credentials: "include", // 👈 THIS IS THE FIX
});


    setLoading(false);

    if (!res.ok) {
      setError(await res.text());
      return;
    }

if (mode === "login") {
  // ✅ cookie is already set by the server
  router.refresh();   // 👈 forces Header + layout to re-check auth
  router.push("/");   // 👈 optional redirect to home
} else {
  setMode("login");
}

  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-10 text-gray-200 space-y-8">

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">
              {mode === "login" ? "Welcome Back" : "Create an Account"}
            </h1>
            <p className="text-gray-400 text-sm">
              {mode === "login"
                ? "Log in to continue shopping"
                : "Sign up to start using 4ONE"}
            </p>
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {mode === "register" && (
              <div className="space-y-2">
                <label className="text-sm text-gray-300">
                  Display Name
                </label>
                <input
                  type="text"
                  required
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Clayton"
                  className="w-full rounded-md border border-white/10 bg-black/60 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-md border border-white/10 bg-black/60 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-md border border-white/10 bg-black/60 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {mode === "register" && (
              <div className="space-y-2">
                <label className="text-sm text-gray-300">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-white/10 bg-black/60 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-white py-2.5 text-black font-semibold hover:bg-gray-200 transition disabled:opacity-60"
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Log In"
                : "Create Account"}
            </button>
          </form>

          {/* Toggle */}
          <div className="text-center text-sm text-gray-400">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-white hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-white hover:underline"
                >
                  Log in
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
