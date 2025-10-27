import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

function Reviews() {
  const [ideas, setIdeas] = useState([]);

  // Load ideas from localStorage (you can replace this with API fetch later)
  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem("submittedIdeas")) || [];
    setIdeas(storedIdeas);
  }, []);

  // Update idea status (approve/reject)
  const handleStatusChange = (index, status) => {
    const updatedIdeas = [...ideas];
    updatedIdeas[index].status = status;
    setIdeas(updatedIdeas);
    localStorage.setItem("submittedIdeas", JSON.stringify(updatedIdeas));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar role="admin" />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Idea Reviews</h1>
        <p className="text-gray-600 mb-6">
          Review and manage all submitted ideas from users.
        </p>

        {ideas.length === 0 ? (
          <p className="text-gray-500">No ideas submitted yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {idea.title}
                </h2>
                <p className="text-gray-600 mb-2">{idea.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Category:</strong> {idea.category}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      idea.status === "Approved"
                        ? "text-green-600"
                        : idea.status === "Rejected"
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    {idea.status || "Pending Review"}
                  </span>

                  <div className="space-x-2">
                    <button
                      onClick={() => handleStatusChange(index, "Approved")}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleStatusChange(index, "Rejected")}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Reviews;
