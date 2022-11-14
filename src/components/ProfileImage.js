import React from 'react';

function ProfileImage(props) {
    let { image } = props;
    return (
        <img
            src={image}
            className="profile"
            alt="profile"
        />
    );
}

export default ProfileImage;