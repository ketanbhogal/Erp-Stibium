import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword, role } = formData;

    // ✅ Validation
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Get existing users from localStorage
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Check if email already exists
    const emailExists = existingUsers.some((user) => user.email === email);
    if (emailExists) {
      alert("Email already registered!");
      return;
    }

    // ✅ Add new user to the array
    const newUser = { username, email, password, role };
    existingUsers.push(newUser);

    // ✅ Save updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert(`Account created successfully as ${role}!`);
    navigate("/signin");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/036/185/730/non_2x/ai-generated-circuit-board-background-free-photo.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <button
            type="submit"
            className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-purple-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
