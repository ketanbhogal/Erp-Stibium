import React, { useState } from "react";
import Card from "./Components/Card";
import Button from "./Components/Button";
import Modal from "./Components/Modal";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"}>
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Tailwind UI Components 🌈
          </h1>
          <Button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Beautiful UI"
            image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
            description="Build elegant user interfaces quickly with Tailwind CSS."
            footer={<Button onClick={() => setIsModalOpen(true)}>Learn More</Button>}
          />
          <Card
            title="Responsive Design"
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            description="Layouts automatically adjust to all devices."
            footer={<Button variant="secondary">View Docs</Button>}
          />
          <Card
            title="Custom Themes"
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            description="Easily switch between light and dark mode."
            footer={<Button>Get Started</Button>}
          />
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-3">More Information</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Tailwind CSS makes it effortless to create responsive designs.
          </p>
        </Modal>
      </div>
    </div>
  );
}

export default App;
