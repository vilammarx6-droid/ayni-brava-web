import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import ContactCTA from '../components/ContactCTA';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px' }}>
      <AboutSection />
      <ContactCTA />
    </div>
  );
};

export default AboutPage;
