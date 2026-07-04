import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import './App.css';

// Layout component to keep Navbar and Footer together
function MainLayout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        {children}
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

function App() {
  // Evitar conflictos entre el Router de Sanity y el Router de la página principal
  if (window.location.pathname.startsWith('/admin')) {
    return <AdminPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/servicios" element={<MainLayout><ServicesPage /></MainLayout>} />
        <Route path="/nosotros" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/contacto" element={<MainLayout><ContactPage /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
