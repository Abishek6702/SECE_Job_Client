import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FilePlus, Users, Calendar, Settings } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import DashboardLayout from "../../components/Layout/DashboardLayout";

// Import separate tab components
import DashboardOverview from "./EmployerDashboard/DashboardOverview";
import JobsTab from "./EmployerDashboard/JobsTab";
import ApplicationsTab from "./EmployerDashboard/ApplicationsTab";
import InterviewsTab from "./EmployerDashboard/InterviewsTab";
import SettingsTab from "./EmployerDashboard/SettingsTab";

const EmployerDashboard = () => {
  const [email, setEmail] = useState("Employer");

  const location = useLocation();
  const navigate = useNavigate();
  const pathParts = location.pathname.split("/");
  const activeTab = pathParts[2] || "dashboard";

  const handleTabChange = (tabId) => {
    if (tabId === "dashboard") {
      navigate("/employer-dashboard");
    } else {
      navigate(`/employer-dashboard/${tabId}`);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("carvion-key");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.email) setEmail(decoded.email.split("@")[0]);
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "jobs":
        return <JobsTab />;
      case "applications":
        return <ApplicationsTab />;
      case "interviews":
        return <InterviewsTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <DashboardOverview />;
    }
  };

  const sidebarItems = [
    { id: "jobs", icon: FilePlus, label: "Jobs" },
    { id: "applications", icon: Users, label: "Applications" },
    { id: "interviews", icon: Calendar, label: "Interviews" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      setActiveTab={handleTabChange}
      navTitle="Finance Employer"
      userName={email}
      userRole="Employer"
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default EmployerDashboard;
