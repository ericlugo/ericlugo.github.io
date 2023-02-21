import React from "react"

import Header from "../components/Header"
import SocialNav from "../components/SocialNav"

import '../sass/layouts/Home.scss'


const Layout = ({children}) => (
  <div id="home" className="layoutContainer">
    <Header largeAvatar={true} />
    <main>
      <section className="widthContainer">
        {children}
      </section>
    </main>
    <SocialNav className="homeFooter" />
  </div>
)


export default Layout
