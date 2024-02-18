import React from 'react'
import articlesData from './articlesData.json';
import './Article.css'


const getImageUrl = (developer) => {
  return `/assets/${developer}`;
};

// Función para resaltar palabras clave
const highlightKeywords = (text, keywords) => {
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
};

const Article = ({article}) => {
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
                      'pipelines'

                    ]
                      ;
  const highlightText = (text) => {
    return highlightKeywords(text, keywords);
  };
  
  return (
    <>
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
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Article


