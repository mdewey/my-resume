import React from "react"
import "./style.scss"
import { skills } from "./data.json"
const index = () => {
  return (
    <div className="skills" id="Skills">
      <h1>Skills</h1>
      {skills.map((skill, index) => {
        return (
          <section className={skill.name} key={index}>
            <h2>{skill.name}</h2>
            <ul>
              {skill.keywords.map((word, index) => {
                return <li key={index}>{word}</li>
              })}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

export default index
