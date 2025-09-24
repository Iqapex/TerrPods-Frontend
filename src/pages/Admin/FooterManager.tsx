import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

const FooterManager = () => {
  const [footer, setFooter] = useState<FooterData>({
    footerLogo: "",
    description: "",
    quickLinks: [],
    contactInfo: { address: "", email: "", phone: "" },
    socialLinks: [],
  });

  const [loading, setLoading] = useState(false);

  const fetchFooter = async () => {
    try {
      const res = await axios.get<FooterData>(`${API_BASE_URL}/footer`);
      if (res.data) {
        setFooter({
          footerLogo: res.data.footerLogo || "",
          description: res.data.description || "",
          quickLinks: res.data.quickLinks || [],
          contactInfo: {
            address: res.data.contactInfo?.address || "",
            email: res.data.contactInfo?.email || "",
            phone: res.data.contactInfo?.phone || "",
          },
          socialLinks: res.data.socialLinks || [],
        });
      }
    } catch (error) {
      console.error("Error fetching footer:", error);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFooter({ ...footer, [e.target.name]: e.target.value });
  };

  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFooter({
      ...footer,
      contactInfo: { ...footer.contactInfo, [e.target.name]: e.target.value },
    });
  };

  const handleQuickLinkChange = (index: number, field: keyof QuickLink, value: string) => {
    const updated = [...footer.quickLinks];
    updated[index] = { ...updated[index], [field]: value };
    setFooter({ ...footer, quickLinks: updated });
  };

  const handleSocialLinkChange = (index: number, field: keyof SocialLink, value: string) => {
    const updated = [...footer.socialLinks];
    updated[index] = { ...updated[index], [field]: value };
    setFooter({ ...footer, socialLinks: updated });
  };

  const addQuickLink = () =>
    setFooter({ ...footer, quickLinks: [...footer.quickLinks, { label: "", link: "" }] });

  const addSocialLink = () =>
    setFooter({
      ...footer,
      socialLinks: [...footer.socialLinks, { platform: "", url: "", icon: "" }],
    });

  const handleSave = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/footer`, footer);
      alert("✅ Footer updated successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Error saving footer.");
    }
    setLoading(false);
  };

  return (
    <div className="p-8 mt-16 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 border-b-4 border-[#C5A900] pb-3">
        📑 Footer Manager
      </h1>

      {/* Logo */}
      <input
        type="text"
        placeholder="Footer Logo URL"
        name="footerLogo"
        value={footer.footerLogo}
        onChange={handleChange}
        className="border p-3 w-full rounded-md mb-4"
      />

      {/* Description */}
      <textarea
        placeholder="Footer Description"
        name="description"
        value={footer.description}
        onChange={handleChange}
        className="border p-3 w-full rounded-md mb-8"
      />

      {/* Quick Links */}
      <div className="mb-8">
        {(footer.quickLinks || []).map((link, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Label"
              value={link.label}
              onChange={(e) => handleQuickLinkChange(idx, "label", e.target.value)}
              className="border p-2 flex-1 rounded-md"
            />
            <input
              type="text"
              placeholder="Link"
              value={link.link}
              onChange={(e) => handleQuickLinkChange(idx, "link", e.target.value)}
              className="border p-2 flex-1 rounded-md"
            />
          </div>
        ))}
        <button onClick={addQuickLink} className="bg-[#C5A900] text-white px-4 py-2 rounded">
          ➕ Add Quick Link
        </button>
      </div>

      {/* Contact Info */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={footer.contactInfo.address}
          onChange={handleContactChange}
          className="border p-2 w-full mb-3 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={footer.contactInfo.email}
          onChange={handleContactChange}
          className="border p-2 w-full mb-3 rounded-md"
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={footer.contactInfo.phone}
          onChange={handleContactChange}
          className="border p-2 w-full rounded-md"
        />
      </div>

      {/* Social Links */}
      <div className="mb-8">
        {(footer.socialLinks || []).map((link, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Platform"
              value={link.platform}
              onChange={(e) => handleSocialLinkChange(idx, "platform", e.target.value)}
              className="border p-2 flex-1 rounded-md"
            />
            <input
              type="text"
              placeholder="URL"
              value={link.url}
              onChange={(e) => handleSocialLinkChange(idx, "url", e.target.value)}
              className="border p-2 flex-1 rounded-md"
            />
            <input
              type="text"
              placeholder="Icon URL"
              value={link.icon}
              onChange={(e) => handleSocialLinkChange(idx, "icon", e.target.value)}
              className="border p-2 flex-1 rounded-md"
            />
          </div>
        ))}
        <button onClick={addSocialLink} className="bg-[#C5A900] text-white px-4 py-2 rounded">
          ➕ Add Social Link
        </button>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-[#C5A900] text-white px-6 py-3 rounded-lg"
        >
          {loading ? "💾 Saving..." : "✅ Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default FooterManager;
