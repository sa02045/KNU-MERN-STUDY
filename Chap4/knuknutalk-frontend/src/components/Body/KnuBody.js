import React from "react"

import Message from "./Message"
import "./KnuBody.css"

function KnuBody({ name, msgs }) {
  return (
    <main className="KnuBody">
      {msgs.map((msg, index) => {
        return <Message name={name} key={index} msg={msg} />
      })}
    </main>
  )
}

export default KnuBody
