import React, { useState } from "react"
import { Helmet } from "react-helmet"
import queryString from "query-string"

import "../style/main.scss"

import WhoAmI from "../components/WhoAmI/Who"
import AboutMe from "../components/AboutMe/About"
import Contact from "../components/Contact/ContactInfo"
import Employment from "../components/Employment"
import Education from "../components/Education"
import Extras from "../components/Extras"
import Skills from "../components/Skills"
import ShowAllToggle from "../components/ShowAllToggle/ToggleButton"

import { ShowAllContext } from "../context/ShowAllContext"
import { personSchema } from "../utils/personSchema"

const SITE_URL = "https://resume.markdewey.dev/"
const DESCRIPTION =
  "Resume of Mark Dewey, a Principal Software Engineer and full-stack developer with 15+ years of experience building web applications and providing engineering leadership across the VA.gov ecosystem."

export default props => {
  const { search } = props.location
  const things = search ? queryString.parse(search) : {}
  const [showAll, setShowAll] = useState(
    things.slim ? !(things.slim === "true") : true
  )

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Mark Dewey's Resume</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="author" content="Mark Dewey" />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Mark Dewey — Principal Software Engineer" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mark Dewey — Principal Software Engineer" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        />
        <script
          src="https://kit.fontawesome.com/1711e65476.js"
          crossorigin="anonymous"
        ></script>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      <ShowAllContext.Provider value={{ showAll, setShowAll }}>
        <header className="header">
          <WhoAmI />
          <Contact />
        </header>
        <AboutMe />
        <Employment />
        <Education />
        <Skills />
        <Extras />
        <ShowAllToggle />
      </ShowAllContext.Provider>
    </>
  )
}
