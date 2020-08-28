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
                  always on the look out for the life's next chapter. Over the
                  years, Mark, with the use of development and mentoring, has
                  made a lasting impression everywhere he goes. Never backing
                  from a challenge, Mark aims to create software that actually
                  solves problems. He believes the right software, the correct
                  information, and a little panache can change the world. When
                  not behind a keyboard, he enjoys breathing the fresh mountain
                  air.
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
