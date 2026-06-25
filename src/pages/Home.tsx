import { useTranslation } from 'react-i18next';
import './Home.css';
import { HeroSection } from '../components/HeroSection';
import { TrustBar } from '../components/TrustBar';
import { AboutSection } from '../components/AboutSection';
import { CapabilitiesSection, SOCSection, ProductsSection, CTASection } from '../components/LowerSections';
import { useMeta } from '../lib/useMeta';

const Home = () => {
  const { t } = useTranslation('home');
  useMeta({
    title: t('meta_title'),
    description: t('meta_desc'),
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
