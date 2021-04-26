class App {
  constructor($App) {
    this.$App = $App
    this.init()
  }

  init() {
    const h1 = document.createElement("h1")
    h1.textContent = "he"
    this.$App.appendChild(h1)
  }
}

export default App
