import React from "react"
import "./style.scss"
import { jobs } from "./data.json"
const index = () => {
  return (
    <div className="employment">
      <h1>Employment</h1>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>
              <h2>
                <a href={job.website} target="_blank" rel="noopener noreferrer">
                  {job.company}
                </a>
              </h2>
              <h3>{job.position}</h3>
              <h4>{job.location}</h4>
              <h4>
                {new Date(job.startDate).toLocaleDateString()} -{" "}
                {job.endDate
                  ? new Date(job.endDate).toLocaleDateString()
                  : "present"}
              </h4>
              <p>{job.description}</p>
              <section className="projects">
                <ul>
                  {job.projects.map((project, index) => {
                    return (
                      <li key={index}>
                        <header>{project.name}</header>
                        <section className="technology">
                          <ul>
                            {project.technology.map((tech, index) => {
                              return <li key={index}>{tech}</li>
                            })}
                          </ul>
                        </section>
                        <section className="responsibilities">
                          <ul>
                            {project.responsibilities.map((task, index) => {
                              return <li key={index}>{task}</li>
                            })}
                          </ul>
                        </section>
                      </li>
                    )
                  })}
                </ul>
              </section>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default index
