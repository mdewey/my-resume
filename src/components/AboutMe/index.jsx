import React from "react"
import "./style.scss"

import pic from "./images/Mark-5.jpg"

const index = () => {
  return (
    <div className="aboutMe">
      <img src={pic} alt="Mark's smiling face" />
      <p>
        Hailing from Pennsylvania, Mark has journeyed to Florida in 2014 to
        tackle life's next chapter. He loves a challenge and strives to create
        and develop things that helps people have better lives. Mark believes
        the right software, information, and a little panache, can change the
        world. When not behind a keyboard, he likes to enjoy the sunshine in
        wide open spaces.
      </p>
      <p>My top skill is are developing solutions with .NET Core and React.</p>
    </div>
  )
}

export default index
