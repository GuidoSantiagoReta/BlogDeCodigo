import React, { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContextProvider';
import './Theme.css'; 

function Theme() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`theme-button ${isDarkMode ? 'dark' : ''}`}
      onClick={toggleTheme} // Corregido aquí
    >
      {isDarkMode ? <FiSun size={30} /> : <FiMoon size={30} />}
    </button>
  );
}

export default Theme;