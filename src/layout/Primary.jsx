import React from "react"

import Hero from "../components/Hero"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

import '../sass/layouts/Primary.scss'


const Layout = ({className, children, imgData=false, withNav=false, title=undefined }) => {
  return (
    <>
      <SEO title={title} />
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
    </>
  )
}


export default Layout
