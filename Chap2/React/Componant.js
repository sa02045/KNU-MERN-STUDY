function ButtonH1(props) {
  var btnStyle = {
    backgroundColor: props.color
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { style: btnStyle },
      "\uC804\uC1A1"
    ),
    React.createElement(
      "h1",
      null,
      props.text
    )
  );
}

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(ButtonH1, { text: "\uC548\uB155\uD558\uC138\uC694", color: "red" }),
    React.createElement(ButtonH1, { text: "\uBC18\uAC11\uC2B5\uB2C8\uB2E4", color: "blue" }),
    React.createElement(ButtonH1, { text: "\uB2E4\uC2DC\uB9CC\uB098\uC694", color: "green" })
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));