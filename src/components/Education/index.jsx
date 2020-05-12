import React from "react"
import "./style.scss"
const index = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <main>
        <section className="details">
          <h1>Bachelors of Science; Computer Science</h1>
          <h2>University Pittsburgh at Johnstown</h2>
          <h2>Aug. 2007 - May 2011</h2>
          <h2>GPA: 3.7</h2>
          <h3>Presidential Scholar</h3>
        </section>
        <section className="notable-classes">
          <header>notable classes:</header>
          <ul>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Artificial Intelligence</li>
            <li>Web Programming</li>
            <li>.NET</li>
            <li>Java</li>
            <li>Object Oriented Programming</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default index
