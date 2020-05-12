import React from "react"
import "./style.scss"

import ProgressiveImage from "react-progressive-image"

import mainImage from "./images/Mark-5.jpg"
import lightImage from "./images/Mark-5.light.jpg"

const index = () => {
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
                Hailing from Pennsylvania, Mark journeyed to Florida in 2014 to
                tackle life's next chapter. He loves a challenge and strives to
                create and develop things that help people have better lives.
                Mark believes the right software, information, and a little
                panache can change the world. When not behind a keyboard, he
                likes to enjoy the sunshine in wide open spaces.
              </p>
            </section>
          </>
        )}
      </ProgressiveImage>
    </div>
  )
}

export default index
