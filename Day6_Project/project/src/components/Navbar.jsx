import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const navigate = useNavigate();
  const location = useLocation();

  // Recheck role whenever page changes or localStorage updates
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("username");
    navigate("/signin");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold cursor-pointer"
      >
        InnovateHub
      </div>

      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>

        {!role && (
          <>
            <li>
              <Link to="/signin" className="hover:text-gray-300">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
            </li>
          </>
        )}

        {role && (
          <>
            <li>
              <Link to="/profile" className="hover:text-gray-300">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
