import React from 'react'

function User(props) {
    let {userInfo} = props
  return (
    <div>
        <span className="user">
            <span className="name">{userInfo.name}</span>
            <span className="handle">@{userInfo.handle}</span>
        </span>
    </div>
  )
}

export default User