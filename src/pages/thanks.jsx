import React from "react"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ThankYouCard from "../components/SVGCard"


const ThanksPage = () => {
  return (
    <PrimaryLayout className="thanks" withNav={true} title="Thanks!">
      <ThankYouCard type="thanks">
        <h1>I appreciate you reaching out.</h1>
        <p>
          Usually I'm pretty quick to get back to emails, but it may take me a couple of business days to reply. Thanks in advance for your patience as I work to get back to you, and also thanks for checking out my site!
        </p>
        <p>
          <Link className="directoryLink" to={"/"}>&lt; Go back Home</Link>
        </p>
      </ThankYouCard>
    </PrimaryLayout>
  )
}


export default ThanksPage
