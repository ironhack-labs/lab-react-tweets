import React from 'react';

function User(props) {
    let { userData } = props;
    return (
    <div class='top'>
    <span className='user'>{userData.name}</span>
    <span className='user'>{userData.handle}</span>
    </div>
 );
}

export default User;