import React from "react"
import "../style/main.scss"

import WhoAmI from "../components/WhoAmI"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Employment from "../components/Employment"
import Education from "../components/Education"
import Extras from "../components/Extras"
import Skills from "../components/Skills"

export default () => (
  <>
    <WhoAmI />
    <Contact />
    <AboutMe />
    <Employment />
    <Education />
    <Extras />
    <Skills />
  </>
)
