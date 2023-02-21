import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import '../sass/layouts/Primary.scss'


const Layout = ({className, children}) => (
  <div id="primary" className="layoutContainer">
    <Header />
    <main className={className}>
      <section className="widthContainer">
        {children}
      </section>
    </main>
    <Footer />
  </div>
)


export default Layout
