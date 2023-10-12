import React, { createContext, useState } from 'react';

const ThemeContext = createContext(false); // Crea el contexto


const themes = {
  light: {
    background: 'white',
    color: 'black',
  },
  dark: {
    background: 'black',
    color: 'white',
  },
};

const themesCards = {
  false: {
    background: 'white',
  },
  true: {
    background: '#96a2b8',
  },
};



const ThemeProvider = ({ children }) => {
  // Defino el estado o valores que quiero compartir:
 /*  const [isDarkMode, setDarkMode] = useState(true); */
 const [theme, setTheme] = useState('light');
 const [themesCards, setThemeCards] = useState(false);
 
  const cambioTema = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    console.log('este es el Theme de mi cambio tema: ', theme);
    setThemeCards((prevThemesCards) => (prevThemesCards === false ? true: false));
    console.log('este es el themeCards:  ', themesCards);
  };

  return (
    <ThemeContext.Provider value={{ theme, themesCards, cambioTema }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, themes, themesCards  }; // Exporto el contexto y el proveedor.
