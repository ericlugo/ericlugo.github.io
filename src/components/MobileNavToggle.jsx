import React from "react"

import "../sass/components/MobileNavToggle.scss"


const Icon = _ => (
  <svg id="burger-icon" viewBox="0 0 800 600">
    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
    <path d="M300,320 L540,320" id="middle"></path>
    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
  </svg>
)


const MobileNavToggle = ({expanded, toggleHandler}) => (
  <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={expanded} onClick={toggleHandler}>
    <span className="sr-only">Menu</span>
    <Icon/>
  </button>
)


export default MobileNavToggle
