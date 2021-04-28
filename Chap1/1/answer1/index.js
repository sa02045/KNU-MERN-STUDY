const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
  const container = document.querySelector(".container")

  const h1 = document.createElement("h1")

  h1.textContent = "새로들어가는 함수DOM"

  container.appendChild(h1)
})
