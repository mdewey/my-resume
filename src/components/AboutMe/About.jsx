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
                  Mark ventured to Florida in 2014 to enjoy some sun while
                  tackle life's next chapter. However, missing snow has caused
                  him to head back to the mountains of Pennsylvania. During his
                  years in Florida, through mentoring and development, Mark made
                  a lasting impact on the tech community. Never backing from a
                  challenge, Mark aims to create software that actually solves
                  problems. He believes the right software, the correct
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
