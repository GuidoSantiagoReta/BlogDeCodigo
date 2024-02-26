
import { React, createContext, useState } from 'react';



const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => { },
});

// Componente Proveedor de Tema
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export { ThemeContext, ThemeProvider };