import App from "./src/App.js"

try {
  new App(document.querySelector("#App"))
} catch (e) {
  console.error(e)
}
