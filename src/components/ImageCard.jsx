import React from "react"
import { CloudinaryImage } from "@cloudinary/url-gen"
import { LazyLoadImage } from "react-lazy-load-image-component"

import "../sass/components/ImageCard.scss"


const ImageCard = ({ src, alt, caption=false, ar="16 / 9" }) => {
  const imagePath = new CloudinaryImage(src, {cloudName: "elugo-dev-cloud"})
    .namedTransformation('t_natural')
    .toURL()
  const placeholderPath = new CloudinaryImage(src, {cloudName: "elugo-dev-cloud"})
    .namedTransformation('t_placeholder_natural')
    .toURL()

    console.log(imagePath)
    console.log(placeholderPath)

  return (
    <figure className={caption ? 'imageCard' : 'imageCard noCap'}>
      <LazyLoadImage
        className='postImage'
        src={imagePath}
        placeholderSrc={placeholderPath}
        wrapperClassName='postImageWrapper'
        alt={alt}
      />
      {caption ? <figcaption>{caption}</figcaption> : ''}
    </figure>
  )
}


export default ImageCard
