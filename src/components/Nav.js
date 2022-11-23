import React from "react";
import { Link } from "gatsby";
import { Location } from "@reach/router";

import navLinks from "../data/navLinks";


const NavLink = ({item, isCurrentPath}) => {
  const arrow = isCurrentPath ? '-->' : '>';

  return <Link to={item.path}> <span className="arrow">{arrow}</span> {item.label} </Link>
};


const MainNav = ({className}) => (
  <Location>
    {({ location: { pathname: currentPath } }) => (
      <div className={`${className} links`}>
        {navLinks.map((item, index) => {
          let isCurrentPath = currentPath===item.path
          return <NavLink key={index} item={item} isCurrentPath={isCurrentPath} />
        })}
      </div>
    )}
  </Location>
);


export default MainNav;
