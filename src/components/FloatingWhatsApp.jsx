import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';
import homeDataBackup from '../content/home.json';
import { useHomeData } from '../sanity/client';

const FloatingWhatsApp = () => {
  const { data, loading } = useHomeData();
  const whatsappNumber = data?.whatsappNumber || homeDataBackup.contact.whatsappNumber;

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
