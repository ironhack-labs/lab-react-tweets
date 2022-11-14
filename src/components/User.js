import React from 'react';


function User(props) {
    let { userData } = props;
    return (
        <span> {userData.name}
            {userData.handle}
        </span>

    );
}

export default User;

