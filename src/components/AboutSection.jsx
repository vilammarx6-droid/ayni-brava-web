import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';
import './AboutSection.css';
import homeDataBackup from '../content/home.json';
import { useHomeData } from '../sanity/client';

const AboutSection = () => {
  const { data, loading } = useHomeData();
  const mission = data?.aboutMission || homeDataBackup.about.mission;
  const { vision, image } = homeDataBackup.about;

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div 
          className="text-center section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">Eje de Operaciones</h2>
          <p>Descentralizando la tecnología para la realidad de nuestra región.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="glass-panel about-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="icon-glow-container">
              <Target size={32} color="#E08766" />
            </div>
            <h3 className="card-title">Nuestra Misión</h3>
            <p className="card-text">{mission}</p>
          </motion.div>

          <motion.div 
            className="glass-panel about-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="icon-glow-container">
              <Lightbulb size={32} color="#E08766" />
            </div>
            <h3 className="card-title">Nuestra Visión</h3>
            <p className="card-text">{vision}</p>
          </motion.div>
        </div>

        {/* Layout for Image and Focus Cards */}
        <div className="focus-grid">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={image} alt="Docentes usando tecnología rural" />
          </motion.div>

          <div className="focus-cards-container">
            <motion.div 
              className="glass-panel focus-card do-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="focus-title"><span className="text-green">■</span> Qué Hacemos</h3>
              <ul className="focus-list">
                <li><strong>Transformación práctica:</strong> Automatizamos el trabajo pesado.</li>
                <li><strong>Optimizar recursos:</strong> IA en celulares y sistemas offline.</li>
                <li><strong>Eliminar caos:</strong> Horas de papeleo en segundos.</li>
              </ul>
            </motion.div>

            <motion.div 
              className="glass-panel focus-card dont-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="focus-title"><span className="text-red">■</span> Qué No Hacemos</h3>
              <ul className="focus-list">
                <li><strong>Cero teoría:</strong> Solo herramientas que resuelven problemas hoy.</li>
                <li><strong>Cero requisitos caros:</strong> Sin gastar excesivos datos móviles.</li>
                <li><strong>Cero humo:</strong> Excluimos soluciones inaplicables al entorno local.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
