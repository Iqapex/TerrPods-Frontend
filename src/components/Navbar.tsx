import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import logo from "../img/TerraPods.png";
=======
>>>>>>> c2b43d6544c00406f27f14fb1f45bee0ec55b712

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

<<<<<<< HEAD
=======
  // 🔹 static menu
>>>>>>> c2b43d6544c00406f27f14fb1f45bee0ec55b712
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
<<<<<<< HEAD
        {
          name: "Call for Applications: Arts Residency",
          path: "/events/applications/arts-residency",
        },
        {
          name: "Call for Applications: Biomaterial Workshop",
          path: "/events/applications/biomaterial-workshop",
        },
      ],
    },
    // ✅ Simplified Membership (no dropdown)
    {
      name: "Membership",
      subMenu: [
        { name: "Login", path: "/membership/login" },
        { name: "Sign Up", path: "/membership/signup" },
        { name: "FAQ", path: "/membership/faq" },
=======
        { name: "Membership & FAQs", path: "/events/membership-faqs" },
>>>>>>> c2b43d6544c00406f27f14fb1f45bee0ec55b712
      ],
    },

    {
      name: "Media",
      subMenu: [
        { name: "News", path: "/media/news" },
        { name: "Blog", path: "/media/blog" },
      ],
    },
<<<<<<< HEAD
    { name: "Gallery", path: "/art-gallery" },
    { name: "Donate", path: "/donate" },
=======
    { name: "Donate", path: "/donate" },
    { name: "Login", path: "/login" },
>>>>>>> c2b43d6544c00406f27f14fb1f45bee0ec55b712
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const renderSubMenu = (subMenu: any[]) => (
    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-50">
      <ul className="py-2">
        {subMenu.map((sub, j) => (
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
  );

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
              <img
                src={logo}
                alt="TerraPods Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, i) => (
<<<<<<< HEAD
              <div key={i} className="relative">
=======
              <div key={i} className="relative group">
>>>>>>> c2b43d6544c00406f27f14fb1f45bee0ec55b712
                {item.subMenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center gap-1 px-3 py-2 font-medium text-gray-600 hover:text-[#D4A017] transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
<<<<<<< HEAD
                    {openDropdown === item.name && renderSubMenu(item.subMenu)}
=======
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
>>>>>>> c2b43d6544c00406f27f14fb1f45bee0ec55b712
                  </>
                ) : (
                  <Link
                    to={item.path || "#"}
                    className={`px-3 py-2 font-medium ${location.pathname === item.path
                        ? "text-[#D4A017]"
<<<<<<< HEAD
                        : "text-gray-600 hover:text-[#D4A017]"
=======
                        : "text-gray-600 hover:text-[#D4A017] transition-colors"
>>>>>>> c2b43d6544c00406f27f14fb1f45bee0ec55b712
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
<<<<<<< HEAD
                          className={`h-4 w-4 transform transition-transform ${openDropdown === item.name
                              ? "rotate-180 text-[#D4A017]"
                              : ""
=======
                          className={`h-4 w-4 transform transition-transform ${openDropdown === item.name ? "rotate-180 text-[#D4A017]" : ""
>>>>>>> c2b43d6544c00406f27f14fb1f45bee0ec55b712
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
