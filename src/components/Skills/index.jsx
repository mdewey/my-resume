import React from "react"
import "./style.scss"
import { skills } from "./data.json"
const index = () => {
  return (
    <div>
      <h1>Skills</h1>
      {skills.map(skill => {
        return (
          <section className={skill.name}>
            <header>{skill.name}</header>
            <ul>
              {skill.keywords.map(word => {
                return <li>{word}</li>
              })}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

export default index
