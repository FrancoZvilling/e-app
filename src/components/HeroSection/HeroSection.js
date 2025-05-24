// src/components/HeroSection/HeroSection.js
import React, { useState, useEffect, useContext, useRef } from 'react';
import './HeroSection.css';
import heroImage from '../../assets/images/E-APP_logo_background.png'; // Asegúrate que esta ruta sea correcta
import { LanguageContext } from '../../contexts/LanguageContext'; // Asumo que este contexto existe y está configurado

const HeroSection = ({ id }) => {
  const { getUIText } = useContext(LanguageContext);
  // Proporcionar un valor predeterminado más robusto si 'heroHeadline' no existe
  const defaultHeadline = "¡Desarrolla tu propia web de forma fácil, rápida y a buen precio con E-APP!";
  const textToDisplay = getUIText('heroHeadline') || defaultHeadline;

  const [currentText, setCurrentText] = useState(textToDisplay);
  const [isVisible, setIsVisible] = useState(true); // Empezar visible
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cuando el texto del idioma cambia desde el contexto, actualizarlo aquí
    setCurrentText(getUIText('heroHeadline') || defaultHeadline);
    setIsVisible(true); // Asegurar que sea visible al cambiar idioma

    // Limpiar cualquier timeout anterior al re-ejecutar el efecto
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Función para el ciclo de aparición/desaparición
    const startAnimationCycle = () => {
        // Permanecer visible por un tiempo
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false); // Iniciar fade-out

            // Después del fade-out, preparar para el fade-in
            timeoutRef.current = setTimeout(() => {
                // Actualizar el texto en caso de que haya cambiado (por idioma)
                // Es importante usar getUIText aquí para obtener el más reciente
                setCurrentText(getUIText('heroHeadline') || defaultHeadline);
                setIsVisible(true); // Iniciar fade-in

                // Programar el próximo ciclo de "visible"
                // Este timeout es para cuánto tiempo permanecerá visible antes de que se repita startAnimationCycle
                timeoutRef.current = setTimeout(startAnimationCycle, 4000); // Texto visible por 4s
            }, 1000); // Duración del fade-out: 1s
        }, 2000); // Texto visible inicialmente (antes del primer fade-out) por 2s
    };

    // Iniciar el ciclo de animación
    startAnimationCycle();

    // Función de limpieza para el useEffect
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // Dependencias del useEffect:
    // getUIText: si la función cambia (poco probable pero posible si el contexto se redefine)
    // No incluir textToDisplay directamente si lo actualizas dentro con getUIText('heroHeadline')
    // porque crearías un bucle si getUIText es estable pero el valor que retorna cambia.
    // Es mejor depender de getUIText y llamar a setCurrentText(getUIText('heroHeadline')) dentro.
  }, [getUIText, defaultHeadline]); // Añadí defaultHeadline a las dependencias por si acaso, aunque es constante.
                                   // Si getUIText('heroHeadline') puede cambiar, la dependencia en getUIText es clave.

  return (
    <section id={id} className="hero-container">
      <img 
        src={heroImage} 
        alt={getUIText('heroImageAlt') || "Imagen de fondo del héroe"} 
        className="hero-image" 
      />
      <div className="hero-overlay"></div>
      <div className="hero-text-content">
        <h1
          className={`hero-title ${isVisible ? 'fade-in-active' : 'fade-out-active'}`}
        >
          {currentText}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;