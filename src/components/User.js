import React from 'react'

const User = (props) => {
  return (
    <span className='user'>
      <span className="name">{props.userdata.name}</span>
      <span className="handle">{props.userdata.handle}</span>
    </span>
  )
}

export default User