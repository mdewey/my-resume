import React from "react"
import "./style.scss"
import { useShowAll } from "../../context/ShowAllContext"

const Who = () => {
  const { showAll } = useShowAll()
  return (
    <div className="who-am-i">
      <h1>Mark Dewey</h1>
      {showAll && <h3>Developer - Instructor - Explorer</h3>}
      <h3>Current Title: Staff+ Engineer</h3>
    </div>
  )
}

export default Who
