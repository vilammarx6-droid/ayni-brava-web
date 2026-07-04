import React from 'react';
import { MessageCircle } from 'lucide-react';
import './ContactCTA.css';
import homeData from '../content/home.json';

const ContactCTA = () => {
  const { title, description, whatsappNumber } = homeData.contact;

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
