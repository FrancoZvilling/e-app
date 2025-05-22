import React from 'react';
import './NavbarLogo.css';
import miLogo from '../../assets/logo/mi-logo.png';

const NavbarLogo = () => {
  return (
    <nav className="navbar-logo-container">
      <img src={miLogo} alt="Logo de la Empresa" className="navbar-logo-image" />
    </nav>
  );
};

export default NavbarLogo;