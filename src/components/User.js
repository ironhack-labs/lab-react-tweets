import React from 'react'

function User(props) {
    return (
        <div>
            <span className="name"> {props.name}</span>
            <span className="handle"> @{props.handle}</span>
            
        </div>
    )
}

export default User

{/* <span className="name">{user.name}</span>
            <span className="handle">@{user.handle}</span> */}