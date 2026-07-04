import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111A46', color: 'rgba(255,255,255,0.7)', padding: '2rem 0', textAlign: 'center' }}>
      <div className="container">
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>AYNI BRAVA</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>
          Mando y Tecnología en Chumbivilcas.<br/>
          © {new Date().getFullYear()} Ayni Brava. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
