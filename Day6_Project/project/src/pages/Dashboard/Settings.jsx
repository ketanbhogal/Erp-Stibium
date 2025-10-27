import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

function Settings() {
  const [theme, setTheme] = useState("light");
  const [adminData, setAdminData] = useState({
    name: "Admin User",
    email: "admin@example.com",
    password: "",
  });

  // Load settings from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedAdmin =
      JSON.parse(localStorage.getItem("adminSettings")) || adminData;
    setTheme(savedTheme);
    setAdminData(savedAdmin);

    // Apply theme to body
    document.body.className =
      savedTheme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black";
  }, []);

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Apply immediately
    document.body.className =
      newTheme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black";
  };

  // Handle profile input changes
  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  // Save profile settings
  const handleSave = () => {
    localStorage.setItem("adminSettings", JSON.stringify(adminData));
    alert("Settings saved successfully!");
  };

  return (
    <div
      className={`flex min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <main className="flex-1 ml-64 flex flex-col items-center justify-center p-8 transition-all">
        <div
          className={`w-full max-w-3xl rounded-2xl shadow-lg p-8 text-center transition-all duration-500 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1 className="text-4xl font-bold mb-4">Settings</h1>
          <p className="mb-8 text-gray-500 dark:text-gray-300">
            Manage your profile and preferences
          </p>

          {/* Profile Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={adminData.name}
                onChange={handleChange}
                placeholder="Admin Name"
                className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
              />
              <input
                type="email"
                name="email"
                value={adminData.email}
                onChange={handleChange}
                placeholder="Admin Email"
                className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
              />
              <input
                type="password"
                name="password"
                value={adminData.password}
                onChange={handleChange}
                placeholder="New Password"
                className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2 ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
              />
            </div>

            <button
              onClick={handleSave}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>

          {/* Theme Toggle */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
            <button
              onClick={handleThemeToggle}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                theme === "light"
                  ? "bg-gray-800 text-white hover:bg-gray-900"
                  : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              }`}
            >
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
