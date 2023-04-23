import React from "react"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ContactCard from "../components/ContactCard"


const ContactPage = () => {
  return (
    <PrimaryLayout className="contact" withNav={true}>
      <Link className="directoryLink" to={"/"}>&lt; Go back Home</Link>
      <ContactCard />
    </PrimaryLayout>
  )
}


export default ContactPage


export const Head = () => <title>Contact Me</title>
