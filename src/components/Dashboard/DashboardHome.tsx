import { Link } from 'react-router-dom';

const DashboardHome = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10 bg-gray-50 min-h-screen">
      {/* Welcome + Stats */}
      <section className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2"> Welcome back, Member Name</h1>
        <p className="text-gray-600 mb-4">Here's a quick overview of your community engagement.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Applications</p>
            <p className="text-xl font-semibold text-blue-600">2 Open Calls</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Upcoming Events</p>
            <p className="text-xl font-semibold text-green-600">3 This Month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Saved Resources</p>
            <p className="text-xl font-semibold text-purple-600">5 Articles</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">Messages</p>
            <p className="text-xl font-semibold text-red-500">1 Unread</p>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4"> Featured Opportunities</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
            <h3 className="text-lg font-bold mb-1">Biomaterial Residency 2025</h3>
            <p className="text-sm text-gray-600">Apply before Aug 15. Hands-on lab training and research support.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
            <h3 className="text-lg font-bold mb-1">Agroecology Fellowship</h3>
            <p className="text-sm text-gray-600">Join global experts for a 6-week immersive program.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
            <h3 className="text-lg font-bold mb-1">Art & Climate Workshop</h3>
            <p className="text-sm text-gray-600">Collaborate on art for environmental awareness.</p>
          </div>
        </div>
      </section>

      {/* Community Updates */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4"> Latest Community Updates</h2>
        <ul className="space-y-3">
          <li className="bg-white p-3 rounded-md shadow text-gray-800">
             New Toolkit: Sustainable Textile Production Methods
          </li>
          <li className="bg-white p-3 rounded-md shadow text-gray-800">
             Forum Discussion: How do you define regenerative design?
          </li>
          <li className="bg-white p-3 rounded-md shadow text-gray-800">
             EcoSouk Product Launch & Live Q&A – July 28
          </li>
        </ul>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🔗 Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Link
            to="/dashboard/resources"
            className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition"
          >
             Resources
          </Link>
          <Link
            to="/dashboard/gallery"
            className="bg-white p-4 rounded-lg shadow hover:bg-pink-50 transition"
          >
             Gallery
          </Link>
          <Link
            to="/dashboard/events"
            className="bg-white p-4 rounded-lg shadow hover:bg-green-50 transition"
          >
             Events
          </Link>
          <Link
            to="/dashboard/applications"
            className="bg-white p-4 rounded-lg shadow hover:bg-yellow-50 transition"
          >
             Applications
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
