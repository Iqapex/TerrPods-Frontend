import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import JoinSection from '../components/sections/JoinSection';
import NewsletterSignup from '../components/sections/NewsletterSignup';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ProgramsSection />
      <JoinSection />
      <NewsletterSignup />
    </div>
  );
};

export default Home;