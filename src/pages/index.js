import React from "react"
import { Helmet } from "react-helmet"

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
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />
      <script
        src="https://kit.fontawesome.com/1711e65476.js"
        crossorigin="anonymous"
      ></script>
      <title>Mark Dewey's Resume</title>
    </Helmet>
    <header className="header">
      <WhoAmI />
      <Contact />
    </header>
    <AboutMe />
    <Employment />
    <Education />
    <Skills />
    <Extras />
  </>
)
