import React from "react"

import Avatar from "./Avatar"
import Nav from "./Nav"
import ThemeToggle from "./ThemeToggle"

import "../sass/components/Header.scss"


const Header = ({className, largeAvatar, withNav}) => (
  <header id="siteHeader" className={className}>
    <div className="widthContainer">
      <Avatar className="avatar" large={largeAvatar} />
      <section className="headerControls">
        {!!withNav && <Nav isPrimary={true}/>}
        <ThemeToggle />
      </section>
    </div>
  </header>
)


export default Header
