import React from "react"

import Avatar from "./Avatar"
import ThemeToggle from "./ThemeToggle"


const Header = ({className, largeAvatar}) => (
  <header className={className}>
    <div className="widthContainer">
      <Avatar className="avatar" large={largeAvatar} />
      {/* TODO: ADD MENU HERE */}
      <ThemeToggle />
    </div>
  </header>
)


export default Header
