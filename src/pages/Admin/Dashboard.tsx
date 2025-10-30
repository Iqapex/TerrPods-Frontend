import { Link } from "react-router-dom";

// ✅ TerraPods brand yellow (Pantone 605C)
const TERRAPODS_YELLOW = "#D6A900";
const TERRAPODS_YELLOW_DARK = "#B88C00";

const Dashboard = () => {
  return (
    <div className="p-8 mt-16">
      {/* ✅ TerraPods Yellow underline */}
      <h1
        className="text-3xl font-extrabold mb-8 text-gray-800 border-b-4 pb-3 inline-block"
        style={{ borderColor: TERRAPODS_YELLOW }}
      >
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/admin/applications"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-blue-500"
        >
          <h2 className="text-lg font-semibold text-blue-600">📂 Manage Applications</h2>
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
          <h2 className="text-lg font-semibold text-indigo-600">🧭 Manage Navbar Menu</h2>
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

        {/* ✅ New Programs Management Card */}
        <Link
          to="/admin/programs"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-yellow-500"
          style={{ borderColor: TERRAPODS_YELLOW }}
        >
          <h2
            className="text-lg font-semibold"
            style={{ color: TERRAPODS_YELLOW }}
          >
            🎯 Manage Programs
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Add, edit, reorder, or remove programs including Agroecology, Biomaterial, Arts Residency.
          </p>
        </Link>

        {/* ✅ TerraPods Yellow card */}
        <Link
          to="/admin/settings"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border"
          style={{ borderColor: TERRAPODS_YELLOW }}
        >
          <h2
            className="text-lg font-semibold"
            style={{ color: TERRAPODS_YELLOW }}
          >
            ⚙️ Global Settings
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Change logo, brand colours, and global styles.
          </p>
        </Link>

        <Link
          to="/admin/photos"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-yellow-500"
        >
          <h2 className="text-lg font-semibold" style={{ color: TERRAPODS_YELLOW }}>
            🖼 Manage Homepage Photos
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Add or update homepage section images.
          </p>
        </Link>

        {/* ✅ NEW — Manage Art Gallery Card */}
        <Link
          to="/admin/gallery"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-teal-500"
        >
          <h2 className="text-lg font-semibold text-teal-600">🖼 Manage Gallery</h2>
          <p className="text-sm text-gray-600 mt-2">
            Add, edit, or remove artworks in the gallery.
          </p>
        </Link>
        <Link
          to="/admin/programs/artbio"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-yellow-500"
          style={{ borderColor: TERRAPODS_YELLOW }}
        >
          <h2
            className="text-lg font-semibold"
            style={{ color: TERRAPODS_YELLOW }}
          >
            🎯 Manage ArtBio
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Add, edit, and manage ArtBio program content.
          </p>
        </Link>

        <Link
          to="/admin/membership"
          className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border hover:border-yellow-500"
          style={{ borderColor: "#D6A900" }}
        >
          <h2 className="text-lg font-semibold" style={{ color: "#D6A900" }}>
            🌿 Manage Membership Portal
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Edit hero text, membership tiers, and visibility settings.
          </p>
        </Link>



      </div>
    </div>
  );
};

export default Dashboard;
