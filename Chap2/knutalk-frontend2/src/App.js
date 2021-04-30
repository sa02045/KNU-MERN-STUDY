import "./App.css"
import { useState } from "react"

import Body from "./components/Body"
import Chat from "./components/Chat"

function App() {
  const [messages, setMessages] = useState([])
  return (
    <div className="App">
      <Body messages={messages}></Body>
      <Chat messages={messages} setMessages={setMessages}></Chat>
    </div>
  )
}

export default App
