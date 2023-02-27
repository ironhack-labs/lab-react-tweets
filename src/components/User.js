import React from 'react'

const User = ({ userData }) => {
    return (
        <div>
            <span className="user">
                <span className="name">{userData.name}</span>
                <span className="handle">{userData.handle}</span>
            </span>
        </div>
    )
}

export default User