import React from 'react'

export const User = (props) => {
    return (
        <div>
            <span className="user">
                <span className="name">{props.user}</span>
                <span className="handle">{props.handle}</span>
            </span>
        </div>
    )
}
