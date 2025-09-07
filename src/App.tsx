// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main Pages
import Home from './pages/Home';
import Mission from "./pages/Mission"; 
import ArtistsShowcase from './pages/ArtistsShowcase';
import News from './pages/News';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import Partners from './pages/Partners';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import ProgramApplication from './pages/ProgramApplication';
import Calendar from './pages/Calendar';
import MembershipPortal from './pages/MembershipPortal';
import AuthForm from './components/AuthForm';

// User Dashboard Pages
import DashboardLayout from './components/Dashboard/DashboardLayout';
import DashboardHome from './components/Dashboard/DashboardHome';
import Profile from './components/Dashboard/Profile';
import Applications from './components/Dashboard/Applications';
import Resources from './components/Dashboard/Resources';
import Forum from './components/Dashboard/Forum';
import Gallery from './components/Dashboard/Gallery';
import Inbox from './components/Dashboard/Inbox';
import Events from './components/Dashboard/Events';
import Billing from './components/Dashboard/Billing';
import Settings from './components/Dashboard/Settings';
import Saved from './components/Dashboard/Saved';

// Admin Panel Pages
import AdminDashboard from './pages/Admin/Dashboard';
import AdminApplications from './pages/Admin/Applications';
import AdminDonations from './pages/Admin/Donations';
import AdminContacts from './pages/Admin/Contacts';
import WorkshopRegister from "./pages/WorkshopRegister";
import OpenCalls from "./pages/OpenCalls";
import WorkshopRegistrationsAdmin from "./pages/Admin/WorkshopRegistrationsAdmin";
import ContactMessagesAdmin from './pages/Admin/ContactMessagesAdmin';
import MenuManager from "./pages/Admin/MenuManager";
import FooterManager from "./pages/Admin/FooterManager";
import SettingsManager from "./pages/Admin/SettingsManager";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Auth */}
            <Route path="/login" element={<AuthForm />} />
            <Route path="/signup" element={<AuthForm />} />

            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about/mission" element={<Mission />} /> 
            <Route path="/artists" element={<ArtistsShowcase />} />

            {/* News Routes ✅ */}
            <Route path="/news" element={<News />} />
            <Route path="/media/news" element={<News />} />

            {/* Blog Routes ✅ */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/media/blog" element={<Blog />} />

            <Route path="/donate" element={<Donate />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/programmes" element={<Programs />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/events/calendar" element={<Calendar />} />
            <Route path="/events/membership-faqs" element={<MembershipPortal />} />
            <Route path="/apply/:slug" element={<ProgramApplication />} />
            <Route path="/workshop-register" element={<WorkshopRegister />} />

            {/* User Dashboard */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="applications" element={<Applications />} />
              <Route path="resources" element={<Resources />} />
              <Route path="forum" element={<Forum />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="events" element={<Events />} />
              <Route path="billing" element={<Billing />} />
              <Route path="settings" element={<Settings />} />
              <Route path="saved" element={<Saved />} />
            </Route>

            {/* Admin Panel */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/applications" element={<AdminApplications />} />
            <Route path="/admin/donations" element={<AdminDonations />} />
            <Route path="/admin/contacts" element={<AdminContacts />} />
            <Route path="/open-calls" element={<OpenCalls />} />
            <Route path="/admin/workshop-registrations" element={<WorkshopRegistrationsAdmin />} />
            <Route path="/admin/contact-messages" element={<ContactMessagesAdmin />} />
            <Route path="/admin/menu" element={<MenuManager />} />
            <Route path="/admin/footer" element={<FooterManager />} />
            <Route path="/admin/settings" element={<SettingsManager />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
