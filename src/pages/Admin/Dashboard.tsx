import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-8 mt-16"> {/* ✅ mt-16 pushes below navbar */}
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 border-b pb-3">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Each card */}
        <Link
          to="/admin/applications"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-blue-500"
        >
          <h2 className="text-lg font-semibold text-blue-600">
            📂 Manage Applications
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Review and handle application submissions.
          </p>
        </Link>

        <Link
          to="/admin/donations"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-green-500"
        >
          <h2 className="text-lg font-semibold text-green-600">💰 View Donations</h2>
          <p className="text-sm text-gray-600 mt-2">
            Track all donation records in one place.
          </p>
        </Link>

        <Link
          to="/admin/workshop-registrations"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-purple-500"
        >
          <h2 className="text-lg font-semibold text-purple-600">
            📝 Manage Workshop Registrations
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Approve or reject workshop attendees.
          </p>
        </Link>

        <Link
          to="/admin/contact-messages"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-red-500"
        >
          <h2 className="text-lg font-semibold text-red-600">📧 View Contact Messages</h2>
          <p className="text-sm text-gray-600 mt-2">
            See messages submitted via the contact form.
          </p>
        </Link>

        <Link
          to="/admin/menu"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-indigo-500"
        >
          <h2 className="text-lg font-semibold text-indigo-600">
            🧭 Manage Navbar Menu
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Update navigation links and submenus.
          </p>
        </Link>

        <Link
          to="/admin/footer"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-pink-500"
        >
          <h2 className="text-lg font-semibold text-pink-600">⚓ Manage Footer</h2>
          <p className="text-sm text-gray-600 mt-2">
            Edit footer links, texts, and quick access info.
          </p>
        </Link>

        <Link
          to="/admin/settings"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-yellow-500"
        >
          <h2 className="text-lg font-semibold text-yellow-600">
            ⚙️ Global Settings
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Change logo, brand colours, and global styles.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
