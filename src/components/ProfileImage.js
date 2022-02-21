
import React from 'react';

function ProfileImage({profileImage}){
    return (
        <img
            src={profileImage}
            className="profile"
            alt="profile"
        />
    )
}

export default ProfileImage; 