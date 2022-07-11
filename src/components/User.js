import React from "react"

const User = (props) => {
  return (
    <div className="body">
      <div className="top">
        <span className="user">
          <span className="name">{props.user.name}</span>
          <span className="handle">{props.user.handle}</span>
        </span>
      </div>
    </div>
  )
}

export default User 