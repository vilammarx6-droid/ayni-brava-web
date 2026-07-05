import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronDown } from 'lucide-react';
import './Navbar.css';
import { useHomeData } from '../sanity/client';

const defaultNavData = [
  {
    label: '¿Qué Hacemos?', url: '/servicios', isVisible: true, isPronto: false, 
    dropdownItems: [
      { label: 'Webs Corporativas', url: '/servicios#service-0' },
      { label: 'Tiendas Online', url: '/servicios#service-1' },
      { label: 'Sistemas de Reserva', url: '/servicios#service-2' },
      { label: 'SEO Local', url: '/servicios#service-3' },
      { label: 'Misión y Visión', url: '/nosotros' }
    ]
  },
  { label: 'Agencia de IA', url: '/nosotros', isVisible: true, isPronto: true },
  { label: 'Blog', url: '/', isVisible: true, isPronto: true }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // store index of open dropdown
  const { data, loading } = useHomeData();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setHidden(true);
        setDropdownOpen(null); // Close dropdown on scroll down
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToService = (e, targetUrl) => {
    // If it's a hash link to the current page (e.g., /servicios#service-0)
    if (targetUrl.includes('#') && window.location.pathname === targetUrl.split('#')[0]) {
      e.preventDefault();
      const id = targetUrl.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setDropdownOpen(null);
      }
    }
  };

  // Filter out items that are explicitly hidden or have no label
  const validNavItems = data?.navItems?.filter(item => item.label && item.isVisible !== false) || [];
  
  // Use Sanity items only if there's at least one valid item, otherwise use defaults
  const navItems = validNavItems.length > 0 ? validNavItems : defaultNavData;
  const ctaText = data?.navCtaText || 'Cotizar Gratis';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="container nav-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/logo.png" alt="Ayni Brava" className="nav-logo" />
          </Link>
        </div>
        <ul className="nav-links">
          {navItems.filter(item => item.isVisible !== false).map((item, index) => (
            <li 
              key={index}
              className={item.dropdownItems && item.dropdownItems.length > 0 ? "dropdown" : ""}
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link to={item.url || '/'} className={item.isPronto ? 'nav-inactive' : ''}>
                {item.label} 
                {item.dropdownItems && item.dropdownItems.length > 0 && <ChevronDown size={16} />}
                {item.isPronto && <span className="badge">Pronto</span>}
              </Link>
              
              {item.dropdownItems && item.dropdownItems.length > 0 && dropdownOpen === index && (
                <div className="dropdown-menu">
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex} 
                      to={subItem.url || '/'} 
                      onClick={(e) => scrollToService(e, subItem.url || '')}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <Link to="/contacto" className="btn btn-primary nav-btn">
          <FileText size={18} style={{marginRight: '8px'}} /> {ctaText}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
