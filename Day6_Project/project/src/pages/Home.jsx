import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1740&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          InnovateHub 🚀
        </h1>
        <h2 className="text-3xl font-semibold mb-6">
          Idea Submission & Evaluation Platform
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl">
          Empower creativity — submit your innovative ideas and let the world
          evaluate, improve, and inspire them!
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
