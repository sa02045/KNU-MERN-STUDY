function ButtonH1(props) {
  const btnStyle = {
    backgroundColor: props.color,
  }

  return (
    <div>
      <button style={btnStyle}>전송</button>
      <h1>{props.text}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <ButtonH1 text="안녕하세요" color="red" />
      <ButtonH1 text="반갑습니다" color="blue" />
      <ButtonH1 text="다시만나요" color="green" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
