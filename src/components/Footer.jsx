import React from "react"
import { FiFeather } from "react-icons/fi"

import MainNav from "./Nav"
import SocialNav from "./SocialNav"

import "../sass/components/Footer.scss"


const Footer = ({ className }) => (
  <footer id="siteFooter" className={className}>
    <div className="widthContainer">
      <MainNav />
      <SocialNav />
      <div className="copy">
        <div className="credit">
          Icons courtesy of:{" "}
          <a href="https://feathericons.com/"><span><FiFeather />FeatherIcons</span></a>
        </div>
        <div className="copyright">
          copyright &copy; Eric Lugo {new Date().getFullYear()}
          <br />
          all rights reserved
        </div>
      </div>
    </div>
  </footer>
)


export default Footer
