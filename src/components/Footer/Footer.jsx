import React, { useContext } from 'react';
import './Footer.css';
import { SiGmail, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import Theme from "../Theme/Theme";
import { ThemeContext } from "../../context/ThemeContextProvider";


const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <footer className={`${isDarkMode ? "dark-mode-footer" : ""}`}>
        <div className="container-footer">
          <div className="contact-section">
            <h2>Contacto</h2>
            <div className="social-icons">
              <a href="mailto:guidosantiagoreta@gmail.com" target="_blank" rel="noopener noreferrer">
                <SiGmail />
              </a>
              <a href="https://www.linkedin.com/in/guido-reta" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.github.com/GuidoSantiagoReta" target="_blank" rel="noopener noreferrer">
                <SiGithub />
              </a>
            </div>
          </div>
          <div className={`developer-info{${isDarkMode ? "dark-mode-footer" : ""}`}>
            <p>Desarrollado por Guido Santiago Reta &copy; 2024</p>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;