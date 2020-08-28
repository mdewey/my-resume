import React from "react"
import Switch from "react-switch"
import "./style.scss"
import { useShowAll } from "../../context/ShowAllContext"

const ToggleButton = () => {
  const { showAll, setShowAll } = useShowAll()
  const change = () => setShowAll(p => !p)
  return (
    <div className="toggle no-print">
      <label htmlFor="material-switch">
        <span>Quick View</span>
        <Switch
          onChange={change}
          checked={showAll}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
        <span>Full Resume</span>
      </label>
    </div>
  )
}

export default ToggleButton
