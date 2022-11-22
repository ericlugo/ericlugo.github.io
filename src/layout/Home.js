import React from "react";

import Header from "../components/Header";


const Layout = ({children}) => (
  <div id="layoutContainer">
    <Header largeAvatar={true} />
    {children}
  </div>
);

export default Layout;
