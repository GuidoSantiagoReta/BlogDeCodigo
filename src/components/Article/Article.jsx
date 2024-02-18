import React from 'react'
import articlesData from './articlesData.json';
import './Article.css'


const getImageUrl = (developer) => {
  return `/assets/${developer}`;
};

const Article = ({article}) => {
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
                {article.texto.map((p, index) => <p key={index}>{p}</p>)}
               </div>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Article


