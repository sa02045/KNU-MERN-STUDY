const btn = document.querySelector(".js-btn")
const title = document.querySelector(".js-title")

const clickHandler = () => {
  title.style.color = "#FF0000"
}

btn.addEventListener("click", clickHandler)
