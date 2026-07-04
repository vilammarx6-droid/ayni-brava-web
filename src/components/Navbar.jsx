import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/logo.png" alt="Ayni Brava" className="nav-logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li 
            className="dropdown" 
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/servicios">¿Qué Hacemos? <ChevronDown size={16} /></Link>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/servicios">Webs Corporativas</Link>
                <Link to="/servicios">Tiendas Online</Link>
                <Link to="/servicios">Sistemas de Reserva</Link>
                <Link to="/servicios">SEO Local</Link>
                <Link to="/nosotros">Misión y Visión</Link>
              </div>
            )}
          </li>
          <li><Link to="/nosotros" className="nav-inactive">Agencia de IA <span className="badge">Pronto</span></Link></li>
          <li><Link to="/" className="nav-inactive">Blog <span className="badge">Pronto</span></Link></li>
        </ul>
        <Link to="/contacto" className="btn btn-primary nav-btn">
          <FileText size={18} style={{marginRight: '8px'}} /> Cotizar Gratis
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
