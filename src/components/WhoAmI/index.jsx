import React from "react"
import "./style.scss"

import pic from "./images/Mark-5.jpg"

const index = () => {
  return (
    <div className="who-am-i">
      <img src={pic} alt="Picture of Mark" />
      <h1>Mark Dewey</h1>
      <h2>Developer - Instructor - Explorer</h2>
      <h2>Current Title: Senior Developer</h2>
    </div>
  )
}

export default index
