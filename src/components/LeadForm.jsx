import React, { useState } from 'react';
import './LeadForm.css';

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    
    // Submit using fetch to current URL (Netlify Forms way in React)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("Hubo un error. Por favor, intenta de nuevo."));
  };

  if (submitted) {
    return (
      <div className="lead-form-success">
        <span className="success-icon">✓</span>
        <p>¡Gracias! Hemos guardado tu número. Te contactaremos pronto.</p>
      </div>
    );
  }

  return (
    <form 
      className="lead-form-container" 
      name="whatsapp-leads" 
      method="POST" 
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="whatsapp-leads" />
      
      <div className="lead-form-wrapper">
        <label className="lead-label">NÚMERO DE CELULAR PARA WHATSAPP</label>
        
        <div className="lead-input-group">
          <div className="country-prefix">
            <span className="flag">🇵🇪</span>
            <span className="prefix">+51</span>
          </div>
          
          <input 
            type="tel" 
            name="whatsapp" 
            placeholder="912 345 678" 
            pattern="[0-9]{9}"
            maxLength="9"
            required 
            className="lead-input"
          />
          
          <button type="submit" className="lead-submit-btn">
            Cotizar Proyecto
          </button>
        </div>
      </div>
    </form>
  );
};

export default LeadForm;
