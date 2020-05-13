import React from "react"
import "./style.scss"
import { jobs } from "./data.json"
import Job from "./Job"
const index = () => {
  return (
    <div className="employment">
      <h1>Employment</h1>
      <ul>
        {jobs.map((job, index) => {
          return <Job key={index} job={job} />
        })}
      </ul>
    </div>
  )
}

export default index
