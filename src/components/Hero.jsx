import React from "react"
import { CloudinaryImage } from "@cloudinary/url-gen"
import { LazyLoadImage } from "react-lazy-load-image-component"

import "../sass/components/Hero.scss"


const Hero = ({ imgData }) => {
  const heroPath = new CloudinaryImage(imgData.src, {cloudName: "elugo-dev-cloud"})
    .namedTransformation('t_crop_fill_32_9')
    .toURL()
  const placeholderPath = new CloudinaryImage(imgData.src, {cloudName: "elugo-dev-cloud"})
    .namedTransformation('t_placeholder_32_9')
    .toURL()

  return (
    <section className='heroContainer'>
      <LazyLoadImage
        className='hero'
        src={heroPath}
        placeholderSrc={placeholderPath}
        wrapperClassName='heroWrapper'
        alt={imgData.alt}
      />
    </section>
  )
}


export default Hero
