import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Activity,
  Users,
  Briefcase,
  Building2,
  MessageSquare,
  Layers,
} from "lucide-react";
import { jwtDecode } from "jwt-decode";
import DashboardLayout from "../../components/Layout/DashboardLayout";

// Import separate tab components
import DashboardOverview from "./UserDashboard/DashboardOverview";
import FeedsTab from "./UserDashboard/FeedsTab";
import NetworkTab from "./UserDashboard/NetworkTab";
import JobsTab from "./UserDashboard/JobsTab";
import CompaniesTab from "./UserDashboard/CompaniesTab";
import MessagesTab from "./UserDashboard/MessagesTab";

const UserDashboard = () => {
  const [userEmail, setUserEmail] = useState("John Doe");

  const location = useLocation();
  const navigate = useNavigate();
  const pathParts = location.pathname.split("/");
  const activeTab = pathParts[2] || "dashboard";

  const handleTabChange = (tabId) => {
    if (tabId === "dashboard") {
      navigate("/employee-dashboard");
    } else {
      navigate(`/employee-dashboard/${tabId}`);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("carvion-key");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.email) setUserEmail(decoded.email.split("@")[0]);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview userEmail={userEmail} />;
      case "feeds":
        return <FeedsTab />;
      case "network":
        return <NetworkTab />;
      case "jobs":
        return <JobsTab />;
      case "companies":
        return <CompaniesTab />;
      case "messages":
        return <MessagesTab />;
     
      default:
        return <DashboardOverview userEmail={userEmail} />;
    }
  };

  const sidebarItems = [
    { id: "feeds", icon: Activity, label: "Feeds" },
    { id: "network", icon: Users, label: "Network" },
    { id: "jobs", icon: Briefcase, label: "Jobs" },
    { id: "companies", icon: Building2, label: "Companies" },
    // { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <>
      <DashboardLayout
        sidebarItems={sidebarItems}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        navTitle="Finance Employee"
        userName={userEmail}
        userRole="Employee"
      >
        {renderContent()}
      </DashboardLayout>
    </>
  );
};

export default UserDashboard;
