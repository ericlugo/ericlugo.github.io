import React from "react"

import AvatarIcon from "./AvatarIcon"

import "../sass/components/Avatar.scss"


const Avatar = ({ className, large=false }) => (
  <div id="avatar" className={className} aria-label="small svg avatar of eric lugo" data-large={large}>
    <AvatarIcon />
  </div>
)


export default Avatar
