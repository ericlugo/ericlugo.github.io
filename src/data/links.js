import React from "react"
import { FiCodepen, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"


export const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: <FiTwitter />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: <FiLinkedin />,
  },
  {
    name: "CodePen",
    url: "https://codepen.io/",
    icon: <FiCodepen />,
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: <FiGithub />,
  },
]


export const navLinks = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/projects/",
    label: "projects",
  },
  {
    path: "/blog/",
    label: "blog",
  },
  {
    path: "/notes/",
    label: "notes",
  },
  {
    path: "/about/",
    label: "about me",
  },
]
