import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // ✅ Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Find matching user
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // ✅ Save user info to localStorage
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      localStorage.setItem("role", matchedUser.role);
      localStorage.setItem("username", matchedUser.name || matchedUser.username);

      alert(`Welcome ${matchedUser.name || matchedUser.username}!`);

      // ✅ Navigate based on role
      setTimeout(() => {
        if (matchedUser.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      }, 100);
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-blue-600 font-medium hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="mt-6 text-center text-gray-700">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
