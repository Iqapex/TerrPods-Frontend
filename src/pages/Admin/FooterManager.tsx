// src/pages/Admin/FooterManager.tsx

import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

interface QuickLink {
  label: string;
  link: string;
}

interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface FooterData {
  footerLogo: string;
  description: string;
  quickLinks: QuickLink[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

type QuickLinkKey = keyof QuickLink;
type SocialLinkKey = keyof SocialLink;

const FooterManager = () => {
  const [footer, setFooter] = useState<FooterData>({
    footerLogo: "",
    description: "",
    quickLinks: [{ label: "", link: "" }],
    contactInfo: { address: "", email: "", phone: "" },
    socialLinks: [{ platform: "", url: "", icon: "" }],
  });

  const [loading, setLoading] = useState(false);
  const API_URL = "http://localhost:5000/api/footer";

  // Fetch footer data
  const fetchFooter = async () => {
    try {
      const res = await axios.get<FooterData>(API_URL);
      if (res.data) {
        setFooter({
          footerLogo: res.data.footerLogo || "",
          description: res.data.description || "",
          quickLinks: res.data.quickLinks?.length
            ? res.data.quickLinks
            : [{ label: "", link: "" }],
          contactInfo: res.data.contactInfo || {
            address: "",
            email: "",
            phone: "",
          },
          socialLinks: res.data.socialLinks?.length
            ? res.data.socialLinks
            : [{ platform: "", url: "", icon: "" }],
        });
      }
    } catch (error) {
      console.error("Error fetching footer:", error);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  // Handle simple field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFooter({ ...footer, [e.target.name]: e.target.value });
  };

  // Handle contact info changes
  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFooter({
      ...footer,
      contactInfo: {
        ...footer.contactInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Handle quick link changes
  const handleQuickLinkChange = (index: number, field: QuickLinkKey, value: string) => {
    const updated = [...footer.quickLinks];
    updated[index] = { ...updated[index], [field]: value };
    setFooter({ ...footer, quickLinks: updated });
  };

  // Handle social link changes
  const handleSocialLinkChange = (
    index: number,
    field: SocialLinkKey,
    value: string
  ) => {
    const updated = [...footer.socialLinks];
    updated[index] = { ...updated[index], [field]: value };
    setFooter({ ...footer, socialLinks: updated });
  };

  // Add quick link
  const addQuickLink = () => {
    setFooter({
      ...footer,
      quickLinks: [...footer.quickLinks, { label: "", link: "" }],
    });
  };

  // Add social link
  const addSocialLink = () => {
    setFooter({
      ...footer,
      socialLinks: [...footer.socialLinks, { platform: "", url: "", icon: "" }],
    });
  };

  // Save footer data
  const handleSave = async () => {
    setLoading(true);
    try {
      await axios.post(API_URL, footer);
      alert("✅ Footer updated successfully!");
    } catch (error) {
      console.error("Error updating footer:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8 mt-16 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900 border-b-4 border-[#C5A900] pb-3">
        📑 Footer Manager
      </h1>

      {/* Footer Logo */}
      <div className="bg-white shadow-lg rounded-xl border-l-4 border-[#C5A900] p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Footer Logo</h2>
        <input
          type="text"
          placeholder="Footer Logo URL"
          name="footerLogo"
          value={footer.footerLogo}
          onChange={handleChange}
          className="border p-3 w-full rounded-md focus:ring-2 focus:ring-[#C5A900] mb-4"
        />
        {footer.footerLogo && (
          <div className="flex items-center gap-3">
            <img
              src={footer.footerLogo}
              alt="Footer Logo"
              className="h-16 border rounded-md shadow-sm"
            />
            <span className="text-sm text-gray-500">Preview</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="bg-white shadow-lg rounded-xl border-l-4 border-[#C5A900] p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Description</h2>
        <textarea
          placeholder="Footer Description"
          name="description"
          value={footer.description}
          onChange={handleChange}
          className="border p-3 w-full rounded-md focus:ring-2 focus:ring-[#C5A900]"
          rows={3}
        />
      </div>

      {/* Quick Links */}
      <div className="bg-white shadow-lg rounded-xl border-l-4 border-[#C5A900] p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Quick Links</h2>
        {footer.quickLinks.map((link, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Label"
              value={link.label}
              onChange={(e) => handleQuickLinkChange(idx, "label", e.target.value)}
              className="border p-2 flex-1 rounded-md focus:ring-2 focus:ring-[#C5A900]"
            />
            <input
              type="text"
              placeholder="Link"
              value={link.link}
              onChange={(e) => handleQuickLinkChange(idx, "link", e.target.value)}
              className="border p-2 flex-1 rounded-md focus:ring-2 focus:ring-[#C5A900]"
            />
          </div>
        ))}
        <button
          onClick={addQuickLink}
          className="bg-[#C5A900] text-white px-4 py-2 rounded-lg shadow hover:bg-[#b19a00] transition"
        >
          ➕ Add Quick Link
        </button>
      </div>

      {/* Contact Info */}
      <div className="bg-white shadow-lg rounded-xl border-l-4 border-[#C5A900] p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Contact Info</h2>
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={footer.contactInfo.address}
          onChange={handleContactChange}
          className="border p-2 w-full mb-3 rounded-md focus:ring-2 focus:ring-[#C5A900]"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={footer.contactInfo.email}
          onChange={handleContactChange}
          className="border p-2 w-full mb-3 rounded-md focus:ring-2 focus:ring-[#C5A900]"
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={footer.contactInfo.phone}
          onChange={handleContactChange}
          className="border p-2 w-full rounded-md focus:ring-2 focus:ring-[#C5A900]"
        />
      </div>

      {/* Social Links */}
      <div className="bg-white shadow-lg rounded-xl border-l-4 border-[#C5A900] p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Social Links</h2>
        {footer.socialLinks.map((link, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Platform"
              value={link.platform}
              onChange={(e) => handleSocialLinkChange(idx, "platform", e.target.value)}
              className="border p-2 flex-1 rounded-md focus:ring-2 focus:ring-[#C5A900]"
            />
            <input
              type="text"
              placeholder="URL"
              value={link.url}
              onChange={(e) => handleSocialLinkChange(idx, "url", e.target.value)}
              className="border p-2 flex-1 rounded-md focus:ring-2 focus:ring-[#C5A900]"
            />
            <input
              type="text"
              placeholder="Icon URL"
              value={link.icon}
              onChange={(e) => handleSocialLinkChange(idx, "icon", e.target.value)}
              className="border p-2 flex-1 rounded-md focus:ring-2 focus:ring-[#C5A900]"
            />
          </div>
        ))}
        <button
          onClick={addSocialLink}
          className="bg-[#C5A900] text-white px-4 py-2 rounded-lg shadow hover:bg-[#b19a00] transition"
        >
          ➕ Add Social Link
        </button>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-[#C5A900] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#b19a00] transition disabled:opacity-50"
        >
          {loading ? "💾 Saving..." : "✅ Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default FooterManager;
