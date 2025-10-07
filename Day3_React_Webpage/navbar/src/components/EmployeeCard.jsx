export default function EmployeeCard({ employee, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-2xl hover:scale-105 transform transition duration-300 relative">
      <img
        src={employee.image}
        alt={employee.name}
        className="w-28 h-28 rounded-full mx-auto mb-3 object-cover border-4 border-pink-300"
      />
      <h2 className="text-xl font-semibold text-gray-800">{employee.name}</h2>
      <p className="text-gray-500">{employee.role}</p>
      <p className="text-gray-400 text-sm mb-4">{employee.email}</p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => onEdit(employee.id)}
          className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(employee.id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
