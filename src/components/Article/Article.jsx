import React, { useContext } from "react";
import articlesData from './articlesData.json';
import { ThemeContext } from "../../context/ThemeContextProvider";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import Theme from "../Theme/Theme";
import './Article.css';

const getImageUrl = (developer) => {
  return `/assets/${developer}`;
};

const highlightKeywords = (text, keywords) => {
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
};

const Article = ({ article }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const keywords = [
    'variables de entorno',  
    'scripts dinámicos',  
    'condicionales',
    'arreglos',  
    'estruturas repetitivas',  
    'manejo de archivos',  
    'funciones',  
    'DevOps',  
    'Infraestructura',
    'DevSecOps',
    'CloudOps',
    'Sistemas de Control de Versiones',
    'Automatización',
    'CI/CD',
    'pipelines',
    '2018',
    '2019',
    'Certificaciones y Formación (2020 - 2021)',
    'Proyectos y Certificaciones Continuas (2022 - Actualidad):',
    '2024',
    '2020',
    '2021'

  ];

  const highlightText = (text) => {
    return highlightKeywords(text, keywords);
  };

 // Solo para el articulo desarrollo-web"
  const isDesarrolloWebArticle = article.id === "desarrollo-web";


  return (
    <section className={`ct-section ${isDarkMode ? "dark-mode-section" : ""}`}>
      <div className="blog">
        <div className="contenedor">
          <div className="articulos-blog">
            <div className="articulo">
              <p className="fecha-articulo">{article.fecha}</p>
              <h3 className="titulo-articulo">{article.titulo}</h3>
              <img src={getImageUrl(article.imagen)} className="developer-image" alt="developer" />
              <div className="texto-articulo">
                {article.texto.map((p, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: highlightText(p) }} />
                ))}
              </div>
              {isDesarrolloWebArticle && (
                <div className="links">
                  <h2>Portfolio</h2>
                  <a href="https://reactportfolio-guidosantiagoreta.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FaLaptopCode className="laptop" />
                  </a>
                  <h2>Github</h2>
                  <a href="https://github.com/GuidoSantiagoReta" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;


