import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    const storedEmail = localStorage.getItem("email");
    if (email === storedEmail) {
      localStorage.setItem("password", newPassword);
      alert("Password updated successfully! Please sign in again.");
      navigate("/signin");
    } else {
      alert("Email not found. Please enter a registered email.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Reset Password</h1>
        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full mb-4 p-2 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full mb-4 p-2 rounded text-black"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          className="w-full bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-all"
          onClick={handlePasswordReset}
        >
          Update Password
        </button>

        <p className="text-sm text-center mt-4">
          Remembered your password?{" "}
          <button
            onClick={() => navigate("/signin")}
            className="text-blue-400 hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
