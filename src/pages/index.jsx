import * as React from "react"
import { Link } from "gatsby"

import HomeLayout from "../layout/Home"

import MainNav from "../components/Nav"


const IndexPage = () => {
  return (
    <HomeLayout>
      <h1 className="homeHeader">
        Hi, I'm <span className="glitch" data-text="Eric">Eric</span>.
      </h1>
      <p>
        I like to make stuff, and I'm working to get better at explaining things to other people!
      </p>
      <MainNav />
      <p>
        If you want to see some of the stuff I've made, you can go to <Link to="/projects/">Projects</Link>.
        Maybe you want to read some of the things I've tried explaining? Click or tap on <Link to="/blog/">Blog</Link>.
        For random things I recommend you can check out <Link to="/notes/">Notes</Link>.
        I've made a small place to also share some things about myself, so if you're curious about me, feel free to go to <Link to="/about/">About Me</Link>.
        If you want to reach out, you can do so using the social links below, or go <Link to="/contact/">here</Link> to contact me! 
      </p>
      <p>
        Thanks for visiting, and I sincerely hope you have a wonderful day.
      </p>
    </HomeLayout>
  )
}


export default IndexPage


export const Head = () => <title>Home Page</title>
