import React, { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import ContactCTA from '../components/ContactCTA';

const ServicesPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      // Timeout needed to wait for framer-motion layout
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div style={{ paddingTop: '120px' }}>
      <ServicesSection />
      <ContactCTA />
    </div>
  );
};

export default ServicesPage;
