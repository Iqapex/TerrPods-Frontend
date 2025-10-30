import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  FileText,
  User,
  FlaskConical,
  MessageSquare,
  PenSquare,
  ShoppingBag,
  BookOpen,
  LogOut,
} from "lucide-react";

const TERRAPODS_YELLOW = "#D6A900";

const links = [
  { to: "/dashboard/portal", label: "Member Portal", icon: <Home size={18} /> },
  { to: "/dashboard/my-blog", label: "My Blog", icon: <FileText size={18} /> },
  { to: "/dashboard/profile", label: "Profile", icon: <User size={18} /> },
  { to: "/dashboard/lab-booking", label: "Lab Booking", icon: <FlaskConical size={18} /> },
  { to: "/dashboard/forum", label: "Forum", icon: <MessageSquare size={18} /> },
  { to: "/dashboard/create-blog-post", label: "Create Blog", icon: <PenSquare size={18} /> },
  { to: "/dashboard/marketplace", label: "Marketplace", icon: <ShoppingBag size={18} /> },
  { to: "/dashboard/resources", label: "Resources", icon: <BookOpen size={18} /> },
];

const MemberDashboard = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white shadow-xl border-r border-gray-200 fixed lg:relative flex flex-col justify-between"
      >
        {/* Top Section */}
        <div>
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
              🌿 TerraPods
            </h1>
            <p className="text-xs text-gray-500 mt-1">Member Dashboard</p>
          </div>

          <nav className="flex flex-col p-4 space-y-2">
            {links.map(({ to, label, icon }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    active
                      ? "bg-yellow-100 text-yellow-800 shadow-inner"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  style={active ? { borderLeft: `4px solid ${TERRAPODS_YELLOW}` } : {}}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 w-full px-4 py-2 text-gray-600 hover:text-red-600 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 lg:p-10 bg-gray-50 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default MemberDashboard;
