import React from "react"
import { useState, useRef } from "react"

import ControlledInput from "./ControlledInput"
import { capitalize, validateContactData } from "../lib/util"

import "../sass/components/ContactCard.scss"


/*
*  _honey is a honeypot field to catch scrapers and help avoid spam.
*  with honeypot enabled, _captcha can be disabled with 'false' value.
*  _next gives formsubmit.co a redirect address for successful submissions.
*  _subject is a convenience field to help with creating responses.
*/
const ContactCard = () => {
  const messageDetailModel = {
    Name: '',
    Email: '',
    PhoneNo: '',
    Message: '',
  }

  const [details, setDetails] = useState(messageDetailModel) // details object
  const [validationArray, setValidationArray] = useState([]) // validation data array for displaying errors
  const formValidateRef = useRef([]) // reference for form validation handling
  const { Name, Email, PhoneNo, Message } = details // destructure the model values for ease

  /*
  * input change handling, for ease.
  * destructure input, store previous values, and update with input value only.
  */
  const onInputChange = (e) => {
    const { name, value } = e.target
    setDetails((prev) => ({ ...prev, [name]:value }))
  }

  const ValidateData = () => {
    const results = validateContactData(formValidateRef)
    results.hasErrors && setValidationArray(results.newArray)
  }

  return (
    <div className="contactCard">
      <h1>Contact Me</h1>

      {!!validationArray.length && (
        <section className="warningPanel">
          <h2><span className="small">⚠️</span> WARNING <span className="small">⚠️</span></h2>
          <ul>
            {validationArray.map((entry, i) => <li key={i}>{capitalize(entry.ErrorMsg)}</li>)}
          </ul>
        </section>
      )}

      <form className="contactForm" action="https://formsubmit.co/0c1b34ecdf86dfe2c73799774323ff11" method="POST">

        {/* HONEYPOT */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* DISABLE CAPTCHA */}
        <input type="hidden" name="_captcha" value="false" />

        <input type="hidden" name="_next" value="https://ericlugo.dev/thanks" />
        <input type="hidden" name="_subject" value="Thanks for the Message!" />

        <ControlledInput ref={el => formValidateRef.current[0]=el} label="Your Name *" id="name" name="name" type="text" value={Name} onChange={e => onInputChange(e)} required />

        <ControlledInput ref={el => formValidateRef.current[1]=el} label="Phone Number" id="phone" name="phone&nbsp;number" type="tel" value={PhoneNo} onChange={e => onInputChange(e)} />

        <ControlledInput ref={el => formValidateRef.current[2]=el} label="Email Address *" id="email" name="email" type="email" value={Email} onChange={e => onInputChange(e)} required />

        <ControlledInput ref={el => formValidateRef.current[3]=el} label="Your Message *" isTextArea={true} id="message" name="message" rows="3" value={Message} onChange={e => onInputChange(e)} required></ControlledInput>

        <input className="form-submit" id="submit" type="submit" value="Send" onClick={ValidateData} />

      </form>
    </div>
  )
}


export default ContactCard
