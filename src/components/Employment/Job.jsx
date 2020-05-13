import React from "react"
import { useShowAll } from "../../context/ShowAllContext"

const Job = ({ job }) => {
  const { showAll } = useShowAll()
  return (
    <li className="job">
      <section className="details">
        <h2>
          <a href={job.website} target="_blank" rel="noopener noreferrer">
            {job.company}
          </a>
        </h2>
        <h3>{job.position}</h3>
        <h4 className="where">{job.location}</h4>
        <h4 className="when">
          {new Date(job.startDate).toLocaleDateString()} -{" "}
          {job.endDate ? new Date(job.endDate).toLocaleDateString() : "present"}
        </h4>
      </section>
      <section className="summary">
        <header className="job-description">{job.summary}</header>
        <section className="projects">
          <p>projects and responsibilities:</p>
          <ul>
            {job.projects.map((project, index) => {
              if (project.canHide && !showAll) {
                return <span key={index}></span>
              }
              return (
                <li key={index} className="project">
                  <header>{project.name}</header>
                  <section className="technology">
                    <p>technology used:</p>
                    <ul className="technologies">
                      {project.technology.map((tech, index) => {
                        return <li key={index}>{tech}</li>
                      })}
                    </ul>
                  </section>
                  <section className="responsibilities">
                    <p>what I did:</p>
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
      </section>
    </li>
  )
}

export default Job
