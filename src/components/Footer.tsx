import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface FooterLink {
  label: string;
  link: string;
}

interface FooterContactInfo {
  address?: string;
  email?: string;
  phone?: string;
}

interface FooterSocialLink {
  platform: string;
  url: string;
  icon?: string;
}

interface FooterData {
  footerLogo?: string;
  description?: string;
  quickLinks?: FooterLink[];
  contactInfo?: FooterContactInfo;
  socialLinks?: FooterSocialLink[];
}

const Footer = () => {
  const [footer, setFooter] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/footer");
        setFooter(res.data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchFooter();
  }, []);

  if (!footer) return null;

  return (
    <footer className="bg-gray-900 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start">
            {footer.footerLogo && (
              <Link to="/" className="flex items-center">
                <img
                  src={footer.footerLogo}
                  alt="Footer Logo"
                  className="h-10 w-auto"
                />
              </Link>
            )}
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              {footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#D4A017]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {footer.quickLinks?.map((item, idx) => (
                <li key={idx} className="group relative">
                  <Link
                    to={item.link}
                    className="text-gray-400 hover:text-[#D4A017] transition-colors"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-[#D4A017] to-[#B38912] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#D4A017]">
              Contact
            </h3>
            <ul className="space-y-1 text-sm text-gray-400">
              {footer.contactInfo?.address && <li>{footer.contactInfo.address}</li>}
              {footer.contactInfo?.email && (
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${footer.contactInfo.email}`}
                    className="hover:text-[#D4A017]"
                  >
                    {footer.contactInfo.email}
                  </a>
                </li>
              )}
              {footer.contactInfo?.phone && (
                <li>
                  Phone:{" "}
                  <a
                    href={`tel:${footer.contactInfo.phone}`}
                    className="hover:text-[#D4A017]"
                  >
                    {footer.contactInfo.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#D4A017]">
              Follow Us
            </h3>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {footer.socialLinks?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#D4A017] transition-colors"
                >
                  {item.icon ? (
                    <img src={item.icon} alt={item.platform} className="h-6 w-6" />
                  ) : (
                    <span>{item.platform}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700 text-center py-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#D4A017] font-medium">TerraPods</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
