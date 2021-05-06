import React from "react"

function Message({ name, msg }) {
  return (
    <>
      {name !== msg.name ? (
        <p className="message received">
          <span>{msg.message}</span>
        </p>
      ) : (
        <p className="message">
          <span>{msg.message}</span>
        </p>
      )}
    </>
  )
}

export default Message
