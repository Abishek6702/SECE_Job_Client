import React, { useEffect, useState } from "react";
import { Activity, Users, Briefcase, Building2, MessageSquare, Layers, Settings } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import DashboardLayout from "../../components/Layout/DashboardLayout";

// Import separate tab components
import DashboardOverview from "./UserDashboard/DashboardOverview";
import FeedsTab from "./UserDashboard/FeedsTab";
import NetworkTab from "./UserDashboard/NetworkTab";
import JobsTab from "./UserDashboard/JobsTab";
import CompaniesTab from "./UserDashboard/CompaniesTab";
import MessagesTab from "./UserDashboard/MessagesTab";
import ServicesTab from "./UserDashboard/ServicesTab";
import SettingsTab from "./UserDashboard/SettingsTab";

const UserDashboard = () => {
  const [userEmail, setUserEmail] = useState("John Doe");
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if(decoded.email) setUserEmail(decoded.email.split('@')[0]);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardOverview userEmail={userEmail} />;
      case "feeds": return <FeedsTab />;
      case "network": return <NetworkTab />;
      case "jobs": return <JobsTab />;
      case "companies": return <CompaniesTab />;
      case "messages": return <MessagesTab />;
      case "services": return <ServicesTab />;
      // case "settings": return <SettingsTab />;
      default: return <DashboardOverview userEmail={userEmail} />;
    }
  };

  const sidebarItems = [
    { id: 'feeds', icon: Activity, label: 'Feeds' },
    { id: 'network', icon: Users, label: 'Network' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'companies', icon: Building2, label: 'Companies' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'services', icon: Layers, label: 'Services' },
    // { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <>
      <DashboardLayout
        sidebarItems={sidebarItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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
