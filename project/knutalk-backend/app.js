import express from "express"
import cors from "cors"

import db from "./db.js"
import MessageModel from "./messageModel.js"

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// pusher의 역할
// 1. 프론트엔드(사용자, 브라우저) pusher API를 구독하고 있다
// 2. pusher API는 새로운 메시지가 들어오면 구독하고 있는 사람에게 건내준다

// ---------------


// -----------------------
app.get("/messages/sync", (req, res) => {
  MessageModel.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.post("/messages/new", (request, response) => {
  const newMessage = request.body

  //모델이라는 객체로 콜렉션을 조작하고있는데, 그 document 앞에서 정의한 스키마를 따라야함
  //messages 콜렉션에 document 집어넣기
  MessageModel.create(newMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.listen(PORT, () => {
  console.log("listening on", PORT)
})
