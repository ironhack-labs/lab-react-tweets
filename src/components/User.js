import React from 'react'

const User = (props) => {
const {name, handle } = props.userData
  return (
    <div>
        <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span>
    </div>
  )
}

export default User