import React from 'react'

function User(props) {
    console.log(props)
  return (
    <span className="user">
            <span className="name"> {props.userData.name}</span>
            <span className="handle">{props.userData.handle}</span>
    </span>
  )
}

export default User