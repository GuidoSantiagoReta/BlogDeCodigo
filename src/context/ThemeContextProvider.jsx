
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => { },
});

// Componente Proveedor de Tema
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };pm

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };