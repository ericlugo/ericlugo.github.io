import React from "react"
import { FiExternalLink } from "react-icons/fi"


const ExternalLink = ({ URL, citationNum, children }) => {
  return (
    <a className="externalLink" href={URL} target="_blank" rel="noreferrer noopener">
      {children}{citationNum ? <sup className="citationNum">{citationNum}</sup> : ''}<small><FiExternalLink /></small>
    </a>
  )
}


export default ExternalLink
