import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TitleBar from "./TitleBar";
import TauriEnvironmentWarning from "./TauriEnvironmentWarning";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLoggedIn = false; // Example condition

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <TauriEnvironmentWarning
              className="mb-4"
              showDebugInfo={process.env.NODE_ENV === "development"}
            />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
