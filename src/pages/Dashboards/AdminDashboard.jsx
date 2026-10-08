import { useState } from "react";
import { Users, CheckSquare, FileText } from "lucide-react";
import DashboardLayout from "../../components/Layout/DashboardLayout";

// Import separate tab components
import DashboardOverview from "./AdminDashboard/DashboardOverview";
import EmployeeTab from "./AdminDashboard/EmployeeTab";
import EmployerTab from "./AdminDashboard/EmployerTab";
import ReportsTab from "./AdminDashboard/ReportsTab";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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
        setActiveTab={setActiveTab}
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
