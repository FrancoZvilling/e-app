// src/components/HeroSection/HeroSection.js (Alternativa - Fade In/Out)
import React, { useState, useEffect, useContext, useRef } from 'react';
import './HeroSection.css'; // Asegúrate de tener estilos para 'fade-in' y 'fade-out'
import heroImage from '../../assets/images/E-APP_logo_background.png';
import { LanguageContext } from '../../contexts/LanguageContext';

const HeroSection = ({ id }) => {
  const { getUIText } = useContext(LanguageContext);
  const textToDisplay = getUIText('heroHeadline', "¡Desarrolla tu propia web de forma fácil, rápida y a buen precio con E-APP!");

  const [currentText, setCurrentText] = useState(textToDisplay);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cuando el texto del idioma cambia, actualizar inmediatamente y hacerlo visible
    setCurrentText(textToDisplay);
    setIsVisible(true);

    // Reiniciar el ciclo de fade
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const cycle = () => {
      setIsVisible(false); // Comienza el fade out
      timeoutRef.current = setTimeout(() => {
        // Aquí podrías alternar entre varios mensajes si quisieras
        // Por ahora, solo reaparece el mismo.
        setCurrentText(textToDisplay); // Asegurar que es el texto actual (por si cambia el idioma durante el timeout)
        setIsVisible(true); // Comienza el fade in

        timeoutRef.current = setTimeout(cycle, 6000); // Tiempo total del ciclo (ej: 1s fade-out + 4s visible + 1s fade-in)
                                                     // Ajustar este valor y el de la espera.
      }, 1000); // Tiempo para que el fade-out ocurra (1s) + tiempo invisible (ej. 0.5s) = 1500ms
                 // Aquí lo haremos: 1s fade-out, luego 4s visible, luego se repite.
                 // El ciclo es: visible -> fade-out -> (cambia texto si es necesario) -> fade-in
    };
    
    // Iniciar el primer ciclo después de un momento para que el texto inicial sea visible
    // Y luego cada 5 segundos se hace fade out y fade in.
    // Mejor:
    // 1. Mostrar texto.
    // 2. Después de 4 segundos, fade out.
    // 3. Después de 1 segundo (fade out completo), fade in con el (posiblemente nuevo) texto.
    // 4. Repetir.

    const startCycle = () => {
        setIsVisible(true); // Asegurar que es visible
        timeoutRef.current = setTimeout(() => { // Tiempo que permanece visible
            setIsVisible(false); // Iniciar fade-out
            timeoutRef.current = setTimeout(() => { // Tiempo para el fade-out y preparación del fade-in
                setCurrentText(getUIText('heroHeadline')); // Obtener el texto más reciente
                setIsVisible(true); // Iniciar fade-in
                timeoutRef.current = setTimeout(startCycle, 4000); // Volver a iniciar el ciclo de "visible"
            }, 1000); // Duración del fade-out
        }, 2000); // Cuánto tiempo está visible antes de desvanecerse
    };

    startCycle();


    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [textToDisplay, getUIText]); // Depender del texto y de getUIText para actualizar si el idioma cambia

  return (
    <section id={id} className="hero-container">
      <img src={heroImage} alt={getUIText('heroImageAlt')} className="hero-image" />
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