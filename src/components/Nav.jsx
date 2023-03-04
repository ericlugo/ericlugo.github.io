import React, { useState } from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"

import navLinks from "../data/navLinks"
import MobileNavToggle from "./MobileNavToggle"
import "../sass/components/Nav.scss"


const NavLink = ({item, isCurrentPath}) => {
  const arrow = isCurrentPath ? '-->' : '>'

  return <li data-target={item.path}><Link to={item.path}> <span className="arrow" aria-hidden="true">{arrow}</span> {item.label} </Link></li>
}


const MainNav = ({className, isPrimary=false}) => {
  const [expanded, setExpanded] = useState(false)
  const toggleHandler = _ => {
    setExpanded(!expanded)
  }

  if (isPrimary) return (
    <Location>
      {({ location: { pathname: currentPath } }) => (
        <>
          <nav id="primary-navigation" data-visible={expanded}>
            <ul className={`nav${className ? ' '+className : ''}`}>
              {navLinks.map((item, index) => {
                let isCurrentPath = currentPath===item.path
                return <NavLink key={index} item={item} isCurrentPath={isCurrentPath} />
              })}
            </ul>
          </nav>
          <MobileNavToggle expanded={expanded} toggleHandler={toggleHandler}/>
        </>
      )}
    </Location>
  )
  else return (
    <Location>
      {({ location: { pathname: currentPath } }) => (
        <nav>
          <ul className={`nav${className ? ' '+className : ''}`}>
            {navLinks.map((item, index) => {
              let isCurrentPath = currentPath===item.path
              return <NavLink key={index} item={item} isCurrentPath={isCurrentPath} />
            })}
          </ul>
        </nav>
      )}
    </Location>
  )
}


export default MainNav
