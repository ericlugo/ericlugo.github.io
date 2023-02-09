import React from "react"
import { Link } from "gatsby"

import Header from "../components/Header"
import MainNav from "../components/Nav"
import SocialNav from "../components/SocialNav"

import '../sass/layouts/Home.scss'


const Layout = ({children}) => (
  <div id="layoutContainer" className="home">
    <Header className="siteHeader" largeAvatar={true} />
    <main>
      <section className="widthContainer">
        <h1>
          Hi, I'm <span className="glitch" data-text="Eric">Eric</span>.
        </h1>
        <p>
          I like to make stuff, and I'm working to get better at explaining things to other people!
        </p>
        <MainNav />
        <p>
          If you want to see some of the stuff I've made, you can go to <Link to="/projects/">Projects</Link>.
          Want to read some of the things I've tried explaining? Click on <Link to="/blog/">Blog</Link>.
          For random things I recommend you can check out <Link to="/notes/">Notes</Link>.
        </p>
        <p>
          Thanks for visiting, and I sincerely hope you have a wonderful day.
        </p>
      </section>
    </main>
    <SocialNav className="homeFooter" />
  </div>
)


export default Layout
