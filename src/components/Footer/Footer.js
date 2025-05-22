import React, { useContext } from 'react';
import './Footer.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

// TUS DATOS
const MY_EMAIL = "francozvilling-programador@hotmail.com";
// Solo necesitamos el número para el enlace. El formato de visualización puede ser el mismo o diferente.
const WHATSAPP_LINK_NUMBER = "543541315119"; // <<--- ASEGÚRATE QUE ESTE ES TU NÚMERO CORRECTO para el enlace wa.me
const WHATSAPP_DISPLAY_NUMBER = "+54 3541 31-5119"; // <<--- NÚMERO PARA MOSTRAR (puedes ajustarlo como prefieras)
const MY_INSTAGRAM_USERNAME = "e_appweb"; // Corregido para que coincida con el enlace de abajo
const MY_LOCATION = {
    es: "Cosquín, Córdoba, Argentina",
    en: "Cosquín, Córdoba, Argentina",
};
const MY_COMPANY_NAME = "E-APP";

const Footer = () => {
  const { getUIText, currentLang } = useContext(LanguageContext);
  
  const locationText = MY_LOCATION[currentLang] || MY_LOCATION.es;
  
  const copyrightText = getUIText('footerCopyright'); 
  const madeWithText = getUIText('footerMadeWith');
  const footerDescriptionText = getUIText('footerDescription');
  const quickLinksTitle = getUIText('footerQuickLinks', 'Enlaces Rápidos');
  const contactInfoTitle = getUIText('footerContactInfo', 'Contacto');
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-column footer-about">
          <h4 className="footer-brand-text">{MY_COMPANY_NAME}</h4>
          <p className="footer-company-description">
            {footerDescriptionText}
          </p>
        </div>

        <div className="footer-column footer-links">
          <h4>{quickLinksTitle}</h4>
          <ul>
            {/* Asegúrate que el id 'inicio' existe en tu App.js (HeroSection tiene id="inicio") */}
            <li><button onClick={() => scrollToSection('inicio')}>{getUIText('menuHome', 'Inicio')}</button></li>
            <li><button onClick={() => scrollToSection('proyectos')}>{getUIText('menuProjects', 'Proyectos')}</button></li>
            <li><button onClick={() => scrollToSection('informacion')}>{getUIText('menuInfo', 'Información')}</button></li>
            <li><button onClick={() => scrollToSection('contacto')}>{getUIText('menuContact', 'Contacto')}</button></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>{contactInfoTitle}</h4>
          <ul>
            <li>
              <a href={`mailto:${MY_EMAIL}`}>
                <FaEnvelope /> <span>{MY_EMAIL}</span>
              </a>
            </li>
            <li>
              {/* Usamos WHATSAPP_LINK_NUMBER para el href y WHATSAPP_DISPLAY_NUMBER para el texto */}
              <a href={`https://wa.me/${WHATSAPP_LINK_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> <span>{WHATSAPP_DISPLAY_NUMBER}</span>
              </a>
            </li>
            <li>
              {/* Corregido el enlace de Instagram para que use el username directamente */}
              <a href={`https://www.instagram.com/${MY_INSTAGRAM_USERNAME}/`} target="_blank" rel="noopener noreferrer">
                <FaInstagram /> <span>@{MY_INSTAGRAM_USERNAME}</span>
              </a>
            </li>
            <li>
              <FaMapMarkerAlt /> <span>{locationText}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{copyrightText}</p>
        <p>{madeWithText}</p>
      </div>
    </footer>
  );
};

export default Footer;