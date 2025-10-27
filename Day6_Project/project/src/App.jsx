import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// 🔹 Components
import Navbar from "./components/Navbar";

// 🔹 Public Pages
import Home from "./pages/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// 🔹 User Dashboard Pages
import UserDashboard from "./pages/Dashboard/UserDashboard";
import SubmitIdea from "./pages/Dashboard/SubmitIdea";
import MyIdeas from "./pages/Dashboard/MyIdeas";
import AllIdeas from "./pages/Dashboard/AllIdeas";
import Profile from "./pages/Profile";

// 🔹 Admin Dashboard Pages
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import ManageUser from "./pages/Dashboard/ManageUser";
import IdeaSubmissions from "./pages/Dashboard/IdeaSubmissions";
import Reviews from "./pages/Dashboard/Reviews"; // ✅ Added Reviews Page
import Settings from "./pages/Dashboard/Settings"; // Optional placeholder page

// ==============================
// 🔸 AppContent (handles navbar visibility & routes)
// ==============================
function AppContent() {
  const location = useLocation();
  const userRole = localStorage.getItem("role"); // "user" or "admin"

  // 🔹 Hide Navbar on Dashboard routes
  const hideNavbar =
    location.pathname.startsWith("/admin-dashboard") ||
    location.pathname.startsWith("/user-dashboard");

  return (
    <>
      {/* 🌐 Show Navbar only on public pages */}
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 👤 User Routes */}
        <Route
          path="/user-dashboard"
          element={
            userRole === "user" ? <UserDashboard /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/user-dashboard/submit"
          element={
            userRole === "user" ? <SubmitIdea /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/user-dashboard/my-ideas"
          element={
            userRole === "user" ? <MyIdeas /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/user-dashboard/all-ideas"
          element={
            userRole === "user" ? <AllIdeas /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/user-dashboard/profile"
          element={
            userRole === "user" ? <Profile /> : <Navigate to="/signin" />
          }
        />

        {/* 🛠️ Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={
            userRole === "admin" ? <AdminDashboard /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/admin-dashboard/manage-users"
          element={
            userRole === "admin" ? <ManageUser /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/admin-dashboard/idea-submissions"
          element={
            userRole === "admin" ? <IdeaSubmissions /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/admin-dashboard/reviews"
          element={
            userRole === "admin" ? <Reviews /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/admin-dashboard/settings"
          element={
            userRole === "admin" ? <Settings /> : <Navigate to="/signin" />
          }
        />

        {/* 🔁 Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

// ==============================
// 🔸 Main App Component
// ==============================
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
