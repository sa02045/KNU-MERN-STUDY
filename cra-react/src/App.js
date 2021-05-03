import "./App.css"
import Body from "./components/Body"
import Chat from "./components/Chat"
import Head from "./components/Head"

import { useState } from "react"

function App() {
  const [messages, setMessages] = useState(["안녕"])

  return (
    <div className="App">
      <Head></Head>
      <Body messages={messages}></Body>
      <Chat messages={messages} setMessages={setMessages}></Chat>
    </div>
  )
}

export default App
