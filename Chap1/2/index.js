const btn = document.querySelector(".js-btn")
const chatInput = document.querySelector(".js-chat-input")
const messageBody = document.querySelector("main")

const clickHandler = () => {
  if (!chatInput.value) return
  const p = document.createElement("p")
  p.className = "msg"
  p.textContent = chatInput.value
  messageBody.prepend(p)
  chatInput.value = ""
}

const keydownHandler = (e) => {
  if (e.key === "Enter") {
    clickHandler()
  }
  console.log(e.key)
}
btn.addEventListener("click", clickHandler)

window.addEventListener("keydown", keydownHandler)
