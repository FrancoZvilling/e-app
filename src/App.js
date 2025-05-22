// src/App.js
import React from 'react';
import './App.css';
// No importamos NavbarLogo porque decidimos no usarlo
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import HeroSection from './components/HeroSection/HeroSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ProcessSection from './components/ProcessSection/ProcessSection'; // <-- IMPORTAR NUEVO COMPONENTE
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          {/* NavbarLogo ya no se renderiza aquí */}
          <NavbarMenu />
          <HeroSection id="inicio" /> {/* El id "inicio" es para el enlace del menú "Home/Inicio" */}
          <ProjectsSection id="proyectos" />
          
          {/* REEMPLAZAR EL PLACEHOLDER CON EL NUEVO COMPONENTE */}
          <ProcessSection id="informacion" /> {/* El id "informacion" es para el enlace del menú "Información/Our Process" */}

          <ContactSection id="contacto" />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
