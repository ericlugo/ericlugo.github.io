import React from "react"
import { CloudinaryImage } from "@cloudinary/url-gen"
import { LazyLoadImage } from "react-lazy-load-image-component"

import "../sass/components/ImageCard.scss"


const ImageCard = ({ src, alt, caption=false, bordered=true, ar="16 / 9" }) => {
  const imagePath = new CloudinaryImage(src, {cloudName: "elugo-dev-cloud"})
  .namedTransformation('t_natural')
  .toURL()
  const placeholderPath = new CloudinaryImage(src, {cloudName: "elugo-dev-cloud"})
  .namedTransformation('t_placeholder_natural')
  .toURL()
  
  let imageCardClass = 'imageCard';
  if (!caption) imageCardClass += ' noCaption';
  if (bordered==='false') imageCardClass += ' noBorder';
  
  return (
    <figure className={imageCardClass}>
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
