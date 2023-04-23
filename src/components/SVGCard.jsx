import React from "react"

import ErrorIcon from "./SVGImage_Error"
import ThankYouIcon from "./SVGImage_ThankYou"

import "../sass/components/SVGCard.scss"


const SVGCard = ({ className, children, type, Error=false }) => {
  let svg = undefined

  switch (type && type.toLowerCase()) {
    case "error":
      svg = <ErrorIcon />
      break
    case "thanks":
      svg = <ThankYouIcon />
      break
    default:
      return "card TYPE must be defined!"
  }
  
  return (
    <section className={className ? `svgCard ${className}` : `svgCard`}>
      <i className="cardBorder"></i>
      <div className="cardContent">
        { svg }
        { !!children && children }
        { !!Error && <p className="alert">{Error}</p> }
      </div>
    </section>
  )
}


export default SVGCard
