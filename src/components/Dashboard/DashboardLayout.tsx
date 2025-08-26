// src/components/Dashboard/DashboardLayout.tsx
//import React  from 'react';

import { Link, Outlet, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/dashboard" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Applications", path: "/dashboard/applications" },
    { name: "Resources", path: "/dashboard/resources" },
    { name: "Forum", path: "/dashboard/forum" },
    { name: "Gallery", path: "/dashboard/gallery" },
    { name: "Inbox", path: "/dashboard/inbox" },
    { name: "Events", path: "/dashboard/events" },
    { name: "Billing", path: "/dashboard/billing" },
    { name: "Settings", path: "/dashboard/settings" },
    { name: "Saved", path: "/dashboard/saved" },
  ];

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Mobile topbar */}
      <div className="md:hidden bg-white shadow h-16 flex items-center justify-between px-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          className="text-2xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-50 bg-gray-900 text-white w-64 h-full p-2 space-y-2 transform transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="hidden md:block text-2xl font-bold mb-4">
          Dashboard
        </div>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-4 py-2 rounded text-sm font-medium ${
              location.pathname === item.path
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
            onClick={() => setSidebarOpen(false)} // close sidebar on mobile click
          >
            {item.name}
          </Link>
        ))}
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar for desktop */}
        <header className="hidden md:flex h-16 bg-white shadow items-center px-6">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
