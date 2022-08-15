import React from 'react';

function Profileimage(props) {
    return (
        <img
            src={props.image}
            className="profile"
            alt="profile"
            />
    )
}

export default Profileimage