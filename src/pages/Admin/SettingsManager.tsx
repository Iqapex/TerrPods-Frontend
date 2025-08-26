import { useState, useEffect } from "react";
import axios from "axios";

const SettingsManager = () => {
  const [settings, setSettings] = useState({
    navbarLogo: "",
    footerLogo: "",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
  });
  const [loading, setLoading] = useState(false);

  const fetchSettings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/settings");
      if (res.data) {
        setSettings({
          navbarLogo: res.data.navbarLogo || "",
          footerLogo: res.data.footerLogo || "",
          primaryColor: res.data.primaryColor || "#000000",
          secondaryColor: res.data.secondaryColor || "#ffffff",
        });
      }
    } catch (err) {
      console.error("Error fetching settings:", err);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/settings", settings);
      alert("✅ Settings updated successfully!");
    } catch (err) {
      console.error("Error updating settings:", err);
    }
    setLoading(false);
  };

  return (
    <div className="p-8 mt-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 border-b pb-3">
        ⚙️ Global Site Settings
      </h1>

      {/* Logos Section */}
      <div className="bg-white shadow-md rounded-xl border p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Logos</h2>

        {/* Navbar Logo */}
        <label className="block mb-2 font-medium text-gray-600">Navbar Logo URL</label>
        <input
          type="text"
          name="navbarLogo"
          value={settings.navbarLogo}
          placeholder="Enter Navbar Logo URL"
          onChange={handleChange}
          className="border p-3 w-full rounded-md focus:ring-2 focus:ring-blue-400 mb-4"
        />
        {settings.navbarLogo && (
          <div className="flex items-center gap-3 mb-6">
            <img
              src={settings.navbarLogo}
              alt="Navbar Logo"
              className="h-14 border rounded-md shadow-sm"
            />
            <span className="text-sm text-gray-500">Navbar Logo Preview</span>
          </div>
        )}

        {/* Footer Logo */}
        <label className="block mb-2 font-medium text-gray-600">Footer Logo URL</label>
        <input
          type="text"
          name="footerLogo"
          value={settings.footerLogo}
          placeholder="Enter Footer Logo URL"
          onChange={handleChange}
          className="border p-3 w-full rounded-md focus:ring-2 focus:ring-blue-400 mb-4"
        />
        {settings.footerLogo && (
          <div className="flex items-center gap-3">
            <img
              src={settings.footerLogo}
              alt="Footer Logo"
              className="h-14 border rounded-md shadow-sm"
            />
            <span className="text-sm text-gray-500">Footer Logo Preview</span>
          </div>
        )}
      </div>

      {/* Colors Section */}
      <div className="bg-white shadow-md rounded-xl border p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Theme Colors</h2>

        <div className="flex items-center gap-8">
          <div>
            <label className="block mb-2 font-medium text-gray-600">Primary Color</label>
            <input
              type="color"
              name="primaryColor"
              value={settings.primaryColor}
              onChange={handleChange}
              className="w-16 h-12 cursor-pointer border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-600">Secondary Color</label>
            <input
              type="color"
              name="secondaryColor"
              value={settings.secondaryColor}
              onChange={handleChange}
              className="w-16 h-12 cursor-pointer border rounded"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition disabled:opacity-50"
        >
          {loading ? "💾 Saving..." : "✅ Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default SettingsManager;
