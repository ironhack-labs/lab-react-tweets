import React from 'react';

function User({username, handle}) {
    return (
        <span className="userData"> {username} {handle}</span>
    )
}


export default User;