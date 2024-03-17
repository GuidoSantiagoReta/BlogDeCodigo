import React, { useContext } from "react";
import articlesData from './articlesData.json';
import { ThemeContext } from "../../context/ThemeContextProvider";
import { FaGithub, FaLaptopCode } from "react-icons/fa";
import Theme from "../Theme/Theme";
import './Article.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
    '2021',
    'TDD',
    'BDD',
    'JMeter',
    'Selenium',
    'API',
    'REST',
    'Postman',
    'Thunder Client',
    'SQLServer',
    'PostgreeSQL',
    'MySQL Workbench',
    'SQL',
    'MongoDB',
    'JSON'
  ];

  const highlightText = (text) => {
    return highlightKeywords(text, keywords);
  };

  // Solo para el articulo desarrollo-web"
  const isDesarrolloWebArticle = article.id === "desarrollo-web";


  return (
    <>
   
     <section className={`ct-section ${isDarkMode ? "dark-mode-section" : ""}`}>
        <div className="blog">
          <div className="container">
            <div className="article-blog">
              <div className="article">
                <p className="article-date">{article.fecha}</p>
                <h3 className="article-title">{article.titulo}</h3>
                <LazyLoadImage
                  src={getImageUrl(article.imagen)}
                  alt="developer"
                  className="developer-image"
                  effect="blur"
                 
                />
                <div className="article-text">
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
    </>
  );
};

export default Article;


