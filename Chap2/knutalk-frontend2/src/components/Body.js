import React from "react"

function Body({ messages }) {
  return (
    <div>
      {messages.map((msg) => (
        <h1>{msg}</h1>
      ))}
    </div>
  )
}

export default Body
