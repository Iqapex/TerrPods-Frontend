// src/components/Dashboard/Settings.tsx
import { useState } from 'react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    updates: true,
    events: false,
    applications: true,
  });

  const toggleNotification = (type: string) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type as keyof typeof notifications],
    }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 animate-bgPulse p-4 sm:p-6">
      <div className="max-w-7xl mx-auto w-full bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-md shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Account Settings</h2>

        {/* Profile Information */}
        <section className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Profile Information</h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input-style" />
            <input type="text" placeholder="Bio" className="input-style" />
            <input type="text" placeholder="Social Links" className="input-style" />
            <input type="text" placeholder="Skills (comma separated)" className="input-style" />
            <button className="col-span-1 sm:col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-all duration-300 shadow">
              Save Profile
            </button>
          </form>
        </section>

        {/* Notification Preferences */}
        <section className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Notification Preferences</h3>
          <div className="space-y-3">
            {['updates', 'events', 'applications'].map((type) => (
              <label key={type} className="flex items-center gap-3 text-sm sm:text-base hover:bg-gray-100 p-2 rounded">
                <input
                  type="checkbox"
                  checked={notifications[type as keyof typeof notifications]}
                  onChange={() => toggleNotification(type)}
                  className="accent-green-600"
                />
                <span className="capitalize">Email me about {type}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Membership Status */}
        <section className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Membership Status</h3>
          <div className="bg-gray-100 p-4 rounded shadow-sm text-sm sm:text-base">
            <p className="mb-2">
              Current Plan: <strong>Free Member</strong>
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-all duration-300">
              Upgrade Membership
            </button>
          </div>
        </section>

        {/* Payment Info */}
        <section className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Payment Info</h3>
          <p className="text-sm text-gray-600 mb-2">No payment history yet.</p>
        </section>

        {/* Danger Zone */}
        <section className="mt-10">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">Danger Zone</h3>
          <div className="space-y-3">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full sm:w-auto transition-all duration-300">
              Deactivate Account
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full sm:w-auto transition-all duration-300">
              Log Out
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
