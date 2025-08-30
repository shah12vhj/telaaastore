"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/", // after login, redirect to homepage
    });

    console.log(result);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg w-96 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-emerald-600 dark:text-emerald-400">
          Login
        </h2>

        <input
        required
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl px-4 py-2 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
        />

        <input
        required
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-2 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
        />

       <Link href={'/product'}>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 transition"
        >
          Login
        </button></Link>
      </form>
    </div>
  );
}
