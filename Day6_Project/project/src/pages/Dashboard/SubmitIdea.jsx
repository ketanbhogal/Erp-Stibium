import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

function SubmitIdea() {
  const [idea, setIdea] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdea({ ...idea, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userEmail = localStorage.getItem("email") || "Unknown User"; // 👤 Identify user

    // Get existing ideas from localStorage
    const storedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];

    // Add new idea with user info
    const newIdea = {
      ...idea,
      user: userEmail,
      submittedAt: new Date().toLocaleString(),
    };

    const updatedIdeas = [...storedIdeas, newIdea];
    localStorage.setItem("ideas", JSON.stringify(updatedIdeas));

    alert("Idea submitted successfully!");
    setIdea({ title: "", description: "", category: "" });
  };

  return (
    <div className="flex min-h-screen bg-gray-700">
      <Sidebar role="user" />

      <div className="flex-1 ml-64 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Submit Your Idea
          </h1>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Idea Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={idea.title}
              onChange={handleChange}
              placeholder="Enter a short title for your idea"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Idea Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={idea.description}
              onChange={handleChange}
              placeholder="Describe your idea in detail"
              rows="5"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={idea.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Product">Product</option>
              <option value="Process Improvement">Process Improvement</option>
              <option value="Technology">Technology</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300 bg-transparent"
          >
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmitIdea;
