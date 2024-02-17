import React from 'react'
import './Article.css'
import developer1 from '../../assets/developer.png'

const Article = () => {
  return (
    <>
    <div className="blog">
    <div className="contenedor">
          <div className="articulos-blog">
            <div className="articulo">
                <p className="fecha-articulo">Marzo de 2018</p>
                 <h3 className="titulo-articulo"> Pasión por la tecnología y Primeros pasos por la programación</h3>
                  <img src={developer1} className="developer-image" alt="developer"/>
                  <div className="texto-articulo">
                      <p>A principios del 2018  empecé  haciendo cursos de reparación de pc y notebooks.</p>
                      <p>En el año 2018 curse la certificación en el programa codo a codo, aprendiendo las bases de programación: desde algoritmos, programación estructurada, programación orientada a objetos
                        Y desarrollo de software en leguaje <b>JAVA (con neatbeans IDE)</b> y diseño de bases de datos con <b>(MYSQL workbench).</b>
                      </p>
                       <p>Día tras día voy adquiriendo conocimientos de manera autodidacta, investigando sobre leguajes a través de tutoriales y aplicaciones como <b>sololearn, codecademy, w3school</b> y páginas de cursos online como <b>crehana</b>. </p>
                       <p>Actualmente me encuentro realizando la tecnicatura en análisis de sistemas en <b>(IRSO)</b>, programando y realizando ejercicios en lenguaje <b>C</b>.
                         Además adquirí pasión por el desarrollo y diseño web. <b> Descripción en el siguiente artículo</b>.
                      </p>
                  </div>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Article