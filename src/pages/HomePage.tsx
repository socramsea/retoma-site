import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import LocationSelector from '../components/LocationSelector';
import Guarantees from '../components/Guarantees';
import Segments from '../components/Segments';
import Administradoras from '../components/Administradoras';
import TipsPreview from '../components/TipsPreview';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-petroleo">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <LocationSelector />
        <Guarantees />
        <Segments />
        <Administradoras />
        <TipsPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
