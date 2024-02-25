import React, { useState, useEffect, useContext} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Theme from "../Theme/Theme";
import { ThemeContext } from "../../context/ThemeContextProvider";
import "./Header.css";

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY >  0); 
    };
  
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.paddingTop = isScrolled ? "5px" : "0"; 
  }, [isScrolled]);
  
  return (
    <>
      <nav className={`${isScrolled ? "nav-scrolled" : "nav-default"} ${isDarkMode ? "nav-dark" : ""}`}> 
        <div className="container-nav">
          <div className="brand" onClick={() => navigate('/')}>BlogDeCódigo</div>
        </div>
        <Theme/>
      </nav>
      <div className={`container-section ${isDarkMode ? "dark-mode-header" : ""}`}>
        <div className={`header-section ${isDarkMode ? "dark-mode-header" : ""}`}>
          <h1>Guido Santiago Reta</h1>
          <p>Analista de sistemas | Desarrollador Web | Devops | DevSecOps</p>
        </div>
        <div className="categories" id="categories">
          <Link to="/" className={isActive("/")}>Bio</Link>
          <Link to="/Desarrollo" className={isActive("/Desarrollo")}>Desarrollo Web</Link>
          <Link to="/Scripting" className={isActive("/Scripting")}>Scripting</Link>
          <Link to="/DevSecOps" className={isActive("/DevSecOps")}>DevSecOps</Link>
          <Link to="/Security" className={isActive("/Security")}>Ciberseguridad</Link>
          <Link to="/Testing" className={isActive("/Testing")}>Testing</Link>
          <Link to="/database" className={isActive("/database")}>Bases de datos</Link>
          <Link to="/hardware" className={isActive("/hardware")}>Hardware</Link>
        </div>
      </div>
    </>
  );
};

export default Header;