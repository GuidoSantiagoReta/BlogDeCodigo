import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Theme from "../Theme/Theme";
import "./Header.css";

const Header = () => {
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
      <nav className={isScrolled ? "nav-scrolled" : "nav-default"}>
        <div className="container-nav">
          <div className="brand" onClick={() => navigate('/')}>BlogDeCódigo</div>
        </div>
      </nav>
      <div className="container-section">
        <div className="header-section">
          <h1>Guido Santiago Reta</h1>
          <p>Analista de sistemas | Desarrollador Web | Devops | DevSecOps</p>
        </div>
        <div className="categories" id="categories">
          <Link to="/" className={isActive("/")}>Bio</Link>
          <Link to="/Desarrollo" className={isActive("/Desarrollo")}>Desarrollo Web</Link>
          <Link to="/Scripting" className={isActive("/Scripting")}>Scripting</Link>
          <Link to="/DevSecOps" className={isActive("/DevSecOps")}>DevSecOps</Link>
          <Link to="/SeguridadInformatica" className={isActive("/SeguridadInformatica")}>Ciberseguridad</Link>
          <Link to="/Testing" className={isActive("/Testing")}>Testing</Link>
          <Link to="/BasesDeDatos" className={isActive("/BasesDeDatos")}>Bases de datos</Link>
          <Link to="/Hardware" className={isActive("/Hardware")}>Hardware</Link>
        </div>
      </div>
    </>
  );
};

export default Header;