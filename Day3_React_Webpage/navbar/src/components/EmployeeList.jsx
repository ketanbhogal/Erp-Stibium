import EmployeeCard from "./EmployeeCard";

export default function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          employee={emp}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
