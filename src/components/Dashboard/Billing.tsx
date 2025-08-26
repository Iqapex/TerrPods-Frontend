// src/components/Dashboard/Billing.tsx

import { useState } from "react";

const Billing = () => {
  const [membershipPlan] = useState("free");

  const handleUpgrade = () => {
    alert("Upgrade to premium flow triggered");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 animate-fade-in">
        Membership & Billing
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition duration-300 hover:shadow-xl hover:scale-[1.01]">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Current Membership</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <p className="text-sm text-gray-600">
              Plan:{" "}
              <strong>
                {membershipPlan === "free" ? "Free Member" : "Premium Member"}
              </strong>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {membershipPlan === "free"
                ? "You're currently on a free plan. Upgrade to get access to exclusive content, discounts, and early event invites."
                : "You're enjoying premium benefits like early access, discounts, and exclusive resources."}
            </p>
          </div>
          <button
            onClick={handleUpgrade}
            className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            {membershipPlan === "free"
              ? "Upgrade to Premium"
              : "Manage Membership"}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition duration-300 hover:shadow-xl hover:scale-[1.01]">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Payment History</h2>
        <p className="text-sm text-gray-600 mb-2">No payments yet.</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl hover:scale-[1.01]">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Billing Settings</h2>
        <p className="text-sm text-gray-600 mb-2">
          Want to cancel or change your plan? Reach out to us at{" "}
          <a
            href="mailto:support@yourdomain.com"
            className="text-blue-600 hover:underline"
          >
            support@domain.com
          </a>
        </p>
        <p className="text-sm text-gray-500">
          For billing issues, refunds, or invoices, please contact the admin team.
        </p>
      </div>
    </div>
  );
};

export default Billing;
