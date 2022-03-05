import React from "react"
import "./style.scss"

import ProgressiveImage from "react-progressive-image"

import mainImage from "./images/Mark-5.jpg"
import lightImage from "./images/Mark-5.light.jpg"

import { useShowAll } from "../../context/ShowAllContext"

const About = () => {
  const { showAll } = useShowAll()

  if (!showAll) {
    return <></>
  } else {
    return (
      <div className="about-me">
        <ProgressiveImage src={mainImage} placeholder={lightImage}>
          {src => (
            <>
              <section className="picture">
                <div
                  className="face-pic"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </section>
              <section className="welcome-message">
                <p>
                  Currently residing in the Appalachian Mountains, Mark is
                  always looking out for life's next chapter. Over the years, he has left a 
                  lasting impression everywhere he goes with the
                  use of development and mentoring. Never backing from a
                  challenge, Mark aims to create software that actually solves
                  problems. He believes that with the right software, the correct
                  insights, and a little panache, any problem can be solved. Mark 
                  can usually be found enjoying the fresh mountain air, when not behind a keyboard.
                </p>
              </section>
            </>
          )}
        </ProgressiveImage>
      </div>
    )
  }
}

export default About
