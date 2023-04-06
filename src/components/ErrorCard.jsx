import React from "react"

import ErrorCardIcon from "./ErrorCardIcon"

import "../sass/components/Image.scss"




/* TODO: FINISH ERROR CARD CREATION */
const ImageCard = ({ Error }) => (
  <section>
    <ErrorCardIcon />
    <p className="alert">{Error}</p>
  </section>
)


export default ImageCard
