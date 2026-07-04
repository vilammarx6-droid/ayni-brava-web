import React from 'react';
import { MessageCircle } from 'lucide-react';
import './ContactCTA.css';
import homeDataBackup from '../content/home.json';
import { useHomeData } from '../sanity/client';

const ContactCTA = () => {
  const { data, loading } = useHomeData();
  const whatsappNumber = data?.whatsappNumber || homeDataBackup.contact.whatsappNumber;
  const title = data?.contactTitle || homeDataBackup.contact.title;
  const description = data?.contactDescription || homeDataBackup.contact.description;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="cta-box glass-panel text-center">
          <div className="glow-bg"></div>
          <h2 className="gradient-text">{title}</h2>
          <p className="cta-desc">{description}</p>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary whatsapp-btn">
            <MessageCircle size={20} style={{marginRight: '10px'}} />
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
