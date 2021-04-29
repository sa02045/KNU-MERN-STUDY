import { useState } from "react"

import "./App.css"
import Body from "./components/Body/Body"
import Chat from "./components/Chat/Chat"
import Head from "./components/Head/Head"
function App() {
  const [msgs, setMsgs] = useState([])

  return (
    <div className="App">
      <Head />
      <Body msgs={msgs} />
      <Chat msgs={msgs} setMsgs={setMsgs} />
    </div>
  )
}

export default App
