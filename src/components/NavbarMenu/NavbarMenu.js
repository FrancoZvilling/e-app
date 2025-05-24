import React, { useContext, useState, useEffect, useRef } from 'react';
import './NavbarMenu.css';
import { FaSun, FaMoon, FaHome, FaBars, FaTimes } from 'react-icons/fa'; // Importar FaBars, FaTimes
import BanderaAR from '../../assets/logo/bandera-ar.svg';
import BanderaUS from '../../assets/logo/bandera-us.svg';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const NavbarMenu = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { currentLang, changeLanguage, getUIText } = useContext(LanguageContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuContainerRef = useRef(null); // Ref para el contenedor del navbar

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Considerar la altura de los navbars fijos si es necesario
      // const navbarHeight = document.querySelector('.navbar-menu-container')?.offsetHeight || 0;
      // const offsetPosition = section.offsetTop - navbarHeight;
      // window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Cerrar menú móvil después de hacer clic
    }
  };

  const handleToggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Efecto para cerrar el menú si se hace clic fuera de él en móvil
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el menú está abierto y el clic es fuera del contenedor del menú
      if (isMobileMenuOpen && menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Limpiar el event listener al desmontar el componente o cuando el menú se cierra
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Dependencia: se ejecuta cuando isMobileMenuOpen cambia

  const menuTexts = {
    home: getUIText('menuHome', 'Inicio'),
    projects: getUIText('menuProjects', 'Proyectos'),
    info: getUIText('menuInfo', 'Información'),
    contact: getUIText('menuContact', 'Contacto'),
    ariaCloseMenu: getUIText('ariaCloseMenu', 'Cerrar menú'),
    ariaOpenMenu: getUIText('ariaOpenMenu', 'Abrir menú'),
  };

  return (
    <nav className="navbar-menu-container" ref={menuContainerRef}>
      {/* Botón Hamburguesa - visible solo en móvil */}
      <button
        className="hamburger-button"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? menuTexts.ariaCloseMenu : menuTexts.ariaOpenMenu}
        aria-expanded={isMobileMenuOpen} // Indica si el menú está expandido
        aria-controls="navbar-menu-list-mobile" // Asocia el botón con la lista de menú
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul
        id="navbar-menu-list-mobile" // ID para aria-controls
        className={`navbar-menu-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}
      >
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
          className="theme-toggle-button util-button"
          aria-label={isDarkMode ? getUIText('ariaChangeToLight', "Cambiar a modo claro") : getUIText('ariaChangeToDark', "Cambiar a modo oscuro")}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={handleToggleLanguage}
          className="lang-toggle-button util-button"
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