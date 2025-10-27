import React from "react";
import Sidebar from "../../components/Sidebar";

function AdminDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main content */}
      <div className="flex-1 ml-64 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome, Admin! Here you can manage users and review ideas.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
