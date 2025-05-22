// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme !== null) {
        // Intentamos parsear. Si falla, podría ser una cadena no booleana.
        // O podría ser un booleano 'true'/'false' como string que JSON.parse maneja bien.
        const parsedTheme = JSON.parse(savedTheme);
        if (typeof parsedTheme === 'boolean') {
          return parsedTheme;
        }
        // Si no es un booleano después de parsear (raro si siempre guardamos booleano),
        // o si el parseo falla y savedTheme era algo como "light" (lo cual es el error actual),
        // podríamos intentar convertirlo o caer en el default.
        // Para el error específico "Unexpected token 'l', "light" is not valid JSON",
        // significa que savedTheme era "light".
        // En este caso, es mejor caer en el valor por defecto o intentar una conversión si es "true" o "false".
        // Como estamos guardando booleanos, el parseo debería funcionar si se guardó correctamente.
        // El problema surge si se guardó "light" o "dark" directamente.
      }
      // Si no hay nada guardado o el valor guardado no es un booleano válido, usar la preferencia del sistema.
      return prefersDark;

    } catch (error) {
      // Si JSON.parse falla (como en tu caso con "light"),
      // o si localStorage no está disponible.
      console.warn("Error al leer el tema de localStorage o valor inválido, usando preferencia del sistema:", error);
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Siempre guardamos un booleano como string
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const contextValue = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};