import React, { useState } from "react"

import "./Chat.css"

function Chat({ msgs, setMsgs }) {
  const [input, setInput] = useState("")

  const btnClick = () => {
    setMsgs([input, ...msgs])
    setInput("")
  }

  const inputChange = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  const enterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      setMsgs([input, ...msgs])
      setInput("")
    }
  }

  return (
    <div className="chat-container">
      <input className="input" value={input} onChange={inputChange} onKeyDown={enterKey}></input>
      <button className="btn" onClick={btnClick}></button>
    </div>
  )
}

export default Chat
