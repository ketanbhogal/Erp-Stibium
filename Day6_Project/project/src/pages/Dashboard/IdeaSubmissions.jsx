import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const menuItems =
    role === "admin"
      ? [
          { name: "Dashboard", path: "/admin-dashboard" },
          { name: "Manage Users", path: "/admin-dashboard/manage-users" },
          { name: "Idea Submissions", path: "/admin-dashboard/idea-submissions" },
          { name: "Reviews", path: "/admin-dashboard/reviews" },
          { name: "Settings", path: "/admin-dashboard/settings" },
        ]
      : [
          { name: "Dashboard", path: "/user-dashboard" },
          { name: "Submit Idea", path: "/user-dashboard/submit" },
          { name: "My Ideas", path: "/user-dashboard/my-ideas" },
          { name: "All Ideas", path: "/user-dashboard/all-ideas" },
          { name: "Profile", path: "/user-dashboard/profile" },
        ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        {role === "admin" ? "Admin Panel" : "User Panel"}
      </div>

      <ul className="flex-1 p-4 space-y-3 overflow-y-auto">
        {menuItems.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className="block p-3 rounded hover:bg-gray-700 transition duration-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default function IdeaSubmissions() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    storedIdeas.sort((a, b) => new Date(b.date) - new Date(a.date));
    setIdeas(storedIdeas);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Idea Submissions
        </h1>

        {ideas.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No ideas submitted yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-lg border border-gray-300 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
              >
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {idea.title}
                </h2>
                <p className="text-gray-700 mb-2 line-clamp-3">
                  {idea.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                  <span>By: {idea.author}</span>
                  <span>{new Date(idea.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
