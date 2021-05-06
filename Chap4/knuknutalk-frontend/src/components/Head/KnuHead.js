import React from "react"
import Avatar from "@material-ui/core/Avatar"

import avatar from "./avatar.png"
import "./KnuHead.css"

function KnuHead({ name, setName }) {
  const onChange = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    e.target.style.display = "none"
    setName(name)
  }

  return (
    <header className="KnuHead">
      {name === "호반우" ? (
        <Avatar className="avatar" src={avatar} alt="avatar" />
      ) : (
        <Avatar className="avatar" fontSize="6px" alt="avatar">
          {name[0]}
        </Avatar>
      )}

      <div className="right__container">
        <span className="name">{name}</span>

        <form onSubmit={onSubmit}>
          <input autoFocus={true} value={name} onChange={(e) => onChange(e)}></input>
        </form>
      </div>
    </header>
  )
}

export default KnuHead
