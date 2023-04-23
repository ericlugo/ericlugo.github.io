import React from "react"
import { useState, forwardRef } from "react"


const ControlledInput = forwardRef(function ControlledInput(props, ref) {
  const { label, id, value="", onChange, isTextArea, ...otherProps } = props
  const [text, setText] = useState(value)

  function update(e) {
    setText(e.target.value)
    if (typeof onChange === "function") {
      onChange(e)
    }
  }

  if (!!isTextArea) return (
    <div className="form-item" data-name={id}>
      <textarea className="form-field" ref={ref} id={id} value={text} data-value={text} onChange={update} {...otherProps}></textarea>
      <label className="form-label" htmlFor={id}>{label}</label>
    </div>
  )
  else return (
    <div className="form-item" data-name={id}>
      <input className="form-field" ref={ref} id={id} value={text} data-value={text} onChange={update} {...otherProps} />
      <label className="form-label" htmlFor={id}>{label}</label>
    </div>
  )
})


export default ControlledInput
