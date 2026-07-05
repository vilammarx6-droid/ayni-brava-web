import React from 'react';
import { Facebook } from 'lucide-react';
import { useHomeData } from '../sanity/client';
import homeDataBackup from '../content/home.json';

// Custom TikTok SVG since Lucide might not have it
const TikTokIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const { data } = useHomeData();
  const facebookUrl = data?.facebookUrl || homeDataBackup.contact.facebookUrl;
  const tiktokUrl = data?.tiktokUrl || homeDataBackup.contact.tiktokUrl;

  return (
    <footer style={{ backgroundColor: '#111A46', color: 'rgba(255,255,255,0.7)', padding: '3rem 0', textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem', letterSpacing: '2px' }}>AYNI BRAVA</h3>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          {facebookUrl && (
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'color 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <Facebook size={20} />
            </a>
          )}
          {tiktokUrl && (
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'color 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <TikTokIcon size={20} />
            </a>
          )}
        </div>

        <p style={{ fontSize: '0.9rem', margin: 0, opacity: 0.8 }}>
          Mando y Tecnología en Chumbivilcas.<br/>
          © {new Date().getFullYear()} Ayni Brava. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
