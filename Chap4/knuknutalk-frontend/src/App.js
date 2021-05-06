import Pusher from "pusher-js"
import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

import KnuHead from "./components/Head/KnuHead"
import KnuBody from "./components/Body/KnuBody"
import KnuChat from "./components/Chat/KnuChat"

function App() {
  const [name, setName] = useState("")
  const [msgs, setMsgs] = useState([])

  // 맨 처음 컴포넌트 렌더링되었을때, 이전의 메시지 내용 가져오기
  useEffect(() => {
    axios.get("http://localhost:5000/messages/sync").then((res) => setMsgs(res.data))
  })

  // 상대방에게 메시지 보내기
  useEffect(() => {
    const pusher = new Pusher("0d55146ceddd06b5f05c", {
      cluster: "ap3",
    })
    const channel = pusher.subscribe("messages")

    channel.bind("inserted", (newMessage) => {
      setMsgs([...msgs, newMessage])
    })

    // 컴포넌트가 종료되면, unbind 연결끊기
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  })

  return (
    <div className="App">
      <KnuHead name={name} setName={setName} />
      <KnuBody name={name} msgs={msgs} />
      <KnuChat name={name} />
    </div>
  )
}

export default App
