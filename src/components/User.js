import React from 'react'

export default function User(props) {
    const userName = props.userName
    const userHandle = props.userHandle
    return (

        <span className="user">
            <span className="name">{userName}</span>
            <span className="handle">{userHandle}</span>
        </span>

    )
}






