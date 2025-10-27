import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

function MyIdeas() {
  const [ideas, setIdeas] = useState([]);

  // Load ideas from localStorage
  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    setIdeas(storedIdeas);
  }, []);

  // Delete idea
  const handleDelete = (index) => {
    const updatedIdeas = ideas.filter((_, i) => i !== index);
    setIdeas(updatedIdeas);
    localStorage.setItem("ideas", JSON.stringify(updatedIdeas));
  };

  // Edit idea
  const handleEdit = (index) => {
    const newTitle = prompt("Enter new idea title:", ideas[index].title);
    const newDescription = prompt("Enter new description:", ideas[index].description);
    const newCategory = prompt("Enter new category:", ideas[index].category);

    if (newTitle && newDescription && newCategory) {
      const updatedIdeas = [...ideas];
      updatedIdeas[index] = {
        title: newTitle,
        description: newDescription,
        category: newCategory,
      };
      setIdeas(updatedIdeas);
      localStorage.setItem("ideas", JSON.stringify(updatedIdeas));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
      <Sidebar role="user" />

      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Submitted Ideas
        </h1>

        {ideas.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No ideas submitted yet.</p>
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
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Category:</strong> {idea.category}
                </p>

                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(index)}
                    className="border border-green-600 text-green-600 px-3 py-1 rounded hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="border border-red-600 text-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyIdeas;
