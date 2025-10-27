import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

function AllIdeas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    setIdeas(storedIdeas);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-200">
      <Sidebar role="user" />

      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          All Users' Ideas
        </h1>

        {ideas.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No ideas have been submitted yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-lg border border-gray-300 hover:shadow-2xl transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {idea.title}
                </h2>
                <p className="text-gray-700 mb-3">{idea.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Category:</strong> {idea.category}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Submitted By:</strong> {idea.user}
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Date:</strong> {idea.submittedAt}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllIdeas;
