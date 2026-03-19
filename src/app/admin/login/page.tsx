"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = "/admin";
      } else {
        setError("Incorrect password");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl text-white mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            WCE Admin
          </h1>
          <p className="text-sm text-[#888]">World Class Exotic</p>
        </div>

        {/* Card */}
        <div className="bg-[#111] border border-[#222] rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-[#888] mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#333] text-white rounded px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#555]"
                placeholder="Enter admin password"
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded text-sm font-semibold tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0A0A0A",
              }}
            >
              {loading ? "Checking..." : "Enter"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
