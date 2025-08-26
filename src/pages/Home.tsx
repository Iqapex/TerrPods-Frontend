import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import TeamSection from '../components/sections/TeamSection';
import JoinSection from '../components/sections/JoinSection';
import NewsletterSignup from '../components/sections/NewsletterSignup';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ProgramsSection />
      <TeamSection />
      <JoinSection />
      <NewsletterSignup />
    </div>
  );
};

export default Home;