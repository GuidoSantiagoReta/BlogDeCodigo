import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Theme.css'; 

function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
    // lógica 
  };

  return (
    <button
      className={`theme-button ${isDarkMode ? 'dark' : ''}`}
      onClick={handleModeChange}
    >
      {isDarkMode ? <FiSun size={30} /> : <FiMoon size={30} />}
    </button>
  );
}

export default Theme;