import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts with fetch()
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts 😞");
      }
    };
    fetchPosts();
  }, []);

  // Fetch users with axios
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data.slice(0, 5));
        setLoading(false);
      } catch (err) {
        setError("Failed to load users 😞");
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="text-center text-lg font-semibold mt-10">⏳ Loading data...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        📦 useEffect Hook – Data Fetching Demo
      </h1>

      {/* Posts Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">📝 Latest Posts (using Fetch)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-xl p-5 border border-blue-100 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="font-bold text-lg text-blue-700 mb-2">{post.title}</h3>
              <p className="text-gray-700 text-sm">{post.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Users Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">👥 Users (using Axios)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-xl p-5 border border-blue-100 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-blue-700">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500 text-sm mt-1 italic">{user.company.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
