import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';
import LeadForm from './LeadForm';
import homeData from '../content/home.json';

const HeroSection = () => {
  const { title, subtitle } = homeData.hero;
  const [typedText, setTypedText] = useState('');

  // AI Typing Effect
  useEffect(() => {
    let currentText = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i < subtitle.length) {
        currentText += subtitle.charAt(i);
        setTypedText(currentText);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [subtitle]);

  return (
    <section className="hero">
      {/* Pure CSS AI Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="badge-ai">IA Local & Optimización</div>
          <h1 className="gradient-text">{title}</h1>
          <p className="hero-subtitle">
            <span className="typing-effect">{typedText}</span>
            <span className="cursor"></span>
          </p>
          <div className="hero-buttons">
            <LeadForm />
          </div>
        </div>
        
        <div className="hero-graphic bento-grid">
          <div className="bento-item bento-1">
            <img src="/images/bento_1.png" alt="AI Brain" />
          </div>
          <div className="bento-item bento-2">
            <img src="/images/bento_2.png" alt="Modern Tech" />
          </div>
          <div className="bento-item bento-3">
            <img src="/images/bento_3.png" alt="Network Nodes" />
          </div>
          <div className="bento-item bento-4">
             <img src="/logo.png" alt="Ayni Brava Logo" className="hero-logo-small" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
