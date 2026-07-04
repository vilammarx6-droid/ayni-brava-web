import React, { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import ContactCTA from '../components/ContactCTA';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px' }}>
      <ServicesSection />
      <ContactCTA />
    </div>
  );
};

export default ServicesPage;
