import { useState } from "react";

const Profile = () => {
  const [profile] = useState({
    name: "",
    bio: "",
    skills: [""],
    socialLinks: {
      linkedin: "",
      github: "",
    },
    membershipStatus: "Active",
    notifications: {
      events: true,
      newCalls: false,
      feedback: true,
    },
  });

  const [history] = useState([
    { title: "Residency in Agroecology", year: 2024 },
    { title: "Biomaterials Training Program", year: 2023 },
  ]);

  const [opportunities] = useState({
    saved: ["Eco Residency 2025", "BioArt Workshop"],
    applied: [
      { title: "Eco Residency 2024", status: "Under Review" },
      { title: "Art Fellowship", status: "Accepted" },
    ],
  });

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200 animate-gradient-x bg-[length:400%_400%] max-w-5xl mx-auto space-y-8 transition-all duration-500">
      {/* Profile Overview */}
      <section className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Profile Overview</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
        <p><strong>Skills:</strong> {profile.skills.join(", ")}</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href={profile.socialLinks.github}
            target="_blank"
            className="text-gray-800 underline hover:text-gray-900 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Residency & Training History */}
      <section className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Residency & Training History</h2>
        <ul className="list-disc pl-5">
          {history.map((item, idx) => (
            <li key={idx}>{item.title} - {item.year}</li>
          ))}
        </ul>
      </section>

      {/* Opportunities */}
      <section className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Opportunities</h2>

        <div className="mb-4">
          <h3 className="font-semibold">Saved:</h3>
          <ul className="list-disc pl-5">
            {opportunities.saved.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Applied:</h3>
          <ul className="list-disc pl-5">
            {opportunities.applied.map((item, idx) => (
              <li key={idx}>
                {item.title} - <span className="text-sm text-gray-500">{item.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Notification Preferences */}
      <section className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <ul className="list-disc pl-5">
          <li>Events: {profile.notifications.events ? "Enabled" : "Disabled"}</li>
          <li>New Calls: {profile.notifications.newCalls ? "Enabled" : "Disabled"}</li>
          <li>Feedback: {profile.notifications.feedback ? "Enabled" : "Disabled"}</li>
        </ul>
      </section>

      {/* Membership Status */}
      <section className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Membership Status</h2>
        <p className="text-green-600 font-medium">{profile.membershipStatus}</p>
        <p className="text-sm text-gray-600 mt-1">In the future, paid membership history and renewal options will appear here.</p>
      </section>
    </div>
  );
};

export default Profile;
