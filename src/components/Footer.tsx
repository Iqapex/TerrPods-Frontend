import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  // 🔹 Reuse the same structure as Navbar
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

  // 🔹 Split into sections
  const quickLinks = navItems.filter(
    (item) => !["Donate", "Login"].includes(item.name)
  );
  const resources = navItems.filter((item) =>
    ["Donate", "Login"].includes(item.name)
  );

  return (
    <footer className="bg-[#0C3C3D] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-full bg-gradient-to-br from-[#D4A017] to-[#B38912] shadow-md">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-[#D4A017] transition-colors">
                TerraPods
              </span>
            </Link>
          </motion.div>

          <p className="mt-4 text-sm leading-6 text-gray-300">
            Empowering communities through environmental awareness,
            sustainable practices, and circular economy initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4A017]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, i) =>
              item.subMenu ? (
                item.subMenu.map((sub, j) => (
                  <li key={`${i}-${j}`}>
                    <Link to={sub.path} className="hover:text-[#D4A017]">
                      {sub.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li key={i}>
                  <Link to={item.path || "#"} className="hover:text-[#D4A017]">
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4A017]">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            {resources.map((item, i) => (
              <li key={i}>
                <Link to={item.path || "#"} className="hover:text-[#D4A017]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4A017]">
            Contact Us
          </h3>
          <p className="text-sm text-gray-300">Beirut, Lebanon</p>
          <p className="text-sm text-gray-300">info@terrapods.org</p>
          <p className="text-sm text-gray-300">+961 123 456</p>

          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#D4A017]">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#D4A017]">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#D4A017]">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TerraPods. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
