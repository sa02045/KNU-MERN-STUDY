import express from "express"
import cors from "cors"

import db from "./db.js"
import MessageModel from "./messageModel.js"

import pusher from "./pusher.js"

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

db.once("open", () => {
  console.log("DB connected")

  const msgCollection = db.collection("messages")
  const changeStream = msgCollection.watch()
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDocument = change.fullDocument
      const newMessage = {
        name: messageDocument.name,
        message: messageDocument.text,
      }
      pusher.trigger("messages", "", newMessage)
    } else {
      console.log("Error")
    }
  })
})

app.get("/messages/sync", (req, res) => {
  MessageModel.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.post("/messages/new", (req, res) => {
  const newMessage = req.body
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
