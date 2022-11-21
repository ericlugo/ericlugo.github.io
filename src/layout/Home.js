import React from "react";

import Header from "../components/Header";


const Layout = ({children}) => (
  <>
    <Header largeAvatar={true}/>
    {children}
  </>
);

export default Layout;
