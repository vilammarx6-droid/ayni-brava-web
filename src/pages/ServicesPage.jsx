import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
import './ServicesPage.css';
import { useHomeData } from '../sanity/client';
import homeDataBackup from '../content/home.json';

// Images
import imgCorporate from '../assets/images/corporate_web.png';
import imgEcommerce from '../assets/images/ecommerce_store.png';
import imgBooking from '../assets/images/booking_system.png';
import imgSeo from '../assets/images/seo_analytics.png';

const ServicesPage = () => {
  const { data } = useHomeData();
  const servicesData = data?.servicesList?.length > 0 ? data.servicesList : (homeDataBackup.servicesList || []);
  const phoneNumber = data?.whatsappNumber || "51999999999";

  // Assign rich images to services
  const images = [
    imgCorporate,
    imgEcommerce,
    imgBooking,
    imgSeo,
    imgCorporate, // Fallback for WhatsApp AI
    imgSeo        // Fallback for Support
  ];

  const getFeaturesList = (index) => {
    const lists = [
      ["Diseño hiperrealista y moderno", "Optimización extrema de velocidad", "Estructura pensada para captar clientes"],
      ["Panel de control fácil de usar", "Pasarelas de pago integradas", "Control de inventario automatizado"],
      ["Sincronización con Google Calendar", "Recordatorios automáticos por WhatsApp", "Interfaz amigable para tus clientes"],
      ["Posicionamiento orgánico en Google", "Mapas interactivos de tu negocio", "Análisis de palabras clave de tu sector"],
      ["Respuestas automáticas 24/7", "Asistente inteligente con ChatGPT", "Redirección a humanos cuando es necesario"],
      ["Acompañamiento tecnológico continuo", "Actualizaciones de seguridad", "Capacitaciones para tu equipo"]
    ];
    return lists[index] || lists[0];
  };

  const handleQuoteClick = (serviceName) => {
    const message = `Hola Ayni Brava, estoy interesado en el servicio de: ${serviceName}. ¿Podemos agendar una reunión?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="services-page-container">
      <div className="services-hero">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-text"
        >
          Catálogo de Soluciones
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          No solo creamos páginas, construimos sistemas de ventas de alta ingeniería.
        </motion.p>
      </div>

      <div className="service-catalog">
        {servicesData.map((service, index) => (
          <div key={index} id={`service-${index}`} className="catalog-section">
            <div className="catalog-glow"></div>
            
            <motion.div 
              className="catalog-content"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="catalog-title">{service.title}</h2>
              <p className="catalog-desc">{service.description}</p>
              
              <ul className="catalog-features">
                {getFeaturesList(index).map((feature, fIndex) => (
                  <li key={fIndex}>
                    <CheckCircle2 size={20} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleQuoteClick(service.title)}
                className="catalog-btn"
              >
                <MessageSquare size={20} />
                Cotizar este sistema
              </button>
            </motion.div>

            <motion.div 
              className="catalog-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={images[index]} 
                alt={service.title} 
                className="catalog-image"
                loading="lazy"
              />
            </motion.div>
          </div>
        ))}
      </div>

      <ContactCTA />
    </div>
  );
};

export default ServicesPage;
