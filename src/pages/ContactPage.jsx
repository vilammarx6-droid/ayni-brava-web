import React, { useEffect } from 'react';
import ContactCTA from '../components/ContactCTA';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="container" style={{ paddingBottom: '4rem', textAlign: 'center' }}>
        <h1 className="gradient-text">Hablemos de tu Proyecto</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Déjanos tu mensaje y nuestro equipo de expertos se comunicará contigo a la brevedad para ofrecerte una solución a medida.
        </p>
      </div>
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
