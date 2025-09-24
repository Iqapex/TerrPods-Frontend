import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../api"; // Adjust path based on your folder structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [navItems, setNavItems] = useState<any[]>([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await api.get("/menu"); // ✅ Use api instance
        setNavItems(res.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-screen mx-auto md:px-24 sm:px-6">
        <div className="flex justify-between h-20 items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-full bg-gradient-to-br from-[#D4A017] to-[#B38912] shadow-md">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-[#D4A017] transition-colors">
                TerraPods
              </span>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, i) => (
              <div key={item._id || `nav-${i}`} className="relative group">
                {item.subMenu && item.subMenu.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center gap-1 px-3 py-2 font-medium text-gray-600 hover:text-[#D4A017] transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200">
                      <ul className="py-2">
                        {item.subMenu.map((sub: any, j: number) => (
                          <li key={sub._id || `sub-${i}-${j}`}>
                            {sub.path ? (
                              <Link
                                to={sub.path}
                                className="block px-4 py-2 text-gray-600 hover:bg-[#FFF9E5] hover:text-[#D4A017] transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ) : (
                              <span className="block px-4 py-2 text-gray-400 cursor-not-allowed">
                                {sub.name}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : item.path ? (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 font-medium ${
                      location.pathname === item.path
                        ? "text-[#D4A017]"
                        : "text-gray-600 hover:text-[#D4A017] transition-colors"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="px-3 py-2 font-medium text-gray-400 cursor-not-allowed">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-[#FFF9E5] transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <li key={item._id || `mobile-${i}`} className="border-b border-gray-100">
                  {item.subMenu && item.subMenu.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 hover:text-[#D4A017] transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transform transition-transform ${
                            openDropdown === item.name ? "rotate-180 text-[#D4A017]" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <ul className="bg-[#FFF9E5]">
                          {item.subMenu.map((sub: any, j: number) => (
                            <li key={sub._id || `mobile-sub-${i}-${j}`}>
                              {sub.path ? (
                                <Link
                                  to={sub.path}
                                  className="block px-8 py-2 text-gray-600 hover:bg-[#FFEFA0] hover:text-[#D4A017] transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              ) : (
                                <span className="block px-8 py-2 text-gray-400 cursor-not-allowed">
                                  {sub.name}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : item.path ? (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-[#FFF9E5] hover:text-[#D4A017] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="block px-4 py-3 text-gray-400 cursor-not-allowed">
                      {item.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
