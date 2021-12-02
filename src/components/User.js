import React from 'react'

export default function User(props) {
    return (
        <div>
            <span className="name">{props.user.name}</span>
            <span className="handle">{props.user.handle}</span>
        </div>
    )
}



