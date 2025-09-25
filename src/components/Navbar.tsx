import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // 🔹 static menu
  const navItems = [
    {
      name: "About",
      subMenu: [
        { name: "Mission", path: "/about/mission" },
        { name: "Team", path: "/about/team" },
        { name: "Partners", path: "/about/partners" },
      ],
    },
    { name: "Programmes", path: "/programmes" },
    {
      name: "Events",
      subMenu: [
        { name: "Calendar", path: "/events/calendar" },
        { name: "Membership & FAQs", path: "/events/membership-faqs" },
      ],
    },

    {
      name: "Media",
      subMenu: [
        { name: "News", path: "/media/news" },
        { name: "Blog", path: "/media/blog" },
      ],
    },
    { name: "Donate", path: "/donate" },
    { name: "Login", path: "/login" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-md"
        }`}
    >
      <div className="max-w-screen mx-auto md:px-24 sm:px-6">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                {item.subMenu ? (
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
                        {item.subMenu.map((sub, j) => (
                          <li key={j}>
                            <Link
                              to={sub.path}
                              className="block px-4 py-2 text-gray-600 hover:bg-[#FFF9E5] hover:text-[#D4A017] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path || "#"}
                    className={`px-3 py-2 font-medium ${location.pathname === item.path
                        ? "text-[#D4A017]"
                        : "text-gray-600 hover:text-[#D4A017] transition-colors"
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
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
                <li key={i} className="border-b border-gray-100">
                  {item.subMenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 hover:text-[#D4A017] transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transform transition-transform ${openDropdown === item.name ? "rotate-180 text-[#D4A017]" : ""
                            }`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <ul className="bg-[#FFF9E5]">
                          {item.subMenu.map((sub, j) => (
                            <li key={j}>
                              <Link
                                to={sub.path}
                                className="block px-8 py-2 text-gray-600 hover:bg-[#FFEFA0] hover:text-[#D4A017] transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path || "#"}
                      className="block px-4 py-3 text-gray-700 hover:bg-[#FFF9E5] hover:text-[#D4A017] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
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
