import  { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContextProvider';
import './Theme.css';

function Theme() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`theme-button ${isDarkMode ? 'dark' : ''}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? <FiSun className='sun' /> : <FiMoon className='moon' />}
    </button>
  );
}

export default Theme;