import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Users, CheckSquare, FileText } from "lucide-react";
import DashboardLayout from "../../components/Layout/DashboardLayout";

// Import separate tab components
import DashboardOverview from "./AdminDashboard/DashboardOverview";
import EmployeeTab from "./AdminDashboard/EmployeeTab";
import EmployerTab from "./AdminDashboard/EmployerTab";
import ReportsTab from "./AdminDashboard/ReportsTab";

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathParts = location.pathname.split("/");
  const activeTab = pathParts[2] || "dashboard";

  const handleTabChange = (tabId) => {
    if (tabId === "dashboard") {
      navigate("/admin-dashboard");
    } else {
      navigate(`/admin-dashboard/${tabId}`);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardOverview />;
      case "employee": return <EmployeeTab />;
      case "employer": return <EmployerTab />;
      case "reports": return <ReportsTab />;
      default: return <DashboardOverview />;
    }
  };

  const sidebarItems = [
    { id: 'employee', icon: Users, label: 'Employee' },
    { id: 'employer', icon: CheckSquare, label: 'Employer' },
    { id: 'reports', icon: FileText, label: 'Reports' }
  ];

  return (
    <>
      <DashboardLayout
        sidebarItems={sidebarItems}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        navTitle="Finance Admin"
        userName="System Admin"
        userRole="Admin"
      >
        {renderContent()}
      </DashboardLayout>
    </>
  );
};

export default AdminDashboard;
