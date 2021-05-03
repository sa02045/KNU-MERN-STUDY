import React from "react"
import "./Body.css"
function Body({ messages }) {
  return (
    <div className="body">
      {messages.map((message) => {
        return <h5>{message}</h5>
      })}
    </div>
  )
}

export default Body
