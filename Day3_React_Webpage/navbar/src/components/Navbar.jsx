import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-950 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-2xl font-bold">
        Employee Dashboard
      </Link>
      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
        >
          Employees
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-yellow-300 transition ${isActive ? "text-yellow-300 font-semibold" : ""}`
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
