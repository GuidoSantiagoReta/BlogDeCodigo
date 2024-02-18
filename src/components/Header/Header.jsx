import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };


  return (
    <>
      <nav>
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