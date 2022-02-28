import React from 'react'

function User(props) {
  return (
        <span className="user">
            <span className="name">{props.userdata.name}</span>
            <span className="handle">{props.userdata.handle}</span>
          </span>
  )
}

export default User