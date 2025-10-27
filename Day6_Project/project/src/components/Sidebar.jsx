import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar({ role }) {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Logout function
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  // 🔹 Menu items for admin and user
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
      {/* 🔹 Sidebar Header */}
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        {role === "admin" ? "Admin Panel" : "User Panel"}
      </div>

      {/* 🔹 Sidebar Menu */}
      <ul className="flex-1 p-4 space-y-3 overflow-y-auto">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block p-3 rounded transition duration-200 ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* 🔹 Logout Button */}
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

export default Sidebar;
