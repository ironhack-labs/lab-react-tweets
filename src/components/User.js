import React from 'react'

export default function User({name, handle}) {
    return (
        <div>
            <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
          </span>
        </div>
    )
}
