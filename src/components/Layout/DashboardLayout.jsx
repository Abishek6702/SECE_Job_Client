
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const DashboardLayout = ({
  children,
  sidebarItems,
  activeTab,
  setActiveTab,
  userName,
}) => {
  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      <div className="hidden md:block">
        {/* Left Sidebar */}
      <Sidebar
        sidebarItems={sidebarItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      </div>

      {/* Main Right Section */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Top Navbar */}
        <TopNavbar
          userName={userName}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-5">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;