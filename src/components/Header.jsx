import React from "react"

import Avatar from "./Avatar"
import ThemeToggle from "./ThemeToggle"

import "../sass/components/Header.scss"


const Header = ({className, largeAvatar}) => (
  <header id="siteHeader" className={className}>
    <div className="widthContainer">
      <Avatar className="avatar" large={largeAvatar} />
      {/* TODO: ADD MENU HERE */}
      <ThemeToggle />
    </div>
  </header>
)


export default Header
