import { useState, useEffect } from "react";

export default function AddEmployeeForm({ onAdd, editingEmployee }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setId(editingEmployee.id);
      setName(editingEmployee.name);
      setRole(editingEmployee.role);
      setEmail(editingEmployee.email);
      setImage(editingEmployee.image);
    }
  }, [editingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !name || !role || !email || !image) {
      alert("All fields are required!");
      return;
    }

    const employeeData = {
      id: Number(id),
      name,
      role,
      email,
      image
    };

    onAdd(employeeData);

    // Reset form
    setId("");
    setName("");
    setRole("");
    setEmail("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-lg rounded-xl max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        {editingEmployee ? "Edit Employee" : "Add Employee"}
      </h2>
      <div className="space-y-3">
        <input
          type="number"
          placeholder="ID"
          className="border w-full px-3 py-2 rounded"
          value={id}
          onChange={(e) => setId(e.target.value)}
          disabled={editingEmployee}
        />
        <input
          type="text"
          placeholder="Name"
          className="border w-full px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          className="border w-full px-3 py-2 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border w-full px-3 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border w-full px-3 py-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          {editingEmployee ? "Update Employee" : "Add Employee"}
        </button>
      </div>
    </form>
  );
}
