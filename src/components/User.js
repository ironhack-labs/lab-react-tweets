import React from "react";

function User({ userInfo }) {

    return (
        <span className='user'>
            <span className="name">{userInfo.name}</span>
            <span className="handle">@{userInfo.handle}</span>
        </span>
    )

}

export default User