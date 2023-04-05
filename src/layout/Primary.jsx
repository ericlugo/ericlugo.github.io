import React from "react"

import Hero from "../components/Hero"
import Header from "../components/Header"
import Footer from "../components/Footer"

import '../sass/layouts/Primary.scss'


const Layout = ({className, children, imgData=false, withNav=false}) => (
  <div id="primary" className="layoutContainer">
    <Header withNav={withNav}/>
    {imgData ? <Hero imgData={imgData}/> : ''}
    <main className={className}>
      <section className="widthContainer">
        {children}
      </section>
    </main>
    <Footer />
  </div>
)


export default Layout
