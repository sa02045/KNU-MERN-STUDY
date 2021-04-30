import React from "react"
import { useState } from "react"

function Chat({ messages, setMessages }) {
  const [inputValue, setInputValue] = useState("") ///input태그의 값을 가져오는 변수
  const onClick = () => {
    setMessages([...messages, inputValue])
  }

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input onChange={onChange} value={inputValue}></input>
      <button onClick={onClick}>전송</button>
    </div>
  )
}

export default Chat
