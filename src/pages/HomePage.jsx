import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactCTA from '../components/ContactCTA';
import SocialFeed from '../components/SocialFeed';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* Mantenemos un par de secciones en el inicio para que no quede vacía, 
          luego el usuario puede navegar a las versiones detalladas */}
      <ServicesSection />
      <ContactCTA />
      <SocialFeed />
    </>
  );
};

export default HomePage;
