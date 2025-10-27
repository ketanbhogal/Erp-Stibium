import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function ManageUser() {
  const [users, setUsers] = useState([]);

  // Load users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Save users to localStorage
  const saveUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Add new user
  const handleAddUser = () => {
    const name = prompt("Enter name:");
    const email = prompt("Enter email:");
    const mobile = prompt("Enter mobile (optional):");
    const role = prompt("Enter role (user/admin):", "user");

    if (!name || !email || !role) {
      alert("Name, Email, and Role are required!");
      return;
    }

    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      alert("User with this email already exists!");
      return;
    }

    const newUser = { name, email, mobile, role };
    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);
  };

  // Remove user
  const handleRemove = (email) => {
    if (window.confirm("Are you sure you want to remove this user?")) {
      const updatedUsers = users.filter((user) => user.email !== email);
      saveUsers(updatedUsers);
    }
  };

  // Edit user
  const handleEdit = (email) => {
    const userToEdit = users.find((u) => u.email === email);
    if (!userToEdit) return;

    const newName = prompt("Enter new name:", userToEdit.name);
    const newEmail = prompt("Enter new email:", userToEdit.email);
    const newMobile = prompt("Enter new mobile:", userToEdit.mobile);
    const newRole = prompt("Enter role (user/admin):", userToEdit.role);

    if (!newName || !newEmail || !newRole) {
      alert("Name, Email, and Role are required!");
      return;
    }

    const updatedUsers = users.map((u) =>
      u.email === email
        ? { ...u, name: newName, email: newEmail, mobile: newMobile, role: newRole }
        : u
    );
    saveUsers(updatedUsers);
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
          <button
            onClick={handleAddUser}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            + Add New User
          </button>
        </div>

        {users.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Name</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Email</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Mobile</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Role</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-300">{user.name}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{user.email}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{user.mobile || "N/A"}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{user.role || "User"}</td>
                    <td className="py-2 px-4 border-b border-gray-300 space-x-2">
                      <button
                        onClick={() => handleEdit(user.email)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemove(user.email)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
