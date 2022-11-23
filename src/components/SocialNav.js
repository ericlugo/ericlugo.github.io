import React from "react";

import socialLinks from "../data/socialLinks";


const SocialNav = ({ className }) => (
  <div className={className}>
    {socialLinks.map((item, index) => (
      <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
        <span className="name">{item.name}</span>
        {item.icon}
      </a>
    ))}
  </div>
);


export default SocialNav;
