import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingAIBot.css';

const FloatingAIBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="floating-bot-container">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="chatbot-window glass-panel"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="chatbot-header">
                <div className="chatbot-title">
                  <Bot size={20} />
                  <span>AyniBot AI</span>
                </div>
                <button className="close-bot-btn" onClick={() => setIsOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="chatbot-iframe-container">
                <iframe 
                  src="https://optifiber-bot-nansjpmb8nw9bdpqk52nsb.streamlit.app/?embed=true" 
                  title="AyniBot Assistant"
                  className="chatbot-iframe"
                  allow="microphone"
                ></iframe>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
          className={`floating-bot-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <Bot size={28} />}
        </motion.button>
      </div>
    </>
  );
};

export default FloatingAIBot;
