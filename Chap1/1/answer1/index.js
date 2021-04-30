const btn = document.querySelector(".js-btn")
const title = document.querySelector(".title")

const clickHandler = () => {
  title.style.color = "red"
}

btn.addEventListener("click", clickHandler)
