import React from "react"

import "./Body.css"
function Body({ msgs }) {
  return (
    <div className="body-container">
      {msgs.map((msg) => {
        return <p className="message">{msg}</p>
      })}
    </div>
  )
}

export default Body
