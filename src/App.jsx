import { Routes, Route } from "react-router-dom";

// UI Components
import { ToastContainer } from "react-toastify";

// Protections
import ProtectedRoute from "./components/ProtectedRoute";

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

// Common Pages
import OnboardingForm from "./pages/Common/OnboardingForm";


function App() {
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
        <Route path="/onbordingform" element={<OnboardingForm />} />

        {/* Protected Routes */}
        <Route
          path="/employer-dashboard/*"
          element={
            <ProtectedRoute>
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee-dashboard/*"
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
