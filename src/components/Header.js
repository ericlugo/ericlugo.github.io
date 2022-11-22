import React from "react";

import Avatar from "./Avatar";


const Header = ({className, largeAvatar}) => (
  <header className={className}>
    <div className="widthContainer">
      <Avatar className="avatar" large={largeAvatar} />
      {/* TODO: ADD MENU HERE */}
    </div>
  </header>
);

export default Header;
