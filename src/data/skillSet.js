import React from "react"
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact
} from "react-icons/fa6"
import {
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiGatsby,
  SiGraphql,
  SiJest,
  SiJquery,
  SiLinux,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSass,
} from "react-icons/si"

import { GoCommandPalette } from "react-icons/go";


const techLinks = [];

// CORE SKILLS
techLinks.append([
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript / ES6+",
    icon: <FaJs />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Linux",
    icon: <SiLinux />,
  },
  {
    name: "Command Line",
    icon: <GoCommandPalette />,
  },
])

// LIBRARIES & FRAMEWORKS
techLinks.append([
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "Sass",
    icon: <SiSass />,
  },
  {
    name: "jQuery",
    icon: <SiJquery />,
  },
  {
    name: "Jest",
    icon: <SiJest />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Gatsby",
    icon: <SiGatsby />,
  },
  {
    name: "Node",
    icon: <FaNodeJs />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
])

// TOOLS
techLinks.append([
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
  },
  {
    name: "Netlify",
    icon: <SiNetlify />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
])


export default techLinks