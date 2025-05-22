import React, { useContext } from 'react'; // No necesitamos useState aquí si todo viene de Context
import './NavbarMenu.css';
import { FaSun, FaMoon, FaHome } from 'react-icons/fa'; // Importar FaHome
import BanderaAR from '../../assets/logo/bandera-ar.svg';
import BanderaUS from '../../assets/logo/bandera-us.svg';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const NavbarMenu = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { currentLang, changeLanguage, getUIText } = useContext(LanguageContext);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Para el scroll, 'start' asegura que la parte superior de la sección sea visible.
      // Si los navbars son sticky y tienen altura, esto podría ser cubierto.
      // Una solución más robusta para sticky headers es calcular su altura y hacer un offset.
      // Por ahora, 'start' es un buen comienzo.
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  };

  // Usamos getUIText para los textos del menú
  const menuTexts = {
    home: getUIText('menuHome', 'Inicio'), // Valor por defecto si no se encuentra la clave
    projects: getUIText('menuProjects', 'Proyectos'),
    info: getUIText('menuInfo', 'Información'),
    contact: getUIText('menuContact', 'Contacto'),
  };

  return (
    <nav className="navbar-menu-container">
      <ul className="navbar-menu-list">
        <li>
          <button onClick={() => scrollToSection('inicio')} className="nav-button">
            <FaHome className="nav-icon" /> {menuTexts.home}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('proyectos')} className="nav-button">
            {menuTexts.projects}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('informacion')} className="nav-button">
            {menuTexts.info}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contacto')} className="nav-button">
            {menuTexts.contact}
          </button>
        </li>
      </ul>
      <div className="navbar-menu-utils">
        <button
          onClick={toggleTheme}
          className="theme-toggle-button"
          aria-label={isDarkMode ? getUIText('ariaChangeToLight', "Cambiar a modo claro") : getUIText('ariaChangeToDark', "Cambiar a modo oscuro")}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={handleToggleLanguage}
          className="lang-toggle-button"
          aria-label={currentLang === 'es' ? getUIText('ariaSwitchToEnglish', "Switch to English") : getUIText('ariaSwitchToSpanish', "Cambiar a Español")}
        >
          {currentLang === 'es' ? (
            <img src={BanderaUS} alt={getUIText('altSwitchToEnglish', "Switch to English")} className="flag-icon" />
          ) : (
            <img src={BanderaAR} alt={getUIText('altSwitchToSpanish', "Cambiar a Español")} className="flag-icon" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavbarMenu;