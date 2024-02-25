import React from 'react'
import './Footer.css'
import VisitCounter from '../VisirtCounter/VisitCounter'

const Footer = () => {
  return (
    <>
    <footer>
     <div className="container-footer">
       <VisitCounter/>
      <h2 className="last-title">
        {" "}
        Developed  by Guido Santiago Reta &copy; 2023
      </h2>
    </div>
    </footer>
    </>
  )
}

export default Footer