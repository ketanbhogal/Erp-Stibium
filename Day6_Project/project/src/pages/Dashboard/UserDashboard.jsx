// src/pages/Dashboard/UserDashboard.jsx
import React from "react";
import Sidebar from "../../components/Sidebar";

function UserDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar role="user" />

      {/* Main content */}
      <div className="flex-1 ml-64 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        <p>Welcome! Here you can submit and track your innovative ideas.</p>
      </div>
    </div>
  );
}

export default UserDashboard;
