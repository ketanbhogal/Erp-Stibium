import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"; // ✅ make sure path is correct

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    image: "",
    role: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profileData"));
    const savedRole = localStorage.getItem("role") || "User";
    if (savedProfile) {
      setUser({ ...savedProfile, role: savedRole });
      setSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(user));
    localStorage.setItem("role", user.role || "User");
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1500&q=80')]">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar role={user.role || "User"} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 backdrop-blur-sm bg-black/30">
        {!submitted ? (
          // 🌫 Transparent Form
          <div className="backdrop-blur-lg bg-white/10 border border-white/30 text-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Enter Your Profile Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/50 rounded-lg p-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/50 rounded-lg p-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={user.mobile}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/50 rounded-lg p-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={user.image}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/50 rounded-lg p-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Paste your image link"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600/70 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        ) : (
          // 🌫 Transparent Profile Card
          <div className="backdrop-blur-lg bg-white/10 border border-white/30 text-white shadow-lg rounded-2xl p-8 w-96 text-center">
            <img
              src={user.image || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400/70"
            />
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <p className="mb-1">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Mobile:</span> {user.mobile}
            </p>
            <p>
              <span className="font-semibold">Role:</span> {user.role || "User"}
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
