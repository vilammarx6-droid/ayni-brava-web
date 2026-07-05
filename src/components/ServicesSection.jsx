import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Calendar, Search, Bot, Wrench, BrainCircuit } from 'lucide-react';
import './ServicesSection.css';
import homeDataBackup from '../content/home.json';
import { useHomeData } from '../sanity/client';

// Map icons from strings to Lucide components
const iconMap = {
  "🌐": <Globe size={28} color="#E08766" />,
  "🛒": <ShoppingCart size={28} color="#E08766" />,
  "📅": <Calendar size={28} color="#E08766" />,
  "📍": <Search size={28} color="#E08766" />,
  "🤖": <Bot size={28} color="#E08766" />,
  "🔧": <Wrench size={28} color="#E08766" />
};

const ServicesSection = () => {
  const { data, loading } = useHomeData();
  const servicesData = data?.servicesList?.length > 0 ? data.servicesList : (homeDataBackup.servicesList || []);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="gradient-text">Nuestras Soluciones</h2>
          <p>Tecnología aplicada para resultados inmediatos.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              id={`service-${index}`}
              className="glass-panel service-card group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon-wrapper">
                {iconMap[service.icon] || <BrainCircuit size={28} color="#E08766" />}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              {/* Decorative nodes */}
              <div className="node node-1"></div>
              <div className="node node-2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
