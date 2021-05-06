import mongoose from "mongoose"

const knutalkSchema = mongoose.Schema({
  name: String,
  message: String,
})

export default mongoose.model("message", knutalkSchema)
