import React, { useState } from "react"

import axios from "axios"

import "./KnuChat.css"

function KnuChat({ name }) {
  const [input, setInput] = useState("")

  //버튼클릭하면 post 메서드로 서버에게 요청
  const onSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/messages/new",
      data: {
        name,
        message: input,
      },
    })
    setInput("")
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      input && onSubmit()
    }
  }

  return (
    <div className="KnuChat">
      <div className="input__container">
        <textarea
          onKeyDown={onKeyDown}
          value={input}
          className="input"
          name="input"
          onChange={(e) => setInput(e.target.value)}
          id="input"
          autoFocus={true}
        ></textarea>
      </div>

      <button className="btn" onClick={onSubmit}>
        전송
      </button>
    </div>
  )
}

export default KnuChat
