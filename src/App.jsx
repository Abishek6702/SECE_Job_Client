import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Common Components
import { ToastContainer } from "react-toastify";

// Protections
import ProtectedRoute from "./components/ProtectedRoute";


// Layout

// Auth Urls
import SignupForm from "./pages/Auth/Signup";
import LoginForm from "./pages/Auth/LoginForm";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import VerifyOtp from "./pages/Auth/VerifyOtp";
import ResetPassword from "./pages/Auth/ResetPassword";

// Dashboard Urls
import AdminDashboard from "./pages/Dashboards/AdminDashboard";
import UserDashboard from "./pages/Dashboards/UserDashboard";
import EmployerDashboard from "./pages/Dashboards/EmployerDashboard";

function App() {
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setCurrentUserId(decoded.userId || decoded.id || null);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />

      <Routes>
        {/* PUBLIC ROUTES (NO TOKEN REQUIRED) */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route
          path="/employer-dashboard/*"
          element={
            <ProtectedRoute>
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* PROTECTED ROUTES */}
        {/* Protected routes make the navigate after closing and opening tabs if token expired navigate to main page */}
        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
