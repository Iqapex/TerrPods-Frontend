// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AdminProvider } from "./context/AdminContext"; // ✅ already imported

// --- Main Pages ---
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import ArtistsShowcase from "./pages/ArtistsShowcase";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import ProgramApplication from "./pages/ProgramApplication";
import Calendar from "./pages/Calendar";
import MembershipPortal from "./pages/MembershipPortal";
import AuthForm from "./components/AuthForm";
import ArtGallery from "./pages/ArtGallery";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";



//import signup from "./pages/auth/signup";
//import login from "./pages/auth/login";



// --- Dashboard Components ---
import Profile from "./components/Dashboard/Profile";

// --- Admin Pages ---
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminApplications from "./pages/Admin/Applications";
import AdminDonations from "./pages/Admin/Donations";
import AdminContacts from "./pages/Admin/Contacts";
import WorkshopRegister from "./pages/WorkshopRegister";
import OpenCalls from "./pages/OpenCalls";
import WorkshopRegistrationsAdmin from "./pages/Admin/WorkshopRegistrationsAdmin";
import ContactMessagesAdmin from "./pages/Admin/ContactMessagesAdmin";
import MenuManager from "./pages/Admin/MenuManager";
import FooterManager from "./pages/Admin/FooterManager";
import SettingsManager from "./pages/Admin/SettingsManager";
import AdminPrograms from "./pages/Admin/AdminPrograms";
import AdminPhotos from "./pages/Admin/AdminPhotos";
import AdminGallery from "./pages/Admin/AdminGallery";
import ArtsResidency from "./pages/Applications/ArtsResidency";
import BiomaterialWorkshop from "./pages/Applications/BiomaterialWorkshop";
import ArtBio from "./pages/Admin/ArtBio";
import BlogManager from "./pages/Admin/BlogManager";

// --- Member Pages ---
import MyBlog from "./pages/Members/MyBlog";
import MemberPortal from "./pages/Members/MemberPortal";
import LabBooking from "./pages/Members/LabBooking";
import Forum from "./pages/Members/Forum";
import MemberProfilePage from "./pages/Members/MemberProfilePage";
import CreateBlogPost from "./pages/Members/CreateBlogPost";
import MarketplaceMember from "./pages/Members/MarketplaceMember";
import MemberDashboard from "./pages/Members/MemberDashboard";
import MembershipAdmin from "./pages/Admin/MembershipAdmin";

// --- Resources ---
import ResourceLibrary from "./pages/Resources/ResourceLibrary";
import ResourceDetail from "./pages/Resources/ResourceDetail";

function App() {
  return (
    // ✅ Wrap everything inside AdminProvider
    <AdminProvider>
      <Router>
        <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Auth */}
              <Route path="/login" element={<AuthForm />} />
              <Route path="/signup" element={<AuthForm />} />


              <Route path="/auth/signup" element={<Signup />} />
              <Route path="/auth/login" element={<Login />} />

              {/* Public Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about/mission" element={<Mission />} />
              <Route path="/artists" element={<ArtistsShowcase />} />
              <Route path="/news" element={<News />} />
              <Route path="/media/news" element={<News />} />
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
              <Route path="/art-gallery" element={<ArtGallery />} />
              <Route path="/events/applications/arts-residency" element={<ArtsResidency />} />
              <Route path="/events/applications/biomaterial-workshop" element={<BiomaterialWorkshop />} />
              <Route path="/membership/signup" element={<Signup />} />
              <Route path="/membership/login" element={<Login />} />
              <Route path="/membership" element={<MembershipPortal />} />
               <Route path="/membership/faq" element={<FAQ />} />

              {/* Member Pages */}
              <Route path="/member/my-blog" element={<MyBlog />} />
              <Route path="/membership-portal/lab-booking" element={<LabBooking />} />
              <Route path="/members/profile" element={<MemberProfilePage />} />
              <Route path="/members/create-blog" element={<CreateBlogPost />} />
              <Route path="/members/marketplace" element={<MarketplaceMember />} />
              <Route path="/members/forum" element={<Forum />} />
              <Route path="/member/portal" element={<MemberPortal />} />

              {/* Resource Pages */}
              <Route path="/resources/library" element={<ResourceLibrary />} />
              <Route path="/resources/:id" element={<ResourceDetail />} />

              {/* Member Dashboard */}
              <Route path="/dashboard" element={<MemberDashboard />}>
                <Route path="portal" element={<MemberPortal />} />
                <Route path="my-blog" element={<MyBlog />} />
                <Route path="profile" element={<Profile />} />
                <Route path="lab-booking" element={<LabBooking />} />
                <Route path="forum" element={<Forum />} />
                <Route path="create-blog-post" element={<CreateBlogPost />} />
                <Route path="marketplace" element={<MarketplaceMember />} />
                <Route path="resources" element={<ResourceLibrary />} />
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
              <Route path="/admin/programs" element={<AdminPrograms />} />
              <Route path="/admin/photos" element={<AdminPhotos />} />
              <Route path="/admin/gallery" element={<AdminGallery />} />
              <Route path="/admin/programs/artbio" element={<ArtBio />} />
              <Route path="/admin/blog" element={<BlogManager />} />
              <Route path="/admin/membership" element={<MembershipAdmin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AdminProvider>
  );
}

export default App;
