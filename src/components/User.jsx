import React from 'react';

function User({userData}) {
    return (
        <span className="user">
            <span className="name"> {userData} </span>
            {/* <span className="handle"> {userData}</span> */}
        </span>
    )
}

export default User;