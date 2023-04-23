import React from "react"

import socialLinks from "../data/socialLinks"
import "../sass/components/SocialNav.scss"


const SocialNav = ({ className }) => {
  return (
    <div className={`socialNav${className ? ' '+className : ''}`}>
      {socialLinks.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
          <span className="name">{item.name}</span>
          {item.icon}
        </a>
      ))}
    </div>
  )
}


export default SocialNav
