// src/contexts/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';

const YOUR_NAME = "Franco Zvilling"; 

const translations = {
  es: {
    menuHome: 'Inicio',
    menuProjects: 'Proyectos',
    menuInfo: 'Información',
    menuContact: 'Contacto',
    heroHeadline: `¡Desarrolla tu propia web de forma fácil, rápida y a buen precio con E-APP!`,
    heroImageAlt: `Fondo de ${YOUR_NAME} con logo`,
    ariaChangeToLight: "Cambiar a modo claro",
    ariaChangeToDark: "Cambiar a modo oscuro",
    ariaSwitchToEnglish: "Switch to English",
    ariaSwitchToSpanish: "Cambiar a Español",
    altSwitchToEnglish: "Bandera de EEUU - Cambiar a Inglés",
    altSwitchToSpanish: "Bandera Argentina - Cambiar a Español",
    projectsSectionTitle: 'Nuestros Proyectos',
    viewDemoButton: 'Ver Demo',
    processSectionTitle: 'Nuestro Proceso Simplificado',
    contactSectionTitle: 'Ponte en Contacto',
    contactIntro: '¿Tienes una idea o necesitas una cotización? ¡Escríbenos!',
    firstNameLabel: 'Nombre',
    lastNameLabel: 'Apellido',
    messageLabel: 'Tu Mensaje',
    senderEmailLabel: 'Tu Email (para que podamos responderte)',
    sendWhatsAppButton: 'Enviar por WhatsApp',
    sendEmailButton: 'Enviar por Email',
    submitEmailButton: 'Confirmar y Abrir Email',
    requiredFieldText: 'Este campo es requerido',
    invalidEmailText: 'Por favor, ingresa un email válido',
    emailSubject: 'Consulta desde el Sitio Web', // Asunto general
    emailSubjectContactForm: `Nueva consulta web de E-APP`, // <<--- NUEVA CLAVE (puedes personalizar el texto)
    contactOrDirectly: 'O contáctame directamente:',
    contactChatOnWhatsApp: 'Chatea por WhatsApp',
    footerCopyright: `© ${new Date().getFullYear()} E-APP. Todos los derechos reservados.`,
    footerMadeWith: `Diseñado y desarrollado por ${YOUR_NAME}.`,
    footerDescription: `Especialista en desarrollo web para potenciar tu presencia online.`,
    footerQuickLinks: 'Enlaces Rápidos',
    footerContactInfo: 'Información de Contacto',
  },
  en: {
    menuHome: 'Home',
    menuProjects: 'Projects',
    menuInfo: 'Our Process',
    menuContact: 'Contact',
    heroHeadline: `Develop your own website easily, quickly, and affordably with E-APP!`,
    heroImageAlt: `${YOUR_NAME} logo background`,
    ariaChangeToLight: "Switch to light mode",
    ariaChangeToDark: "Switch to dark mode",
    ariaSwitchToEnglish: "Switch to English",
    ariaSwitchToSpanish: "View in Spanish",
    altSwitchToEnglish: "US Flag - Switch to English",
    altSwitchToSpanish: "Argentina Flag - Switch to Spanish",
    projectsSectionTitle: 'Our Projects',
    viewDemoButton: 'View Demo',
    processSectionTitle: 'Our Simplified Process',
    contactSectionTitle: 'Get in Touch',
    contactIntro: 'Have an idea or need a quote? Write to us!',
    firstNameLabel: 'First Name',
    lastNameLabel: 'Last Name',
    messageLabel: 'Your Message',
    senderEmailLabel: 'Your Email (so we can reply)',
    sendWhatsAppButton: 'Send via WhatsApp',
    sendEmailButton: 'Send via Email',
    submitEmailButton: 'Confirm and Open Email',
    requiredFieldText: 'This field is required',
    invalidEmailText: 'Please enter a valid email',
    emailSubject: 'Inquiry from Website', // General subject
    emailSubjectContactForm: `New E-APP Web Inquiry`, // <<--- NUEVA CLAVE (puedes personalizar el texto)
    contactOrDirectly: 'Or contact me directly:',
    contactChatOnWhatsApp: 'Chat on WhatsApp',
    footerCopyright: `© ${new Date().getFullYear()} E-APP. All rights reserved.`,
    footerMadeWith: `Designed & Developed by ${YOUR_NAME}.`,
    footerDescription: `Web development specialist to boost your online presence.`,
    footerQuickLinks: 'Quick Links',
    footerContactInfo: 'Contact Info',
  },
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        const parsedLang = JSON.parse(savedLang);
        if (translations[parsedLang]) {
          return parsedLang;
        }
      }
    } catch (error) {
      console.warn("Error al leer el idioma de localStorage:", error);
    }
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'es';
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', JSON.stringify(currentLang));
    } catch (error) {
      console.warn("Error al guardar el idioma en localStorage:", error);
    }
  }, [currentLang]);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setCurrentLang(lang);
    } else {
      console.warn(`Idioma '${lang}' no encontrado. Manteniendo '${currentLang}'.`);
    }
  };

  const getUIText = (key, fallbackText = '') => {
    const text = translations[currentLang]?.[key];
    if (text === undefined) {
      return fallbackText || key; 
    }
    return text;
  };
  

  const contextValue = {
    currentLang,
    changeLanguage,
    getUIText,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};