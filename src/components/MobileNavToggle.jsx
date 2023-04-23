import React from "react"

import MobileNavToggleIcon from "./SVGImage_MobileNavToggle"

import "../sass/components/MobileNavToggle.scss"


const MobileNavToggle = ({expanded, toggleHandler}) => {
  return (
    <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={expanded} onClick={toggleHandler}>
      <span className="sr-only">Menu</span>
      <MobileNavToggleIcon />
    </button>
  )
}


export default MobileNavToggle
