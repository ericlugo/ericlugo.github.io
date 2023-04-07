import React from "react"

import ErrorCardIcon from "./ErrorCardIcon"

import "../sass/components/ErrorCard.scss"


const ErrorCard = ({ className, children, Error=false }) => (
  <section className={className ? `errorCard ${className}` : `errorCard`}>
    <i className="cardBorder"></i>
    <div className="cardContent">
      <ErrorCardIcon />
      { !!children && children }
      { !!Error && <p className="alert">{Error}</p> }
    </div>
  </section>
)


export default ErrorCard
