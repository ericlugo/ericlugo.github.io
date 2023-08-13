import React from "react"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ContactCard from "../components/ContactCard"


const ContactPage = () => {
  return (
    <PrimaryLayout className="contact" withNav={true} title="Contact Me">
      <Link className="directoryLink" to={"/"}>&lt; Go back Home</Link>
      <ContactCard />
    </PrimaryLayout>
  )
}


export default ContactPage
