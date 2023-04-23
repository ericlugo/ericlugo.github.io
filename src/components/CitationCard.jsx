import React from "react"


const CitationCard = ({ children }) => {
  return (
    <section className="citationCard">
      <h2>Article Links:</h2>
      {children}
    </section>
  )
}


export default CitationCard
