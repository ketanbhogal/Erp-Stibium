import { useState } from "react";
import AddEmployeeForm from "../components/AddEmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function Employees() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Kedar shah", role: "Frontend Developer", email: "kedar@example.com", image: "https://tse1.mm.bing.net/th/id/OIP.uo_hoPwUzv_ihIlvHstqtwHaK6?pid=Api&P=0&h=180" },
    { id: 2, name: "Rahul Sharma", role: "Backend Developer", email: "rahul@example.com", image: "https://i.pravatar.cc/150?img=4" },
    { id: 3, name: "Priya Desai", role: "UI/UX Designer", email: "priya@example.com", image: "https://i.pravatar.cc/150?img=5" },
    { id: 4, name: "Amit Mehera", role: "Backend Developer", email: "amit@example.com", image: "https://tse2.mm.bing.net/th/id/OIP.iTg82glrt_TE3ILoTZZnTQHaHa?pid=Api&P=0&h=180" }
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);

  // Add a new employee
  const addEmployee = (newEmp) => {
    setEmployees([...employees, newEmp]);
  };

  // Delete employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // Edit employee
  const editEmployee = (id) => {
    const emp = employees.find((e) => e.id === id);
    setEditingEmployee(emp);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Update employee
  const updateEmployee = (updatedEmp) => {
    setEmployees(employees.map((emp) => (emp.id === updatedEmp.id ? updatedEmp : emp)));
    setEditingEmployee(null);
  };

  return (
    <div className="min-h-screen bg-pink-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Team</h1>

      {/* Employee List */}
      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
        onEdit={editEmployee}
      />

      {/* Add / Edit Form */}
      <AddEmployeeForm
        onAdd={editingEmployee ? updateEmployee : addEmployee}
        editingEmployee={editingEmployee}
      />
    </div>
  );
}
