import React from "react"

import ThemeToggleIcon from "./ThemeToggleIcon"

import '../sass/components/ThemeToggle.scss'
import { reflectPreference, enableTimings, onClick } from "../lib/theme-common"


const ThemeToggle = () => {
  // set preference on load for screen readers to have the value on the button
  React.useEffect(() => {
    reflectPreference()
    setTimeout(enableTimings, 250)
  })

  return (
    <button className="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite" onClick={onClick}>
      <ThemeToggleIcon />
    </button>
  )
}


export default ThemeToggle
