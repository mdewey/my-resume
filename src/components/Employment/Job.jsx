import React from "react"
import { useShowAll } from "../../context/ShowAllContext"
import Hideablelabel from "./HideableLabel"

const Job = ({ job }) => {
  const { showAll } = useShowAll()
  return (
    <li className="job">
      <section className="details">
        <h2>{job.position}</h2>
        <h3>
          <a href={job.website} target="_blank" rel="noopener noreferrer">
            {job.company}
          </a>
        </h3>
        <p className="job-description">{job.summary}</p>
        <h4 className="when">
          {new Date(job.startDate).toLocaleDateString()} -{" "}
          {job.endDate ? new Date(job.endDate).toLocaleDateString() : "present"}
        </h4>
        <h5 className="where"><i className={"fa fa-map-marker"}></i>{job.location}</h5>
      </section>
      <section className="summary">
        <section className="projects">
          <ul>
            {job.projects.map((project, index) => {
              if (project.canHide && !showAll) {
                return <span key={index}></span>
              }
              return (
                <li key={index} className="project">
                  <Hideablelabel show={showAll}>
                   project
                  </Hideablelabel>
                  <header>{project.name}</header>
                  <section className="technology">
                    <Hideablelabel show={showAll}>
                      technologies used
                    </Hideablelabel>
                    <ul className="technologies">
                      {project.technology.map((tech, index) => {
                        return <li key={index}>{tech}</li>
                      })}
                    </ul>
                  </section>
                  <section className="responsibilities">
                    <Hideablelabel show={showAll}>
                     what i did
                    </Hideablelabel>

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
