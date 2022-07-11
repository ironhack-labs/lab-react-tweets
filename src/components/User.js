import React from 'react'

export default function User(props) {
  return (
    <span className="user">
        <div>{props.user.name}</div>
        <div>{props.user.handle}</div>
    </span>
    
    
  )
}
