import { useState } from "react";

export default function Profile() {
  const [employees] = useState([
    {
      id: 1,
      name: "Kedar Shah",
      role: "Fullstack Developer",
      email: "kedar@example.com",
      image: "https://i.pravatar.cc/150?img=12",
      bio: "Experienced Fullstack Developer with expertise in React and Node.js."
    },
    {
      id: 2,
      name: "Riya Mehta",
      role: "UI/UX Designer",
      email: "riya@example.com",
      image: "https://i.pravatar.cc/150?img=5",
      bio: "Creative UI/UX Designer passionate about clean and responsive designs."
    },
    {
      id: 3,
      name: "Rahul Sharma",
      role: "Backend Developer",
      email: "rahul@example.com",
      image: "https://i.pravatar.cc/150?img=4",
      bio: "Skilled Backend Developer specializing in scalable Node.js APIs."
    },
    {
      id: 4,
      name: "Anita Patel",
      role: "Frontend Developer",
      email: "anita@example.com",
      image: "https://i.pravatar.cc/150?img=8",
      bio: "Frontend Developer creating dynamic and responsive React applications."
    }
  ]);

  return (
    <div className="min-h-screen bg-pink-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Employee Profiles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            <img
              src={emp.image}
              alt={emp.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-pink-300"
            />
            <h2 className="text-xl font-semibold text-gray-800">{emp.name}</h2>
            <p className="text-gray-500">{emp.role}</p>
            <p className="text-gray-400 text-sm mb-4">{emp.email}</p>
            <p className="text-gray-600 text-sm">{emp.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
