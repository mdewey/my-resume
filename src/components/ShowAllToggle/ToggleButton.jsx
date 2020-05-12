import React, { useContext } from "react"
import { useShowAll } from "../../context/ShowAllContext"
import "./style.scss"

const ToggleButton = () => {
  const { setShowAll } = useShowAll()
  return (
    <div className="toggle">
      <button onClick={() => setShowAll(p => !p)}>toggle me</button>
    </div>
  )
}

export default ToggleButton
