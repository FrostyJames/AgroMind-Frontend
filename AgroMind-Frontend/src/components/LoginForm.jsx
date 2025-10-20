import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: basic validation
    if (email && password) {
      // Simulate login success
      navigate("/dashboard");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-2">Welcome to AgroMind</h2>
        <p className="text-center text-gray-600 mb-6">
          Login to your account to access intelligent farming solutions.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}> {/* ✅ Add onSubmit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Login
          </button>

          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <a href="#" className="hover:underline">Forgot Password?</a>
            <a href="#" className="hover:underline">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}