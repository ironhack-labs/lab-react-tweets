import React from 'react';
import Timestamp from './Timestamp';

function User({user, timestamp}){
    return (
        <div className="top">
            <span className="user">
                <span className="name">{user.name}</span>
                <span className="handle">{user.handle}</span>
            </span>
            {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
            <Timestamp timestamp={timestamp}/>
        </div>
    )
}

export default User;