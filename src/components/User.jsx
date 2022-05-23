import React from 'react'

function User(props) {
  return (
    <span className="user">
    <span className="name">{props.usuario.name}</span>
    <span className="handle">@{props.usuario.handle}</span>
  </span>
  )
}

export default User