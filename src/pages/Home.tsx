import './Home.css';
import { HeroSection } from '../components/HeroSection';
import { TrustBar } from '../components/TrustBar';
import { AboutSection } from '../components/AboutSection';
import { CapabilitiesSection, SOCSection, ProductsSection, CTASection } from '../components/LowerSections';
import { useMeta } from '../lib/useMeta';

const Home = () => {
  useMeta({
    title: 'Digital Trust & AI Governance',
    description: 'The ancient art of the Firewatch applied to the digital age. Digital trust frameworks and AI governance for organizations navigating enterprise technology globally.'
  });
  return (
    <div className="home">
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <CapabilitiesSection />
      <SOCSection />
      <ProductsSection />
      <CTASection />
    </div>
  );
};

export default Home;
