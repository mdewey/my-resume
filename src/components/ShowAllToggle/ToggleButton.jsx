import React, { useContext } from "react"
import "./style.scss"
import { useShowAll } from "../../context/ShowAllContext"

const ToggleButton = () => {
  const { showAll, setShowAll } = useShowAll()

  return (
    <div className="toggle">
      {showAll ? "viewing full resume" : "viewing snapshot"}
      <button onClick={() => setShowAll(p => !p)}>toggle</button>
    </div>
  )
}

export default ToggleButton
