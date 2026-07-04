import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';
import homeData from '../content/home.json';

const FloatingWhatsApp = () => {
  const { whatsappNumber } = homeData.contact;

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chatear en WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="ping"></span>
    </a>
  );
};

export default FloatingWhatsApp;
